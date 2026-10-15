---
title: "Highlights"
description: "Save highlights in three colors on the ChatGPT page or in Reader, with supported selection types, paragraph rules, and Library management."
type: "ai-markdone"
amd_lang: "en"
page_kind: "manual_feature"
manual_feature: "highlights"
translation_url: "/ai-markdone/manual/highlights/"
---

Use highlights to mark passages you want to revisit without writing a comment. Highlights work on the ChatGPT page and in Reader, and save in the current browser.

## Add a highlight

1. Select text within one completed ChatGPT answer. You can also open [Reader](/ai-markdone/en/manual/reader/) before selecting it.
2. Choose **Soft blue**, **Soft yellow**, or **Soft coral** from the buttons near the selection.
3. Check that the text shows the chosen color. Saved records are available on the original page, in Reader, and under **Highlights** in Library.

Choosing another color for the same selection updates the existing highlight. You decide what the colors mean—for example, one for conclusions and another for claims to check.

## Which selections are supported

A highlight stays within one answer. It can span paragraphs, lists, and tables, or keep only the locatable text in a selection that contains other content.

| Selection | Saved result |
| --- | --- |
| Ordinary text | Select one sentence or several consecutive paragraphs. |
| Table text | Select part of a cell, span cells or rows, or include the surrounding prose. The record keeps the selected text, not the full table layout. |
| Complete inline code or a formula | Highlight the complete content on its own or together with adjacent ordinary text. When marking it on its own, select the whole unit instead of part of it. |
| Prose with code blocks, images, chart cards, or controls between passages | These objects are skipped while the surrounding selected text is kept. Citation buttons and editable areas are also skipped. |
| Only a code block, image, chart card, control, or editable area | No highlight is created. |
| Text spanning two messages | Not supported. Highlight each answer separately. |

When a selection spans a table or passes through content that must be skipped, the highlight is saved as text passages. Formulas in that mixed selection are skipped too. To mark a formula, select the complete formula separately and choose a color.

For example, select from the explanation before a table to the conclusion after it, including an image between them. The highlight keeps the explanation, selected cell text, and conclusion, while skipping the image. Library lets you view and manage those passages as one highlight.

Highlights, Markdown copy, and annotations assess selections separately. Being able to highlight a mixed selection does not mean that copying it will produce a complete table or formula, or that an annotation can quote the same range.

## Change a color or delete a highlight

On the ChatGPT page, click the corresponding colored marker on the right side of the answer to change its color or delete it.

For centralized management, open the AI-MarkDone panel and choose **Library → Highlights**. Select a record to inspect the source text, recolor it, or delete it. You can also select several records and recolor them together. Highlights and annotations are grouped into folders by conversation, and the two views share each conversation's folder assignment.

## Do highlights save automatically?

Yes. Highlights always save in the current browser, independently of Reader's **Save new annotations for later** setting. After a page refresh or reopening Reader, the extension tries to find the saved text in the corresponding answer.

Text in a mixed selection, such as one spanning a table, can be found again after whitespace or formatting changes. If a passage or its surrounding text has changed, or repeated text makes the location ambiguous, the highlight may no longer appear in the answer. Its saved record remains available in Library. Library backups retain highlights and their location information.

A highlight does not save a complete snapshot of the answer. Create a [message bookmark](/ai-markdone/en/manual/bookmarks/) to retain its full text. [Back up Library](/ai-markdone/en/manual/privacy-storage/) before changing browsers or uninstalling the extension.

## Why the color buttons are missing

First check that the selection comes from one completed answer and includes text that can be marked, rather than only a code block, image, or control. When highlighting inline code or a formula on its own, select the whole unit. If a selection is very large or cannot be saved, try a few paragraphs or table rows at a time.

Then check the highlight option under **Settings → Buttons → After you select text**. On the original page, the option to show selection buttons on the ChatGPT page must also be enabled.

A temporary background or border while selecting text is only a selection indicator. A highlight record is created only after you choose a highlight color, and can then be found in Library.
