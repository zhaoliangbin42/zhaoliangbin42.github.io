(() => {
  // Render every workflow step without JavaScript; enhance to a compact selector.
  document.querySelectorAll("[data-amd-workflow]").forEach((root) => {
    const buttons = [...root.querySelectorAll("[data-amd-step]")];
    const panels = [...root.querySelectorAll("[data-amd-panel]")];
    if (!buttons.length || buttons.length !== panels.length) return;
    const select = (index) => {
      buttons.forEach((button, current) =>
        button.setAttribute("aria-pressed", String(current === index)),
      );
      panels.forEach((panel, current) => {
        panel.hidden = current !== index;
      });
    };
    buttons.forEach((button, index) =>
      button.addEventListener("click", () => select(index)),
    );
    root.classList.add("is-enhanced");
    select(0);
  });

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
