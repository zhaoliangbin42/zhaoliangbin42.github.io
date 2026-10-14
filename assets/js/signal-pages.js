// Progressive enhancement for the statically rendered research pages.
function initializeSignalPages() {
  document.querySelectorAll("[data-rp-research]").forEach((root) => {
    const filters = root.querySelector("[data-rp-filters]");
    const count = root.querySelector("[data-rp-count]");
    const papers = Array.from(root.querySelectorAll("[data-rp-topic]"));
    if (!filters || !count) return;
    filters.hidden = false;
    filters.addEventListener("click", (event) => {
      const button =
        event.target instanceof Element
          ? event.target.closest("[data-rp-filter]")
          : null;
      if (!button || !filters.contains(button)) return;
      const topic = button.dataset.rpFilter;
      filters.querySelectorAll("[data-rp-filter]").forEach((item) => {
        item.setAttribute("aria-pressed", String(item === button));
      });
      let visible = 0;
      papers.forEach((paper) => {
        paper.hidden = topic !== "all" && paper.dataset.rpTopic !== topic;
        if (!paper.hidden) visible += 1;
      });
      count.textContent = `${visible} ${count.dataset.rpCountUnit}`;
    });
  });

  document.querySelectorAll("[data-rp-copy-target]").forEach((button) => {
    const source = document.getElementById(button.dataset.rpCopyTarget);
    const label = button.querySelector("[data-rp-copy-label]");
    const status = document.getElementById(
      button.getAttribute("aria-describedby"),
    );
    if (!source || !label || !status) return;
    let resetTimer;
    button.hidden = false;
    button.addEventListener("click", async () => {
      window.clearTimeout(resetTimer);
      button.disabled = true;
      button.setAttribute("aria-busy", "true");
      try {
        if (!navigator.clipboard?.writeText)
          throw new Error("Clipboard is unavailable");
        await navigator.clipboard.writeText(source.textContent);
        label.textContent = button.dataset.rpCopyDone;
        status.textContent = button.dataset.rpCopySuccess;
        status.classList.remove("rp-copy-error");
        resetTimer = window.setTimeout(() => {
          label.textContent = button.dataset.rpCopyIdle;
          status.textContent = "";
        }, 3500);
      } catch {
        label.textContent = button.dataset.rpCopyIdle;
        status.textContent = button.dataset.rpCopyError;
        status.classList.add("rp-copy-error");
      } finally {
        button.disabled = false;
        button.removeAttribute("aria-busy");
      }
    });
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeSignalPages, {
    once: true,
  });
} else {
  initializeSignalPages();
}
