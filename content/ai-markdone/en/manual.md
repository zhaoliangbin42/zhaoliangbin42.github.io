---
title: "AI-MarkDone Manual"
description: "Learn AI-MarkDone usage methods and productivity techniques through readable, capture-ready, askable, and keepable ChatGPT workflows."
type: "ai-markdone"
amd_lang: "en"
page_kind: "manual"
translation_url: "/ai-markdone/manual/"
---

AI-MarkDone adds reading, copying, annotation, bookmark, and export tools to ChatGPT for working with long answers, formulas, and code.

Install the extension, refresh ChatGPT, and start from the toolbar below a message. Choose a feature from the four groups below, or begin with [Installation](/ai-markdone/en/manual/install/).

AI-MarkDone's core functions fall into four groups: readable, easy to capture, easy to ask, and easy to keep.

<div class="amd-manual-goal-grid">
  <article>
    <span>Readable</span>
    <p>Read long answers in Reader, follow the heading outline, switch messages, and keep temporary excerpts in the Sticky panel.</p>
  </article>
  <article>
    <span>Easy to capture</span>
    <p>Copy a full answer or a selected passage as Markdown, take the LaTeX source of a formula, or export a formula image.</p>
  </article>
  <article>
    <span>Easy to ask</span>
    <p>Annotate selected source text and use prompt templates to prepare a follow-up question.</p>
  </article>
  <article>
    <span>Easy to keep</span>
    <p>Save answers as bookmarks and organize them into folders, or batch-export Markdown, PDF, or PNG files for sharing and reference.</p>
  </article>
</div>

<div class="amd-manual-matrix-wrap">
  <table class="amd-manual-matrix">
    <colgroup>
      <col class="amd-manual-matrix-col-category">
      <col class="amd-manual-matrix-col-need">
      <col class="amd-manual-matrix-col-feature">
    </colgroup>
    <thead>
      <tr>
        <th>Group</th>
        <th>Need</th>
        <th>Feature / panel</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Readable</th>
        <td>ChatGPT answers are too long, the page contains too many messages, and the original page gets sluggish.</td>
        <td><a href="/ai-markdone/en/manual/reader/">Reader</a></td>
      </tr>
      <tr>
        <th scope="row">Readable</th>
        <td>You want to switch quickly to the previous or next message.</td>
        <td><a href="/ai-markdone/en/manual/message-navigation/">Message navigation</a></td>
      </tr>
      <tr>
        <th scope="row">Readable</th>
        <td>For long messages, especially thinking/pro-level long answers, you want to see the full outline and jump to any heading at any time.</td>
        <td><a href="/ai-markdone/en/manual/reader/">Heading outline</a></td>
      </tr>
      <tr>
        <th scope="row">Readable</th>
        <td>After sending a message, you want the window position to stay where it was.</td>
        <td><a href="/ai-markdone/en/manual/message-navigation/">Keep position after sending</a></td>
      </tr>
      <tr>
        <th scope="row">Readable</th>
        <td>You have important content and want to pin it so you do not forget it while reading what comes next.</td>
        <td><a href="/ai-markdone/en/manual/sticky/">Sticky excerpts</a></td>
      </tr>
      <tr>
        <th scope="row">Easy to capture</th>
        <td>You want to paste a full answer directly into Obsidian, Notion, Typora, or similar tools while keeping the format correct.</td>
        <td><a href="/ai-markdone/en/manual/copy-markdown/">Copy Markdown</a></td>
      </tr>
      <tr>
        <th scope="row">Easy to capture</th>
        <td>You only want to copy a small part of an answer with formatting, including formulas and code blocks.</td>
        <td><a href="/ai-markdone/en/manual/partial-copy/">Partial copy</a></td>
      </tr>
      <tr>
        <th scope="row">Easy to capture</th>
        <td>You need one formula without manually selecting the rendered math.</td>
        <td><a href="/ai-markdone/en/manual/formulas/">Formula LaTeX copy</a></td>
      </tr>
      <tr>
        <th scope="row">Easy to capture</th>
        <td>You need formulas as image or structured assets.</td>
        <td><a href="/ai-markdone/en/manual/formulas/">Formula PNG / SVG / MathML</a></td>
      </tr>
      <tr>
        <th scope="row">Easy to capture</th>
        <td>You want to turn the current answer into a shareable image.</td>
        <td><a href="/ai-markdone/en/manual/export/">Copy as PNG / PNG export</a></td>
      </tr>
      <tr>
        <th scope="row">Easy to ask</th>
        <td>You want to ask a follow-up about one exact sentence.</td>
        <td><a href="/ai-markdone/en/manual/annotations/">Dynamic Annotation</a></td>
      </tr>
      <tr>
        <th scope="row">Easy to ask</th>
        <td>You want to turn annotations into a prompt and send it directly to the model for a follow-up, or reuse repeated follow-up patterns faster.</td>
        <td><a href="/ai-markdone/en/manual/reader/">Reader send box</a></td>
      </tr>
      <tr>
        <th scope="row">Easy to keep</th>
        <td>You got an important answer and do not want to lose it later.</td>
        <td><a href="/ai-markdone/en/manual/bookmarks/">Bookmarks</a></td>
      </tr>
      <tr>
        <th scope="row">Easy to keep</th>
        <td>When you have many bookmarks, you want to classify them or search them quickly.</td>
        <td><a href="/ai-markdone/en/manual/bookmarks/">Bookmark management</a></td>
      </tr>
      <tr>
        <th scope="row">Easy to keep</th>
        <td>You want to export many answers as Markdown, PDF, or PNG so they are easy to keep and share.</td>
        <td><a href="/ai-markdone/en/manual/export/">Batch export</a></td>
      </tr>
      <tr>
        <th scope="row">Easy to keep</th>
        <td>You are changing devices or reinstalling and do not want bookmarks lost.</td>
        <td><a href="/ai-markdone/en/manual/google-drive-backup/">Google Drive backup and restore</a></td>
      </tr>
    </tbody>
  </table>
</div>

<p class="amd-manual-next-copy">If you want the full picture first, start with Plugin architecture. If you want to use the extension right away, start with Reader.</p>

<p class="amd-manual-config-copy">AI-MarkDone also includes rich configuration options. You can turn toolbar actions on or off and tune Reader, formulas, annotations, image export, backup, and interface preferences so the workbench fits your habits.</p>

<div class="amd-manual-cta-row">
  <a class="amd-manual-primary-cta" href="/ai-markdone/en/manual/architecture/">Explore plugin architecture</a>
  <a class="amd-manual-secondary-cta" href="/ai-markdone/en/manual/reader/">Explore Reader</a>
  <a class="amd-manual-secondary-cta" href="/ai-markdone/en/manual/settings/">View all settings</a>
</div>
