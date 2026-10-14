(() => {
  const normalize = (text) => text.normalize("NFKC").toLocaleLowerCase();

  document.querySelectorAll("[data-wp-archive]").forEach((archive) => {
    const search = archive.querySelector("[data-wp-search]");
    const clear = archive.querySelector("[data-wp-clear]");
    const count = archive.querySelector("[data-wp-count]");
    const empty = archive.querySelector("[data-wp-empty]");
    const buttons = [...archive.querySelectorAll("[data-wp-topic]")];
    const cards = [...archive.querySelectorAll("[data-wp-card]")].map(
      (element) => ({
        element,
        search: normalize(element.dataset.search),
        topic: element.dataset.topic,
      }),
    );
    let topic = "all";
    const filter = () => {
      const needle = normalize(search.value.trim());
      let matches = 0;
      cards.forEach((card) => {
        const visible =
          (topic === "all" || topic === card.topic) &&
          (!needle || card.search.includes(needle));
        card.element.hidden = !visible;
        if (visible) matches += 1;
      });
      buttons.forEach((button) =>
        button.setAttribute(
          "aria-pressed",
          String(button.dataset.wpTopic === topic),
        ),
      );
      clear.hidden = !search.value;
      count.textContent = `${matches} ${matches === 1 && archive.dataset.countLabel === "articles" ? "article" : archive.dataset.countLabel}`;
      empty.hidden = matches > 0;
    };
    buttons.forEach((button) =>
      button.addEventListener("click", () => {
        topic = button.dataset.wpTopic;
        filter();
      }),
    );
    search.addEventListener("input", filter);
    clear.addEventListener("click", () => {
      search.value = "";
      filter();
      search.focus();
    });
    archive.querySelector("[data-wp-reset]").addEventListener("click", () => {
      search.value = "";
      topic = "all";
      filter();
      search.focus();
    });
  });

  document.querySelectorAll("[data-wp-reading]").forEach((page) => {
    const body = page.querySelector(".wp-prose");
    const progress = page.querySelector(".wp-reading-progress");
    const progressFill = progress.querySelector("span");
    const headings = [
      body,
      ...body.querySelectorAll("h2[id],h3[id],h4[id],h5[id],h6[id]"),
    ];
    const tocLinks = [...page.querySelectorAll('[data-wp-toc] a[href^="#"]')];
    let frame = 0;
    let observer;
    let active = "";
    let lastProgress = -1;
    const update = () => {
      const line = window.innerHeight * 0.35;
      let next = body.id;
      headings.forEach((heading) => {
        if (heading.getBoundingClientRect().top <= line) next = heading.id;
      });
      if (next !== active) {
        active = next;
        tocLinks.forEach((link) => {
          let id;
          try {
            id = decodeURIComponent(link.hash.slice(1));
          } catch {
            id = link.hash.slice(1);
          }
          if (id === active) link.setAttribute("aria-current", "location");
          else link.removeAttribute("aria-current");
        });
      }
      const rect = body.getBoundingClientRect();
      const denominator = Math.max(1, rect.height - window.innerHeight + 120);
      const value = Math.min(
        100,
        Math.max(0, ((120 - rect.top) / denominator) * 100),
      );
      progressFill.style.transform = `scaleX(${value / 100})`;
      const rounded = Math.round(value);
      if (rounded !== lastProgress) {
        progress.setAttribute("aria-valuenow", String(rounded));
        lastProgress = rounded;
      }
    };
    const schedule = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    const observe = () => {
      observer?.disconnect();
      if ("IntersectionObserver" in window) {
        observer = new IntersectionObserver(schedule, {
          rootMargin: `0px 0px -${Math.round(window.innerHeight * 0.65)}px 0px`,
        });
        headings.forEach((heading) => observer.observe(heading));
      }
      schedule();
    };
    tocLinks.forEach((link) =>
      link.addEventListener("click", () => {
        const mobile = page.querySelector("[data-wp-mobile-toc]");
        if (mobile) mobile.open = false;
        schedule();
      }),
    );
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", observe);
    window.addEventListener("hashchange", schedule);
    document.fonts?.ready.then(schedule);
    if ("ResizeObserver" in window) new ResizeObserver(schedule).observe(body);
    observe();

    body.querySelectorAll("pre").forEach((pre) => {
      if (pre.closest(".wp-code-block")) return;
      const block = document.createElement("div");
      block.className = "wp-code-block";
      const toolbar = document.createElement("div");
      toolbar.className = "wp-code-toolbar";
      const label = document.createElement("span");
      const code = pre.querySelector("code");
      label.textContent =
        code?.dataset.lang ||
        [...(code?.classList || [])]
          .find((name) => name.startsWith("language-"))
          ?.slice(9) ||
        "text";
      const button = document.createElement("button");
      button.type = "button";
      button.textContent = page.dataset.copyCode;
      button.setAttribute("aria-live", "polite");
      let timer;
      button.addEventListener("click", async () => {
        clearTimeout(timer);
        try {
          await navigator.clipboard.writeText((code || pre).textContent);
          button.textContent = page.dataset.copied;
        } catch {
          button.textContent = page.dataset.copyError;
        }
        timer = setTimeout(() => {
          button.textContent = page.dataset.copyCode;
        }, 2400);
      });
      toolbar.append(label, button);
      pre.before(block);
      block.append(toolbar, pre);
    });

    body.querySelectorAll("img").forEach((image) => {
      const onError = () => {
        if (image.dataset.wpFailed) return;
        image.dataset.wpFailed = "true";
        const wrapper = document.createElement("span");
        wrapper.className = "wp-image-unavailable";
        const text = document.createElement("span");
        text.textContent = `${page.dataset.imageError} `;
        const link = document.createElement("a");
        link.href = image.currentSrc || image.src;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.textContent = page.dataset.imageLink;
        wrapper.append(text, link);
        image.after(wrapper);
        image.hidden = true;
      };
      image.addEventListener("error", onError, { once: true });
      image.addEventListener("load", schedule, { once: true });
      if (image.complete && image.naturalWidth === 0) onError();
    });
  });
})();

// Long inline math becomes scrollable; ordinary formulas retain their baseline and spacing.
(() => {
  const prose = document.querySelector(".wp-prose");
  if (!prose) return;
  let frame = 0;
  const fit = () => {
    frame = 0;
    const math = [
      ...prose.querySelectorAll('mjx-container:not([display="true"])'),
    ];
    math.forEach((el) => el.classList.remove("wp-inline-math-scroll"));
    const width = prose.clientWidth;
    const wide = math.filter((el) => el.getBoundingClientRect().width > width);
    wide.forEach((el) => el.classList.add("wp-inline-math-scroll"));
  };
  const schedule = () => {
    if (!frame) frame = requestAnimationFrame(fit);
  };
  window.addEventListener("math-ready", schedule);
  const resize = new ResizeObserver(schedule);
  resize.observe(prose);
  document.fonts.ready.then(schedule);
})();
