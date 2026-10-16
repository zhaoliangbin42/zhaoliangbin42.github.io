(() => {
  // Keep the native mobile menu operable without JavaScript and dismiss it with Escape.
  document.querySelectorAll(".amd-mobile-menu").forEach((menu) => {
    menu.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && menu.open) {
        menu.open = false;
        menu.querySelector("summary")?.focus();
      }
    });
    menu.querySelectorAll("a").forEach((link) =>
      link.addEventListener("click", () => {
        menu.open = false;
      }),
    );
  });

  document.querySelectorAll(".amd-workflow-nav").forEach((nav) => {
    const links = [...nav.querySelectorAll('a[href^="#"]')];
    const sections = links.map((link) =>
      document.getElementById(decodeURIComponent(link.hash.slice(1))),
    );
    const activate = (id) =>
      links.forEach((link) => {
        if (decodeURIComponent(link.hash.slice(1)) === id)
          link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    let observer;
    const rebuildObserver = () => {
      observer?.disconnect();
      const height = window.innerHeight;
      observer = new IntersectionObserver(
        (entries) => {
          const visible = entries.find((entry) => entry.isIntersecting);
          if (visible) activate(visible.target.id);
        },
        {
          rootMargin: `-${Math.round(height * 0.15)}px 0px -${Math.round(height * 0.65)}px 0px`,
        },
      );
      sections.filter(Boolean).forEach((section) => observer.observe(section));
    };
    rebuildObserver();
    let resizeFrame = 0;
    window.addEventListener("resize", () => {
      window.cancelAnimationFrame(resizeFrame);
      resizeFrame = window.requestAnimationFrame(rebuildObserver);
    });
    links.forEach((link) =>
      link.addEventListener("click", () =>
        activate(decodeURIComponent(link.hash.slice(1))),
      ),
    );
  });

  // Match the docs navigation to viewport width without duplicating its links.
  const media = window.matchMedia("(min-width: 981px)");
  document.querySelectorAll("[data-amd-docs-menu]").forEach((menu) => {
    const update = () => {
      menu.open = media.matches;
    };
    update();
    media.addEventListener("change", update);
  });
})();
