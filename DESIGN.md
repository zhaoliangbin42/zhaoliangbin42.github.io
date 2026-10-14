# Liangbin Zhao — Signal design system

The accepted design is a light, spacious academic personal site: warm paper, dark ink, a copper signal field, and clear editorial typography. Research is primary; writing and independent software add personality. This file supersedes the earlier rose/plum and card-based direction following the approved October 2026 design exploration.

## Architecture and boundaries

- Keep Hugo static generation, Markdown page bundles, and `publishDir = "docs"`.
- Production templates live in root `layouts/`. Hugoplate, Tailwind, and external Hugo module dependencies have been removed.
- Personal pages use native Hugo Chinese/English translations (`index.md` / `index.en.md`). Chinese URLs stay unchanged; English lives under `/en/`.
- AI-MarkDone is an independent product site at `/ai-markdone/`, with its existing English URLs under `/ai-markdone/en/`. Its `amd_lang` and `translation_url` fields are the language source of truth. Keep its own header/footer and one return-to-blog entry.
- Mappamory / 好友迹 is a portfolio entry linking to `https://mappamory.com` in a new tab. Its Chinese positioning is exactly “你的好友地图通讯录”. No local Mappamory product site.
- Build real HTML for every route. JavaScript enhances motion, filters, copying and reading aids; it must not be required to read the content or follow navigation.

## Tokens and type

Shared tokens live in `assets/css/signal.css`. Product and reading surfaces consume them.

| Token | Value | Purpose |
| --- | --- | --- |
| `--paper`, `--page` | `#f9f8f5` | Warm page background |
| `--ink` | `#242728` | Primary text and actions |
| `--accent`, `--copper` | `#a77c58` | Quiet identity and active state |
| `--rule`, `--line` | `#deded8` | Dividers |
| `--soft` | `#eeeee8` | Reading/list section background |
| `--gutter` | `clamp(24px, 5.6vw, 90px)` | Shared page edge spacing |
| `--container-prose` | `720px` | Reading measure |

Manrope is locally hosted for Latin letters. Chinese uses the system sans stack, including PingFang SC and Microsoft YaHei. Keep Chinese body letter spacing at zero. Body copy should be dark enough to read comfortably; reserve muted text for secondary information.

- Main site identity: one English name, Liangbin Zhao; no duplicate top-left name on the home hero.
- Home hero name: 70–100px desktop, 64–88px mobile, strong weight.
- Index headings: large, sparse, with short plain descriptions.
- Article heading: 32–50px desktop, 29–36px mobile, balanced wrapping. Long titles must not end with an isolated one- or two-character line.
- Article body: 18px / 1.85 desktop and tablet; 17px / 1.85 on phones.
- Code: system monospace with readable syntax contrast.

## Layout and interaction

- Use flat editorial rows, generous spacing, and simple rules. Avoid nested cards, decorative badges and heavy shadows.
- Main navigation links to Research, Writing, Projects, and About pages, not homepage anchors.
- Language switching goes to the corresponding page and preserves the topic. Do not present an untranslated body as an English article.
- On scroll, the same home name moves into the header. The surname clears the first word before their baselines merge. The heading stays readable with JavaScript disabled.
- The copper field is an approved image, displaced by scroll position only. No time-driven animation runs while idle. Reduced-motion mode keeps the field static and snaps the name between its two positions.
- All interaction must work with keyboard focus, meaningful labels, and a visible focus outline. Mobile menus must fit the screen and close with Escape.

## Reading

- Prose width is 720px. Use a separate sticky table of contents on wide screens and native collapsible contents on mobile.
- Keep original article URLs and Giscus `pathname` mapping so existing Chinese discussion threads remain associated.
- Preserve authored formulas, code, images and references when translating. Fix research-content errors only in a separately requested editorial change.
- MathJax loads only for math pages; Goldmark passthrough preserves TeX. Both display and unusually long inline math scroll within the formula, never the page.
- Tables, code blocks and Mermaid diagrams are contained. Images preserve aspect ratio and link to actual page resources in both languages.
- Provide copy feedback for code, reading progress, archive search, topic filters, and a useful empty state.
- Print output hides navigation and reading controls.

## Assets and content

Approved hero and product compositions live under `static/images/signal/`; AI product assets remain under `assets/ai-markdone/`. Use the real logos. Product images are promotional compositions, not claimed to be raw application screenshots. Actual manual captures remain identified separately.

`data/signal/research.json` is the publication metadata source of truth. Home copy is in `data/signal/home.json`. Product manual navigation is in `data/ai_markdone/manual_nav.toml`. Do not reproduce these inventories in JavaScript.

Keep the About page concise, without advisor details or a Chinese personal name. Historical author backups and theme demo pages stay as drafts.

## Validation and publishing

For source-only work, build with `npm run build -- --environment preview`; output goes to `/tmp/liangbin-site-preview` and build statistics are disabled. Run product and whole-site verification against that output, then inspect desktop and phone layouts, navigation, languages, article formulas, code copying, menus and reduced motion.

The normal `npm run build` still creates `docs/` for an explicitly requested release. Never hand-edit it. Do not commit, push, or publish unless the user asks.
