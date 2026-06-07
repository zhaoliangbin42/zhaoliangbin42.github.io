---
title: "Copy Markdown"
description: "Copy a full ChatGPT answer or a selected Reader range as Markdown, with headings, lists, code blocks, tables, and formulas preserved where possible."
type: "ai-markdone"
amd_lang: "en"
page_kind: "manual_feature"
manual_feature: "copy-markdown"
translation_url: "/ai-markdone/manual/copy-markdown/"
screenshot_title: "Show this later: Copy Markdown button in the message toolbar and a selected range inside Reader."
screenshot_detail: "The screenshot should compare the original answer with the copied Markdown result."
prev_url: "/ai-markdone/en/manual/reader/"
prev_label: "Previous: Reader"
next_url: "/ai-markdone/en/manual/formulas/"
next_label: "Next: formulas"
---

## What this solves

ChatGPT's built-in copy action is fine for a quick paste. It gets messy when the answer has formulas, tables, code blocks, or citation marks.

AI-MarkDone aims for editable Markdown, not just the text you can see on the screen.

## When to use it

- You want a full answer in Obsidian, Typora, VS Code, or Git.
- You only need a few paragraphs from a long answer.
- The answer includes code, lists, tables, or formulas.
- You want less cleanup after pasting.

## Where to copy

- Full answer: click Copy Markdown in the message toolbar.
- Partial copy: open Reader first, then select the range you need.

## Steps

1. For a full answer, click Copy Markdown in the message toolbar.
2. For a partial copy, open Reader first.
3. Select the paragraph, list, table, code block, or formula range you need.
4. Use the Reader copy action.
5. Paste into your editor and check the result.

## How one answer becomes Markdown

Full-answer copy follows a short path:

1. Find the current ChatGPT answer.
2. Refresh the current conversation snapshot and read the assistant content for that turn.
3. Normalize the content into the Markdown used by Reader.
4. Remove ChatGPT citation marks, internal annotations, and extra whitespace.
5. Normalize formula delimiters, such as turning `\(...\)` into `$...$`.
6. Write the Markdown to the clipboard.

Partial copy inside Reader works differently. Reader checks whether your selection touches Markdown units such as inline formulas, code blocks, tables, images, headings, or list items. If a full unit is selected, AI-MarkDone copies the original Markdown for that unit. If you only select a small text slice, it copies the visible text slice.

That is why partial copy works better inside Reader. Reader has a cleaner view of Markdown units than the original ChatGPT page.

## What gets cleaned

Think of this step as moving from page structure back to Markdown source. The examples below show what can be mixed into the page on the left, and what should end up on the clipboard on the right.

| Cleanup logic | Before | After | Why |
|---|---|---|---|
| Remove page chrome | Answer text is mixed with `Copy`, read-aloud, edit, or hidden helper text → | Only the answer body remains | Toolbars, buttons, and screen-reader helper text are not part of the note. |
| Keep heading structure | A visual level-2 heading named “Model choice” → | `## Model choice` | The heading is copied as Markdown, not just large text. |
| Keep list nesting | A nested visual list: first level, second level → | `- First level`<br>`  - Second level` | Nested lists stay as lists after paste. |
| Clean code block chrome | A code block has a language bar, a copy button, and shared indentation → | <code>&#96;&#96;&#96;python</code><br><code>print("hi")</code><br><code>&#96;&#96;&#96;</code> | The copied text keeps the code and language label, not the UI around it. |
| Protect inline code | Inline code contains a backtick character → | A longer backtick fence is used around that code | Markdown will not close the inline code too early. |
| Restore rendered formulas | The page shows a rendered formula, not the LaTeX source → | `$E=mc^2$` or `$$...$$` | AI-MarkDone looks for the source in KaTeX, MathML, `data-math`, and related fields. |
| Normalize raw formula delimiters | `\(x+y\)` or `\[x+y\]` → | `$x+y$` or `$$`<br>`x+y`<br>`$$` | Formula syntax from different sources is normalized to common Markdown math. |
| Repair unrendered math | `$x_i$` is split by the page as italic text → | `$x_i$` | Some pages treat underscores like emphasis; the copy path tries to repair that. |
| Rebuild tables | An HTML table has headers, alignment, and cell line breaks → | <code>&#124; Name &#124; Value &#124;</code><br><code>&#124; --- &#124; ---: &#124;</code> | Tables become GFM Markdown tables with basic alignment kept. |
| Escape pipes inside cells | A cell contains <code>A &#124; B</code> → | <code>A \&#124; B</code> | The pipe should stay inside the cell instead of creating a new column. |
| Restore formulas in tables | A table cell only shows rendered `x₁ + y` → | <code>&#124; $x_1 + y$ &#124;</code> | Formulas inside tables remain editable after paste. |
| Keep links and images | A page link named “paper” and an image → | `[paper](https://...)`, `![alt](https://...)` | Links and images are kept as standard Markdown. |
| Tighten whitespace | Many blank lines and trailing spaces → | Only useful paragraph spacing remains | The pasted note needs less manual cleanup. |
| Reader partial copy | A selection touches an inline formula, code block, table, or image → | The full Markdown unit is copied | Partial copy is less likely to break formulas, code, or tables. |

## Supported Markdown

| Type | Status | Notes |
|---|---|---|
| Headings | Supported | `#` through `######` |
| Paragraphs | Supported | Answer text is kept as paragraphs |
| Bold and italic | Supported | `**bold**`, `*italic*` |
| Lists | Supported | Ordered, unordered, and nested lists |
| Inline code | Supported | Backticks are preserved |
| Code blocks | Supported | Fenced code blocks and language labels |
| Blockquotes | Supported | `>` |
| Thematic breaks | Supported | `---` |
| Tables | Supported | GFM tables |
| Formulas | Supported | Inline and block formulas |
| Images | Supported | Markdown image syntax |
| Links | Supported | Standard `[text](url)` Markdown links are preserved |

## Common questions

### Why should partial copy happen in Reader?

Reader has a cleaner view of Markdown units. The original ChatGPT page is more complex, and selections can be interrupted by buttons, citations, or hidden nodes.

### Is the result always perfect?

No. AI-MarkDone tries to preserve complete Markdown units, but the final result still depends on the current ChatGPT page and the target editor.
