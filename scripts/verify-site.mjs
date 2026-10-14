import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const output = path.resolve(
  process.env.HUGO_DESTINATION || process.argv[2] || "docs",
);
const origin = "https://zhaoliangbin42.github.io";
const failures = [];
const check = (pass, message) => {
  if (!pass) failures.push(message);
};
const walk = (dir) =>
  fs
    .readdirSync(dir, { withFileTypes: true })
    .flatMap((e) =>
      e.isDirectory() ? walk(path.join(dir, e.name)) : [path.join(dir, e.name)],
    );
const decode = (s) =>
  s.replaceAll("&amp;", "&").replaceAll("&#39;", "'").replaceAll("&quot;", '"');
const attrs = (html) =>
  [
    ...html.matchAll(/\b(src|href)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/g),
  ].map((m) => ({ key: m[1], url: decode(m[2] ?? m[3] ?? m[4]) }));
const routeOf = (f) =>
  "/" +
  path
    .relative(output, f)
    .split(path.sep)
    .join("/")
    .replace(/index\.html$/, "");
const readRoute = (route) => {
  const file = path.join(output, route, "index.html");
  if (!fs.existsSync(file)) {
    failures.push(`Missing route: ${route}`);
    return "";
  }
  return fs.readFileSync(file, "utf8");
};
const htmlFiles = walk(output).filter((f) => f.endsWith(".html"));
const getAttr = (tag, name) => {
  const match = tag.match(
    new RegExp(
      `(?:^|\\s)${name}\\s*=\\s*(?:"([^"]*)"|'([^']*)'|([^\\s>]+))`,
      "i",
    ),
  );
  return match ? decode(match[1] ?? match[2] ?? match[3]) : "";
};
const pageCache = new Map();
const pageInfo = (file) => {
  if (pageCache.has(file)) return pageCache.get(file);
  const html = fs.readFileSync(file, "utf8");
  const ids = new Set(
    [...html.matchAll(/<[^>]+>/g)]
      .map((m) => getAttr(m[0], "id"))
      .filter(Boolean),
  );
  const htmlTag = html.match(/<html\b[^>]*>/i)?.[0] || "";
  const refresh = [...html.matchAll(/<meta\b[^>]*>/gi)]
    .map((m) => m[0])
    .find((tag) => getAttr(tag, "http-equiv").toLowerCase() === "refresh");
  const redirect = refresh
    ? getAttr(refresh, "content").replace(/^\s*0\s*;\s*url=/i, "")
    : "";
  const result = { ids, lang: getAttr(htmlTag, "lang"), redirect };
  pageCache.set(file, result);
  return result;
};
const followAlias = (file) => {
  const seen = new Set();
  while (fs.existsSync(file) && file.endsWith(".html") && !seen.has(file)) {
    seen.add(file);
    const info = pageInfo(file);
    if (!info.redirect) break;
    const u = new URL(info.redirect, origin + routeOf(file));
    if (
      ![origin, "http://127.0.0.1:1313", "http://localhost:1313"].includes(
        u.origin,
      )
    )
      break;
    file = path.join(
      output,
      decodeURIComponent(u.pathname).replace(/^\//, ""),
      u.pathname.endsWith("/") ? "index.html" : "",
    );
  }
  return file;
};
let fragments = 0;
let pages = 0,
  aliases = 0;
for (const file of htmlFiles) {
  const html = fs.readFileSync(file, "utf8");
  const route = routeOf(file);
  const alias = /http-equiv=["']?refresh/i.test(html);
  if (alias) aliases++;
  else {
    pages++;
    check(
      (html.match(/<h1\b/g) || []).length === 1,
      `${route}: expected one h1`,
    );
    check(
      (html.match(/<main\b/g) || []).length === 1,
      `${route}: expected one main`,
    );
    check(
      /<html\b[^>]*lang=["']?(?:zh-CN|en)(?:[\s>"'])/.test(html),
      `${route}: missing document language`,
    );
    check(
      !/Hugo Server: Error|Lorem ipsum|截图占位|Screenshot placeholder/.test(
        html,
      ),
      `${route}: placeholder/error output`,
    );
    check(/rel=["']?canonical/.test(html), `${route}: missing canonical`);
  }
  for (const { url } of attrs(html)) {
    if (/^(?:data:|mailto:|tel:)/.test(url)) continue;
    check(
      url !== "#" && !url.startsWith("javascript:"),
      `${route}: empty or scripted navigation target`,
    );
    let u;
    try {
      u = new URL(url, origin + route);
    } catch {
      failures.push(`${route}: invalid URL ${url}`);
      continue;
    }
    if (
      ![origin, "http://127.0.0.1:1313", "http://localhost:1313"].includes(
        u.origin,
      )
    )
      continue;
    const relative = decodeURIComponent(u.pathname).replace(/^\//, "");
    if (relative === "livereload.js") continue;
    const target = path.join(
      output,
      relative,
      u.pathname.endsWith("/") ? "index.html" : "",
    );
    check(fs.existsSync(target), `${route}: missing local target ${url}`);
    if (u.hash && fs.existsSync(target)) {
      fragments++;
      const destination = followAlias(target);
      if (destination.endsWith(".html") && fs.existsSync(destination))
        check(
          pageInfo(destination).ids.has(decodeURIComponent(u.hash.slice(1))),
          `${route}: missing anchor ${url}`,
        );
    }
  }
}
const core = [
  "",
  "research",
  "research/uplink-sensing",
  "research/passive-sensing",
  "writing",
  "projects",
  "about",
  "contact",
  "codes",
];
for (const route of core) {
  for (const lang of ["", "en/"]) {
    const target = `${lang}${route}`;
    const file = path.join(output, target, "index.html");
    check(fs.existsSync(file), `Missing ${target}`);
    if (!fs.existsSync(file)) continue;
    const html = fs.readFileSync(file, "utf8");
    check(
      html.includes("hreflang=") && html.includes("x-default"),
      `${target}: missing alternate languages`,
    );
  }
}
let articles = 0;
for (const entry of fs
  .readdirSync(path.join(root, "content/notes"), { withFileTypes: true })
  .filter((e) => e.isDirectory())) {
  const dir = path.join(root, "content/notes", entry.name);
  const original = path.join(dir, "index.md");
  if (!fs.existsSync(original)) continue;
  const text = fs.readFileSync(original, "utf8");
  const slug = entry.name.toLowerCase();
  if (/^draft:\s*true\s*$/m.test(text)) {
    check(
      !fs.existsSync(path.join(output, "notes", slug, "index.html")),
      `Draft published: ${slug}`,
    );
    continue;
  }
  articles++;
  const translated = path.join(dir, "index.en.md");
  check(fs.existsSync(translated), `Missing full English translation: ${slug}`);
  for (const lang of ["", "en/"]) {
    const html = readRoute(`${lang}notes/${slug}`);
    check(
      html.includes("wp-prose") && html.includes("data-mapping=pathname"),
      `${lang}${slug}: reading surface or comment mapping missing`,
    );
    const compatibility = readRoute(`${lang}writing/${slug}`);
    check(
      compatibility.includes(`/${lang}notes/${slug}/`),
      `${lang}${slug}: old prototype route does not resolve to the original canonical URL`,
    );
  }
}
for (const lang of ["", "en/"]) {
  for (const route of ["", "projects"]) {
    const html = readRoute(`${lang}${route}`);
    check(
      html.includes("https://mappamory.com"),
      `${lang}${route}: Mappamory external website missing`,
    );
    check(
      !/href=["']?\/(?:en\/)?mappamory\//.test(html),
      `${lang}${route}: local Mappamory entry returned`,
    );
  }
}
check(
  readRoute("projects").includes("你的好友地图通讯录"),
  "Mappamory positioning drifted",
);
const about = readRoute("about");
check(!about.includes("导师"), "About contains advisor details");
const script = fs.readFileSync("assets/js/signal-wave.js", "utf8");
check(
  script.includes("window.scrollY * 0.018") &&
    !/performance\.now|setInterval/.test(script),
  "Hero wave must depend on scroll, not time",
);
if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}
console.log(
  `Site verification passed: ${pages} content pages, ${aliases} aliases, ${articles} bilingual articles; all internal targets and ${fragments} fragment links exist (${output}).`,
);
