---
title: "AI-MarkDone Privacy"
description: "How AI-MarkDone handles local Library data, formulas, exports, browser permissions, and optional manual Google Drive backups."
type: "ai-markdone"
amd_lang: "en"
page_kind: "privacy"
translation_url: "/ai-markdone/privacy/"
policy_lead: "Your Library is stored in the browser by default. This page explains what is saved, when content reaches external services, and how to remove local and cloud copies."
policy_updated: "2026-10-15"
privacy_summary: [{"icon": "database", "title": "Saved in your browser", "text": "Bookmarks, highlights, and persistent annotations belong to the current browser profile."}, {"icon": "cloud", "title": "Backups start with your action", "text": "Signing in to Drive does not upload content. Back up now starts a snapshot."}, {"icon": "shield-check", "title": "No owned content server", "text": "Library content is not uploaded to an AI-MarkDone backend."}]
privacy_menu: [{"id": "scope", "title": "Scope"}, {"id": "no-collection", "title": "No AI-MarkDone server receiving your content"}, {"id": "local-processing", "title": "Reading, writing, copying, and exporting"}, {"id": "storage", "title": "Stored data and retention"}, {"id": "google-drive", "title": "Optional Google Drive backup"}, {"id": "permissions", "title": "Why permissions are requested"}, {"id": "sharing", "title": "Sending, sharing, and external services"}, {"id": "delete", "title": "Delete data, sign out, or uninstall"}, {"id": "contact", "title": "Updates and contact"}]
---

<section id="scope">

## Scope

This page describes how the AI-MarkDone extension handles data for reading, copying, formula editing, message navigation, annotations, highlights, bookmarks, exports, and backups.

The full workspace is for ChatGPT. The current packages also provide formula handling on specified Gemini, Claude, and DeepSeek websites and declare access to those sites. This does not mean they offer every ChatGPT workspace feature.

ChatGPT, Google Drive, browser synchronization, and other external services also process data under their own rules when you use them.

</section>

<section id="no-collection">

## No AI-MarkDone server receiving your content

AI-MarkDone does not operate its own server to receive your conversations, Library, annotations, or highlights. Copying, formatting, formula rendering, and file generation run in the browser. Library data is stored by default in the extension storage of the current browser profile.

Accessing ChatGPT, loading original images, sending messages, browser synchronization, and Google Drive backup connect to the corresponding services, as described below.

AI-MarkDone does not sell user data, share conversation content with advertising platforms, or use Google user data for advertising, retargeting, credit decisions, or unrelated product analytics.

</section>

<section id="local-processing">

## Reading, writing, copying, and exporting

- **Reading and navigation:** the extension processes the conversation you open and available message data for Reader, the directory, copying, and export. It may use content obtained through your current ChatGPT session. Access to older replies depends on the website and your account's access.
- **Input and formulas:** input enhancement reads the current input text and cursor position for local Markdown editing, LaTeX suggestions, and formula preview. Previewing or exporting a formula does not itself send the message.
- **Clipboard:** after a copy action or its shortcut, the extension writes selected text, formulas, or images to the system clipboard. How other applications access or use the clipboard depends on your system and software.
- **Exported files:** Markdown, offline ZIP, PDF, and PNG files are saved locally to the location you choose. They may contain questions, replies, selected passages, images, source links, or explanations. Check them before sharing.
- **Images and visual content:** Reader and exports may load images from the original content or use already-loaded charts and cards. Image providers may receive normal image-request information. Not every remote item can be preserved as an offline attachment.

</section>

<section id="storage">

## Stored data and retention

| Data | What may be stored | Retention |
|---|---|---|
| Library bookmarks | Page or conversation URLs, titles, folders, message identifiers, save times, and the questions/replies or excerpts you choose to save. | Stored in the current browser profile until deleted or extension data is cleared. |
| Highlights and saved annotations | Quoted text, colors, note text, source-conversation and location information, folders, and related metadata. | Highlights persist. Whether new annotations survive refresh depends on Save new annotations; disabling it does not remove existing persistent records. |
| Settings, prompts, and templates | Appearance, buttons, reading/export preferences, and prompts or annotation copy templates you explicitly save. | Browser extension storage is used; some settings may be synchronized through the browser vendor's sync storage. |
| Google Drive connection | Connection status, backup times, and account email, name, or photo URL returned by Drive. | Used to show the connected account and backup status. |
| Google authorization cache | Access tokens, expiry information, and necessary connection details. | Cached in local extension storage for authorized operations. Signing out clears the cache and attempts to revoke authorization. |

Unsubmitted annotation edits are not automatically saved. Submitted new annotations still follow Save new annotations: when it is off, they stay only on the current page. Sticky excerpts are also temporary and clear on refresh.

Browser synchronization is provided by the browser vendor and depends on browser capabilities and your account settings. It is not an AI-MarkDone cloud service or a substitute for a full Library backup.

</section>

<section id="google-drive">

## Optional Google Drive backup

Library snapshots upload only after you connect your Google account and choose **Back up now**. Connecting does not automatically upload content, and later edits or deletions are not automatically synchronized.

The extension requests `https://www.googleapis.com/auth/drive.file` to create and manage files created by AI-MarkDone or opened with it by you. It does not request broad read/write access to your entire Drive. Backups travel directly from the browser to your Google Drive folder `AI-MarkDone/Backups/bookmarks`.

New backups include saved bookmarks, highlights, annotations, and folders. The folder name is retained from older versions; it no longer implies a bookmark-only backup. Unsaved edits, temporary annotations, Sticky excerpts, prompts, extension settings, custom templates, and account credentials are excluded. Older bookmark backups remain readable but can restore only what they actually contain.

Uploaded data is read back and verified before completion is confirmed. Restoring lists backups, downloads your selected file, shows a merge preview, and merges it locally after confirmation. Normal merging retains local-only items and local conflicting versions; it does not propagate remote deletions.

When you request deletion, the extension moves that backup to Drive trash. Interrupted uploads may leave unconfirmed files. Failed verification triggers an attempted cleanup and, when necessary, instructions for manual cleanup.

The use and transfer of information received from Google APIs by AI-MarkDone will adhere to the Chrome Web Store User Data Policy, including the Limited Use requirements.

See [Google Drive backup](/ai-markdone/en/manual/google-drive-backup/) for the steps.

</section>

<section id="permissions">

## Why permissions are requested

| Permission or website | Purpose |
|---|---|
| `storage` | Store Library data, settings, prompts, templates, backup status, and necessary authorization cache. |
| `clipboardWrite` | Write text, formulas, or images when you trigger a copy action. |
| `identity` | Open Google authorization for optional Drive backup. |
| `chatgpt.com`, `chat.openai.com` | Provide reading, copying, input enhancement, message navigation, export, and related features on ChatGPT. |
| `gemini.google.com`, `claude.ai`, `chat.deepseek.com` | Identify and handle formulas on these declared websites, without implying full-workspace support. |
| `www.googleapis.com`, `oauth2.googleapis.com` | Perform authorized Drive file operations, verification, and authorization revocation. |

The browser identity interface may open Google's sign-in page. A hostname in an installation permission prompt does not mean that your entire browsing history or Library is automatically sent to that website.

</section>

<section id="sharing">

## Sending, sharing, and external services

- When you send input text, or insert quoted passages and annotations and then send them to ChatGPT, that content goes to the service through ChatGPT's normal sending flow. Inserting text alone does not send it.
- Pasting copied content into another application, sharing exported files, opening links, or emailing feedback are subsequent actions you choose. Those services handle received data under their own rules.
- Google Drive backup is another authorized transfer with the scope described above. OAuth tokens are not included in Library backups or exported settings files.
- The website and extension are separate contexts. The deployed website uses Google Analytics for website visits; this does not give website analytics access to the extension's Library content.

</section>

<section id="delete">

## Delete data, sign out, or uninstall

1. Delete unwanted bookmarks, highlights, or annotations in Library. Check the selected scope first.
2. Export a [local Library backup](/ai-markdone/en/manual/privacy-storage/) before switching browsers, clearing extension storage, or uninstalling. Clearing or uninstalling removes local extension data from the current profile.
3. Choose **Sign out** when you no longer want the Drive connection. The extension clears cached authorization and attempts to revoke the Google grant.
4. Delete backups in Drive separately to remove remote copies. Signing out, uninstalling, or deleting local items does not automatically delete already-uploaded files.
5. You control downloaded JSON, Markdown, ZIP, PDF, and PNG files. Delete them from Downloads or their other saved locations when needed.

Moving a Drive backup to trash does not delete local data. Conversely, older backups may still contain items you later deleted locally.

</section>

<section id="contact">

## Updates and contact

This page is updated to describe the current features and their data handling. If later features change what is stored or transferred, the explanation will be adjusted accordingly.

For privacy questions, email [zhaoliangbin42@gmail.com](mailto:zhaoliangbin42@gmail.com) or use [GitHub Issues](https://github.com/zhaoliangbin42/AI-MarkDone/issues). You do not need to publish an entire conversation, authorization token, or Library backup to ask for help.

</section>
