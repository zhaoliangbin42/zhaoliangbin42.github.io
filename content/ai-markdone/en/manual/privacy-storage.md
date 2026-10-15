---
title: "Back up, import, and move your Library"
description: "Distinguish full Library backups, selected-bookmark exports, message files, and settings files when moving saved bookmarks, highlights, annotations, and folders."
type: "ai-markdone"
amd_lang: "en"
page_kind: "manual_feature"
manual_feature: "privacy-storage"
translation_url: "/ai-markdone/manual/privacy-storage/"
---

Export the local Library before changing browsers, moving devices, or uninstalling the extension. A **Library backup** is different from exporting a reply as Markdown or PDF. The backup restores saved items; a message export is for reading or editing.

## Export the full Library

1. Open the AI-MarkDone management panel.
2. Go to **Settings → Data & backup → Local backup**.
3. Click **Export all** and save the JSON file.
4. Confirm the download completed and keep the file somewhere you trust.

A full backup includes:

- Saved bookmarks and bookmark folders, including empty folders.
- Saved highlights and annotations.
- Their folders and saved conversation information.

It excludes temporary annotations that have not been persistently saved, unsaved edits, Sticky excerpts, prompts, extension settings, and account credentials. If a bookmark contains only an excerpt, its backup contains that excerpt too; backing up does not fetch the missing full reply.

## Import and inspect the result

1. Export the current local Library first to keep a copy of its state before importing.
2. Choose **Import Library** in Library and open your JSON backup. Selecting the file starts import and merging.
3. After import finishes, review the result and any duplicate or conflict messages.
4. Check folders, search, previews, and a few important items in Library.

Normal merging adds new items from the file, retains local-only items, and skips duplicates. If the same item has conflicting content, the local version is kept rather than overwritten by the backup.

Older bookmark JSON files can still be imported, but they restore only bookmarks. They cannot restore highlights, annotations, or folder content that the old file never contained. If the format is unsupported or the file is damaged, keep the original and inspect the error instead of deleting fields to force an import.

## Export only selected bookmarks

Exporting selected bookmarks creates a file containing only those bookmarks. To transfer highlights, annotations, and folders too, use Export all.

## Move preferences separately

Open **Settings → Data & backup → Settings files** to export or import a settings JSON file. Before importing, review changes by category. Use the recovery action there if you need to restore the previous preferences.

A settings file includes appearance, button visibility and placement, reading preferences, and export options. It does not include Library content, conversations, prompts, custom annotation templates, Google account information, or authorization credentials. Move the Library and settings separately when changing devices.

## Deletion, uninstallation, and cloud backups

Saved data belongs to the current browser profile. Switching browsers or profiles, or uninstalling the extension, does not transfer it automatically. Confirm that your backup is saved before uninstalling or clearing extension storage.

[Google Drive backup](/ai-markdone/en/manual/google-drive-backup/) can save the same full-Library scope, but must be started manually. It is not real-time synchronization. Local JSON and Drive backups may contain selected passages, your notes, and saved replies. Inspect the contents before sharing a file.
