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
  const surface = header?.querySelector(".header-surface");
  const clamp = (value) => Math.min(1, Math.max(0, value));
  const smoothstep = (value) => {
    const p = clamp(value);
    return p * p * (3 - 2 * p);
  };
  const lerp = (a, b, p) => a + (b - a) * p;
  let geometry;
  let frame = 0;
  let current = 0;
  let destination = 0;
  let previousTime = 0;
  let rendered = -1;

  const progress = () => {
    const raw = clamp(window.scrollY / geometry.end);
    return menuOpen
      ? 1
      : reduced.matches
        ? raw > 0.15
          ? 1
          : 0
        : smoothstep(raw);
  };
  const render = (p) => {
    if (!geometry || rendered === p) return;
    rendered = p;
    const g = geometry;
    // Both stages have zero velocity at their joins; the words never cross.
    const across = smoothstep(p / 0.55);
    const together = smoothstep((p - 0.5) / 0.5);
    name.style.transform = `translate3d(${lerp(g.x, g.endX, p)}px,${lerp(g.y, g.endY, p)}px,0) scale(${lerp(1, g.scale, p)})`;
    second.style.transform = `translate3d(${(g.first + g.gap) * across}px,${g.line * (1 - together)}px,0)`;
    if (dot) dot.style.opacity = String(1 - smoothstep(p / 0.6));
    if (surface) surface.style.opacity = String(smoothstep(p / 0.65));
  };
  const tick = (time) => {
    frame = 0;
    const delta = previousTime
      ? Math.min((time - previousTime) / 1000, 0.05)
      : 1 / 60;
    previousTime = time;
    current += (destination - current) * (1 - Math.exp(-delta * 26));
    if (Math.abs(destination - current) < 0.00015) current = destination;
    render(current);
    if (current !== destination) frame = requestAnimationFrame(tick);
    else previousTime = 0;
  };
  function schedule() {
    if (!geometry) return;
    destination = progress();
    if (reduced.matches || menuOpen) {
      cancelAnimationFrame(frame);
      frame = 0;
      previousTime = 0;
      current = destination;
      render(current);
    } else if (current !== destination && !frame) {
      previousTime = 0;
      frame = requestAnimationFrame(tick);
    }
  }
  const measure = () => {
    if (!name || !target || !slot) return;
    const start = slot.getBoundingClientRect();
    const end = target.getBoundingClientRect();
    const font = parseFloat(getComputedStyle(first).fontSize);
    const firstWidth = first.offsetWidth;
    const firstMeasure = !geometry;
    geometry = {
      x: start.left,
      y: start.top + window.scrollY,
      endX: end.left,
      endY: end.top,
      first: firstWidth,
      gap: font * 0.26,
      line: font * 0.92,
      scale: (innerWidth < 640 ? 19 : 22) / font,
      end: Math.min(420, Math.max(280, innerHeight * 0.46)),
    };
    // Only measurement changes layout; scroll frames update compositor properties.
    name.style.width = `${Math.ceil(firstWidth)}px`;
    name.style.height = `${Math.ceil(geometry.line * 2)}px`;
    if (name.parentElement === slot)
      document.querySelector("#main-content").prepend(name);
    document.documentElement.classList.add("motion-ready");
    destination = progress();
    if (firstMeasure || reduced.matches) current = destination;
    rendered = -1;
    render(current);
    schedule();
  };
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
    const observer = new ResizeObserver(measure);
    observer.observe(slot);
    observer.observe(target);
  }
})();
