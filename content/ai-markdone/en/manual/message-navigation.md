---
title: "Move through a long conversation"
description: "Use the right-side message directory, Previous and Next controls, arrow keys, and reading-position restoration in ChatGPT."
type: "ai-markdone"
amd_lang: "en"
page_kind: "manual_feature"
aliases:
  - "/ai-markdone/en/manual/directory/"
manual_feature: "message-position"
translation_url: "/ai-markdone/manual/message-navigation/"
---

The right-side directory helps you find a reply among many messages. **Previous / Next** at the lower right moves between adjacent replies. These controls navigate messages in a ChatGPT conversation; Reader's heading outline navigates sections inside one reply.

## Move to the previous or next reply

1. Open a ChatGPT conversation with existing replies.
2. Click **Previous / Next**, above the AI-MarkDone brand button at the bottom right.
3. If arrow-key navigation is enabled, leave the input box and use **Left / Right** instead.

The controls do not take over ordinary cursor movement inside inputs, editors, or other controls that need those keys. Arrow keys combined with Cmd, Ctrl, Alt, or Shift are not treated as ordinary message navigation either.

## Find a distant reply in the directory

Enable **Show the message directory on the right** under **Settings → Reading & messages**. New installations enable it by default; upgrades retain existing choices. A previously disabled directory is not automatically turned back on.

Hover over an entry to preview its reply, then click the entry to locate it. Move into the preview to use **Reader** or **Export**. Moving away or pressing Esc closes the preview. Replies containing only charts or cards may also appear; an ordinary text heading is not required.

Adjust these options under **Settings → Reading & messages**:

| Setting | Effect |
|---|---|
| How the message directory opens | **Slim strip**, or **Expand titles on hover**. |
| Show both ends of long message titles | Retains the start and end when expanded, making similar openings easier to distinguish. |
| Characters in a message preview | Limits hover-preview length, from 200 to 2,000 characters. |
| Message directory space from the right edge | Increase it if the directory overlaps the scrollbar. |

## Keep your reading position after sending

Enable **Restore reading position after sending** under **Settings → Reading & messages**. When you send a message while reading an older reply, AI-MarkDone attempts to retain the position you were reading rather than making you find it again after a jump to the latest content.

You can still scroll, use other navigation, or return to the bottom at any time. Your reading position may briefly change when ChatGPT rearranges the page or loads history.

## When older replies are missing

The directory and Export dialog may not yet have the entire history. Scroll upward, let older replies load, and check whether the directory and message numbers expand.

The lower-right page drawer also has **Refresh message navigation**. It reopens the current conversation to attempt to update navigation. Keep a copy of unsent input before using it. Refreshing does not guarantee recovery of deleted replies or history the website does not provide.

If location fails, follow the prompt to scroll through the conversation and try again. A message number is not a permanent address: loading history or regenerating replies can change numbers. Use bookmarks or exported files for content you want to keep.

## Adjust controls and shortcuts

- Directory visibility and appearance: **Settings → Reading & messages**.
- Previous/Next visibility: **Settings → Buttons → Message directory**.
- Left/Right shortcuts and long-distance navigation: search Settings for “arrow” or the navigation distance, or open **Advanced settings**.

Hiding the buttons does not turn off keyboard navigation. For Enter, formula completion, and other input shortcuts, see [Writing formulas in the input box](/ai-markdone/en/manual/composer/).
