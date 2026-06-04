# Liangbin's Notes - Style Reference

> A personal academic blog for wireless communications, code notes, and long-form technical writing. The site should feel precise, warm, readable, and quietly expressive.

**Theme:** light first, dark companion

## Overview

Liangbin's Notes keeps the current rose-to-plum identity, homepage structure, article-first rhythm, and Hugo static publishing model. Future work should refine spacing, typography, contrast, and component consistency without changing the recognizable visual character of the site.

The design system has three jobs:

- Preserve the existing brand: rose signal, deep plum gradients, rounded cards, soft shadows, and academic-personal tone.
- Make writing durable: Markdown, formulas, Mermaid, code, tables, images, Plotly figures, and comments should render predictably.
- Keep implementation disciplined: tokens live in CSS variables, reusable UI lives in Hugo layouts/partials, and page-specific one-off styles should be rare.

## Tokens - Colors

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Rose Signal | `#ad5389` | `--color-brand-rose` | Primary accent, active states, links, gradient start |
| Deep Plum | `#3c1053` | `--color-brand-plum` | Gradient end, strong headings, deep accent |
| Dark Rose | `#e091d0` | `--color-brand-rose-dark` | Dark-mode accent |
| Soft Mauve | `#c084b3` | `--color-brand-mauve-dark` | Dark-mode gradient end |
| Page Paper | `#ffffff` | `--color-page-bg` | Main light background |
| Soft Panel | `#f8f7fb` | `--color-surface-soft` | Subtle panels and article surfaces |
| Ink | `#111827` | `--color-text-primary` | Primary text |
| Slate | `#4b5563` | `--color-text-secondary` | Body copy and metadata |
| Muted | `#71717a` | `--color-text-muted` | Captions and secondary labels |
| Line | `#e5e7eb` | `--color-border` | Borders and dividers |
| Night | `#1c1c1e` | `--color-night-bg` | Main dark background |
| Night Panel | `#242328` | `--color-night-surface` | Dark cards and comment containers |
| Night Line | `#3e3e46` | `--color-night-border` | Dark borders |

Required gradients:

```css
--gradient-brand: linear-gradient(135deg, var(--color-brand-rose), var(--color-brand-plum));
--gradient-brand-soft: linear-gradient(135deg, rgba(173, 83, 137, 0.12), rgba(60, 16, 83, 0.12));
```

Rules:

- Use rose/plum as the signature, not as a full-page wash.
- Prefer neutral white/ink surfaces for reading-heavy pages.
- Dark mode should feel like a companion version of the same site, not a separate palette.
- New colors require a named token and a documented role.

## Tokens - Typography

### System Sans - UI and Body

Use the system stack for speed, Chinese rendering, and native platform feel:

```css
-apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans SC", "Noto Sans", Helvetica, Arial, sans-serif
```

### Mono - Code and Technical Labels

Use:

```css
"SFMono-Regular", "JetBrains Mono", Consolas, "Liberation Mono", Menlo, monospace
```

### Type Scale

| Role | Size | Line height | Weight |
| --- | --- | --- | --- |
| Hero name | `clamp(3rem, 6vw, 5rem)` | `1.02` | `800` |
| Page H1 | `clamp(2.25rem, 4vw, 3.5rem)` | `1.12` | `760` |
| Article H1 | `clamp(2rem, 3vw, 2.875rem)` | `1.16` | `760` |
| Article H2 | `1.75rem` | `1.28` | `700` |
| Article H3 | `1.375rem` | `1.34` | `680` |
| Body | `1rem` | `1.78` | `400` |
| UI label | `0.875rem` | `1.35` | `600` |
| Caption | `0.8125rem` | `1.45` | `500` |

Rules:

- Article pages prioritize line length and rhythm over visual drama.
- Do not scale font size directly with viewport width except via bounded `clamp()`.
- Keep letter spacing at `0` for body text and Chinese text.

## Tokens - Spacing & Shapes

| Name | Value | Token | Role |
| --- | --- | --- | --- |
| Base unit | `4px` | `--space-unit` | All spacing derives from this |
| Section Y | `72px` | `--space-section-y` | Desktop section spacing |
| Section Y Mobile | `48px` | `--space-section-y-mobile` | Mobile section spacing |
| Prose width | `760px` | `--container-prose` | Long-form article content |
| Site width | `1120px` | `--container-site` | Homepage and list pages |
| Wide width | `1280px` | `--container-wide` | Hero and media-heavy areas |
| Small radius | `8px` | `--radius-sm` | Buttons, tags, code |
| Card radius | `14px` | `--radius-card` | Cards and article panels |
| Large radius | `22px` | `--radius-lg` | Hero media and prominent surfaces |

Shadows:

```css
--shadow-soft: 0 10px 30px rgba(17, 24, 39, 0.08);
--shadow-brand: 0 16px 40px rgba(173, 83, 137, 0.16);
--shadow-interactive: 0 18px 46px rgba(173, 83, 137, 0.22);
```

Rules:

- Cards may lift slightly on hover, but movement should stay within `translateY(-4px)`.
- Use radius consistently: `8px` for controls, `14px` for cards, `22px` for feature media.
- Avoid nested cards unless the inner item is a real repeated child.

## Components

### Icons

Use one icon source of truth for UI symbols:

- UI icons: use Lucide Icons. Keep icons inline through a reusable partial, use the `24x24` viewBox, `currentColor`, rounded line caps/joins, and a consistent `2px` stroke unless a component explicitly documents another size.
- Brand and platform marks: use Simple Icons only when the mark is a real brand logo, such as Chrome or Firefox. Store these SVG files locally under the project assets; do not hotlink them from a CDN in production markup.
- AI-MarkDone brand icon: use the extension icon from the AI-MarkDone extension source, copied into the product-site assets. Do not use letter placeholders for the product mark.
- Icons should clarify navigation, feature meaning, platform choice, or trust boundaries. Avoid decorative icon rows that add noise without helping the reader.

### Header

Sticky, translucent, compact, and readable. The logo/title remains visible on mobile. Active nav items use soft brand background and rose text.

### Homepage Hero

Keep the existing two-column identity: text narrative on the left, image on the right, gradient name, quote-style description, and compact CTA buttons. Mobile collapses to centered text and a constrained image.

### Cards

Cards use white/night surfaces, subtle borders, `--radius-card`, and `--shadow-soft`. Research cards may sit on a brand-gradient section, but their internal text remains high contrast.

### Article Prose

The `.content` surface owns Markdown rendering. It must handle headings, lists, links, tables, blockquotes, images, code, formulas, footnotes, badges, and task lists without per-article CSS.

### Code Blocks

Code blocks use mono font, stable padding, horizontal scrolling, and no mobile overflow. Dark code blocks should stay distinct from the page background.

### Math

Inline and display math must inherit text color, fit mobile widths, and scroll horizontally when needed. Enable math per article with front matter when required.

### Mermaid

Mermaid remains authored as fenced code blocks. Rendered diagrams should sit in a bordered soft surface with enough padding and adapt to dark mode.

### Plotly Figure

Use the `plotly-interactive` shortcode for interactive math figures. Prefer preset-like, parameterized use. Avoid arbitrary complex JavaScript in content; if a chart needs more than a single expression, promote it to a reviewed shortcode or partial.

### Giscus

Comments remain enabled. The wrapper, header, border, and iframe container must follow the article surface style and switch theme with the site.

## Do's and Don'ts

Do:

- Keep the rose/plum gradient as the visual signature.
- Use semantic tokens in CSS and Tailwind theme mappings.
- Put reusable markup in root `layouts/` overrides or partials.
- Test homepage, article pages, code pages, Mermaid, math, Plotly, and comments together.
- Keep GitHub Pages deployment compatible with `publishDir = "docs"`.

Don't:

- Introduce Astro, Next.js, server APIs, or client routing for this upgrade.
- Add new raw hex colors in component CSS without adding tokens.
- Modify theme files when a root-level Hugo override can do the job.
- Let article content rely on one-off inline styles.
- Ship a build where mobile prose, code, math, or Mermaid overflows the viewport.

## Surfaces

| Surface | Background | Border | Shadow |
| --- | --- | --- | --- |
| Page | `--color-page-bg` | none | none |
| Soft section | `--color-surface-soft` | optional | none |
| Card | page/night panel | `--color-border` | `--shadow-soft` |
| Article prose | transparent | none | none |
| Comment container | page/night panel | token border | soft brand hover |
| Code block | syntax theme | subtle | none |

## Elevation

Use elevation to clarify interactivity, not to decorate every section.

- Static article content: no card shadow.
- Repeated cards: soft shadow.
- Hover cards and primary buttons: brand shadow.
- Header: shadow only when sticky/scrolled.

## Imagery

Images should feel personal and inspectable. Avoid dark overlays that hide content. Article images use rounded corners and modest shadows; badges stay inline and must not inherit large article-image shadows.

## Layout

- Homepage/site container: `--container-site`.
- Hero/wide visual container: `--container-wide`.
- Article prose: `--container-prose`, with TOC in a separate sidebar when space allows.
- Mobile article pages use a collapsible TOC above content.
- Keep the first viewport recognizable: nav, hero greeting/name/title, description, CTA, and hero image.

## Agent Prompt Guide

When modifying this site:

1. Preserve Hugo and `publishDir = "docs"` unless the user explicitly changes the architecture.
2. Read `DESIGN.md`, `assets/css/custom.css`, and the relevant `layouts/` override before editing.
3. Keep visual identity stable; improve detail, spacing, and consistency only.
4. Use root-level `layouts/` overrides instead of editing `themes/hugoplate/`.
5. Verify with `npm run build` and browser checks for desktop/mobile plus dark mode.

## Similar Brands

Use these as mood references, not as direct copies:

- Academic personal websites with strong prose readability.
- Linear-style restrained surfaces and crisp spacing.
- Vercel-style technical clarity.
- Scientific notebooks with clean code/math rendering.

## Quick Start

### CSS Custom Properties

Core tokens are defined in `assets/css/custom.css` under the design token section. New components must consume these variables first.

### Tailwind v4

Tailwind utilities may be used in Hugo templates, but the source of truth remains CSS variables. When adding Tailwind theme mappings, mirror token names:

```css
@theme {
  --color-brand-rose: var(--color-brand-rose);
  --color-brand-plum: var(--color-brand-plum);
  --radius-card: var(--radius-card);
  --shadow-soft: var(--shadow-soft);
}
```

Do not use arbitrary Tailwind color utilities for brand colors unless they map to tokens.
