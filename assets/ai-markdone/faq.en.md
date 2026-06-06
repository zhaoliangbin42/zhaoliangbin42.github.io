# FAQ

## Which platforms does this extension support?

AI-MarkDone 4.5.0 supports ChatGPT as the only active AI page runtime.

## What does the extension actually do, and where do I find each feature?

- Reader: toolbar -> Reader
- Source copy: toolbar -> Copy Markdown
- Click to copy formulas: just click the formula inside the message
- Save bookmark: toolbar -> Bookmark
- Export messages: toolbar -> Export
- Word count: toolbar stats area
- Dynamic Annotation: select content inside Reader -> floating annotation button
- Sticky temporary excerpts: select content inside Reader -> Stick
- Copy annotations: Reader top bar -> Copy annotations
- Insert annotations: above the send box in Reader -> Insert annotations
- Bookmark management: click the extension icon -> bookmarks panel
- Feature toggles and settings: bookmarks panel -> Settings

## When should I open Reader?

Open Reader when an answer gets long, or when it mixes formulas, code, tables, and headings.

To make that useful in practice, Reader also includes fullscreen mode, message switching, heading outline, Sticky temporary excerpts, send actions, and toolbar shortcuts. You do not have to keep bouncing back to the host page just to continue working.

It also includes a few features I personally rely on a lot: source-aware copy, Dynamic Annotation, and Sticky excerpts for passages I want to keep beside the answer while reading. Those jobs often happen together when you are working through a serious answer.

## What is Sticky inside Reader for?

Sticky is a temporary excerpt area inside Reader.

Sometimes you are reading a long answer and a few passages need to stay beside the text while you compare them. In Reader, select a passage and click Stick. The selected Markdown goes into the left Sticky panel.

Sticky is useful when you want to:

- compare several conclusions from one answer
- keep follow-up targets nearby
- collect a small working set while reading
- hold an important formula, list, or code fragment beside the answer

The Sticky panel can be shown or hidden. Excerpts can be deleted or reordered by dragging. Sticky is a temporary workspace for the current reading session, and it clears after a refresh. Use bookmarks for anything you want to keep later.

## I heard there is something called Dynamic Annotation. What is it actually for?

If you often ask ChatGPT to revise writing, this will probably feel familiar: you get a long answer, but only parts of it need work.

The old way is tedious. You copy one sentence, add a note, copy another sentence, add another note, and eventually you end up with a messy prompt that took too much effort to assemble.

Dynamic Annotation is meant to make that workflow less annoying. In Reader, you can select any sentence or paragraph, click the floating annotation button, and write what you want changed. Once you have annotated everything you care about, the "Copy annotations" action in the Reader header gives you a clean way to export everything in one structured block.

You can paste that back into ChatGPT and ask for a batch revision. If you want an even shorter path, you can also insert the compiled result directly into the send box in the lower-left corner of Reader.

## Can I customize the structured text that gets copied after annotation?

Yes.

The relevant settings are here:

- Settings -> Reader -> User prompts
- Settings -> Reader -> Annotations copy template

They do different jobs:

- User prompts are reusable prompt headers, such as "Please revise the following passages" or "Rewrite this in a more academic tone"
- Annotations copy template controls how each annotated item is assembled, for example whether the selected source appears before your note or after it

If you want a simple setup that works well, I would start with:

- two or three reusable prompt headers for your common use cases
- a very plain template that shows the original text first and your annotation second

That usually gives the model the clearest context.

## When should I switch to Reader instead of staying on the original page?

Once you move into "I need to actually work with this" mode, Reader is usually the better place to be.

Reader rebuilds the content from the page source and then renders it again in a more controlled surface. One practical upside is that formulas that fail to render cleanly on the host page can sometimes render correctly in Reader. I cannot promise that every time, but it does help in real use.

The other reason is performance. Long ChatGPT threads can get sluggish fast. Reader uses a lighter rendering path, so reading, previewing, and switching messages tends to feel smoother.

## I do not want to copy a whole message. Can I copy Markdown source for just part of it?

Yes. That is one of the strongest Reader features.

Inside Reader, I rebuilt the Markdown rendering path so the visible surface stays much closer to the underlying structure. In practice, that means you can select almost any range inside Reader and copy it as source-aware Markdown instead of getting a flattened chunk of rendered text.

If you take notes, quote paragraphs, revise drafts, or only want part of a formula, list, or code example, this is much more usable than copying from the original page.

## How do I use click-to-copy for formulas?

If all you want is a specific formula, just click the formula itself inside the original message. The extension will try to copy the corresponding LaTeX source, saving you from copying a whole block and digging the formula back out by hand.

I use this a lot when I am taking notes or moving formulas into Typora, Obsidian, or other editors. It is much faster when the goal is just one formula, not an entire paragraph around it.

If you need more than a single formula, for example a mixed range that includes normal text, formulas, code, or lists, then Reader and source-aware partial copy are still the better option.

## What is the bookmarks feature actually for?

For me, the biggest risk with useful AI output is not "I cannot generate it again." It is "I know it was good, but now I cannot find it."

Bookmarks are there for that exact problem. You can save useful messages, organize them into folders, and come back later without digging through an endless chat history.

A few real examples:

- keep strong prompt examples in one folder
- save writing fragments you may want to reuse later
- collect technical explanations worth keeping
- keep project discussions and solution drafts separated

Used that way, the bookmarks panel becomes less like a favorites list and more like a working archive.

## What is the fastest way to manage bookmarks once I have a lot of them?

The simplest workflow is: save first, organize later.

Click the extension icon to open the bookmarks panel. From there you can:

- search bookmarks
- create folders
- move items
- import or export
- delete in batches

Each bookmark also has a preview path. You can open it, review it, move across nearby bookmarks, and jump back to the source conversation when needed.

That is why I see the bookmarks system less as a place to "store favorites" and more as a working library for answers, prompts, drafts, and references you may want to come back to.

## How does export work, and when should I use it?

The goal is simple: sharing and saving messages should not depend on a platform link.

Sometimes you want to send something to someone else, archive it, keep it in your notes, or move it into another tool. In those cases, export is a lot more practical than a chat share link.

The basic flow is:

- click Export in the toolbar
- choose the messages you want
- export as Markdown or PDF

Markdown is the better choice if you want to keep editing, take notes, or store the result in a knowledge base. PDF is better if you want something closer to a finished document that is easy to share.

And yes, batch export is supported.

## Some toolbar buttons are not useful to me. Can I turn them off?

Yes.

Click the extension icon to open the bookmarks panel, then go to Settings. From there you can turn individual features on or off. That includes toolbar actions as well as Reader and annotation-related options.

Hide the actions you rarely touch and keep your daily tools close.

## Where does Google Drive backup save my bookmarks?

Open the bookmarks panel, go to Settings, then Data Management. The Google Drive Backup (Experimental) card can connect your Google Drive account and save a verified bookmark snapshot. The settings panel shows the connected Google Drive account and lets you test the connection or manage cloud backups.

Backups are saved in your own Google Drive under `AI-MarkDone/Backups/bookmarks`. AI-MarkDone does not run a backup server, and the snapshot does not include OAuth tokens, passwords, or extension settings.

The OAuth client ID in the extension identifies AI-MarkDone as an app. It does not sign anyone into the developer's Google account. Each person authorizes the Google account already available in their own browser profile, or signs in with their own account during the Google consent flow.

The current version is a bookmark backup flow, not real-time two-way updating. Restoring from Drive first shows a safe merge preview: new Drive-only bookmarks can be added, local-only bookmarks are kept, duplicates are skipped, and conflicts keep the local copy by default.

During backup, AI-MarkDone shows stage progress and a countdown for the operation timeout budget instead of byte-level upload speed. The Drive upload uses a resumable upload session, but this v1 flow sends the snapshot in one PUT request; it is not full chunked resume yet. If the browser closes or the extension unloads mid-upload, Google Drive may keep the backup folders or a JSON file that did not report success. After a completed upload, AI-MarkDone downloads the file back and verifies the snapshot id and payload hash; if that verification fails, it tries to delete the just-created Drive file and tells you if manual cleanup is needed.

Clicking “Sign out” first asks Google to revoke AI-MarkDone’s current Drive OAuth grant, then clears the authorization state cached by the browser identity API for AI-MarkDone. The next sign-in action asks the browser to start Google sign-in or consent again as needed.

If backup fails because the loaded build is missing OAuth pieces, AI-MarkDone shows the relevant diagnosis in the error message without starting sign-in. Remove old unpacked AI-MarkDone entries and reload the current build if the browser is still loading an incomplete manifest. If you see `invalid_request` or an invalid OAuth request message, compare the diagnostics redirect URI with the authorized redirect URIs and JavaScript origins in the Google Cloud Web OAuth client.

You can manage backup JSON files from the Google Drive backup settings panel. Moving a backup to Drive trash does not touch local bookmarks, and you can still clean up files directly in Google Drive if you prefer.

## How does word count work?

It is tuned as a practical reading signal.

The current rules are:

- CJK characters such as Chinese, Japanese, and Korean count as 1 word each, and 2 chars each
- Latin text is split into words, then punctuation is stripped before counting
- fenced code blocks are excluded
- math formulas are excluded
- inline code is excluded

So the number is best treated as a quick reading signal: how long this reply is, and roughly how dense it feels.

One extra detail: if a message is basically code only, the toolbar will show `0 Words / 0 Chars` instead of pretending there is meaningful prose to count.

## Is this extension paid?

**It stays free.**

I built this project because I work with ChatGPT every day for research, writing, and code. Clean source copy, line-level annotation, message export, bookmarks, and formula handling may look like small things, but repeating them dozens of times a day adds up.

AI-MarkDone will stay free and open source. If it saves you time, you are welcome to buy me a coffee, star the project on GitHub, or leave an honest review on the extension page. If you run into bugs or have ideas, I would be happy to hear from you.
