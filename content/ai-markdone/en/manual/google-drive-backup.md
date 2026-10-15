---
title: "Back up your Library to Google Drive"
description: "Manually back up saved bookmarks, highlights, annotations, and folders to your own Google Drive, then preview a safe merge before restoring."
type: "ai-markdone"
amd_lang: "en"
page_kind: "manual_feature"
manual_feature: "google-drive-backup"
translation_url: "/ai-markdone/manual/google-drive-backup/"
---

Google Drive backup keeps a copy of your saved Library in your own Google account. It is currently marked **Experimental** and must be started manually. **It is neither automatic synchronization nor two-way syncing.** Connecting an account alone does not upload your Library.

## Connect your Google Drive

1. Open **Settings → Data & backup → Cloud backup**.
2. Choose **Sign in to Google Drive** on the Google Drive card.
3. Read the backup-scope notice, choose your Google account, and authorize the connection.
4. Return to Settings and confirm that the displayed account is the one you intend to use. Open backup settings and choose **Test connection** if needed.

If the interface says “Google Drive backup is unavailable in this version,” the installed package or browser does not currently meet its authorization requirements. Use a [local Library backup](/ai-markdone/en/manual/privacy-storage/) instead; do not treat the account as successfully connected.

## Create a backup

1. Choose **Back up now**.
2. Wait for preparation, upload, and verification. Do not close the browser or uninstall the extension during this process.
3. After completion is confirmed, check the new file and timestamp in the backup list.

A full backup includes saved bookmarks, highlights, annotations, and their folders. It excludes unsaved annotation edits, temporary annotations, Sticky excerpts, prompts, settings, and OAuth credentials.

The folder is still `AI-MarkDone/Backups/bookmarks` for compatibility with older backups, but new backups are no longer limited to bookmarks. New filenames usually begin with `aimd-library-`.

## Preview before restoring

1. Choose **Preview restore** and select a backup from the list.
2. Review the proposed bookmark, highlight, annotation, and folder changes, including new, duplicate, and conflicting items.
3. Once you have confirmed the correct backup, choose **Merge into local Library**.
4. Check important items in Library afterward.

Merging retains local-only items, adds backup-only items, and skips duplicates. Conflicts keep the local version. The normal interface does not propagate remote deletions into local deletions.

An older bookmark-only backup restores only its stated scope. Local highlights, annotations, and their folders stay unchanged. Export a fresh local backup before restoring so that you can compare or recover your current data if needed.

## Manage backups and sign out

Use Google Drive backup settings to inspect and manage remote files. Moving a backup to Drive trash does not delete the local Library. Deleting a local item does not automatically remove it from older cloud snapshots either.

**Sign out** clears the extension's cached authorization state and attempts to revoke the Google grant. It does not delete local content or automatically remove uploaded files. Delete the backup files in Drive as well if you want to remove the remote copies.

## If a backup does not finish

Check the account, network, and error message, then test the connection. An upload still requires verification. A file appearing in Drive is not by itself confirmation that the backup completed successfully.

If verification fails, the extension attempts to remove the newly created file. If that cleanup also fails, it prompts you to handle it manually. Closing the browser midway may leave an unconfirmed file; complete resumable uploads are not currently supported. Keep the local data, start a new backup, and inspect older files in Drive when necessary.

See [Privacy](/ai-markdone/en/privacy/) for authorization scope and data handling.
