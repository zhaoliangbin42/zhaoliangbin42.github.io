---
title: "Copy ChatGPT as Markdown"
description: "Copy a full ChatGPT answer, or copy a selected Reader range while preserving formulas, tables, and code blocks where possible."
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

ChatGPT's built-in copy action is not always enough. You may want Markdown, but get citation noise, flattened tables, or formulas that need cleanup.

AI-MarkDone's copy path is built for reuse. It tries to keep formulas, code blocks, tables, images, and selected ranges close to their source Markdown boundaries.

## When to use it

- You want a full answer in Obsidian, Typora, VS Code, or Git.
- You only need a few paragraphs from a long answer.
- The answer includes code, lists, tables, or formulas.
- You want less cleanup after pasting.

## Where to open it

Use Copy Markdown in the message toolbar for a full answer. Use Reader selection when you need a precise range.

## Steps

1. For a full answer, click Copy Markdown in the message toolbar.
2. For a partial copy, open Reader first.
3. Select the paragraph, list, table, code block, or formula range you need.
4. Use the Reader copy action.
5. Paste into your editor and check the result.
6. For code blocks, check that useful links were not removed as citation noise.
7. For tables and formulas, check that your target editor supports the format.

## Common questions

### Why should partial copy happen in Reader?

Reader has a cleaner view of Markdown units. The original ChatGPT DOM is more complex, so selections are easier to break.

### Is the result always perfect?

No. AI-MarkDone tries to preserve closed Markdown units, but the final result still depends on the current ChatGPT page and the target editor.

