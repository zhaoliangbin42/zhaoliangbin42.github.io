---
title: "Settings reference"
description: "Review AI-MarkDone Settings for Platforms, Toolbar & Page Actions, Reader, Advanced Settings, Formula, PNG export, ChatGPT Settings, Appearance, Language, and backup."
type: "ai-markdone"
amd_lang: "en"
page_kind: "manual_feature"
manual_feature: "settings"
translation_url: "/ai-markdone/manual/settings/"
screenshot_title: "Show this later: the full Settings page with Platforms, Toolbar & Page Actions, Reader, Advanced Settings, Formula, ChatGPT Settings, Appearance, Language, and backup."
screenshot_detail: "The screenshot should show the Settings groups so users can match them with the reference tables below."
prev_url: "/ai-markdone/en/manual/export/"
prev_label: "Previous: export"
---

## Use this when

You already know what AI-MarkDone can do and want to tune it to your habits. This page does not expose internal setting keys. It uses the real labels shown in Settings and explains what changes when you turn something on or off.

## Where to open it

Open the AI-MarkDone extension panel and go to **Settings**. Some changes may require refreshing the ChatGPT page or reopening Reader before they appear.

## Platforms

| Setting | Default | What it does |
|---|---:|---|
| Platforms | On | Enable AI-MarkDone on ChatGPT. |

## Toolbar & Page Actions

| Setting | Default | When on | When off |
|---|---:|---|---|
| Show Save Messages | On | Show the Save Messages action where export is supported. | Hide the Save Messages entry and keep the toolbar cleaner. |
| Show Word Count | On | Display word count information for saved and rendered content. | Hide word count information. |
| Enable click-to-copy | On | Copy message content directly when supported surfaces are clicked. | Disable click-to-copy to avoid accidental copying. |
| Save context only | Off | Save only 500 characters for new bookmarks and reduce storage usage. | Save fuller content so bookmark previews remain more complete. |

**Suggestion:** Keep the first three on if you mainly read, copy, and export. Turn on Save context only only when you have many bookmarks and storage starts to matter; it saves space, but full text preview will not be available in the bookmark panel.

## Reader

| Setting | Default | What it does |
|---|---:|---|
| Reader > Render Code Blocks | On | Display syntax-highlighted code in Reader Mode. Turning it off can make Reader lighter when an answer contains long code blocks. |
| Reader > Show Heading Outline | On | Show the right-side heading outline when the current Reader page has multiple Markdown headings. |
| Reader content width | Default width | Controls the maximum Reader body width; content still shrinks to fit the panel. Wider values can help with formulas and code. |

## Advanced Settings

| Setting | What it does |
|---|---|
| User prompts | Manage reusable prompt headers for annotation export, especially when annotations often become follow-up prompts. |
| Place prompt below annotations | Copied annotations appear first, then the selected user prompt is appended at the bottom. |
| Annotations copy template | Configure the reusable template for copied annotations so copied notes keep a stable structure. |

Advanced Settings are mostly for people who use annotations often. If you are just starting, the defaults are fine.

## Formula

| Setting | Default | When on | When off |
|---|---:|---|---|
| Formula click copies Markdown | On | Click a formula to copy its original LaTeX / Markdown source. | Formula clicks no longer copy source directly. |
| Formula image actions | Off by default | Enable Copy as PNG, Copy as SVG, Copy as MathML, Save as PNG, and Save as SVG as needed. | Keep formula hover actions hidden. |

**Suggestion:** If you mainly move formulas into Markdown, LaTeX, or notes, Formula click copies Markdown is usually enough. Enable PNG, SVG, or MathML only when you need image sharing, layout work, or accessibility-oriented formats.

## PNG export

| Setting | Default | What it does |
|---|---:|---|
| PNG image width | Desktop | Chooses the default card width used for PNG exports. |
| Width value | Editable with Custom | Lets you edit the PNG width in pixels after choosing Custom. |
| PNG image scale | 1x | Controls raster sharpness, up to 3x. Long exports may still be capped for stability. |

## ChatGPT page behavior {#chatgpt-page-behavior}

These options control reading position and message navigation on the ChatGPT page. The important one is Restore position after sending: when you send a new prompt while reading older messages, AI-MarkDone tries to bring you back to the spot you were reading instead of dropping you into the newest message.

| Setting | Default | What it does |
|---|---:|---|
| Restore position after sending | On | When reading older messages, sending a new message brings you back to your reading position. |
| Show lower-right message buttons | On | Show the small Previous and Next message buttons on ChatGPT conversation pages. |
| Use arrow keys to move between messages | On | Left and Right move to the previous or next message when you are not typing. Inside the ChatGPT input box, they still move the cursor. |

## ChatGPT Directory

The AI-MarkDone ChatGPT directory is temporarily unavailable. Message navigation now uses the lower-right stepper and arrow keys. If this option appears in an older build, do not treat it as the main navigation surface.

## Appearance

| Setting | What it does |
|---|---|
| Global font size | Adjust AI-MarkDone interface text size. |
| Theme color | Choose the accent color used by primary actions, links, focus rings, and selected states. |

You do not need to memorize the color names. Choose the one that feels comfortable.

## Language

| Setting | Options |
|---|---|
| Language | Auto (Browser Language), English, 简体中文 |

Refresh the page when prompted after changing language.

## Backup

Settings also includes backup controls:

- Local Backup: useful before reinstalling the browser, clearing extension data, or moving devices.
- Google Drive Backup: saves verified bookmark snapshots to your own Google Drive.

Next, read [Import and export](/ai-markdone/en/manual/privacy-storage/) or [Google Drive backup](/ai-markdone/en/manual/google-drive-backup/).
