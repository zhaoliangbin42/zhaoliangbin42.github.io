---
title: "Partial copy"
description: "Copy selected Markdown from the ChatGPT page or Reader, with specific handling for formulas, code, tables, and selections across messages."
type: "ai-markdone"
amd_lang: "en"
page_kind: "manual_feature"
aliases:
  - "/ai-markdone/en/manual/partial-copy-sticky/"
manual_feature: "partial-copy"
translation_url: "/ai-markdone/manual/partial-copy/"
---

Partial copy takes a passage from an answer. It works on the original ChatGPT page and in Reader, with slightly different shortcuts and handling for structured content.

## Copy on the ChatGPT page

1. Select text within one completed answer.
2. Click **Copy Markdown** near the selection.
3. Paste into a Markdown editor and check the headings, lists, or formulas.

The default shortcut is `⌘⇧C` on Mac, or `Ctrl+Shift+C` on Windows and Linux. In settings, you can change the original-page selection shortcut to `⌘C` / `Ctrl+C`, or disable it.

This action handles selections within one answer. A selection spanning two messages, including an answer that is still generating, or lacking an identifiable source cannot be reliably converted to Markdown.

## Copy in Reader

1. Open [Reader](/ai-markdone/en/manual/reader/) and select a passage in the body.
2. Use the selection copy button, or press `⌘C` / `Ctrl+C`.
3. Paste and check the result.

Reader's normal copy shortcut works independently of the original-page shortcut setting. To copy the whole answer, use Reader's top copy button instead of selecting the entire body.

## Select formulas, code, and tables

| Content | Selection and result |
| --- | --- |
| Ordinary text | Select a sentence, part of a paragraph, or several consecutive paragraphs within one answer. |
| A formula on the original page | Selecting part of a formula still copies the complete formula as LaTeX. Check that the result includes the formula you need. |
| Part of a code block on the original page | When the selection stays entirely inside one code block, copy returns the selected code text, retaining its spaces. It adds no Markdown code fences and does not reinterpret symbols in the code as math. |
| A complete code block or table in Reader | Select the whole block to retain its Markdown structure. |
| Part of code or a table in Reader | The result may be a slice of the selected text rather than a complete, parseable code block or table. For indentation-sensitive code, prefer the code block's own copy button. |

A selection that starts inside code, a formula, or a table and ends in other content may lose the complete structure. Extending the selection to include complete blocks usually produces a more usable result.

Highlights can keep text across tables while skipping code blocks, images, or controls. Markdown copy uses separate selection rules: a range that can be highlighted does not automatically copy as the same text passages or retain complete formatting.

## If the copy button is missing

In settings, check **Buttons → After you select text**. The original page also has a switch for showing selection buttons on the ChatGPT page; turning it off hides that group there. A border or background shown while selecting is only a selection indicator, not a saved highlight.

Copying writes to the clipboard. It does not create a bookmark or highlight. Use the [Excerpt tray](/ai-markdone/en/manual/sticky/) to compare passages temporarily, or [Highlights](/ai-markdone/en/manual/highlights/) to find a passage later.
