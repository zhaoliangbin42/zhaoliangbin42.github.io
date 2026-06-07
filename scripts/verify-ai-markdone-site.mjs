import fs from "node:fs";
import path from "node:path";

const root = process.cwd();

const requiredFiles = [
  ".agents/product-marketing.md",
  "AGENTS.md",
  "DESIGN.md",
  "data/ai_markdone/manual_nav.toml",
  "content/ai-markdone/_index.md",
  "content/ai-markdone/features.md",
  "content/ai-markdone/faq.md",
  "content/ai-markdone/privacy.md",
  "content/ai-markdone/contact.md",
  "content/ai-markdone/en/_index.md",
  "content/ai-markdone/en/features.md",
  "content/ai-markdone/en/manual.md",
  "content/ai-markdone/en/faq.md",
  "content/ai-markdone/en/privacy.md",
  "content/ai-markdone/en/contact.md",
  "content/ai-markdone/manual/architecture.md",
  "content/ai-markdone/manual/reader.md",
  "content/ai-markdone/manual/partial-copy.md",
  "content/ai-markdone/manual/sticky.md",
  "content/ai-markdone/manual/partial-copy-sticky.md",
  "content/ai-markdone/manual/message-navigation.md",
  "content/ai-markdone/manual/copy-markdown.md",
  "content/ai-markdone/manual/formulas.md",
  "content/ai-markdone/manual/annotations.md",
  "content/ai-markdone/manual/bookmarks.md",
  "content/ai-markdone/manual/export.md",
  "content/ai-markdone/manual/google-drive-backup.md",
  "content/ai-markdone/manual/settings.md",
  "content/ai-markdone/manual/privacy-storage.md",
  "content/ai-markdone/manual/troubleshooting.md",
  "content/ai-markdone/en/manual/architecture.md",
  "content/ai-markdone/en/manual/reader.md",
  "content/ai-markdone/en/manual/partial-copy.md",
  "content/ai-markdone/en/manual/sticky.md",
  "content/ai-markdone/en/manual/partial-copy-sticky.md",
  "content/ai-markdone/en/manual/message-navigation.md",
  "content/ai-markdone/en/manual/copy-markdown.md",
  "content/ai-markdone/en/manual/formulas.md",
  "content/ai-markdone/en/manual/annotations.md",
  "content/ai-markdone/en/manual/bookmarks.md",
  "content/ai-markdone/en/manual/export.md",
  "content/ai-markdone/en/manual/google-drive-backup.md",
  "content/ai-markdone/en/manual/settings.md",
  "content/ai-markdone/en/manual/privacy-storage.md",
  "content/ai-markdone/en/manual/troubleshooting.md",
  "layouts/_default/baseof.html",
  "layouts/ai-markdone/list.html",
  "layouts/ai-markdone/single.html",
  "layouts/partials/ai-markdone/site-header.html",
  "layouts/partials/ai-markdone/site-footer.html",
  "layouts/partials/ai-markdone/home.html",
  "layouts/partials/ai-markdone/features.html",
  "layouts/partials/ai-markdone/manual.html",
  "layouts/partials/ai-markdone/manual-feature.html",
  "layouts/partials/ai-markdone/manual-shell.html",
  "layouts/partials/ai-markdone/plugin-architecture.html",
  "layouts/shortcodes/amd-plugin-architecture.html",
  "layouts/partials/ai-markdone/faq.html",
  "layouts/partials/ai-markdone/privacy.html",
  "layouts/partials/ai-markdone/contact.html",
  "layouts/partials/ai-markdone/seo.html",
  "assets/css/custom.css",
  "assets/ai-markdone/faq.zh.md",
  "assets/ai-markdone/faq.en.md",
  "assets/ai-markdone/testimonials.md",
  "assets/ai-markdone/icons/app-icon.png",
  "assets/ai-markdone/icons/google-chrome.svg",
  "assets/ai-markdone/icons/firefox-browser.svg",
  "assets/ai-markdone/architecture/plugin-architecture.js",
  "assets/ai-markdone/images/home/ai-markdone-chatgpt-reader-toolbar.gif",
  "assets/ai-markdone/images/home/chatgpt-reader-heading-outline.png",
  "assets/ai-markdone/images/home/copy-chatgpt-selection-to-markdown.gif",
  "assets/ai-markdone/images/home/chatgpt-reader-sticky-excerpts-pin-important-content.png",
  "assets/ai-markdone/images/home/chatgpt-reader-dynamic-annotation-prompt.gif",
  "assets/ai-markdone/images/home/chatgpt-reader-message-switching.png",
  "assets/ai-markdone/images/home/chatgpt-latex-formula-copy-export.png",
  "assets/ai-markdone/images/home/chatgpt-bookmark-manager-folders-search.png",
  "assets/ai-markdone/images/home/export-chatgpt-markdown-pdf-png.png",
  "assets/ai-markdone/images/home/ai-markdone-chatgpt-extension-settings.png",
  "static/llms.txt",
  "static/robots.txt",
];

const builtFiles = [
  "docs/ai-markdone/index.html",
  "docs/ai-markdone/en/index.html",
  "docs/ai-markdone/features/index.html",
  "docs/ai-markdone/en/features/index.html",
  "docs/ai-markdone/manual/index.html",
  "docs/ai-markdone/en/manual/index.html",
  "docs/ai-markdone/manual/architecture/index.html",
  "docs/ai-markdone/en/manual/architecture/index.html",
  "docs/ai-markdone/faq/index.html",
  "docs/ai-markdone/en/faq/index.html",
  "docs/ai-markdone/privacy/index.html",
  "docs/ai-markdone/en/privacy/index.html",
  "docs/ai-markdone/contact/index.html",
  "docs/ai-markdone/en/contact/index.html",
  "docs/ai-markdone/manual/reader/index.html",
  "docs/ai-markdone/manual/directory/index.html",
  "docs/ai-markdone/manual/partial-copy/index.html",
  "docs/ai-markdone/manual/sticky/index.html",
  "docs/ai-markdone/manual/partial-copy-sticky/index.html",
  "docs/ai-markdone/manual/message-navigation/index.html",
  "docs/ai-markdone/manual/copy-markdown/index.html",
  "docs/ai-markdone/manual/formulas/index.html",
  "docs/ai-markdone/manual/annotations/index.html",
  "docs/ai-markdone/manual/bookmarks/index.html",
  "docs/ai-markdone/manual/export/index.html",
  "docs/ai-markdone/manual/google-drive-backup/index.html",
  "docs/ai-markdone/manual/settings/index.html",
  "docs/ai-markdone/manual/privacy-storage/index.html",
  "docs/ai-markdone/manual/troubleshooting/index.html",
  "docs/ai-markdone/en/manual/reader/index.html",
  "docs/ai-markdone/en/manual/directory/index.html",
  "docs/ai-markdone/en/manual/partial-copy/index.html",
  "docs/ai-markdone/en/manual/sticky/index.html",
  "docs/ai-markdone/en/manual/partial-copy-sticky/index.html",
  "docs/ai-markdone/en/manual/message-navigation/index.html",
  "docs/ai-markdone/en/manual/copy-markdown/index.html",
  "docs/ai-markdone/en/manual/formulas/index.html",
  "docs/ai-markdone/en/manual/annotations/index.html",
  "docs/ai-markdone/en/manual/bookmarks/index.html",
  "docs/ai-markdone/en/manual/export/index.html",
  "docs/ai-markdone/en/manual/google-drive-backup/index.html",
  "docs/ai-markdone/en/manual/settings/index.html",
  "docs/ai-markdone/en/manual/privacy-storage/index.html",
  "docs/ai-markdone/en/manual/troubleshooting/index.html",
];

function read(relativePath) {
  return fs.readFileSync(path.join(root, relativePath), "utf8");
}

function exists(relativePath) {
  return fs.existsSync(path.join(root, relativePath));
}

function assert(condition, message) {
  if (!condition) throw new Error(message);
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
  assert(exists(file), `Missing source file: ${file}`);
}
assert(!exists("content/ai-markdone/en/manual/partial-copy-sticky 2.md"), "Duplicate partial-copy-sticky 2 source must not exist");
assert(!exists("docs/ai-markdone/en/manual/partial-copy-sticky-2/index.html"), "Duplicate partial-copy-sticky-2 output must not exist");

const unsupportedPlatformPattern = /\b(?:Gemini|Claude|DeepSeek|DeepsGe|Safari)\b/;
for (const file of requiredFiles.filter((file) => /^(content|layouts\/partials\/ai-markdone|static\/llms\.txt)/.test(file))) {
  assert(!unsupportedPlatformPattern.test(read(file)), `${file} must not mention unsupported AI platforms or Safari as a public product path`);
}

const menu = read("config/_default/menus.toml");
assert(menu.includes('name = "AI-MarkDone"'), "Main menu is missing AI-MarkDone");
assert(menu.includes('url = "/ai-markdone/en/"'), "AI-MarkDone menu must link to the English product site by default");

const baseLayout = read("layouts/_default/baseof.html");
assert(baseLayout.includes('eq .Type "ai-markdone"'), "Base layout must branch for AI-MarkDone");
assert(baseLayout.includes("ai-markdone/site-header.html"), "Base layout must render product header");
assert(baseLayout.includes("ai-markdone/site-footer.html"), "Base layout must render product footer");

const header = read("layouts/partials/ai-markdone/site-header.html");
assert(header.includes("/ai-markdone/manual/") && header.includes("/ai-markdone/en/manual/"), "Header must link to Manual");
assert(!header.includes("/ai-markdone/features/"), "Header must not use Features as a primary nav item");
assert(header.includes("首页") && header.includes("Home") && header.includes("手册") && header.includes("Manual") && header.includes("联系") && header.includes("Contact"), "Header must render Home, Manual, FAQ, and Contact");
assert(header.indexOf("amd-github-icon-link") < header.indexOf("amd-language-toggle"), "Language switch must remain after browser and GitHub actions");

const footer = read("layouts/partials/ai-markdone/site-footer.html");
assert(footer.includes("返回博客") && footer.includes("Back to blog"), "Footer must include a return-to-blog link");
assert(footer.includes("Chrome Web Store") && footer.includes("Firefox Add-ons") && footer.includes("GitHub"), "Footer must include install/source links");

const manualNav = read("data/ai_markdone/manual_nav.toml");
for (const needle of ["插件层级", "阅读器", "工具栏", "数据与设置", "问题排查", "Plugin architecture", "Reader", "Toolbar", "Data and settings", "Troubleshooting"]) {
  assert(manualNav.includes(needle), `Manual nav is missing ${needle}`);
}
for (const needle of ["architecture", "partial-copy", "sticky", "google-drive-backup", "privacy-storage", "troubleshooting"]) {
  assert(manualNav.includes(needle), `Manual nav is missing ${needle}`);
}
assert(manualNav.indexOf('id = "architecture"') < manualNav.indexOf('id = "reader"'), "Plugin architecture must appear above Reader in the manual nav");

const manualShell = read("layouts/partials/ai-markdone/manual-shell.html");
assert(manualShell.includes("site.Data.ai_markdone.manual_nav.groups"), "Manual shell must use the manual nav SSOT");
assert(manualShell.includes("amd-docs-layout") && manualShell.includes("amd-docs-sidebar") && manualShell.includes("amd-docs-content"), "Manual shell must render docs layout, sidebar, and Markdown content");

const readerZh = read("content/ai-markdone/manual/reader.md");
const readerEn = read("content/ai-markdone/en/manual/reader.md");
assert(!readerZh.includes("## 架构解析") && !readerZh.includes("amd-reader-architecture"), "Chinese Reader manual must no longer embed the architecture map");
assert(!readerEn.includes("## Architecture map") && !readerEn.includes("amd-reader-architecture"), "English Reader manual must no longer embed the architecture map");

const architectureZh = read("content/ai-markdone/manual/architecture.md");
const architectureEn = read("content/ai-markdone/en/manual/architecture.md");
assert(architectureZh.includes("amd-plugin-architecture") && architectureZh.includes("插件层级"), "Chinese plugin architecture manual must render the plugin architecture map");
assert(architectureEn.includes("amd-plugin-architecture") && architectureEn.includes("Plugin architecture"), "English plugin architecture manual must render the plugin architecture map");
for (const needle of ["内容发现", "Reader", "复制", "书签", "导出", "公式", "设置与备份", "消息导航"]) {
  assert(architectureZh.includes(needle), `Chinese plugin architecture manual is missing ${needle}`);
}
for (const needle of ["Discovery", "Reader", "Copy", "Bookmarks", "Export", "Formulas", "Settings and backup", "Message navigation"]) {
  assert(architectureEn.includes(needle), `English plugin architecture manual is missing ${needle}`);
}

const architecturePartial = read("layouts/partials/ai-markdone/plugin-architecture.html");
assert(architecturePartial.includes("data-amd-architecture") && architecturePartial.includes("data-amd-architecture-graph"), "Plugin architecture partial must render the interactive graph shell");
for (const needle of ["data-amd-architecture-home", "data-amd-architecture-zoom-out", "data-amd-architecture-zoom", "data-amd-architecture-zoom-in", "data-amd-architecture-reset", "data-amd-architecture-fullscreen"]) {
  assert(architecturePartial.includes(needle), `Plugin architecture partial is missing graph control ${needle}`);
}
assert(!architecturePartial.includes("data-amd-architecture-status"), "Plugin architecture controls should not render a status pill");

const architectureScript = read("assets/ai-markdone/architecture/plugin-architecture.js");
for (const needle of ["用户动作层", "产品界面层", "内容与能力服务层", "站点适配与对话发现层", "浏览器与运行时层", "内容发现", "Reader", "复制", "书签", "导出", "公式", "设置与备份", "消息导航", "ChatGPT 页面", "页面适配器", "ChatGPTConversationEngine", "对话快照", "Reader 内容源", "ReaderItem", "MessageToolbarOrchestrator", "runtime protocol", "browser storage", "Google Drive provider", "GRAPHS", "setupArchitectureCamera", "clampCamera", "renderFrozenLanesMarkup", "renderGraphContentSvg", "baseWidth", "amd-architecture-lane-label", "setActiveLayer", "const graph = GRAPHS[graphId] || GRAPHS.overview", "Back to overview", "你是否对这些感兴趣？点击直达", "requestFullscreen", "exitFullscreen"]) {
  assert(architectureScript.includes(needle), `Plugin architecture script is missing ${needle}`);
}
assert(!architectureScript.includes("amd-architecture-lanes-svg"), "Frozen architecture lanes must render as HTML text, not as a zoomed SVG image");
for (const stale of ["Reader 总览链路", "Reader architecture, in layers", "内容发现层', '从 ChatGPT 页面找到当前对话", "内容整理层", "Reader 交互层", "数据与出口层"]) {
  assert(!architectureScript.includes(stale), `Plugin architecture script still contains stale or Reader-only wording: ${stale}`);
}

function assertPluginArchitectureGeometry(script) {
  const commonLanes = {};
  for (const match of script.matchAll(/\n    (\w+): \{\n      lane: '([^']+)'/g)) {
    commonLanes[match[1]] = match[2];
  }
  const graphsMatch = script.match(/const GRAPHS = \{([\s\S]*?)\n  \};\n\n  const LANE_LAYOUT/);
  assert(graphsMatch, "Plugin architecture script must expose GRAPHS before LANE_LAYOUT");
  const graphsText = graphsMatch[1];
  const laneHeight = Number(script.match(/laneHeight: (\d+)/)?.[1]);
  const labelWidth = Number(script.match(/labelWidth: (\d+)/)?.[1]);
  const safeGap = Number(script.match(/safeGap: (\d+)/)?.[1]);
  const nodeWidth = Number(script.match(/nodeWidth: (\d+)/)?.[1]);
  const nodeHeight = Number(script.match(/nodeHeight: (\d+)/)?.[1]);
  const viewWidth = Number(script.match(/viewWidth: (\d+)/)?.[1]);
  assert(laneHeight && labelWidth && safeGap && nodeWidth && nodeHeight && viewWidth, "Plugin architecture layout constants are incomplete");
  assert(labelWidth > safeGap, "Plugin architecture frozen lane must be wider than the safety gap");

  for (const graphMatch of graphsText.matchAll(/\n    (\w+): \{([\s\S]*?)(?=\n    \w+: \{|\n  \})/g)) {
    const graphId = graphMatch[1];
    const body = graphMatch[2];
    const lanes = (body.match(/lanes: \[([^\]]+)\]/)?.[1] || "").match(/'([^']+)'/g)?.map((item) => item.slice(1, -1)) || [];
    const aliases = {};
    for (const aliasMatch of body.matchAll(/\n        (\w+): \{\n          lane: '([^']+)'/g)) {
      aliases[aliasMatch[1]] = aliasMatch[2];
    }
    const nodeBlock = body.match(/nodes: \{([\s\S]*?)\n      \}/)?.[1] || "";
    const nodes = [];
    for (const nodeMatch of nodeBlock.matchAll(/\n        (\w+): \[(\d+), (\d+)\]/g)) {
      const id = nodeMatch[1];
      const x = Number(nodeMatch[2]);
      const y = Number(nodeMatch[3]);
      const lane = aliases[id] || commonLanes[id];
      const laneIndex = lanes.indexOf(lane);
      assert(laneIndex >= 0, `Plugin architecture ${graphId}.${id} uses lane ${lane}, not in ${lanes.join(", ")}`);
      const top = laneIndex * laneHeight;
      const bottom = top + laneHeight;
      assert(y >= top && y + nodeHeight <= bottom, `Plugin architecture ${graphId}.${id} overflows ${lane}: ${y}-${y + nodeHeight}, expected ${top}-${bottom}`);
      assert(x >= labelWidth + safeGap, `Plugin architecture ${graphId}.${id} must stay outside the frozen lane safety area`);
      assert(x + nodeWidth <= viewWidth, `Plugin architecture ${graphId}.${id} overflows the right content boundary`);
      nodes.push({ id, x, y });
    }
    for (let i = 0; i < nodes.length; i += 1) {
      for (let j = i + 1; j < nodes.length; j += 1) {
        const a = nodes[i];
        const b = nodes[j];
        const overlapsX = Math.max(a.x, b.x) < Math.min(a.x + nodeWidth, b.x + nodeWidth) - 4;
        const overlapsY = Math.max(a.y, b.y) < Math.min(a.y + nodeHeight, b.y + nodeHeight) - 4;
        assert(!(overlapsX && overlapsY), `Plugin architecture ${graphId} has overlapping nodes: ${a.id} / ${b.id}`);
      }
    }
  }
}
assertPluginArchitectureGeometry(architectureScript);

const css = read("assets/css/custom.css");
for (const needle of [".amd-docs-layout", ".amd-docs-sidebar", ".amd-docs-article", ".amd-docs-content", ".amd-docs-placeholder", ".amd-architecture", ".amd-architecture-graph", ".amd-architecture-lane-pane", ".amd-architecture-canvas-pane", ".amd-architecture-lane-track", ".amd-architecture-lane-label", ".amd-architecture-detail", ".amd-architecture-shell:fullscreen", ".amd-manual-overview-grid", ".amd-manual-goal-grid", ".amd-manual-matrix", ".amd-manual-primary-cta", ".amd-manual-secondary-cta", ".amd-feature-index-list", ".amd-feature-index-section", ".amd-features-moved-section", ".amd-sponsor-thanks-table"]) {
  assert(css.includes(needle), `CSS missing ${needle}`);
}
assert(!/\.amd-architecture-controls\s*\{[^}]*background:/s.test(css), "Architecture controls container must not render a capsule background");
for (const stale of [".amd-hero-grid", ".amd-problem-section", ".amd-showcase-section", ".amd-handbook-section", ".amd-product-visual", ".amd-workflow-grid", ".amd-mode-card", ".amd-workbench-preview", ".amd-preview-directory", ".amd-feature-anchor-strip"]) {
  assert(!css.includes(stale), `CSS still contains retired selector ${stale}`);
}
assert(css.includes("var(--color-brand-rose)") && css.includes(".amd-site-header") && css.includes(".amd-site-footer"), "CSS must keep shared design tokens and product shell styles");

const sponsors = read("data/ai_markdone/sponsors.toml");
for (const needle of ["感谢赞助", "Thanks to Sponsors", "每一份支持，都会变成 AI-MarkDone 继续更新的动力。", "@匿名（Danke!）", "淡定的喵（真的很棒，效率大大提高，世界因为有您这样的人而更美好，祝顺利）"]) {
  assert(sponsors.includes(needle), `Sponsor data is missing ${needle}`);
}

const homePartial = read("layouts/partials/ai-markdone/home.html");
assert(homePartial.includes("amd-feature-row") && homePartial.includes("amd-feature-placeholder"), "Homepage source must keep the detailed feature sections");
assert(homePartial.includes("amd-feature-index-section") && homePartial.includes("amd-feature-index-list"), "Homepage source must render the compact feature guide list near the bottom");
assert(homePartial.includes("site.Data.ai_markdone.sponsors") && homePartial.includes("amd-sponsor-thanks-section") && homePartial.includes("amd-sponsor-thanks-table"), "Homepage source must render the sponsor thanks section from data");
assert(!homePartial.includes("Open this in the feature reference") && !homePartial.includes("在功能表里查看这一项"), "Homepage source must not point feature rows to old Features page");
assert(homePartial.includes("消息切换") && homePartial.includes("Message switching"), "Homepage source must include current message switching copy");
assert(homePartial.includes("Sticky 栏") && homePartial.includes("Sticky panel"), "Homepage source must include Reader Sticky panel copy");
assert(!homePartial.includes("目录、Reader") && !homePartial.includes("Directory, Reader"), "Homepage source must not promote the retired directory surface");
assert(homePartial.includes("/ai-markdone/manual/reader/") && homePartial.includes("/ai-markdone/manual/settings/"), "Homepage guide must link to Manual entries");
assert(!homePartial.includes("Google Drive 云备份") && !homePartial.includes("Google Drive backup"), "Homepage must not present Google Drive backup as a feature section");
assert(homePartial.includes("AI-MarkDone 把你的 ChatGPT 武装到牙齿：阅读模式、局部 Markdown 复制、公式复制/导出、书签保存、批量导出和灵动注释，这些功能让ChatGPT从未如此丝滑。"), "Chinese homepage source must keep the exact hero sentence");
assert(homePartial.includes("AI-MarkDone 适合所有 ChatGPT 重度使用者，尤其是理工科科研工作者。把原本零散的复制、截图、导出和批注动作，收进一个更高效的 ChatGPT 工作流。"), "Chinese homepage source must keep the requested feature-guide body");

const featuresPartial = read("layouts/partials/ai-markdone/features.html");
assert(featuresPartial.includes("功能索引") && featuresPartial.includes("Feature reference"), "Features partial must render a positive feature reference page");
assert(featuresPartial.includes("Open manual") && featuresPartial.includes("打开手册"), "Features reference page must direct users to Manual");

const seoPartial = read("layouts/partials/ai-markdone/seo.html");
assert(seoPartial.includes("SoftwareApplication") && seoPartial.includes("FAQPage"), "SEO partial must keep SoftwareApplication and FAQPage schema");
assert(seoPartial.includes("hreflang") && seoPartial.includes('hreflang="x-default"'), "SEO partial must keep hreflang and x-default");

const llms = read("static/llms.txt");
assert(llms.includes("compact feature guide table"), "llms.txt must describe the compact homepage feature guide");
assert(llms.includes("manual overview") && llms.includes("need-to-feature matrix"), "llms.txt must describe the Manual overview matrix");
assert(llms.includes("feature reference page"), "llms.txt must describe Features as a feature reference page");
assert(!llms.includes("one-page manual"), "llms.txt must not describe Manual as a one-page manual");

for (const file of builtFiles) {
  assert(exists(file), `Missing built output: ${file}`);
  assert(!unsupportedPlatformPattern.test(read(file)), `${file} must not render unsupported AI platforms or Safari as a public product path`);
}

function localAssetPath(rawUrl) {
  if (!rawUrl || rawUrl.startsWith("#") || rawUrl.startsWith("data:") || rawUrl.startsWith("mailto:") || rawUrl.startsWith("tel:")) return null;
  let pathname;
  try {
    const parsed = new URL(rawUrl, "https://zhaoliangbin42.github.io");
    if (parsed.origin !== "https://zhaoliangbin42.github.io") return null;
    pathname = parsed.pathname;
  } catch {
    pathname = rawUrl.split("#")[0].split("?")[0];
  }
  const decoded = decodeURIComponent(pathname).replace(/^\/+/, "");
  if (!decoded) return null;
  if (decoded.endsWith("/")) return path.join(decoded, "index.html");
  if (!path.extname(decoded)) return path.join(decoded, "index.html");
  return decoded;
}

function assertLinkedAssetsExist(html, htmlFile) {
  const attrs = html.matchAll(/\b(?:src|href)=["']?([^"'\s>]+)/g);
  for (const match of attrs) {
    const assetPath = localAssetPath(match[1]);
    if (!assetPath) continue;
    if (assetPath === "livereload.js") continue;
    if (assetPath.endsWith("index.html")) continue;
    assert(exists(path.join("docs", assetPath)), `Missing linked asset from ${htmlFile}: /${assetPath}`);
  }
}

for (const htmlFile of builtFiles) {
  const html = read(htmlFile);
  assertLinkedAssetsExist(html, htmlFile);
  assert(html.includes("amd-site-header") && html.includes("amd-site-footer"), `${htmlFile} must render product shell`);
  assert(html.includes("amd-language-toggle"), `${htmlFile} must keep the header language switch`);
  assert(!html.includes("search-modal"), `${htmlFile} must not render blog search`);
}

const zhHome = read("docs/ai-markdone/index.html");
const enHome = read("docs/ai-markdone/en/index.html");
assertOrdered(zhHome, ["amd-home-hub", "amd-core-section", "amd-trust-hub-section", "amd-feature-index-section", "amd-reviews-section", "amd-sponsor-thanks-section"], "Chinese homepage");
assertOrdered(enHome, ["amd-home-hub", "amd-core-section", "amd-trust-hub-section", "amd-feature-index-section", "amd-reviews-section", "amd-sponsor-thanks-section"], "English homepage");
assert(zhHome.includes("amd-feature-index-list") && enHome.includes("amd-feature-index-list"), "Homepages must render compact feature guide lists");
assert(zhHome.includes("感谢赞助") && zhHome.includes("@匿名（Danke!）") && zhHome.includes("淡定的喵（真的很棒，效率大大提高，世界因为有您这样的人而更美好，祝顺利）"), "Chinese homepage must render real sponsor thanks");
assert(enHome.includes("Thanks to Sponsors") && enHome.includes("@匿名（Danke!）"), "English homepage must render real sponsor thanks");
assert(!zhHome.includes("/ai-markdone/manual/google-drive-backup/") && !enHome.includes("/ai-markdone/en/manual/google-drive-backup/"), "Home guide tables must not promote Google Drive backup");
assert(zhHome.includes("amd-feature-row") && enHome.includes("amd-feature-row"), "Homepages must keep the detailed feature sections");
for (const imageName of ["ai-markdone-chatgpt-reader-toolbar.gif", "chatgpt-reader-heading-outline.png", "copy-chatgpt-selection-to-markdown.gif", "chatgpt-reader-sticky-excerpts-pin-important-content.png", "chatgpt-reader-dynamic-annotation-prompt.gif", "chatgpt-reader-message-switching.png", "chatgpt-latex-formula-copy-export.png", "chatgpt-bookmark-manager-folders-search.png", "export-chatgpt-markdown-pdf-png.png", "ai-markdone-chatgpt-extension-settings.png"]) {
  assert(zhHome.includes(imageName) && enHome.includes(imageName), `Homepages must render ${imageName}`);
}
for (const altText of ["AI-MarkDone 在 ChatGPT 原页面提供 Reader 入口和回答工具栏", "AI-MarkDone Reader 中展示 ChatGPT 长回答的对话内目录条", "AI-MarkDone Reader 中选中文本并复制为 Markdown", "AI-MarkDone Reader Sticky 栏将 ChatGPT 重要公式和片段钉在左侧", "AI-MarkDone Reader 中对 ChatGPT 选中文本添加灵动注释", "AI-MarkDone 书签面板展示 ChatGPT 回答文件夹搜索和预览", "AI-MarkDone 将 ChatGPT 消息导出为 Markdown PDF PNG 的 Save Messages 弹窗", "AI-MarkDone 设置页展示 ChatGPT 扩展工具栏 Reader 和公式动作选项"]) {
  assert(zhHome.includes(altText), `Chinese homepage image alt missing ${altText}`);
}
for (const altText of ["AI-MarkDone Reader entry and answer toolbar on the original ChatGPT page", "AI-MarkDone Reader showing the in-conversation outline for a long ChatGPT answer", "AI-MarkDone Reader copying a selected ChatGPT passage as Markdown", "AI-MarkDone Reader adding a Dynamic Annotation to selected ChatGPT text", "AI-MarkDone bookmark manager showing ChatGPT answer folders search and preview", "AI-MarkDone Save Messages dialog for exporting ChatGPT to Markdown PDF and PNG", "AI-MarkDone settings page showing ChatGPT extension toolbar Reader and formula action options"]) {
  assert(enHome.includes(altText), `English homepage image alt missing ${altText}`);
}
assert(zhHome.includes("Chrome Web Store") && zhHome.includes("Firefox Add-ons") && zhHome.includes("GitHub Star"), "Chinese homepage must render install and GitHub actions");
assert(enHome.includes("Chrome Web Store") && enHome.includes("Firefox Add-ons") && enHome.includes("GitHub Star"), "English homepage must render install and GitHub actions");
assert(zhHome.includes("application/ld+json") && enHome.includes("application/ld+json"), "Homepages must render JSON-LD");
assert(enHome.includes("hreflang=en") && zhHome.includes("hreflang=zh-CN"), "Homepages must render hreflang");

const zhManual = read("docs/ai-markdone/manual/index.html");
const enManual = read("docs/ai-markdone/en/manual/index.html");
for (const needle of ["amd-docs-layout", "amd-docs-sidebar", "amd-manual-goal-grid", "amd-manual-matrix", "amd-manual-primary-cta", "amd-manual-secondary-cta", "好读", "好记", "好问", "好存", "Copy as PNG / PNG 导出", "了解 Reader 阅读器", "了解所有配置项"]) {
  assert(zhManual.includes(needle), `Chinese manual is missing ${needle}`);
}
for (const needle of ["amd-docs-layout", "amd-docs-sidebar", "amd-manual-goal-grid", "amd-manual-matrix", "amd-manual-primary-cta", "amd-manual-secondary-cta", "Readable", "Easy to capture", "Easy to ask", "Easy to keep", "Copy as PNG / PNG export", "Explore Reader", "View all settings"]) {
  assert(enManual.includes(needle), `English manual is missing ${needle}`);
}
for (const removed of ["工作台设置", "边界与排查", "Workbench settings", "Boundaries and fixes"]) {
  assert(!zhManual.includes(removed) && !enManual.includes(removed), `Manual overview matrix must not include ${removed}`);
}
for (const removed of ["Markdown 结构保留", "Markdown structure preservation"]) {
  assert(!zhManual.includes(removed) && !enManual.includes(removed), `Manual overview matrix must not include duplicate detail ${removed}`);
}
assert(!zhManual.includes("amd-docs-next") && !enManual.includes("amd-docs-next"), "Manual overview pages must use a single Reader CTA instead of default next-step navigation");

const zhPartialCopy = read("docs/ai-markdone/manual/partial-copy/index.html");
const enPartialCopy = read("docs/ai-markdone/en/manual/partial-copy/index.html");
const zhSticky = read("docs/ai-markdone/manual/sticky/index.html");
const enSticky = read("docs/ai-markdone/en/manual/sticky/index.html");
assert(zhPartialCopy.includes("局部复制") && zhPartialCopy.includes("复制选区"), "Chinese partial-copy page must explain selection copy");
assert(enPartialCopy.includes("Partial copy") && enPartialCopy.includes("Copy the selection"), "English partial-copy page must explain selection copy");
assert(zhSticky.includes("Sticky 临时摘录") && zhSticky.includes("临时工作区"), "Chinese Sticky page must explain temporary excerpts");
assert(enSticky.includes("Sticky excerpts") && enSticky.includes("temporary"), "English Sticky page must explain temporary excerpts");

const zhReader = read("docs/ai-markdone/manual/reader/index.html");
const enReader = read("docs/ai-markdone/en/manual/reader/index.html");
assert(zhReader.includes("amd-docs-content") && zhReader.includes("amd-docs-placeholder"), "Chinese Reader manual must render Markdown content and screenshot placeholder");
assert(enReader.includes("amd-docs-content") && enReader.includes("amd-docs-placeholder"), "English Reader manual must render Markdown content and screenshot placeholder");
assert(zhReader.includes("aria-current=page") || zhReader.includes('aria-current="page"'), "Chinese Reader manual must highlight the active sidebar item");
assert(enReader.includes("aria-current=page") || enReader.includes('aria-current="page"'), "English Reader manual must highlight the active sidebar item");
assert(!zhReader.includes("amd-reader-architecture") && !zhReader.includes("架构解析"), "Chinese Reader output must not include the old Reader architecture map");
assert(!enReader.includes("amd-reader-architecture") && !enReader.includes("Architecture map"), "English Reader output must not include the old Reader architecture map");

const zhArchitecture = read("docs/ai-markdone/manual/architecture/index.html");
const enArchitecture = read("docs/ai-markdone/en/manual/architecture/index.html");
assert(zhArchitecture.includes("amd-architecture") && zhArchitecture.includes("plugin-architecture.js") && zhArchitecture.includes("插件层级"), "Chinese plugin architecture page must render the interactive map");
assert(enArchitecture.includes("amd-architecture") && enArchitecture.includes("plugin-architecture.js") && enArchitecture.includes("Plugin architecture"), "English plugin architecture page must render the interactive map");
for (const needle of ["内容发现", "Reader", "复制", "书签", "导出", "公式", "设置与备份", "消息导航"]) {
  assert(zhArchitecture.includes(needle), `Chinese plugin architecture output is missing ${needle}`);
}
for (const needle of ["Overview", "Discovery", "Reader", "Copy", "Bookmarks", "Export", "Formulas", "Settings and backup", "Message navigation"]) {
  assert(enArchitecture.includes(needle), `English plugin architecture output is missing ${needle}`);
}

const zhTrouble = read("docs/ai-markdone/manual/troubleshooting/index.html");
const enTrouble = read("docs/ai-markdone/en/manual/troubleshooting/index.html");
assert(zhTrouble.includes("工具栏不显示") && zhTrouble.includes("控制台错误") && zhTrouble.includes("GitHub Issue"), "Chinese troubleshooting page must include practical diagnosis steps");
assert(enTrouble.includes("Toolbar does not appear") && enTrouble.includes("console error") && enTrouble.includes("GitHub Issues"), "English troubleshooting page must include practical diagnosis steps");

const zhFeatures = read("docs/ai-markdone/features/index.html");
const enFeatures = read("docs/ai-markdone/en/features/index.html");
assert(zhFeatures.includes("功能索引") && zhFeatures.includes("/ai-markdone/manual/"), "Chinese features page must guide to Manual");
assert(enFeatures.includes("Feature reference") && enFeatures.includes("/ai-markdone/en/manual/"), "English features page must guide to Manual");
assert(zhFeatures.includes("noindex,follow") && enFeatures.includes("noindex,follow"), "Legacy Features pages must be noindex,follow");
assert(zhFeatures.includes('id=reader') || zhFeatures.includes('id="reader"'), "Chinese legacy features page must keep reader anchor");
assert(enFeatures.includes('id=reader') || enFeatures.includes('id="reader"'), "English legacy features page must keep reader anchor");
assert(!zhFeatures.includes("data-amd-scrollspy") && !enFeatures.includes("data-amd-scrollspy"), "Legacy Features pages must not keep old scrollspy");

const zhDirectory = read("docs/ai-markdone/manual/directory/index.html");
const enDirectory = read("docs/ai-markdone/en/manual/directory/index.html");
assert(zhDirectory.includes("noindex,follow") && enDirectory.includes("noindex,follow"), "Legacy directory pages must be noindex,follow");
assert(zhDirectory.includes("旧右侧目录栏已经退休") && enDirectory.includes("right-side directory rail is retired"), "Legacy directory pages must explain the retired surface");
assert(zhDirectory.includes("消息切换") && enDirectory.includes("message switching"), "Legacy directory pages must point to current message switching");

const zhPartialStickyLegacy = read("docs/ai-markdone/manual/partial-copy-sticky/index.html");
const enPartialStickyLegacy = read("docs/ai-markdone/en/manual/partial-copy-sticky/index.html");
assert(zhPartialStickyLegacy.includes("noindex,follow") && enPartialStickyLegacy.includes("noindex,follow"), "Legacy partial-copy-sticky pages must be noindex,follow");

const zhFaq = read("docs/ai-markdone/faq/index.html");
const enFaq = read("docs/ai-markdone/en/faq/index.html");
assert(zhFaq.includes("FAQPage") && enFaq.includes("FAQPage"), "FAQ pages must render FAQPage schema");
assert(zhFaq.includes("amd-faq-accordion") && enFaq.includes("amd-faq-accordion"), "FAQ pages must render the accordion layout");
assert(zhFaq.includes("/ai-markdone/manual/") && zhFaq.includes("/ai-markdone/privacy/"), "Chinese FAQ must link to manual and privacy");
assert(enFaq.includes("/ai-markdone/en/manual/") && enFaq.includes("/ai-markdone/en/privacy/"), "English FAQ must link to manual and privacy");

const zhContact = read("docs/ai-markdone/contact/index.html");
const enContact = read("docs/ai-markdone/en/contact/index.html");
assert(zhContact.includes("zhaoliangbin42@gmail.com") && enContact.includes("zhaoliangbin42@gmail.com"), "Contact pages must render the real email address");
assert(zhContact.includes("有了你的反馈，AI-MarkDone 会更好。") && enContact.includes("Your feedback makes AI-MarkDone better."), "Contact pages must open with feedback-driven copy");

const zhPrivacy = read("docs/ai-markdone/privacy/index.html");
const enPrivacy = read("docs/ai-markdone/en/privacy/index.html");
assert(zhPrivacy.includes("Google Drive") && enPrivacy.includes("Google Drive"), "Privacy pages must disclose Google Drive backup");
assert(zhPrivacy.includes("https://www.googleapis.com/auth/drive.file") && enPrivacy.includes("https://www.googleapis.com/auth/drive.file"), "Privacy pages must disclose the drive.file scope");
assert(!zhPrivacy.includes("最后更新") && !enPrivacy.includes("Last updated"), "Privacy pages must not show last updated copy");

const blogHome = read("docs/index.html");
assert(blogHome.includes("/ai-markdone/en/"), "Blog homepage must link into the English AI-MarkDone product site by default");
assert(!blogHome.includes("home-ai-markdone-card"), "Blog homepage must not render a duplicate AI-MarkDone product entry");

console.log("AI-MarkDone site verification passed.");
