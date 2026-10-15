import fs from "node:fs";
import path from "node:path";

const output = path.resolve(
  process.env.HUGO_DESTINATION || process.argv[2] || "docs",
);
const assert = (ok, message) => {
  if (!ok) throw new Error(message);
};
const read = (file) => fs.readFileSync(file, "utf8");
const built = (route) => read(path.join(output, route, "index.html"));
const walk = (dir) =>
  fs
    .readdirSync(dir, { withFileTypes: true })
    .flatMap((e) =>
      e.isDirectory() ? walk(path.join(dir, e.name)) : [path.join(dir, e.name)],
    );
const productionNotes =
  /产品界面宣传图|宣传合成图|产品实拍|Actual product capture|example content in Chinese|promotional composition|Product interface composition|screenshot_title|screenshot_detail|截图建议|Screenshot notes|Show this later/;
const staleClaims =
  /旧右侧目录栏已经退休|right-side directory rail is retired|把边界说清楚|效率成倍提升|让你进入心流|AI-MarkDone 不是一个玩具/;
const nav = read("data/ai_markdone/manual_nav.toml");
const chapters = [
  ...nav.matchAll(
    /id = "([^"]+)"\n  zh = "([^"]+)"\n  en = "([^"]+)"\n  zhURL = "([^"]+)"\n  enURL = "([^"]+)"/g,
  ),
].map(([, id, zh, en, zhURL, enURL]) => ({ id, zh, en, zhURL, enURL }));
assert(
  chapters.length >= 15,
  "Manual navigation must cover current product features",
);
assert(
  new Set(chapters.map((x) => x.id)).size === chapters.length,
  "Duplicate manual navigation item",
);
for (const id of [
  "highlights",
  "composer",
  "settings",
  "troubleshooting",
  "google-drive-backup",
])
  assert(
    chapters.some((x) => x.id === id),
    `Missing manual chapter: ${id}`,
  );
assert(
  !chapters.some((x) => x.id === "architecture"),
  "Internal architecture does not belong in the user manual navigation",
);

const header = read("layouts/partials/ai-markdone/site-header.html");
assert(
  !header.includes('"label" "FAQ"') &&
    header.includes('"工作流"') &&
    header.includes('"手册"') &&
    header.includes('"联系"'),
  "Product navigation must be Workflows, Manual, and Contact",
);
const shell = read("layouts/partials/ai-markdone/manual-shell.html");
assert(
  shell.includes("hugo.Data.ai_markdone.manual_nav.groups"),
  "Manual navigation must use the shared inventory",
);
const copy = JSON.parse(read("assets/ai-markdone/content/home.json"));
for (const lang of ["zh", "en"]) {
  assert(
    copy[lang].sections.length === 5,
    `Missing product explanations in ${lang}`,
  );
  for (const section of copy[lang].sections) {
    assert(
      section.body && section.points.length >= 3,
      `Incomplete home explanation: ${lang}/${section.id}`,
    );
    if (section.image)
      assert(
        fs.existsSync(`assets/ai-markdone/images/guide/${section.image}`),
        `Missing current product image: ${section.image}`,
      );
  }
}
for (const file of walk("content/ai-markdone").filter((f) =>
  f.endsWith(".md"),
)) {
  const source = read(file);
  assert(
    !productionNotes.test(source) && !staleClaims.test(source),
    `${file}: production notes or obsolete claims`,
  );
  const other = source.match(/^translation_url:\s*"([^"]+)"/m)?.[1];
  assert(
    other && fs.existsSync(path.join(output, other, "index.html")),
    `${file}: missing translation target`,
  );
}
for (const chapter of chapters) {
  for (const [lang, route, label] of [
    ["zh", chapter.zhURL, chapter.zh],
    ["en", chapter.enURL, chapter.en],
  ]) {
    const html = built(route);
    const tables = (html.match(/<table(?=[\s>])/g) || []).length;
    const tableWrappers = (
      html.match(
        /class=(?:"amd-docs-table-wrap"|amd-docs-table-wrap(?=[\s>]))/g,
      ) || []
    ).length;
    assert(
      tables === tableWrappers,
      `${route}: tables must scroll inside a wrapper on phones`,
    );
    assert(
      html.includes("amd-docs-sidebar") && html.includes("amd-docs-content"),
      `${route}: missing manual shell`,
    );
    assert(html.includes(label), `${route}: missing chapter label`);
    for (const link of chapters)
      assert(
        html.includes(lang === "zh" ? link.zhURL : link.enURL),
        `${route}: missing shared chapter navigation`,
      );
    assert(
      !productionNotes.test(html) && !staleClaims.test(html),
      `${route}: outdated or internal wording`,
    );
  }
}
for (const prefix of ["ai-markdone/", "ai-markdone/en/"]) {
  const home = built(prefix),
    manual = built(prefix + "manual/"),
    workflow = built(prefix + "workflow/");
  assert(
    (home.match(/class=["']?amd-feature-section/g) || []).length === 5,
    `${prefix}: homepage must explain five feature areas`,
  );
  assert(
    !home.includes("data-amd-workflow") &&
      !workflow.includes("data-amd-workflow"),
    "Home and workflows must not reuse the old three-panel tour",
  );
  assert(
    (workflow.match(/<h2\b/g) || []).length >= 6,
    `${prefix}: workflows must teach complete tasks`,
  );
  assert(
    manual.includes("manual/highlights/") &&
      manual.includes("manual/composer/") &&
      manual.includes("manual/troubleshooting/"),
    `${prefix}: manual overview is incomplete`,
  );
  for (const route of [
    prefix,
    prefix + "manual/",
    prefix + "workflow/",
    prefix + "privacy/",
    prefix + "contact/",
  ]) {
    const html = built(route);
    assert(
      (html.match(/<h1\b/g) || []).length === 1,
      `${route}: expected one h1`,
    );
    assert(
      html.includes("amd-site-header") && html.includes("amd-site-footer"),
      `${route}: missing product shell`,
    );
    assert(
      html.includes("Back to blog") || html.includes("返回博客"),
      `${route}: missing return to blog`,
    );
    assert(
      !html.includes("signal-search-modal"),
      `${route}: product must not include blog search`,
    );
    assert(
      !productionNotes.test(html) && !staleClaims.test(html),
      `${route}: internal or obsolete wording`,
    );
  }
  for (const [old, target] of [
    ["faq/", "manual/troubleshooting/"],
    ["features/", "manual/"],
    ["manual/architecture/", "manual/"],
    ["manual/directory/", "manual/message-navigation/"],
    ["manual/partial-copy-sticky/", "manual/partial-copy/"],
  ]) {
    const html = built(prefix + old);
    assert(
      /http-equiv=["']?refresh/i.test(html) && html.includes(prefix + target),
      `${prefix + old}: missing legacy redirect`,
    );
  }
  const settings = built(prefix + "manual/settings/");
  assert(
    (settings.match(/<tr\b/g) || []).length >= 70,
    `${prefix}: settings reference is incomplete`,
  );
  const privacy = built(prefix + "privacy/");
  assert(
    privacy.includes("Google Drive") &&
      privacy.includes("https://www.googleapis.com/auth/drive.file"),
    `${prefix}: missing Drive disclosure`,
  );
  assert(
    built(prefix + "contact/").includes("zhaoliangbin42@gmail.com"),
    `${prefix}: missing contact address`,
  );
}
const llms = read("static/llms.txt");
for (const slug of ["highlights", "composer", "settings", "troubleshooting"])
  assert(llms.includes(`manual/${slug}/`), `llms.txt missing ${slug}`);
console.log(
  `AI-MarkDone site verification passed: ${chapters.length} paired manual chapters, distinct workflows, current images, complete settings tables, and legacy redirects (${output}).`,
);
