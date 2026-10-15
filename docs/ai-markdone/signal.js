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
