---
title: "Copy and export formulas"
description: "Copy LaTeX by clicking a formula, set separate source formats for formulas and Markdown, or copy and save PNG, SVG, and MathML."
type: "ai-markdone"
amd_lang: "en"
page_kind: "manual_feature"
manual_feature: "formulas"
translation_url: "/ai-markdone/manual/formulas/"
prev_url: "/ai-markdone/en/manual/copy-markdown/"
prev_label: "Previous: Markdown copy"
next_url: "/ai-markdone/en/manual/annotations/"
next_label: "Next: annotations"
---

Click a formula in a reply to copy its source. To put a formula in a presentation or document, use the copy and save actions above it. Formulas you have not sent yet can also be previewed and exported: see [Writing formulas in the input box](/ai-markdone/en/manual/composer/).

## Copy one formula

1. Find a formula in a ChatGPT reply or Reader.
2. Click it. By default, inline formulas use `$...$` and display formulas use `$$...$$`.
3. Paste into an editor that supports LaTeX. If you only see source text, check whether formula rendering is enabled in that editor.

If clicking does nothing, open **Settings → Copy & export** and enable **Click a formula to copy its source**. A formula that is only an image, or whose rendered content has no available source, cannot be guaranteed to produce editable LaTeX.

## Choose the source format

**Settings → Copy & export** has two independent options:

- **Format when clicking one formula** affects direct clicks on formulas in replies.
- **Formula format when copying Markdown** affects Markdown copy actions, including whole replies, and Markdown file exports. It does not change the appearance of formulas on the page.

| Format | Inline formula | Display formula |
|---|---|---|
| Markdown | `$x+y$` | `$$...$$` |
| LaTeX delimiters | `\(x+y\)` | `\[...\]` |
| Raw LaTeX | `x+y` | Formula source without a wrapper |
| LaTeX equation | `\(x+y\)` | `\begin{equation}...\end{equation}` |
| LaTeX equation* | `\(x+y\)` | `\begin{equation*}...\end{equation*}` |

`equation` and `equation*` apply to display formulas; inline formulas still use `\(...\)`. Choose the format your destination application needs, then copy the same formula to check the result.

## Copy or save a formula image

1. Open **Settings → Buttons → Formula buttons** and enable the reply-formula actions you need.
2. Return to the reply and hover over the formula.
3. Choose **Copy as PNG**, **Copy as SVG**, **Copy as MathML**, **Save as PNG**, or **Save as SVG**.
4. After copying, paste into the destination application. After saving, open the downloaded file to check it.

These five reply-formula actions are off by default and can be enabled separately. Actions in the input formula preview have their own preferences and are not controlled by the reply-button switches.

| What you need | What to try |
|---|---|
| Editable formula source | Click to copy LaTeX |
| A formula to display in a document, chat, or slide | PNG |
| A vector image that can be enlarged | Save SVG |
| A formula editor that accepts MathML | Copy MathML |

**Text size in a single-formula image** is under **Settings → Copy & export**. It defaults to 36px and can be set from 16 to 72px. It changes single-formula PNG/SVG output, not reply text or full-message PNG exports.

## When pasting does not give the expected result

- SVG clipboard support varies by browser and destination application. If copying is unavailable, use **Save as SVG** and insert the file in the destination application.
- MathML may paste as a rich-text formula or as XML text. The result depends on the browser clipboard and the receiving editor; not every version of Word or PowerPoint converts it automatically.
- SVG and MathML need available formula source. PNG may still work when only the rendered appearance is available, but that does not recover editable LaTeX.
- A successful copy confirms that the clipboard was written. If you need an editable formula, check that it remains editable after pasting.

To save an entire reply as a document or image, use [message export](/ai-markdone/en/manual/export/).
