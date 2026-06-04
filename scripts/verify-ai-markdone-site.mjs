import fs from "node:fs";
import path from "node:path";

const root = process.cwd();

const requiredFiles = [
  "AGENTS.md",
  "DESIGN.md",
  "content/ai-markdone/_index.md",
  "content/ai-markdone/features.md",
  "content/ai-markdone/manual.md",
  "content/ai-markdone/faq.md",
  "content/ai-markdone/privacy.md",
  "content/ai-markdone/contact.md",
  "content/ai-markdone/en/_index.md",
  "content/ai-markdone/en/features.md",
  "content/ai-markdone/en/manual.md",
  "content/ai-markdone/en/faq.md",
  "content/ai-markdone/en/privacy.md",
  "content/ai-markdone/en/contact.md",
  "content/ai-markdone/manual/install.md",
  "content/ai-markdone/manual/directory.md",
  "content/ai-markdone/manual/reader.md",
  "content/ai-markdone/manual/copy-markdown.md",
  "content/ai-markdone/manual/formulas.md",
  "content/ai-markdone/manual/annotations.md",
  "content/ai-markdone/manual/bookmarks.md",
  "content/ai-markdone/manual/export.md",
  "content/ai-markdone/manual/settings.md",
  "content/ai-markdone/en/manual/install.md",
  "content/ai-markdone/en/manual/directory.md",
  "content/ai-markdone/en/manual/reader.md",
  "content/ai-markdone/en/manual/copy-markdown.md",
  "content/ai-markdone/en/manual/formulas.md",
  "content/ai-markdone/en/manual/annotations.md",
  "content/ai-markdone/en/manual/bookmarks.md",
  "content/ai-markdone/en/manual/export.md",
  "content/ai-markdone/en/manual/settings.md",
  "layouts/_default/baseof.html",
  "layouts/partials/basic-seo.html",
  "layouts/ai-markdone/list.html",
  "layouts/ai-markdone/single.html",
  "layouts/partials/ai-markdone/site-header.html",
  "layouts/partials/ai-markdone/site-footer.html",
  "layouts/partials/ai-markdone/app-mark.html",
  "layouts/partials/ai-markdone/browser-downloads.html",
  "layouts/partials/ai-markdone/icon.html",
  "layouts/partials/ai-markdone/home.html",
  "layouts/partials/ai-markdone/features.html",
  "layouts/partials/ai-markdone/manual.html",
  "layouts/partials/ai-markdone/manual-feature.html",
  "layouts/partials/ai-markdone/faq.html",
  "layouts/partials/ai-markdone/privacy.html",
  "layouts/partials/ai-markdone/contact.html",
  "layouts/partials/ai-markdone/seo.html",
  "static/llms.txt",
  "static/robots.txt",
  "assets/ai-markdone/faq.zh.md",
  "assets/ai-markdone/faq.en.md",
  "assets/ai-markdone/testimonials.md",
  "data/ai_markdone/sponsors.toml",
  "assets/ai-markdone/images/Top.png",
  "assets/ai-markdone/images/Reading.png",
  "assets/ai-markdone/images/Toolbar.png",
  "assets/ai-markdone/images/Bookmark.png",
  "assets/ai-markdone/images/generated/reader-flow.svg",
  "assets/ai-markdone/images/generated/markdown-pipeline.svg",
  "assets/ai-markdone/images/generated/bookmark-library.svg",
  "assets/ai-markdone/icons/app-icon.png",
  "assets/ai-markdone/icons/google-chrome.svg",
  "assets/ai-markdone/icons/firefox-browser.svg",
];

const builtFiles = [
  "docs/ai-markdone/index.html",
  "docs/ai-markdone/en/index.html",
  "docs/ai-markdone/features/index.html",
  "docs/ai-markdone/en/features/index.html",
  "docs/ai-markdone/manual/index.html",
  "docs/ai-markdone/en/manual/index.html",
  "docs/ai-markdone/faq/index.html",
  "docs/ai-markdone/en/faq/index.html",
  "docs/ai-markdone/privacy/index.html",
  "docs/ai-markdone/en/privacy/index.html",
  "docs/ai-markdone/contact/index.html",
  "docs/ai-markdone/en/contact/index.html",
  "docs/ai-markdone/manual/install/index.html",
  "docs/ai-markdone/manual/directory/index.html",
  "docs/ai-markdone/manual/reader/index.html",
  "docs/ai-markdone/manual/copy-markdown/index.html",
  "docs/ai-markdone/manual/formulas/index.html",
  "docs/ai-markdone/manual/annotations/index.html",
  "docs/ai-markdone/manual/bookmarks/index.html",
  "docs/ai-markdone/manual/export/index.html",
  "docs/ai-markdone/manual/settings/index.html",
  "docs/ai-markdone/en/manual/install/index.html",
  "docs/ai-markdone/en/manual/directory/index.html",
  "docs/ai-markdone/en/manual/reader/index.html",
  "docs/ai-markdone/en/manual/copy-markdown/index.html",
  "docs/ai-markdone/en/manual/formulas/index.html",
  "docs/ai-markdone/en/manual/annotations/index.html",
  "docs/ai-markdone/en/manual/bookmarks/index.html",
  "docs/ai-markdone/en/manual/export/index.html",
  "docs/ai-markdone/en/manual/settings/index.html",
];

function read(relativePath) {
  return fs.readFileSync(path.join(root, relativePath), "utf8");
}

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

function assertOrdered(html, names, label) {
  let last = -1;
  for (const name of names) {
    const index = html.indexOf(name);
    assert(index >= 0, `${label} is missing ${name}`);
    assert(index > last, `${label} has section order problem at ${name}`);
    last = index;
  }
}

for (const file of requiredFiles) {
  assert(fs.existsSync(path.join(root, file)), `Missing source file: ${file}`);
}

const unsupportedPlatformPattern = /\b(?:Gemini|Claude|DeepSeek|DeepsGe|Safari)\b/;
for (const file of requiredFiles.filter((file) => /^(content|layouts\/partials\/ai-markdone|static\/llms\.txt)/.test(file))) {
  assert(!unsupportedPlatformPattern.test(read(file)), `${file} must not mention unsupported AI platforms or Safari as a public product path`);
}

const menu = read("config/_default/menus.toml");
assert(menu.includes('name = "AI-MarkDone"'), "Main menu is missing AI-MarkDone");
assert(menu.includes('url = "/ai-markdone/en/"'), "AI-MarkDone menu must link to the English product site by default");

const design = read("DESIGN.md");
assert(design.includes("Liangbin's Notes"), "Root DESIGN.md must remain the system design source");
assert(design.includes("Rose Signal"), "Root DESIGN.md must define the shared rose/plum visual system");
assert(design.includes("Lucide Icons"), "Root DESIGN.md must define Lucide Icons as the UI icon source of truth");
assert(design.includes("Simple Icons"), "Root DESIGN.md must define Simple Icons for brand/platform marks");
assert(design.includes("Do not use letter placeholders"), "Root DESIGN.md must forbid letter placeholders for the AI-MarkDone product mark");

const agents = read("AGENTS.md");
assert(agents.includes("root `DESIGN.md`"), "AGENTS.md must route all design work to the root DESIGN.md");
assert(agents.includes("independent product site") || agents.includes("独立产品站"), "AGENTS.md must document AI-MarkDone as an independent product site");
assert(agents.includes("返回博客") && agents.includes("Back to blog"), "AGENTS.md must require a return-to-blog entry");
assert(agents.includes("docs/"), "AGENTS.md must warn against editing generated docs directly");

for (const legacyFile of [
  "layouts/partials/ai-markdone/head.html",
  "layouts/partials/ai-markdone/header.html",
  "layouts/partials/ai-markdone/footer.html",
  "assets/ai-markdone/site.css",
]) {
  assert(!fs.existsSync(path.join(root, legacyFile)), `Legacy standalone product shell must be removed: ${legacyFile}`);
}

const baseLayout = read("layouts/_default/baseof.html");
assert(baseLayout.includes('eq .Type "ai-markdone"'), "Base layout must branch for the AI-MarkDone section");
assert(baseLayout.includes("ai-markdone/site-header.html"), "Base layout must render the AI-MarkDone product header");
assert(baseLayout.includes("ai-markdone/site-footer.html"), "Base layout must render the AI-MarkDone product footer");
assert(baseLayout.includes("search-modal.html"), "Base layout must still render blog search for non-product pages");

const basicSeo = read("layouts/partials/basic-seo.html");
assert(basicSeo.includes('<base href="{{ .RelPermalink }}"'), "basic-seo override must emit root-relative base tags so local previews do not load production assets");
assert(!basicSeo.includes('<base href="{{ .Permalink }}"'), "basic-seo override must not emit absolute production base tags");

for (const layoutFile of ["layouts/ai-markdone/list.html", "layouts/ai-markdone/single.html"]) {
  const layout = read(layoutFile);
  assert(layout.includes('{{ define "main" }}'), `${layoutFile} must use the shared Hugo base template`);
  assert(!layout.includes("<!doctype html>"), `${layoutFile} must not define a standalone HTML document`);
}

const productHeader = read("layouts/partials/ai-markdone/site-header.html");
assert(productHeader.includes("/ai-markdone/features/") && productHeader.includes("/ai-markdone/en/features/"), "Product header must link to the feature reference page");
assert(productHeader.includes("/ai-markdone/contact/") && productHeader.includes("/ai-markdone/en/contact/"), "Product header must link to the contact page");
assert(productHeader.includes("首页") && productHeader.includes("Home") && productHeader.includes("联系") && productHeader.includes("Contact"), "Product header must render Home, Features, FAQ, and Contact");
assert(productHeader.includes("aria-current=\"page\"") && productHeader.includes("is-active"), "Product header must expose an active state for the current product page");
assert(productHeader.indexOf("amd-github-icon-link") < productHeader.indexOf("amd-language-toggle"), "Product header language switch must come after browser and GitHub icon actions");
assert(!productHeader.includes("/ai-markdone/manual/") && !productHeader.includes("Back to blog") && !productHeader.includes("返回博客"), "Product header center nav must stay reduced to product pages");
assert(!productHeader.includes("#workflow") && !productHeader.includes("#modes") && !productHeader.includes("#install"), "Product header must not link to removed workflow, modes, or standalone install sections");
assert(productHeader.includes("ai-markdone/app-mark.html"), "Product header must use the real AI-MarkDone icon partial");
assert(productHeader.includes("ai-markdone/browser-downloads.html"), "Product header must render browser-specific install buttons through the shared partial");
assert(productHeader.includes("amd-github-icon-link") && productHeader.includes("github"), "Product header must include an icon-only GitHub entry");

const appMark = read("layouts/partials/ai-markdone/app-mark.html");
assert(appMark.includes("ai-markdone/icons/app-icon.png") && appMark.includes("amd-site-mark-image"), "App mark partial must use the copied extension icon");

const browserDownloads = read("layouts/partials/ai-markdone/browser-downloads.html");
assert(browserDownloads.includes("chromewebstore.google.com") && browserDownloads.includes("addons.mozilla.org/en-US/firefox/addon/ai-markdone"), "Download partial must link to Chrome Web Store and Firefox Add-ons");
assert(browserDownloads.includes("google-chrome.svg") && browserDownloads.includes("firefox-browser.svg"), "Download partial must use real Chrome and Firefox SVG marks");
assert(browserDownloads.includes("从 Chrome Web Store 安装") && browserDownloads.includes("Install from Firefox Add-ons"), "Download partial must contain bilingual browser install labels");
assert(!browserDownloads.includes("amd-browser-glyph"), "Download partial must not use fake browser letter glyphs");

const iconPartial = read("layouts/partials/ai-markdone/icon.html");
assert(iconPartial.includes("stroke-linecap=\"round\"") && iconPartial.includes("book-open-text") && iconPartial.includes("shield-check"), "Icon partial must provide Lucide-style inline UI icons");

const productFooter = read("layouts/partials/ai-markdone/site-footer.html");
assert(productFooter.includes("amd-site-footer"), "Product footer must use the AI-MarkDone product footer class");
assert(productFooter.includes("Chrome Web Store") && productFooter.includes("Firefox Add-ons") && productFooter.includes("GitHub"), "Product footer must include install and source links");
assert(productFooter.includes("返回博客") && productFooter.includes("Back to blog"), "Product footer must include a return-to-blog link");

const privacyPartial = read("layouts/partials/ai-markdone/privacy.html");
assert(privacyPartial.includes("Privacy Policy") && privacyPartial.includes("隐私政策"), "Privacy partial must present itself as a formal privacy policy");
assert(privacyPartial.includes("Google Drive") && privacyPartial.includes("https://www.googleapis.com/auth/drive.file"), "Privacy partial must disclose the Google Drive backup scope");
assert(privacyPartial.includes("AI-MarkDone/Backups/bookmarks"), "Privacy partial must disclose the Google Drive backup folder");
assert(privacyPartial.includes("Chrome Web Store User Data Policy") && privacyPartial.includes("Limited Use requirements"), "Privacy partial must include the Google API Limited Use statement");
assert(privacyPartial.includes("账号标签") && privacyPartial.includes("account label"), "Privacy partial must disclose locally stored Google account labels");
assert(privacyPartial.includes("<table class=\"amd-privacy-table\""), "Privacy partial must render permission and storage tables");
for (const needle of ["clipboardWrite", "identity", "https://chatgpt.com/*", "https://www.googleapis.com/*", "https://oauth2.googleapis.com/*"]) {
  assert(privacyPartial.includes(needle), `Privacy partial must explain permission: ${needle}`);
}

const css = read("assets/css/custom.css");
assert(css.includes(".amd-product"), "AI-MarkDone styles must live in the shared site stylesheet");
assert(css.includes("var(--color-brand-rose)"), "AI-MarkDone CSS must use the shared rose/plum design tokens");
assert(css.includes(".amd-site-header"), "AI-MarkDone CSS must include the product-site header");
assert(css.includes(".amd-site-footer"), "AI-MarkDone CSS must include the product-site footer");
assert(css.includes(".amd-site-mark-image") && css.includes(".amd-browser-logo"), "AI-MarkDone CSS must style the real app icon and browser SVG marks");
assert(css.includes(".amd-browser-downloads") && css.includes(".amd-browser-download") && css.includes(".amd-language-toggle"), "AI-MarkDone CSS must include the redesigned product header controls");
assert(css.includes(".amd-section-icon") && css.includes(".amd-heading-icon") && css.includes(".amd-trust-icon"), "AI-MarkDone CSS must include the Lucide icon treatments");
assert(css.includes(".amd-hero-center") && css.includes(".amd-hero-mark"), "AI-MarkDone CSS must include the centered product hero");
assert(css.includes(".amd-browser-downloads-compact") && css.includes(".amd-icon-link"), "AI-MarkDone CSS must include icon-only header actions");
assert(css.includes(".amd-feature-row") && css.includes(".amd-feature-placeholder") && css.includes(".amd-feature-point-list"), "AI-MarkDone CSS must include the alternating homepage feature sections");
assert(css.includes(".amd-reader-details") && css.includes(".amd-reader-details-plus") && css.includes(".amd-reader-detail-section"), "AI-MarkDone CSS must include the expandable Reader detail sections");
assert(css.includes(".amd-contact-grid") && css.includes(".amd-contact-card"), "AI-MarkDone CSS must include the contact page layout");
assert(css.includes(".amd-privacy-hero-grid") && css.includes(".amd-privacy-policy") && css.includes(".amd-privacy-table"), "AI-MarkDone CSS must include the formal privacy policy layout");
assert(css.includes(".amd-trust-fact-band"), "AI-MarkDone CSS must include the homepage trust fact band");
assert(css.includes(".amd-reviews-section") && css.includes(".amd-review-marquee") && css.includes(".amd-review-card"), "AI-MarkDone CSS must include the homepage review marquee");
assert(css.includes(".amd-manual-entry-list"), "AI-MarkDone CSS must include the one-page manual control reference");
assert(css.includes(".amd-feature-reference-section"), "AI-MarkDone CSS must include the feature reference page layout");
assert(css.includes(".amd-features-hero-grid"), "AI-MarkDone CSS must include the styled feature reference hero grid");
assert(css.includes(".amd-feature-table"), "AI-MarkDone CSS must include feature reference tables");
assert(css.includes(".amd-settings-table"), "AI-MarkDone CSS must include the settings reference table");
assert(css.includes(".amd-feature-anchor-strip a.is-active"), "AI-MarkDone CSS must style the active feature anchor");
assert(css.includes(".amd-site-links a.is-active"), "AI-MarkDone CSS must style the active product nav link");
assert(css.includes(".home-ai-markdone-card"), "Blog CSS must include the AI-MarkDone homepage entry");
assert(!css.includes(".amd-feature-summary-panel") && !css.includes(".amd-feature-summary-grid"), "AI-MarkDone CSS must not keep the removed feature summary cards");
assert(!css.includes("amd-reader-flow") && !css.includes("amd-flow-") && !css.includes("amd-mini-diagram"), "AI-MarkDone CSS must not keep ambiguous homepage diagram classes");
assert(!css.includes("amd-browser-glyph"), "AI-MarkDone CSS must not keep fake browser letter glyph styles");

const homePartial = read("layouts/partials/ai-markdone/home.html");
const testimonials = read("assets/ai-markdone/testimonials.md");
for (const needle of [
  "Hsi Lye",
  "Vannessa Safley",
  "angma",
  "谭梓琦",
  "张弦智",
  "好用的,推荐!",
  "超级好用！",
  "非常棒的功能，强大且方便，有效节省时间！",
  "牛啊，直接复制markdown粘贴到飞书文档，工作效率翻倍。",
  "好用，牛逼",
  "Chrome Web Store",
  "## Hsi Lye",
  "source: Chrome Web Store",
]) {
  assert(testimonials.includes(needle), `Chrome Web Store testimonial data is missing ${needle}`);
}
for (const needle of [
  "boy lee",
  "Liu Mengfei",
  "沐霖",
  "Astrid Gislason",
  "能不能加上自定义提示词的功能？",
  "目录条颜色自定义",
  "消息折叠好像出问题了",
  "添加好的书签在哪里查看",
  "长对话重度用户",
  "理工科研究生",
  "论文修改用户",
  "知识整理用户",
  "来自早期用户",
  "研究生用户",
  "Knowledge workflow user",
  "Long-thread user",
  "rating =",
  "v4.",
  "v3.",
  "v2.",
]) {
  assert(!testimonials.includes(needle), `Testimonial data must not keep unsuitable, synthetic, rating, or version fields: ${needle}`);
}
assert(homePartial.includes("amd-hero-center") && homePartial.includes("amd-hero-mark"), "AI-MarkDone homepage source must use the centered logo hero");
assert(homePartial.includes("颠覆你的 ChatGPT 使用范式"), "Chinese homepage source must render the new slogan");
assert(homePartial.includes("Make ChatGPT feel built for serious work"), "English homepage source must render the focused slogan");
assert(homePartial.includes('readFile "assets/ai-markdone/testimonials.md"'), "AI-MarkDone homepage source must read testimonials from the Markdown-like file");
assert(homePartial.includes("功能导览") && homePartial.includes("Feature guide"), "Homepage source must render the feature guide kicker");
assert(homePartial.includes("革新你的ChatGPT使用体验。"), "Chinese homepage source must render the requested feature guide heading");
assert(homePartial.includes("Change how ChatGPT fits into your work."), "English homepage source must render the feature guide heading");
assert(!homePartial.includes("按真实使用顺序，把有用回答处理干净。"), "AI-MarkDone homepage source must not keep the old formulaic core heading");
assert(!homePartial.includes("先把长回答读下去，再复制具体片段、处理公式"), "AI-MarkDone homepage source must not keep the old formulaic core intro");
assert(homePartial.includes("amd-hero-downloads") && homePartial.includes("GitHub Star"), "AI-MarkDone homepage source must render browser installs and GitHub star in the hero");
assert(homePartial.includes("ai-markdone/icon.html"), "AI-MarkDone homepage source must render Lucide-style UI icons");
assert(homePartial.includes('id="features"'), "AI-MarkDone homepage source must expose the features anchor");
assert(homePartial.includes('id="trust"'), "AI-MarkDone homepage source must expose the trust anchor");
assert(homePartial.includes("amd-feature-row") && homePartial.includes("amd-feature-placeholder"), "AI-MarkDone homepage source must render alternating feature sections with placeholders");
assert(!homePartial.includes("amd-feature-card-list"), "AI-MarkDone homepage source must not render the old feature card list");
assert(homePartial.includes("amd-reader-details") && homePartial.includes("amd-reader-detail-section") && homePartial.includes("amd-reader-detail-visual"), "AI-MarkDone homepage source must render expandable Reader detail sections with placeholders");
assert(homePartial.includes("查看完整功能表") && homePartial.includes("Open the full feature table"), "AI-MarkDone homepage source must link to the feature reference page");
assert(homePartial.includes("amd-trust-fact-band"), "AI-MarkDone homepage source must render local-first trust as a fact band");
assert(homePartial.includes("amd-reviews-section") && homePartial.includes("amd-review-card") && homePartial.includes("3,000+ 用户正在使用 AI-MarkDone"), "AI-MarkDone homepage source must render the review section");
assert(!homePartial.includes("amd-review-stars") && !homePartial.includes("amd-review-avatar") && !homePartial.includes("Read the full FAQ") && !homePartial.includes("查看完整 FAQ"), "AI-MarkDone homepage source must not render ratings, avatars, or the old FAQ link");
assert(!homePartial.includes("下载之前，先把几件事说透。") && !homePartial.includes("A few honest answers before you install."), "AI-MarkDone homepage source must not keep the removed FAQ preview heading");
assert(!homePartial.includes("amd-home-final-cta"), "AI-MarkDone homepage source must not render a duplicate final CTA");
assert(homePartial.includes("AI-MarkDone 把你的 ChatGPT 武装到牙齿：阅读模式、局部 Markdown 复制、公式复制/导出、书签保存、批量导出和灵动注释，这些功能让ChatGPT从未如此丝滑。"), "Chinese homepage source must use the exact first hero sentence");
assert(homePartial.includes("AI-MarkDone 适合所有 ChatGPT 重度使用者，尤其是理工科科研工作者。把原本零散的复制、截图、导出和批注动作，收进一个更高效的 ChatGPT 工作流。"), "Chinese homepage source must use the requested feature guide body sentence");
assert(homePartial.includes("AI-MarkDone adds Reader mode, partial Markdown copy, formula copy/export, bookmarks, batch export, and precise annotations to ChatGPT"), "English homepage source must use the concise functional hero narrative");
for (const needle of ["阅读器", "公式复制/导出", "书签保存", "批量导出", "Google Drive 云备份", "设置", "局部 Markdown 复制", "灵动注释", "消息切换"]) {
  assert(homePartial.includes(needle), `AI-MarkDone homepage source is missing ${needle}`);
}
for (const needle of ["Reader", "Formula copy/export", "Bookmarks", "Batch export", "Google Drive backup", "Settings", "Partial Markdown copy", "Precise annotations", "Message switching"]) {
  assert(homePartial.includes(needle), `AI-MarkDone English homepage source is missing ${needle}`);
}
assert(!homePartial.includes("amd-home-facts"), "AI-MarkDone homepage source must not render hero tags");
assert(!homePartial.includes("amd-workflow-list"), "AI-MarkDone homepage source must not render the removed workflow section");
assert(!homePartial.includes("amd-mode-section"), "AI-MarkDone homepage source must not render the removed product modes section");
assert(!homePartial.includes("amd-install-download"), "AI-MarkDone homepage source must not render the removed install/download section");
assert(!homePartial.includes("Reading.png") && !homePartial.includes("Fold.png") && !homePartial.includes("Bookmark.png"), "AI-MarkDone homepage source must not use isolated raw product screenshots");
assert(!homePartial.includes("amd-workbench-preview"), "AI-MarkDone homepage source must not render the removed right-side workspace mockup");
assert(!homePartial.includes("amd-reader-flow") && !homePartial.includes("amd-flow-") && !homePartial.includes("amd-mini-diagram"), "AI-MarkDone homepage source must not render ambiguous concept diagrams");

const seoPartial = read("layouts/partials/ai-markdone/seo.html");
assert(seoPartial.includes("SoftwareApplication"), "AI-MarkDone SEO partial must emit SoftwareApplication schema");
assert(seoPartial.includes("FAQPage"), "AI-MarkDone SEO partial must emit FAQPage schema for FAQ pages");
assert(seoPartial.includes("hreflang"), "AI-MarkDone SEO partial must emit hreflang alternates");

const llms = read("static/llms.txt");
assert(llms.includes("independent product site"), "llms.txt must describe AI-MarkDone as an independent product site");
assert(llms.includes("https://zhaoliangbin42.github.io/ai-markdone/"), "llms.txt must list the AI-MarkDone homepage");
assert(llms.includes("https://zhaoliangbin42.github.io/ai-markdone/features/"), "llms.txt must list the AI-MarkDone feature reference");
assert(llms.includes("Chrome Web Store"), "llms.txt must list the Chrome Web Store reference");
assert(llms.includes("Firefox Add-ons"), "llms.txt must list the Firefox Add-ons reference");
assert(llms.includes("one-page manual"), "llms.txt must describe the simplified manual as one page");
assert(!llms.includes("/ai-markdone/manual/reader/"), "llms.txt must not foreground the hidden manual feature tutorials");
assert(!llms.includes("/ai-markdone/en/manual/reader/"), "llms.txt must not foreground the hidden English manual feature tutorials");

for (const file of builtFiles) {
  assert(fs.existsSync(path.join(root, file)), `Missing built output: ${file}`);
  assert(!unsupportedPlatformPattern.test(read(file)), `${file} must not render unsupported AI platforms or Safari as a public product path`);
}

const blogHome = read("docs/index.html");
assert(blogHome.includes("id=site-header") || blogHome.includes('id="site-header"'), "Blog homepage must still render the shared blog header");
assert(blogHome.includes("footer-social-link"), "Blog homepage must still render the shared blog footer");
assert(blogHome.includes("/ai-markdone/en/"), "Blog homepage must link into the English AI-MarkDone product site by default");
assert(blogHome.includes("home-ai-markdone-card") && blogHome.includes("AI-MarkDone") && blogHome.includes("ChatGPT browser extension"), "Blog homepage must render the AI-MarkDone product entry");
assert(!blogHome.includes("amd-site-header"), "Blog homepage must not render the AI-MarkDone product header");

const zhHome = read("docs/ai-markdone/index.html");
const enHome = read("docs/ai-markdone/en/index.html");

assertOrdered(zhHome, [
  "amd-home-hub",
  "amd-core-section",
  "amd-trust-hub-section",
  "amd-reviews-section",
], "Chinese homepage");

assertOrdered(enHome, [
  "amd-home-hub",
  "amd-core-section",
  "amd-trust-hub-section",
  "amd-reviews-section",
], "English homepage");

assert(zhHome.includes("颠覆你的 ChatGPT 使用范式"), "Chinese homepage slogan did not render");
assert(enHome.includes("Make ChatGPT feel built for serious work"), "English homepage slogan did not render");
assert(zhHome.includes("AI-MarkDone 把你的 ChatGPT 武装到牙齿：阅读模式、局部 Markdown 复制、公式复制/导出、书签保存、批量导出和灵动注释，这些功能让ChatGPT从未如此丝滑。"), "Chinese homepage exact first hero sentence did not render");
assert(zhHome.includes("AI-MarkDone 适合所有 ChatGPT 重度使用者，尤其是理工科科研工作者。把原本零散的复制、截图、导出和批注动作，收进一个更高效的 ChatGPT 工作流。"), "Chinese homepage exact second hero sentence did not render");
assert(enHome.includes("AI-MarkDone adds Reader mode, partial Markdown copy, formula copy/export, bookmarks, batch export, and precise annotations to ChatGPT"), "English homepage functional positioning did not render");
assert(enHome.includes("scattered copying, screenshots, exports, and annotations into a more efficient ChatGPT workflow"), "English homepage audience copy did not render");
assert(zhHome.includes("功能导览") && enHome.includes("Feature guide"), "Homepages must render the feature guide kicker");
assert(zhHome.includes("革新你的ChatGPT使用体验。"), "Chinese homepage requested feature guide heading did not render");
assert(enHome.includes("Change how ChatGPT fits into your work."), "English homepage feature guide heading did not render");
assert(!zhHome.includes("按真实使用顺序，把有用回答处理干净。") && !enHome.includes("The tools are arranged around how useful answers actually get used."), "Homepages must not render the old formulaic core feature heading");
assert(zhHome.includes("amd-review-quote") && enHome.includes("amd-review-quote"), "Homepages must render Markdown-backed review quote containers");
assert(zhHome.includes("从 Chrome Web Store 安装"), "Chinese homepage must prioritize Chrome Web Store install");
assert(enHome.includes("Install from Chrome Web Store"), "English homepage must prioritize Chrome Web Store install");
assert(zhHome.includes("从 Firefox Add-ons 安装"), "Chinese homepage must include Firefox Add-ons install in the hero CTA set");
assert(enHome.includes("Install from Firefox Add-ons"), "English homepage must include Firefox Add-ons install in the hero CTA set");
assert(zhHome.includes("GitHub Star") && enHome.includes("GitHub Star"), "Homepages must include a GitHub star CTA in the hero");
assert(zhHome.includes("google-chrome.svg") && zhHome.includes("firefox-browser.svg"), "Chinese homepage must render real Chrome and Firefox SVG marks");
assert(enHome.includes("google-chrome.svg") && enHome.includes("firefox-browser.svg"), "English homepage must render real Chrome and Firefox SVG marks");
assert(zhHome.includes("amd-site-mark-image") && enHome.includes("amd-site-mark-image"), "Homepages must render the copied AI-MarkDone extension icon");
assert(!zhHome.includes("amd-browser-glyph") && !enHome.includes("amd-browser-glyph"), "Homepages must not render fake browser letter glyphs");
assert(zhHome.includes("/ai-markdone/en/"), "Chinese homepage is missing English route link");
assert(enHome.includes("/ai-markdone/"), "English homepage is missing Chinese route link");
assert(!zhHome.includes("/ai-markdone/images/Top.png"), "Chinese homepage hero must not use the old raw promo screenshot");
assert(!enHome.includes("/ai-markdone/images/Top.png"), "English homepage hero must not use the old raw promo screenshot");
assert(!zhHome.includes("/ai-markdone/images/Reading.png") && !zhHome.includes("/ai-markdone/images/Fold.png") && !zhHome.includes("/ai-markdone/images/Bookmark.png"), "Chinese homepage must not use old isolated product screenshots");
assert(!enHome.includes("/ai-markdone/images/Reading.png") && !enHome.includes("/ai-markdone/images/Fold.png") && !enHome.includes("/ai-markdone/images/Bookmark.png"), "English homepage must not use old isolated product screenshots");
assert(zhHome.includes("amd-site-header") && zhHome.includes("amd-site-footer"), "Chinese homepage must render the product shell");
assert(enHome.includes("amd-site-header") && enHome.includes("amd-site-footer"), "English homepage must render the product shell");
assert(zhHome.includes("返回博客"), "Chinese homepage must include a return-to-blog link");
assert(enHome.includes("Back to blog"), "English homepage must include a return-to-blog link");
assert(!zhHome.includes("id=site-header") && !zhHome.includes('id="site-header"'), "Chinese homepage must not render the blog header");
assert(!enHome.includes("id=site-header") && !enHome.includes('id="site-header"'), "English homepage must not render the blog header");
assert(!zhHome.includes("footer-social-link"), "Chinese homepage must not render the blog footer");
assert(!enHome.includes("footer-social-link"), "English homepage must not render the blog footer");
assert(!zhHome.includes("search-modal") && !enHome.includes("search-modal"), "AI-MarkDone homepages must not render the blog search modal");
assert(zhHome.includes("amd-hero-center") && enHome.includes("amd-hero-center"), "Homepages must render the centered product hero");
assert(!zhHome.includes("amd-workbench-preview") && !enHome.includes("amd-workbench-preview"), "Homepages must not render the removed right-side workspace mockup");
assert(!zhHome.includes("amd-feature-card-list") && !enHome.includes("amd-feature-card-list"), "Homepages must not render the old feature card list");
assert(zhHome.includes("amd-feature-row") && enHome.includes("amd-feature-row"), "Homepages must render alternating feature rows");
assert(zhHome.includes("amd-feature-placeholder") && enHome.includes("amd-feature-placeholder"), "Homepages must render bordered screenshot placeholders");
assert(zhHome.includes("amd-reader-details") && enHome.includes("amd-reader-details"), "Homepages must render the expandable Reader detail module");
assert(zhHome.includes("amd-reader-detail-section") && enHome.includes("amd-reader-detail-section"), "Homepages must render Reader detail sections");
assert(zhHome.includes("选区复制浮层") && zhHome.includes("灵动注释浮层") && zhHome.includes("Reader 消息切换"), "Chinese homepage must render Reader detail screenshot placeholders");
assert(enHome.includes("Selection copy popover") && enHome.includes("Annotation popover") && enHome.includes("Reader message switching"), "English homepage must render Reader detail screenshot placeholders");
assert(!zhHome.includes("下载之前，先把几件事说透。"), "Chinese homepage must remove the old FAQ preview heading");
assert(!enHome.includes("A few honest answers before you install."), "English homepage must remove the old FAQ preview heading");
assert(zhHome.includes("amd-reviews-section") && enHome.includes("amd-reviews-section"), "Homepages must render the review section");
assert(zhHome.includes("3,000+ 用户正在使用 AI-MarkDone") && enHome.includes("3,000+ users are using AI-MarkDone"), "Homepages must render the public user count proof copy");
assert(zhHome.includes("amd-review-card") && enHome.includes("amd-review-card"), "Homepages must render review cards");
assert(!zhHome.includes("amd-review-stars") && !enHome.includes("amd-review-stars"), "Homepages must not render rating stars");
assert(!zhHome.includes("amd-review-avatar") && !enHome.includes("amd-review-avatar"), "Homepages must not render review avatars");
assert(!zhHome.includes("Chrome Web Store 评分") && !enHome.includes("Chrome Web Store rating"), "Homepages must not foreground rating copy in the user proof section");
assert(zhHome.includes("Chrome Web Store") && zhHome.includes("Firefox Add-ons") && zhHome.includes("GitHub Star"), "Chinese homepage must render unified hero action labels");
assert(!zhHome.includes("STEM 工作流") && !enHome.includes("STEM workflow"), "Homepages must not render the removed hero tags");
assert(zhHome.includes("截图占位") && enHome.includes("Screenshot placeholder"), "Homepages must render real screenshot placeholders");
assert(zhHome.includes("amd-trust-fact-band") && enHome.includes("amd-trust-fact-band"), "Homepages must render local-first trust as a fact band");
assert(!zhHome.includes("amd-faq-preview-list") && !enHome.includes("amd-faq-preview-list"), "Homepages must not render the removed FAQ preview list");
assert(!zhHome.includes("amd-home-final-cta") && !enHome.includes("amd-home-final-cta"), "Homepages must not render a duplicate final CTA");
assert(!zhHome.includes("amd-workflow-list") && !enHome.includes("amd-workflow-list"), "Homepages must not render the removed workflow section");
assert(!zhHome.includes("amd-mode-section") && !enHome.includes("amd-mode-section"), "Homepages must not render the removed product modes section");
assert(!zhHome.includes("amd-install-download") && !enHome.includes("amd-install-download"), "Homepages must not render the removed install/download section");
for (const needle of ["阅读器", "公式复制/导出", "书签保存", "批量导出", "Google Drive 云备份", "设置", "局部 Markdown 复制", "灵动注释", "消息切换"]) {
  assert(zhHome.includes(needle), `Chinese homepage is missing feature section copy: ${needle}`);
}
for (const needle of ["Reader", "Formula copy/export", "Bookmarks", "Batch export", "Google Drive backup", "Settings", "Partial Markdown copy", "Precise annotations", "Message switching"]) {
  assert(enHome.includes(needle), `English homepage is missing feature section copy: ${needle}`);
}
assert(zhHome.indexOf("Google Drive 云备份") > zhHome.indexOf("批量导出") && zhHome.indexOf("Google Drive 备份设置") < zhHome.indexOf("设置页"), "Chinese homepage must place Google Drive backup before Settings");
assert(enHome.lastIndexOf("Google Drive backup") > enHome.indexOf("Batch export") && enHome.indexOf("Google Drive backup settings") < enHome.indexOf("Settings page"), "English homepage must place Google Drive backup before Settings");
assert(zhHome.includes("专注 ChatGPT 原页面"), "Chinese homepage must render the ChatGPT trust signal without Only wording");
assert(enHome.includes("Built around ChatGPT"), "English homepage must render the ChatGPT trust signal without Only wording");
assert(zhHome.includes("本地优先") && zhHome.includes("没有自有服务器") && zhHome.includes("免费开源"), "Chinese homepage must render local-first trust details");
assert(enHome.includes("Local-first") && enHome.includes("No owned server") && enHome.includes("Free and open source"), "English homepage must render local-first trust details");
assert(!zhHome.includes("amd-reader-flow") && !zhHome.includes("amd-flow-") && !zhHome.includes("amd-mini-diagram"), "Chinese homepage must not render ambiguous concept diagrams");
assert(!enHome.includes("amd-reader-flow") && !enHome.includes("amd-flow-") && !enHome.includes("amd-mini-diagram"), "English homepage must not render ambiguous concept diagrams");
assert(!zhHome.includes("右侧目录帮你在长线程里找回关键回答"), "Chinese homepage must not keep the old right-side directory feature card");
assert(!enHome.includes("The right-side directory brings you back to key answers"), "English homepage must not keep the old right-side directory feature card");
assert(zhHome.includes("Markdown、PDF、PNG、多图 ZIP") || zhHome.includes("Markdown、PDF、PNG"), "Chinese homepage must explain Markdown/PDF/PNG export");
assert(enHome.includes("Markdown, PDF, PNG, multi-image ZIP"), "English homepage must explain Markdown/PDF/PNG export");
assert(zhHome.includes("application/ld+json"), "Chinese homepage must render JSON-LD");
assert(enHome.includes("application/ld+json"), "English homepage must render JSON-LD");
assert(zhHome.includes("hreflang=zh-CN"), "Chinese homepage must render zh-CN hreflang");
assert(enHome.includes("hreflang=en"), "English homepage must render en hreflang");

const zhFeatures = read("docs/ai-markdone/features/index.html");
const enFeatures = read("docs/ai-markdone/en/features/index.html");
assert(zhFeatures.includes("功能一览") && zhFeatures.includes("amd-feature-reference-section"), "Chinese features page must render the feature reference");
assert(enFeatures.includes("Feature reference") && enFeatures.includes("amd-feature-reference-section"), "English features page must render the feature reference");
assert(zhFeatures.includes("data-amd-scrollspy") && enFeatures.includes("data-amd-scrollspy"), "Feature pages must render the scrollspy anchor navigation");
assert(zhFeatures.includes("IntersectionObserver") && enFeatures.includes("IntersectionObserver"), "Feature pages must activate anchors with IntersectionObserver");
assert(zhFeatures.includes("aria-current=page>功能") || zhFeatures.includes("aria-current=\"page\">功能"), "Chinese feature page must highlight the product header nav");
assert(enFeatures.includes("aria-current=page>Features") || enFeatures.includes("aria-current=\"page\">Features"), "English feature page must highlight the product header nav");
assert(zhFeatures.includes("amd-features-hero-grid") && !zhFeatures.includes("amd-feature-summary-panel"), "Chinese features page must render the simplified feature hero without summary cards");
assert(enFeatures.includes("amd-features-hero-grid") && !enFeatures.includes("amd-feature-summary-panel"), "English features page must render the simplified feature hero without summary cards");
assert(!zhFeatures.includes("它更像一张速查表，不是长篇教程"), "Chinese features page must not keep the old AI-sounding feature intro");
assert(!enFeatures.includes("quick reference, not a long tutorial"), "English features page must not keep the old AI-sounding feature intro");
for (const needle of ["Reader 阅读器", "复制与公式", "注释与追问", "书签与资料管理", "导出与分享", "设置项速查"]) {
  assert(zhFeatures.includes(needle), `Chinese features page is missing ${needle}`);
}
for (const needle of ["Reader", "Copy and formulas", "Annotations and follow-up", "Bookmarks and saved material", "Export and sharing", "Settings reference"]) {
  assert(enFeatures.includes(needle), `English features page is missing ${needle}`);
}
for (const needle of ["Sticky 面板整理", "全屏阅读", "代码块复制", "大纲跳转与当前标题", "公式悬浮动作", "注释复制模板", "PNG 图片倍率", "发送后保持当前位置", "主题色", "Deep Research 清洗"]) {
  assert(zhFeatures.includes(needle), `Chinese features page is missing real feature or setting copy: ${needle}`);
}
for (const needle of ["Sticky panel organization", "Fullscreen reading", "Code block copy", "Outline jump and active heading", "Formula hover actions", "Annotations copy template", "PNG image scale", "Keep position after sending", "Theme color", "Deep Research cleanup"]) {
  assert(enFeatures.includes(needle), `English features page is missing real feature or setting copy: ${needle}`);
}
assert(!zhFeatures.includes("右侧对话目录") && !zhFeatures.includes("目录条显示方式") && !zhFeatures.includes("显示 Prompt 结尾"), "Chinese features page must not advertise retired directory controls");
assert(!enFeatures.includes("Right-side conversation directory") && !enFeatures.includes("Directory display mode") && !enFeatures.includes("Show prompt endings"), "English features page must not advertise retired directory controls");
assert(zhFeatures.includes("/ai-markdone/en/features/"), "Chinese features page must link to English version");
assert(enFeatures.includes("/ai-markdone/features/"), "English features page must link to Chinese version");
assert(zhFeatures.includes("application/ld+json") && enFeatures.includes("application/ld+json"), "Feature pages must render JSON-LD");

function bundledCssFrom(html, label) {
  const match = html.match(/href=([^ >]*\/css\/style(?:\.min)?\.[^ >]+\.css)/);
  assert(match, `${label} must link the built stylesheet`);
  return read(`docs${match[1].replace(/^https?:\/\/[^/]+/, "")}`);
}

const zhFeatureCss = bundledCssFrom(zhFeatures, "Chinese features page");
assert(zhFeatureCss.includes(".amd-features-hero-grid"), "Built stylesheet must contain the feature hero grid styles");
assert(!zhFeatureCss.includes(".amd-feature-summary-panel"), "Built stylesheet must not contain the removed feature summary panel styles");
assert(zhFeatureCss.includes(".amd-feature-table-card"), "Built stylesheet must contain feature table card styles");

for (const htmlFile of builtFiles) {
  const html = read(htmlFile);
  assert(html.includes("amd-site-header"), `${htmlFile} must render the AI-MarkDone product header`);
  assert(html.includes("amd-site-footer"), `${htmlFile} must render the AI-MarkDone product footer`);
  assert(html.includes("amd-language-toggle"), `${htmlFile} must keep the header language switch`);
  assert(!html.includes("amd-language-link"), `${htmlFile} must not render duplicate language links inside the page hero`);
  assert(html.includes("返回博客") || html.includes("Back to blog"), `${htmlFile} must include a return-to-blog entry`);
  assert(!html.includes("id=site-header") && !html.includes('id="site-header"'), `${htmlFile} must not render the blog header`);
  assert(!html.includes("footer-social-link"), `${htmlFile} must not render the blog footer`);
  assert(!html.includes("search-modal"), `${htmlFile} must not render the blog search modal`);
  for (const src of html.matchAll(/src="?(\/ai-markdone\/[^" >]+\.(?:png|svg))/g)) {
    assert(fs.existsSync(path.join(root, "docs", src[1].replace(/^\/+/, ""))), `Missing linked image from ${htmlFile}: ${src[1]}`);
  }
}

const zhFaq = read("docs/ai-markdone/faq/index.html");
const enFaq = read("docs/ai-markdone/en/faq/index.html");
assert(zhFaq.includes("FAQPage"), "Chinese FAQ must render FAQPage schema");
assert(enFaq.includes("FAQPage"), "English FAQ must render FAQPage schema");
assert(zhFaq.includes("amd-faq-accordion") && enFaq.includes("amd-faq-accordion"), "FAQ pages must render the accordion layout");
assert((zhFaq.match(/<details class=(?:"amd-faq-item"|amd-faq-item)/g) || []).length >= 12, "Chinese FAQ must render plugin FAQ entries as details");
assert((enFaq.match(/<details class=(?:"amd-faq-item"|amd-faq-item)/g) || []).length >= 12, "English FAQ must render plugin FAQ entries as details");
assert(zhFaq.includes("原网页不就挺好看的吗？为什么还要专门做一个阅读器？"), "Chinese FAQ must use the plugin Reader FAQ");
assert(enFaq.includes("The original page already looks fine. Why make a Reader?"), "English FAQ must use the plugin Reader FAQ");
assert(zhFaq.includes("Google Drive 备份会把书签保存到哪里？"), "Chinese FAQ must include the plugin Google Drive backup FAQ");
assert(enFaq.includes("Where does Google Drive backup save my bookmarks?"), "English FAQ must include the plugin Google Drive backup FAQ");
assert(zhFaq.includes("阅读器里的 Sticky 是做什么的？") && zhFaq.includes("Sticky 面板可以展开或收起"), "Chinese FAQ must include the current Reader Sticky FAQ");
assert(enFaq.includes("What is Sticky inside Reader for?") && enFaq.includes("The Sticky panel can be shown or hidden"), "English FAQ must include the current Reader Sticky FAQ");
assert(!zhFaq.includes("Gemini") && !zhFaq.includes("Claude") && !zhFaq.includes("DeepSeek"), "Chinese FAQ must not mention retired AI platforms");
assert(!enFaq.includes("Gemini") && !enFaq.includes("Claude") && !enFaq.includes("DeepSeek"), "English FAQ must not mention retired AI platforms");
assert(!zhFaq.includes("ChatGPT 右侧目录怎么用？") && !zhFaq.includes("ChatGPT 页面右侧目录条"), "Chinese FAQ must not keep the retired directory FAQ");
assert(!enFaq.includes("How do I use the ChatGPT conversation directory?") && !enFaq.includes("right-side directory rail"), "English FAQ must not keep the retired directory FAQ");
assert(!zhFaq.includes("安装前最常见的几个实际问题"), "Chinese FAQ must remove the old website-only FAQ hero");
assert(!enFaq.includes("Practical questions before you install"), "English FAQ must remove the old website-only FAQ hero");

const zhContact = read("docs/ai-markdone/contact/index.html");
const enContact = read("docs/ai-markdone/en/contact/index.html");
assert(zhContact.includes("zhaoliangbin42@gmail.com") && enContact.includes("zhaoliangbin42@gmail.com"), "Contact pages must render the real email address");
assert(zhContact.includes("github.com/zhaoliangbin42/AI-MarkDone/issues") && enContact.includes("github.com/zhaoliangbin42/AI-MarkDone/issues"), "Contact pages must render the GitHub Issue entry");
assert(zhContact.includes("有了你的反馈，AI-MarkDone 会更好。"), "Chinese contact page must open with feedback-driven copy");
assert(enContact.includes("Your feedback makes AI-MarkDone better."), "English contact page must open with feedback-driven copy");
assert(zhContact.includes("浏览器名称和版本") && zhContact.includes("AI-MarkDone 插件版本"), "Chinese contact page must ask for browser and extension details");
assert(enContact.includes("Browser name and version") && enContact.includes("AI-MarkDone extension version"), "English contact page must ask for browser and extension details");

const zhPrivacy = read("docs/ai-markdone/privacy/index.html");
const enPrivacy = read("docs/ai-markdone/en/privacy/index.html");
assert(zhPrivacy.includes("隐私政策") && enPrivacy.includes("Privacy Policy"), "Privacy pages must render formal policy headings");
assert(zhPrivacy.includes("Google Drive") && enPrivacy.includes("Google Drive"), "Privacy pages must disclose Google Drive backup");
assert(zhPrivacy.includes("https://www.googleapis.com/auth/drive.file") && enPrivacy.includes("https://www.googleapis.com/auth/drive.file"), "Privacy pages must disclose the drive.file scope");
assert(zhPrivacy.includes("AI-MarkDone/Backups/bookmarks") && enPrivacy.includes("AI-MarkDone/Backups/bookmarks"), "Privacy pages must disclose the Google Drive backup folder");
assert(zhPrivacy.includes("Chrome Web Store User Data Policy") && enPrivacy.includes("Chrome Web Store User Data Policy"), "Privacy pages must include the Chrome Web Store User Data Policy reference");
assert(zhPrivacy.includes("Limited Use") && enPrivacy.includes("Limited Use"), "Privacy pages must include Limited Use disclosure");
assert(zhPrivacy.includes("clipboardWrite") && zhPrivacy.includes("identity") && enPrivacy.includes("clipboardWrite") && enPrivacy.includes("identity"), "Privacy pages must explain extension permissions");
assert(zhPrivacy.includes("没有自有服务器接收内容") && enPrivacy.includes("No owned server for your content"), "Privacy pages must render local-first summary cards");
assert(!zhPrivacy.includes("最后更新") && !enPrivacy.includes("Last updated"), "Privacy pages must not render a last-updated date");
assert(!zhPrivacy.includes("一句话版本") && !enPrivacy.includes("Short version"), "Privacy pages must not keep the old short-card layout copy");

const zhManual = read("docs/ai-markdone/manual/index.html");
const enManual = read("docs/ai-markdone/en/manual/index.html");
assert(zhManual.includes("为什么做这个扩展"), "Chinese manual must explain product motivation");
assert(zhManual.includes("因为原网页更适合“聊天”，不一定适合“认真读”"), "Chinese manual must reuse plugin Reader motivation copy");
assert(zhManual.includes("我一直觉得，AI 对话里真正有价值的内容"), "Chinese manual must reuse plugin bookmark motivation copy");
assert(zhManual.includes("功能入口速查"), "Chinese manual must render the real plugin control reference");
assert(zhManual.includes("工具栏 -&gt; 阅读器") || zhManual.includes("工具栏 -> 阅读器"), "Chinese manual must include real Reader entry copy");
assert(zhManual.includes("截图占位"), "Chinese manual must render screenshot placeholders");
assert(!zhManual.includes("功能教程"), "Chinese manual must not foreground a large feature-guide index");
assert(!zhManual.includes("/ai-markdone/manual/reader/"), "Chinese manual must not foreground hidden feature tutorial pages");
assert(!zhManual.includes("<details"), "Chinese manual overview must not use the old dense collapsible tutorial stack");
assert(!zhManual.includes("/ai-markdone/images/Fold.png"), "Chinese manual must not render the old directory screenshot");
assert(!zhManual.includes("/ai-markdone/images/Reading.png"), "Chinese manual must not render the old Reader screenshot");
assert(!zhManual.includes("/ai-markdone/images/Bookmark.png"), "Chinese manual must not render the old bookmark screenshot");
assert(enManual.includes("Why it exists"), "English manual must explain product motivation");
assert(enManual.includes("Control reference"), "English manual must render the real plugin control reference");
assert(enManual.includes("Toolbar -&gt; Reader") || enManual.includes("Toolbar -> Reader"), "English manual must include real Reader entry copy");
assert(enManual.includes("Screenshot placeholder"), "English manual must render screenshot placeholders");
assert(!enManual.includes("Feature guides"), "English manual must not foreground a large feature-guide index");
assert(!enManual.includes("/ai-markdone/en/manual/reader/"), "English manual must not foreground hidden feature tutorial pages");
assert(!enManual.includes("<details"), "English manual overview must not use the old dense collapsible tutorial stack");

for (const [file, expected] of [
  ["docs/ai-markdone/manual/reader/index.html", "Reader 面板"],
  ["docs/ai-markdone/manual/export/index.html", "Save Messages"],
  ["docs/ai-markdone/manual/bookmarks/index.html", "书签保存弹窗"],
  ["docs/ai-markdone/en/manual/reader/index.html", "Reader panel"],
  ["docs/ai-markdone/en/manual/export/index.html", "Save Messages"],
  ["docs/ai-markdone/en/manual/bookmarks/index.html", "bookmark save dialog"],
]) {
  const html = read(file);
  assert(html.includes("amd-guide-placeholder"), `${file} must render a screenshot placeholder`);
  assert(html.includes("amd-guide-next"), `${file} must render previous/next navigation`);
  assert(html.includes(expected), `${file} must render its feature-specific tutorial copy`);
  assert(html.includes("application/ld+json"), `${file} must render JSON-LD`);
}

assert(fs.existsSync(path.join(root, "docs/llms.txt")), "Built output must include /llms.txt");
assert(fs.existsSync(path.join(root, "docs/robots.txt")), "Built output must include /robots.txt");

console.log("AI-MarkDone independent product site source and build outputs verified.");
