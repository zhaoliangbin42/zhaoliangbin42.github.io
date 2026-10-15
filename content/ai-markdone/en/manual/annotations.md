---
title: "Annotations"
description: "Annotate selected text on the ChatGPT page or in Reader, choose how notes are saved, then copy or insert them into a follow-up prompt."
type: "ai-markdone"
amd_lang: "en"
page_kind: "manual_feature"
manual_feature: "annotations"
translation_url: "/ai-markdone/manual/annotations/"
---

An annotation pairs a passage with your comment. Select a step in a derivation and write “Explain why this step is valid,” or select a paragraph and write “Reduce this to two sentences.” Record several notes, then collect them into one follow-up.

## Add and save an annotation

1. Select text in an answer on the ChatGPT page or in [Reader](/ai-markdone/en/manual/reader/).
2. Click the annotation button near the selection.
3. In **Add annotation**, check the quoted text and enter your comment in the input field.
4. Click **Save annotation**, or press `⌘Enter` / `Ctrl+Enter`.

The quoted text identifies the passage your note refers to. You cannot edit that source text in the annotation window. The comment cannot be empty. Plain `Enter` adds a line break; saving an annotation does not send it to ChatGPT.

## What happens to unsaved text

Typing does not automatically create a recoverable draft. Dragging the window, minimizing and reopening it, or clicking outside it can retain the input in the current window. Closing the window or pressing `Esc` discards unsaved changes. Save before refreshing the page or changing the source content.

If saving fails, the window retains your input so you can retry. Discarding edits and deleting an existing annotation are separate actions; read the confirmation before proceeding.

## Choose whether new annotations survive a refresh

Open Reader's top-right **Settings**, find the annotations and prompts section, and turn on **Save new annotations for later** if needed. This setting is off by default.

| Setting | Result after clicking Save annotation |
| --- | --- |
| Off | A new annotation lasts for the current page session and is lost after a refresh. |
| On | A new annotation with an identifiable source conversation and message saves in the current browser and remains after a refresh. |

If the confirmation says the annotation is kept only on the current page, it has not been saved persistently. Turning the setting on does not automatically convert all earlier temporary annotations into saved records. Previously persisted annotations remain available for viewing, editing, and deletion even if you turn the setting off later.

Persisted annotations are available on the original page, in Reader, and in Library. Temporary annotations depend on the current page and the reading view where you created them; do not treat them as records available across tabs.

## View, edit, or delete annotations

Use **Annotations** at the top of Reader to view notes, or open a note from its marker on the original page. When the current conversation has annotations, an **Annotations** entry also appears near the ChatGPT composer.

For centralized management, open the AI-MarkDone panel and choose **Library → Annotations**. Select a note to inspect the quoted text, copy, edit, or delete it. Annotation and highlight folders group records by conversation; moving a conversation's marks changes its folder in both views.

## Use annotations in a follow-up

### Copy annotations from the current answer

Click **Copy annotations** at the top of Reader, choose a prompt, and review the combined source text and comments before copying. This collects annotations for the answer currently open in Reader, not every annotation in the conversation.

### Ask from Reader

Open Reader's lower-left send box, choose **Insert annotations**, then select a prompt. Edit or add to the inserted text as needed. It reaches ChatGPT only after you click send.

### Insert into the ChatGPT composer

In the annotation manager on the original page, choose **Current conversation**, then **Insert to input**. The conversation's annotations are appended after any existing input. Nothing is sent automatically.

**Insert and delete** deletes the relevant annotations after successfully inserting them. Deletion happens when insertion succeeds, before you send the message. If insertion fails, the annotations remain. Use this action only when you no longer need to keep those notes separately.

The **All annotations** view does not offer bulk insertion into the current conversation. A single annotation in Library can be inserted into the current composer only when it belongs to the current conversation.

## Adjust the output format

Reader's annotations and prompts settings let you adjust the output template, order, and prompt placement. Use **Copy annotations** to preview the result and check that it includes the source text and comments you need before applying a batch of revisions.

To mark text with a color without writing a comment, use [Highlights](/ai-markdone/en/manual/highlights/). Highlight saving is independent of the annotation saving setting.
