---
title: "Copy a reply as Markdown"
description: "Copy a complete ChatGPT reply or its question and reply, preserving Markdown structure with configurable links, code, and formula output."
type: "ai-markdone"
amd_lang: "en"
page_kind: "manual_feature"
manual_feature: "copy-markdown"
translation_url: "/ai-markdone/manual/copy-markdown/"
prev_url: "/ai-markdone/en/manual/reader/"
prev_label: "Previous: Reader"
next_url: "/ai-markdone/en/manual/formulas/"
next_label: "Next: formulas"
---

**Copy Markdown** gives you answer text that can be edited further. Headings, lists, quotations, tables, code, and formulas with available source retain their corresponding syntax where possible. Content preferences and the destination editor also affect the result.

## Copy a complete reply

1. Find the ChatGPT reply and expand its AI-MarkDone toolbar.
2. Click **Copy Markdown**.
3. Paste into a Markdown editor and check headings, code, and formulas.

Reader also has **Copy Markdown** for the reply being read. To copy only a few sentences, select text directly on the ChatGPT page or in Reader and use selection copy. See [Partial copy](/ai-markdone/en/manual/partial-copy/). Opening Reader is not a prerequisite for copying a passage.

## Copy the question and reply together

Hover over **Copy Markdown** in the reply toolbar and choose **Copy question + reply** below it. The output uses short role headings to distinguish the question and answer.

**Copy as PNG**, above the same button, produces an image rather than Markdown text. Use [Export](/ai-markdone/en/manual/export/) to save several messages at once.

## Choose what to keep

Open **Settings → Reading & messages → Content to keep**:

| Setting | Default | Effect |
|---|---|---|
| Preserve reply links | Off | When on, keeps link destinations where available. When off, retains readable link text without the destination. |
| Include reply code blocks | On | Turning this off omits code blocks from whole-message copying, Reader, and message exports. |

These preferences do not rewrite saved bookmarks or explicitly selected passages. If copied text is missing links or code, check these settings before repeatedly copying again.

Choose formula syntax under **Settings → Copy & export → Formula format when copying Markdown**. It is separate from the format used when clicking one formula. Available formats are `$...$ / $$...$$`, LaTeX delimiters, raw LaTeX, `equation`, and `equation*`. See [Formula copy and export](/ai-markdone/en/manual/formulas/).

## What to expect after pasting

- Headings and lists retain their Markdown hierarchy.
- Complete code blocks aim to preserve language labels, indentation, and blank lines. Page controls such as Run or Copy are not included as code.
- Tables become Markdown tables. Complex merged cells or unsupported destination formatting may need adjustment.
- Formulas with available source retain LaTeX. An image of a formula is not automatically an editable formula.
- Supported charts and cards retain readable descriptions or available data. Use **Markdown offline bundle (ZIP)** to include supported static-image attachments.

## If content is incomplete

Wait until the reply has finished generating. If the webpage itself is incomplete, let the target reply load again. Copying cannot reconstruct unavailable content.

Inspect the source in a plain Markdown editor first, then check the destination application's support for formulas, tables, and code. Different editors do not necessarily render the same source identically. If the problem persists, provide a small failing example and reproduction steps: see [Troubleshooting](/ai-markdone/en/manual/troubleshooting/).
