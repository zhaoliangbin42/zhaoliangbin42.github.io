---
title: "Troubleshooting and common questions"
description: "Find answers about missing controls, navigation, formulas, input assistance, copying, exports, Library backups, storage, and shortcuts."
type: "ai-markdone"
amd_lang: "en"
page_kind: "manual_feature"
manual_feature: "troubleshooting"
translation_url: "/ai-markdone/manual/troubleshooting/"
aliases: ["/ai-markdone/en/faq/"]
---

Start with the symptom that matches your problem. For missing controls or display issues, check Settings and refresh first. Do not begin by uninstalling the extension, which can remove local Library data that has not been backed up.

## Installation, entry points, and the interface

### Which websites and browsers are supported?

The full workspace is for ChatGPT. Desktop packages are available from Chrome Web Store and Firefox Add-ons. The purposes of other declared formula-site permissions are described in [Privacy](/ai-markdone/en/privacy/); those permissions do not mean that every site has the full Reader, Library, or message-navigation features.

See [Installation](/ai-markdone/en/manual/install/) for store links, minimum versions, and setup steps.

### I installed it, but the toolbar is missing

1. Confirm you are in a ChatGPT conversation with an existing reply.
2. Check that the extension is enabled in the current browser profile and allowed to access the site.
3. Refresh and wait for the reply to load or finish generating.
4. Look under **More** below the reply; not every action is kept visible.
5. Open **Settings → Buttons** and confirm the action has not been hidden.

After an extension update, an already-open tab may still use older content. Keep any unsent text and temporary excerpts before refreshing.

### Where are Settings, Library, and the other features?

Click the AI-MarkDone icon in the browser toolbar to open the management panel. Library contains saved bookmarks, highlights, and annotations. Settings can be searched by feature name, and **Feature overview** lists entry points and shortcuts.

Reply toolbars offer copying, Reader, bookmarks, and export. Page-level actions are at the bottom right. See the [manual overview](/ai-markdone/en/manual/) for each workflow.

### Can the management panel go full screen? Can I hide unused buttons?

Yes. Use **Full screen** beside Close at the upper right, then choose the exit action to restore the window. Resizing does not clear the current category, search, or selection.

Adjust visibility and placement under **Settings → Buttons**. Fonts, themes, and accent colors are under **Appearance & layout**. Hiding an entry usually does not disable its feature. For example, hiding Previous/Next does not automatically turn off arrow-key navigation.

## Navigation and reading

### The directory or Export dialog is missing older replies

The directory and Export list replies currently available to the extension. Scroll upward, wait for older replies to appear, then reopen Export and check the numbers and count.

You can also try **Refresh message navigation** in the page drawer. This reopens the current conversation, so keep unsent text first. See [Message navigation](/ai-markdone/en/manual/message-navigation/).

### A directory click does not locate the reply, or arrow keys do not work

If a location-failure message appears, wait for the page to settle, scroll to load content near the target, and retry. Loading history, regeneration, or layout changes can change message numbers.

Arrow keys work only when enabled and when you are not editing text. Left/Right still moves the cursor inside inputs. Combinations with Cmd, Ctrl, Alt, or Shift are not ordinary message navigation. Try the lower-right buttons to distinguish a keyboard preference from a reply that has not loaded.

### When should I open Reader?

Use Reader for focused reading of long replies, a heading outline, copying passages, or adding marks. An outline needs identifiable headings in the reply; code, tables, and ordinary paragraphs do not automatically become sections. Partial copying works on both the original page and Reader. See [Reader](/ai-markdone/en/manual/reader/) and [Partial copy](/ai-markdone/en/manual/partial-copy/).

### Are Sticky excerpts saved permanently?

No. Sticky is a temporary comparison area for the current page and clears on refresh. Save important content as a bookmark or file. Sticky is also excluded from Library JSON and Drive backups. See [Sticky](/ai-markdone/en/manual/sticky/).

## Copying, formulas, and input

### Copied text is missing links, code, or formatting

Check **Settings → Reading & messages → Content to keep** first. Link destinations are removed by default, while code blocks are retained. These preferences affect whole-message copying, Reader, and message exports.

Then inspect the result in a plain Markdown editor. If the source exists but is not rendered, check the receiving application's Markdown, LaTeX, or table support. If the reply is incomplete or still generating, wait before copying again. See [Copy Markdown](/ai-markdone/en/manual/copy-markdown/).

### What shortcut copies only a selected passage?

Select text on the ChatGPT page or in Reader and use selection copy. On ChatGPT, the default is **Cmd/Ctrl + Shift + C**; Settings can change it to **Cmd/Ctrl + C** or disable it. Reader uses **Cmd/Ctrl + C**.

An incomplete code-block selection keeps the actual fragment without adding code fences. Selecting part of a formula may copy the whole formula. See [Partial copy](/ai-markdone/en/manual/partial-copy/).

### Clicking a formula does nothing, or its format differs from whole-message copying

Enable **Click a formula to copy its source**. Single-formula clicks and Markdown copying have independent format preferences under **Settings → Copy & export**. A formula image or rendering without available source cannot be guaranteed to produce editable LaTeX. See [Formula copy and export](/ai-markdone/en/manual/formulas/).

### MathML pastes as text in Office, or SVG copying fails

MathML can reach the clipboard as rich text or XML, and the receiving application must support that format. Not every Office version converts it into an editable formula automatically. SVG image copying also depends on the browser. For a file you can display consistently, save PNG or SVG and insert it into the document.

### The formula in the input box has no preview

1. Under **Settings → Writing & prompts**, enable input enhancement and formula preview.
2. Write the formula inside `$...$` or `$$...$$` and put the text cursor inside it. Mouse hover alone does not trigger it.
3. Finish input-method composition, clear any text selection, and complete missing brackets or arguments.
4. Wait for the new preview. Updating, empty, or excessively long formulas cannot be exported immediately.

When LaTeX suggestions appear, Up/Down selects, Tab or ordinary Enter inserts, and Esc closes. Enter accepts the candidate before performing its usual action. See [Input formula assistance](/ai-markdone/en/manual/composer/).

## Exported files

### PDF opens a print dialog. Did the export fail?

No. PDF uses the browser print dialog. Select **Save as PDF**, inspect the preview and paper/scale settings, and save. Cancel content preparation in the extension; once the print dialog opens, cancel there.

If the preview is blank, refresh ChatGPT, wait for the reply to load, retry with one shorter reply, and confirm the extension is updated. If it still fails, report the browser version, extension version, and a small reproducible example.

### PNG is too large, slow, or downloaded as a ZIP

Reduce width or pixel ratio under **Settings → Copy & export → Message PNG images**, or select less content. Progress and cancellation are available while processing.

A ZIP is used when multiple image files are produced, even for one sufficiently long reply. If Copy as PNG cannot write to the clipboard, try exporting PNG instead. See [Message export](/ai-markdone/en/manual/export/).

### Charts or cards are not fully preserved

Ordinary Markdown does not retain interactive components. Use **Markdown offline bundle (ZIP)** for supported attachments. PDF/PNG can **Include images** or **Use text placeholders**. Content that cannot be obtained or converted keeps an explanation. After extraction, preserve the relative locations of `conversation.md` and its attachment folder.

## Saved items, Library, and backups

### How can annotations help me comment on several passages?

Select a passage, choose **Annotate**, write your comment, and save it. Repeat for other passages, then copy or insert the quoted text with your comments. Review that text before sending it to ChatGPT. Adding a comment does not send it automatically. See [Annotations](/ai-markdone/en/manual/annotations/) for the editor, management, and output options.

### Can annotations or highlights disappear? Does Save always survive refresh?

Highlights are saved in the current browser. If one no longer appears on the original text, check Library first: changed text or context, or an ambiguous location, can prevent placement without deleting the saved record. Whether a new annotation survives refresh depends on **Save new annotations**, which is off by default. Existing persistently saved annotations are unaffected by that switch.

Unsubmitted editor text is not automatically saved. Clicking outside lets you continue reading; closing, Esc, discarding changes, or refreshing discards unsaved edits. If saving fails, keep the editor open and retry. See [Annotations](/ai-markdone/en/manual/annotations/) and [Highlights](/ai-markdone/en/manual/highlights/).

### Can I customize copied annotations and prompts?

You can adjust annotation copy templates and choose which prompt accompanies copied annotations and where it appears. Templates, prompts, and Library backups have different scopes, so do not assume that one backup includes every piece of custom text. See [Annotations](/ai-markdone/en/manual/annotations/) for the entry points.

### Why does a bookmark contain only part of a reply? How do I organize many bookmarks?

Page bookmarks store a name and URL; message bookmarks store a question and answer. Older summary bookmarks can only preview what was saved, and backups cannot restore missing text. See the [settings reference](/ai-markdone/en/manual/settings/) for the current effect of the summary-saving switch.

Library offers folders, search, sorting, and batch actions. Batch selection can extend across pages, so check the active filter and confirmation counts before deleting. See [Bookmarks](/ai-markdone/en/manual/bookmarks/).

### My new device has no saved items, or import did not restore highlights and annotations

Local data belongs to the current browser profile. Signing in to ChatGPT does not transfer it. A full Library backup includes saved bookmarks, highlights, annotations, and folders. An older bookmark file or selected-bookmark export does not include every mark.

Settings files do not include Library content either. Identify the file you are importing, then see [Local backup and import](/ai-markdone/en/manual/privacy-storage/).

### I signed into Drive. Why is nothing backing up automatically?

Signing in only connects the account. Uploading starts when you choose **Back up now**. This is not automatic or two-way sync. Select a backup and review the merge preview before restoring; conflicts keep the local copy. See [Google Drive backup](/ai-markdone/en/manual/google-drive-backup/).

### Drive sign-in, upload, or restore failed

Check the account, network, and error message, then use **Test connection**. If the installed package reports that backup is unavailable, use a local backup first. After interrupted uploads or failed verification, a remote file alone does not prove success. Follow any instructions to inspect leftover files. Do not clear local data first just to restore a cloud file.

## Other common questions

### Why does the character count differ from another tool?

This is a weighted character count, not a model token count. Common Chinese, Japanese, and Korean characters count as 2; Latin letters, digits, and underscores count as 1. Spaces and other characters are excluded, as are recognized code and formulas. It is a quick length indicator, not a precise model-cost calculation. A message time is shown only when real time information is available.

### Is the extension paid? Do I need another account?

AI-MarkDone is currently free and open source. Everyday use does not require an AI-MarkDone account. Google Drive backup requires you to connect your own Google account explicitly.

## If the problem remains

Use [GitHub Issues](https://github.com/zhaoliangbin42/AI-MarkDone/issues) or [email](mailto:zhaoliangbin42@gmail.com), and include:

- Browser name and version, and the AI-MarkDone version.
- The entry point and steps starting from opening the page.
- Expected and actual results.
- A screenshot, recording, or small example that demonstrates the issue.

You do not need to publish an entire conversation or backup. Inspect screenshots, logs, and files for personal information first. Share only what is needed to reproduce the problem.
