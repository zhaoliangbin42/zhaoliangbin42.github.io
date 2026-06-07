---
title: "ChatGPT Reader mode in AI-MarkDone"
description: "Read long ChatGPT answers in AI-MarkDone Reader with cleaner Markdown rendering, message switching, heading outline, Sticky excerpts, annotations, and follow-up send actions."
type: "ai-markdone"
amd_lang: "en"
page_kind: "manual_feature"
manual_feature: "reader"
translation_url: "/ai-markdone/manual/reader/"
screenshot_title: "Show this later: Reader panel, Markdown rendering, formulas, heading outline, pager, Sticky area, and send box."
screenshot_detail: "The screenshot should show how Reader turns a long ChatGPT answer into a readable Markdown page."
prev_url: "/ai-markdone/en/manual/architecture/"
prev_label: "Previous: Plugin architecture"
next_url: "/ai-markdone/en/manual/partial-copy/"
next_label: "Next: Partial copy"
---

## What Reader does

ChatGPT is good at answering. Long answers can feel cramped on the original page. Reader moves the current answer into a quieter panel, so you can stay with the text and read with fewer interruptions.

Reader keeps the common reading actions close at hand. You can annotate, copy, pin excerpts, and move between messages without breaking your reading rhythm.

1. A cleaner reading surface: the current answer is rendered as Markdown, so headings, paragraphs, code, tables, and formulas are easier to read continuously.
2. Faster message switching: use the bottom pager, or Left / Right when enabled, to move through nearby answers.
3. Quick jumps inside long answers: Reader detects headings and lets you jump inside the current message.
4. Work in place: select text and copy Markdown, send it to Sticky, or annotate it from the same reading panel.
5. Ask from Reader: use the lower-left send entry when a follow-up comes up while reading.

## How to open Reader

Click **Reader** in the AI-MarkDone toolbar at the bottom of a ChatGPT message.

Reader opens the current answer. You can keep reading this message, or move to nearby messages.

## Feature overview

1. Markdown reading layout
   Reader turns the answer into a more readable Markdown page. Long paragraphs, headings, lists, code blocks, tables, and formulas are easier to scan and follow. The longer the answer, the more this matters.

2. Message switching
   Use the bottom pager to move to the previous or next message. If arrow-key navigation is enabled, Left / Right can also move between messages. See [Message navigation](/ai-markdone/en/manual/message-navigation/).

3. Outline jumps
   When an answer contains several headings, Reader can show an outline. In long answers, click the heading you need and jump straight to that section. You can turn it on or off in Settings.

4. Partial copy
   Select a specific passage inside Reader when you only need part of an answer. AI-MarkDone tries to preserve Markdown hierarchy, code, tables, and formula boundaries. See [Partial copy](/ai-markdone/en/manual/partial-copy/).

5. Sticky excerpts
   When you reach the later part of an answer and need something from earlier, send the key formula, assumption, or conclusion to Sticky. It stays beside the text while you keep reading. See [Sticky excerpts](/ai-markdone/en/manual/sticky/).

6. Dynamic annotations
   Select an exact sentence or paragraph and write beside it. If a line is unclear, mark it, ask about it, or keep the note for later. See [Annotations](/ai-markdone/en/manual/annotations/).

7. Quick send
   Reader has a lower-left send entry. When a follow-up appears while reading, send it from Reader and keep the current passage in view.

8. Top-right tools
   The top-right area contains common Reader actions such as refresh, copy, settings, fullscreen, and close. The exact buttons depend on your settings.

## Screenshot notes

Add a Reader overview screenshot here later. Suggested callouts:

1. Reader body
2. Right-side outline
3. Left-side Sticky area
4. Bottom message switching
5. Lower-left quick send entry
6. Top-right tools
7. Copy / annotate / Stick actions after selecting text

## Common questions

### When is Reader worth opening?

Open it for math derivations, experiment plans, code explanations, or multi-section answers. Short answers are usually fine on the original page. Reader is for the answers you actually need to sit with.

### What should I ask from the Reader send entry?

Use it for questions tied to the exact place you are reading: "Why does this formula simplify this way?", "Give an example for this section", or "Rewrite this paragraph in a paper style." When the question appears while reading, sending it from Reader feels much less disruptive.

### What belongs in Sticky?

Put material that matters right now but has not become a permanent note yet: assumptions from earlier in the answer, key formulas, intermediate conclusions, or options you want to compare. After reading, decide whether to copy, annotate, ask, or bookmark it.

### Why does the outline sometimes not appear?

The outline depends on Markdown headings in the answer. If the answer has no headings, or if the Reader heading outline is disabled in Settings, it will not appear. For a long unstructured answer, ask ChatGPT to rewrite it with sections.

### How do I get cleaner copied Markdown?

Select complete paragraphs, list items, code blocks, or formula blocks when possible. Avoid cutting through the middle of a structure. The copied Markdown is usually cleaner when the source boundary is clean.

### Does Reader save anything automatically?

Reader is a workspace for the current answer. Sticky is temporary too. If you need the content later, save it as a [bookmark](/ai-markdone/en/manual/bookmarks/), copy it, or export it.
