---
title: "Workflows"
description: "Follow the steps for Reader, annotations, bookmarks, and formula tools, then export messages or back up Library."
type: "ai-markdone"
amd_lang: "en"
page_kind: "workflow"
translation_url: "/ai-markdone/workflow/"
---

## Read a long answer and take notes

Suppose you ask ChatGPT to explain the FFT. The answer contains the DFT formula, a complexity comparison table, and several sections.

1. Click Reader in the answer toolbar.
2. Choose a section in the heading outline on the right. The outline uses Markdown headings in the answer; an answer without headings does not gain a full chapter structure automatically.
3. Select a passage you need to compare later and choose Keep excerpt in the selection toolbar. The excerpts panel opens automatically beside the answer.
4. To add a passage to your notes, select it and copy Markdown. Select complete formulas and code units where possible.
5. Use the message controls at the bottom to read another answer, or close Reader to return to ChatGPT.

Excerpts are temporary and disappear when you refresh the page. To keep an entire answer, [save a bookmark](/ai-markdone/en/manual/bookmarks/). To take a passage elsewhere, use [partial copy](/ai-markdone/en/manual/partial-copy/).

{{< amd-guide-image file="reader.png" alt="The DFT formula and a table comparing DFT and FFT operation counts in Reader" caption="Read the DFT formula and compare DFT and FFT operation counts in Reader." >}}

## Add questions to source text and prepare a follow-up

Suppose three sentences in a rewritten draft need changes. Annotate each one, then send the quoted text and your feedback together.

1. Select the text on the ChatGPT page or in Reader.
2. Choose Annotate in the selection toolbar and write a specific request, such as: “This sentence is too general. Please add a practical example.”
3. Click Save annotation, or press `Ctrl+Enter` / `⌘+Enter`, to submit the annotation. Typing or moving focus elsewhere does not submit it automatically. Closing the editor discards unsaved input.
4. Repeat for other passages. In Reader, Copy annotations at the top collects notes for the current answer. Choose a prompt, copy the result, and paste it into the composer yourself. For the whole conversation, open Annotations beside the original ChatGPT composer, choose Current conversation, then Insert to input.
5. Review the composer before sending to ChatGPT. You can change reusable prompts and the format of each source-and-note pair in the annotation template settings.

To mark a passage without adding a note, use [highlights](/ai-markdone/en/manual/highlights/). Within one answer, selections can span paragraphs and table cells or include part of inline code. Complete formulas with reliable source are kept in mixed selections. Partial formulas, code blocks, images, and other unsupported content are skipped while surrounding text is kept. Whether a submitted annotation is kept permanently also depends on Save new annotations for later. With it off, the annotation remains only on the current page. See [Annotations](/ai-markdone/en/manual/annotations/).

## Save an answer and find it in Library

Suppose you want to keep the FFT and DFT comparison so you can find it without searching the conversation again.

1. Click the bookmark action in the answer toolbar. In the dialog, enter a title, choose a folder, and confirm to save the question and answer as they appear at that time.
2. Open Library to edit the title or move the bookmark to another folder.
3. Next time, search by title or content and select the entry to preview what was saved.
4. To continue the discussion, open the original conversation. It must still exist and be accessible to your current account.
5. Find highlights and saved annotations in their respective Library views.

Previewing saved content and returning to the original are separate actions. A saved answer can still be previewed, but deleting the original conversation, switching accounts, or changes to the page can prevent navigation. See [Bookmarks and Library](/ai-markdone/en/manual/bookmarks/).

{{< amd-guide-image file="library.png" alt="An FFT example bookmark and its actions in Library" caption="An FFT example bookmark and its actions in Library." >}}

## Write a formula, check it, and copy it into a document

Suppose you want to write a fraction or a multiline formula in ChatGPT and check its layout before sending.

1. Open Writing & prompts in Settings. Check that input enhancement and formula preview are enabled.
2. Write an inline formula inside `$…$`, or a display formula inside `$$…$$`. Type a backslash inside the formula to choose a LaTeX completion.
3. Use the up and down arrow keys to select a suggestion. Press `Tab` or `Enter` to insert it. For snippets with placeholders, use `Tab` / `Shift+Tab` to move between fields.
4. Place the text cursor inside the formula to see its preview. If the preview fails, check brackets, delimiters, and commands.
5. Once the preview is ready, use the available actions to copy or save PNG or SVG, or copy MathML. Check the LaTeX source before sending it to ChatGPT.

Composer formulas and answer formulas have separate settings. Click a formula in an answer to copy its source directly. For PNG, SVG, or MathML hover actions, enable the corresponding answer-formula buttons in Settings. See [Formulas in the composer](/ai-markdone/en/manual/composer/) and [Formulas in answers](/ai-markdone/en/manual/formulas/).

{{< amd-guide-image file="composer.png" alt="LaTeX command suggestions in the ChatGPT composer" caption="Choose a suggestion while typing a LaTeX command." >}}

## Take answers into Markdown, PDF, or images

Suppose you need several related answers in Obsidian or want to share them with a colleague.

1. For one answer, use the Markdown copy action in its toolbar. For a passage, use partial copy.
2. For several answers, open message export and select the messages. The export includes the available question and answer for each selected entry, in order.
3. Choose Markdown, PDF, or PNG. Markdown is for further editing; PDF and PNG are for reading and sharing.
4. If the selected answers contain charts or cards, PDF and PNG show options to keep images or use text placeholders. Offline Markdown ZIP packages supported charts and cards as static attachments.
5. Check the result. Save PDF through the browser print dialog. PNG produces one or more images; multiple images are packaged for download.

Pasted content depends on the destination app's Markdown and math support. Confirm the selected messages before exporting. For PDF and PNG details and image-loading requirements, see [Batch export](/ai-markdone/en/manual/export/).

{{< amd-guide-image file="export.png" alt="Message selection, export formats, and scope options" caption="Select messages, then confirm the export format and scope." >}}

## Back up Library before moving to another device

1. Export a local Library backup from the Data page in Settings. It contains bookmarks, folders, highlights, and saved annotations.
2. Install the extension on the other device and import the backup. After import, check the results, duplicates, and conflict messages.
3. For Google Drive, connect your own account in a browser with authorization support, then select Back up now manually.
4. To restore from Drive, choose a snapshot and review the preview first. Connecting an account does not upload automatically, and backup is not live sync.

Extension settings and Library are separate data sets. To transfer button, reading, and export preferences too, export settings separately. See [Local backup and restore](/ai-markdone/en/manual/privacy-storage/), [Google Drive backup](/ai-markdone/en/manual/google-drive-backup/), and the [settings reference](/ai-markdone/en/manual/settings/).
