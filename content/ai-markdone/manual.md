---
title: "AI-MarkDone 手册"
description: "详细介绍 AI-MarkDone 的使用方法和提效技巧，按好读、好记、好问、好存梳理 ChatGPT 工作流。"
type: "ai-markdone"
amd_lang: "zh"
page_kind: "manual"
translation_url: "/ai-markdone/en/manual/"
---

AI-MarkDone 是一个 ChatGPT 浏览器插件。它围绕学习、科研、工作中反复出现的高频痛点而开发，目标很直接：让 ChatGPT 的使用效率得到极致提高。

AI-MarkDone 不是一个玩具。它是一个精简、克制、美观的工作台，专门补足 ChatGPT 在阅读、复制、导出、保存、注释上的短板。装上它，刷新网页，你就能察觉到不同：一系列顺手的工具已经出现在消息页面中。你不需要一直想着它，但在需要的时候，你会自然想到它。

AI-MarkDone 的核心功能可以分成四类：好读、好记、好问、好存。

<div class="amd-manual-goal-grid">
  <article>
    <span>好读</span>
    <p>提供干净的阅读器页面、翻页、消息内导航和 Sticky 栏，一切都为了让你进入心流状态，不受外部影响。</p>
  </article>
  <article>
    <span>好记</span>
    <p>提供高效的内容提取方案：公式复制、消息分享、局部复制，让 ChatGPT 成为科研里的好帮手，不再为内容提取而卡壳。</p>
  </article>
  <article>
    <span>好问</span>
    <p>提供灵动注释和 Prompt 模板。阅读内容时不用盯着输入框，看到哪里，批注到哪里，把提示词抛在脑后。</p>
  </article>
  <article>
    <span>好存</span>
    <p>书签收藏、批量导出为 Markdown、PDF 或 PNG，一切只为了让重要的东西不再遗忘。</p>
  </article>
</div>

<div class="amd-manual-matrix-wrap">
  <table class="amd-manual-matrix">
    <thead>
      <tr>
        <th>类别</th>
        <th>你遇到的需求</th>
        <th>对应功能/面板</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">好读</th>
        <td>ChatGPT 回答太长，原页面读起来容易断线。</td>
        <td><a href="/ai-markdone/manual/reader/">Reader 阅读器</a></td>
      </tr>
      <tr>
        <th scope="row">好读</th>
        <td>想在长对话里快速切到上一条或下一条回答。</td>
        <td><a href="/ai-markdone/manual/reader/">消息切换</a></td>
      </tr>
      <tr>
        <th scope="row">好读</th>
        <td>回答里标题很多，想先看结构再细读。</td>
        <td><a href="/ai-markdone/manual/reader/">标题大纲</a></td>
      </tr>
      <tr>
        <th scope="row">好读</th>
        <td>想减少 ChatGPT 原页面的干扰，只专注当前回答。</td>
        <td><a href="/ai-markdone/manual/reader/">Reader 专注阅读面</a></td>
      </tr>
      <tr>
        <th scope="row">好读</th>
        <td>读到一半想先收几段在旁边对照。</td>
        <td><a href="/ai-markdone/manual/sticky/">Sticky 临时摘录</a></td>
      </tr>
      <tr>
        <th scope="row">好记</th>
        <td>想把整条回答放进 Obsidian、Notion、Typora 或 Markdown 文件。</td>
        <td><a href="/ai-markdone/manual/copy-markdown/">复制 Markdown</a></td>
      </tr>
      <tr>
        <th scope="row">好记</th>
        <td>只想复制回答中的某一小段，而不是整条回答。</td>
        <td><a href="/ai-markdone/manual/partial-copy/">局部复制</a></td>
      </tr>
      <tr>
        <th scope="row">好记</th>
        <td>只想拿走一个公式，不想手动框选渲染结果。</td>
        <td><a href="/ai-markdone/manual/formulas/">公式 LaTeX 复制</a></td>
      </tr>
      <tr>
        <th scope="row">好记</th>
        <td>需要把公式作为图片或结构化格式放到文档里。</td>
        <td><a href="/ai-markdone/manual/formulas/">公式 PNG / SVG / MathML</a></td>
      </tr>
      <tr>
        <th scope="row">好记</th>
        <td>想把当前回答变成方便分享的图片。</td>
        <td><a href="/ai-markdone/manual/export/">Copy as PNG / PNG 导出</a></td>
      </tr>
      <tr>
        <th scope="row">好问</th>
        <td>读到某句话时，想围绕原文继续追问。</td>
        <td><a href="/ai-markdone/manual/annotations/">灵动注释</a></td>
      </tr>
      <tr>
        <th scope="row">好问</th>
        <td>想把自己的批注意见整理成更清楚的 prompt。</td>
        <td><a href="/ai-markdone/manual/annotations/">注释复制</a></td>
      </tr>
      <tr>
        <th scope="row">好问</th>
        <td>不想来回滚动到输入框，想边读边组织下一轮问题。</td>
        <td><a href="/ai-markdone/manual/annotations/">注释插入 Reader 发送框</a></td>
      </tr>
      <tr>
        <th scope="row">好问</th>
        <td>经常重复某类追问方式，希望更快组织表达。</td>
        <td><a href="/ai-markdone/manual/settings/">注释模板 / 提示词头</a></td>
      </tr>
      <tr>
        <th scope="row">好问</th>
        <td>想在阅读当前回答时直接继续向 ChatGPT 发送追问。</td>
        <td><a href="/ai-markdone/manual/reader/">Reader 发送框</a></td>
      </tr>
      <tr>
        <th scope="row">好存</th>
        <td>得到一条以后还会反复用的回答，不想让它沉到对话里。</td>
        <td><a href="/ai-markdone/manual/bookmarks/">书签保存</a></td>
      </tr>
      <tr>
        <th scope="row">好存</th>
        <td>想按主题整理保存过的回答。</td>
        <td><a href="/ai-markdone/manual/bookmarks/">书签文件夹</a></td>
      </tr>
      <tr>
        <th scope="row">好存</th>
        <td>记得关键词，但不记得在哪个对话里。</td>
        <td><a href="/ai-markdone/manual/bookmarks/">书签搜索与预览</a></td>
      </tr>
      <tr>
        <th scope="row">好存</th>
        <td>想从保存记录跳回 ChatGPT 原始位置。</td>
        <td><a href="/ai-markdone/manual/bookmarks/">回到原文位置</a></td>
      </tr>
      <tr>
        <th scope="row">好存</th>
        <td>想把多条回答整理成一个可带走的资料包。</td>
        <td><a href="/ai-markdone/manual/export/">批量导出</a></td>
      </tr>
      <tr>
        <th scope="row">好存</th>
        <td>想导出成不同格式，适配不同使用场景。</td>
        <td><a href="/ai-markdone/manual/export/">Markdown / PDF / PNG / ZIP 导出</a></td>
      </tr>
      <tr>
        <th scope="row">好存</th>
        <td>换设备或重装前，担心书签数据丢失。</td>
        <td><a href="/ai-markdone/manual/google-drive-backup/">Google Drive 备份与恢复</a></td>
      </tr>
    </tbody>
  </table>
</div>

<p class="amd-manual-next-copy">从阅读器开始，了解 AI-MarkDone 如何把一条 ChatGPT 长回答变成可阅读、可复制、可整理的工作面。</p>

<p class="amd-manual-config-copy">AI-MarkDone 也提供丰富的配置选项。你可以按需开关工具栏功能，调整 Reader、公式、注释、导出图片、备份和界面偏好，让这个工作台更贴合自己的使用习惯。</p>

<div class="amd-manual-cta-row">
  <a class="amd-manual-primary-cta" href="/ai-markdone/manual/reader/">了解 Reader 阅读器</a>
  <a class="amd-manual-secondary-cta" href="/ai-markdone/manual/settings/">了解所有配置项</a>
</div>
