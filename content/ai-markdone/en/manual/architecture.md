---
title: "AI-MarkDone Plugin architecture"
description: "Use an interactive map to understand how AI-MarkDone discovers ChatGPT content and connects Reader, copy, bookmarks, export, formulas, settings, and backup."
type: "ai-markdone"
amd_lang: "en"
page_kind: "manual_feature"
manual_feature: "architecture"
translation_url: "/ai-markdone/manual/architecture/"
screenshot_title: "Interactive plugin architecture map"
screenshot_detail: "This section is interactive rather than screenshot-based. Drag, zoom, and open it fullscreen when needed."
prev_url: "/ai-markdone/en/manual/"
prev_label: "Back to manual overview"
next_url: "/ai-markdone/en/manual/reader/"
next_label: "Next: Reader"
---

## What this map is for

AI-MarkDone is not a row of unrelated buttons. It first discovers the current ChatGPT conversation, prepares the answer into shared structures, then lets Reader, copy, bookmarks, export, formulas, and settings reuse that same content path.

If you want to understand what happens behind a feature, start with this map.

## How to use it

1. Read from bottom to top: browser and extension runtime at the bottom, ChatGPT adaptation and content services in the middle, user actions at the top.
2. Use the quick links to open focused paths for discovery, Reader, copy, bookmarks, export, formulas, settings and backup, or message navigation.
3. Click a node to see what it does. Double-click a node with an arrow to open a focused sub-map.
4. The map supports dragging, zooming, reset, and fullscreen. For the full graph, fullscreen is usually the easiest way to read it.

## Interactive plugin architecture map

{{< amd-plugin-architecture lang="en" >}}

## Path index

### Discovery

The ChatGPT page provides the raw messages. AI-MarkDone uses the page adapter and conversation engine to build a conversation snapshot, then passes it to the Reader content source.

### Reader

Reader consumes the same ReaderItem data and provides Markdown reading, message switching, outline jumps, Sticky, Dynamic Annotation, and quick send.

### Copy

Copy can start from the message toolbar or a Reader selection. Both paths prepare cleaner Markdown before writing it to the clipboard.

### Bookmarks

Bookmarks save more than text. They keep preview, position, and management data so you can search, group, preview, and jump back later.

### Export

Export collects fresh message content and formats it as Markdown, PDF, PNG, or ZIP.

### Formulas

Formula actions start from rendered math nodes. You can copy LaTeX or export PNG, SVG, and MathML when enabled.

### Settings and backup

Settings control toolbar actions, Reader, formulas, export, message navigation, and backup. Bookmark backup is handled through background services and your authorized Google Drive file.

### Message navigation

Message navigation depends on page anchors. The Reader pager, lower-right message buttons, and arrow keys all use this path.

## Next

- For the reading surface, continue with [Reader](/ai-markdone/en/manual/reader/).
- For copy behavior, see [Partial copy](/ai-markdone/en/manual/partial-copy/) and [Copy Markdown](/ai-markdone/en/manual/copy-markdown/).
- For keeping useful answers, see [Bookmarks](/ai-markdone/en/manual/bookmarks/).
- For file output, see [Batch export](/ai-markdone/en/manual/export/).
- For tuning behavior, see [Settings reference](/ai-markdone/en/manual/settings/).
