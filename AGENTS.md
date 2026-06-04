# Repository Working Rules

This repository contains one Hugo site with multiple sections that are built and deployed together:

- Personal blog: the existing Hugo/Hugoplate site at the repository root.
- AI-MarkDone product pages: the product area published at `/ai-markdone/`.

## Design Sources

- Read the root `DESIGN.md` first for all visual and layout work.
- AI-MarkDone pages must use the same system-level design language as the blog: rose/plum identity, shared typography, shared spacing, and the root token system.
- AI-MarkDone is an independent product site under `/ai-markdone/`. It should use a product-specific header, footer, and navigation, with one clear “返回博客 / Back to blog” entry.
- Do not create section-specific `DESIGN.md` files unless the user explicitly asks for a separate design system.
- Keep the shared head, SEO, theme, scripts, and Hugo build model when practical. Do not render the blog header, blog footer, or blog search modal inside the AI-MarkDone product site unless the user explicitly asks to bring them back.

## AI-MarkDone Boundaries

AI-MarkDone source files should stay inside these areas:

- `content/ai-markdone/`
- `layouts/ai-markdone/`
- `layouts/partials/ai-markdone/`
- `assets/ai-markdone/`

Use section-specific classes for the product-page body content and product shell. Theme behavior and scripts should stay compatible with the shared Hugo shell.
The AI-MarkDone product shell lives in `layouts/partials/ai-markdone/` and should remain product-specific while still using the root design tokens.

## Build Output

The Hugo build publishes to `docs/`. Do not hand-edit generated `docs/` files unless the task explicitly asks for release output. Normal source changes belong in `content/`, `layouts/`, `assets/`, `config/`, `design/`, or `scripts/`.

## Verification

For AI-MarkDone product-site changes, run:

```bash
npm run build
node scripts/verify-ai-markdone-site.mjs
```

Then check `/ai-markdone/` and `/ai-markdone/en/` in the browser.
