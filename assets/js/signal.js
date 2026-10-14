// Progressive enhancement: all routes and content work before JavaScript loads.
(() => {
  const reduced = matchMedia("(prefers-reduced-motion: reduce)");
  const header = document.querySelector(".site-header");
  const menu = document.querySelector("#mobile-nav");
  const toggle = document.querySelector(".menu-toggle");
  let menuOpen = false;
  const updateMenu = (open) => {
    menuOpen = open;
    if (!menu || !toggle) return;
    menu.hidden = !open;
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute(
      "aria-label",
      document.documentElement.lang === "en"
        ? open
          ? "Close navigation"
          : "Open navigation"
        : open
          ? "关闭导航"
          : "打开导航",
    );
    header.classList.toggle("menu-open", open);
    schedule();
  };
  toggle?.addEventListener("click", () => updateMenu(!menuOpen));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuOpen) {
      updateMenu(false);
      toggle.focus();
    }
  });
  document.addEventListener("click", (event) => {
    if (menuOpen && !header.contains(event.target)) updateMenu(false);
  });
  const backTop = (event) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: reduced.matches ? "instant" : "smooth",
    });
  };
  document
    .querySelectorAll("[data-back-top],.moving-name a")
    .forEach((el) => el.addEventListener("click", backTop));
  const name = document.querySelector(".moving-name");
  const first = name?.querySelector(".name-first");
  const second = name?.querySelector(".name-second");
  const dot = name?.querySelector(".name-dot");
  const slot = document.querySelector(".hero-name-slot");
  const target = document.querySelector(".header-name-anchor");
  let geometry;
  let frame = 0;
  const lerp = (a, b, t) => a + (b - a) * t;
  const measure = () => {
    if (!name || !target || !slot) return;
    const start = slot.getBoundingClientRect(),
      end = target.getBoundingClientRect();
    const font = parseFloat(getComputedStyle(first).fontSize);
    geometry = {
      x: start.left,
      y: start.top + scrollY,
      endX: end.left,
      endY: end.top,
      first: first.offsetWidth,
      second: second.offsetWidth,
      gap: font * 0.26,
      line: font * 0.92,
      scale: (innerWidth < 640 ? 19 : 22) / font,
      end: Math.min(400, Math.max(240, innerHeight * 0.42)),
    };
    // Keep the single heading above the hero stacking context as it docks.
    if (name.parentElement === slot)
      document.querySelector("#main-content").prepend(name);
    document.documentElement.classList.add("motion-ready");
    draw();
  };
  function draw() {
    frame = 0;
    if (name && geometry) {
      const g = geometry;
      let p = Math.min(1, Math.max(0, scrollY / g.end));
      p = menuOpen ? 1 : reduced.matches ? (p > 0.15 ? 1 : 0) : p;
      const sx = Math.min(1, p / 0.55) * (g.first + g.gap),
        sy = (1 - Math.max(0, (p - 0.55) / 0.45)) * g.line;
      name.style.transform = `translate(${lerp(g.x, g.endX, p)}px,${lerp(g.y, g.endY, p)}px) scale(${lerp(1, g.scale, p)})`;
      name.style.width = `${Math.max(g.first, sx + g.second)}px`;
      name.style.height = `${g.line + sy}px`;
      second.style.transform = `translate(${sx}px,${sy}px)`;
      if (dot) dot.style.opacity = String(Math.max(0, 1 - p / 0.6));
      if (header)
        header.querySelector(".header-surface").style.opacity = String(
          menuOpen ? 1 : Math.min(1, Math.max(0, (scrollY - 10) / 200)),
        );
    }
  }
  function schedule() {
    if (!frame) frame = requestAnimationFrame(draw);
  }
  window.addEventListener("scroll", schedule, { passive: true });
  window.addEventListener(
    "resize",
    () => {
      if (innerWidth > 760 && menuOpen) updateMenu(false);
      measure();
    },
    { passive: true },
  );
  reduced.addEventListener("change", schedule);
  if (name) {
    measure();
    document.fonts.ready.then(measure);
    const ro = new ResizeObserver(measure);
    ro.observe(slot);
    ro.observe(target);
  }
})();
