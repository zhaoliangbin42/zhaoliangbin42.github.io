---
title: "AI-MarkDone 手册"
description: "详细介绍 AI-MarkDone 的使用方法和提效技巧，按好读、好记、好问、好存梳理 ChatGPT 工作流。"
type: "ai-markdone"
amd_lang: "zh"
page_kind: "manual"
translation_url: "/ai-markdone/en/manual/"
---

AI-MarkDone 为 ChatGPT 提供阅读、复制、注释、书签和导出工具，适合处理长回答、公式与代码。

安装扩展并刷新 ChatGPT 后，从消息下方的工具栏开始使用。你可以按下面四类需求选择功能，也可以先阅读[安装与开始](/ai-markdone/manual/install/)。

AI-MarkDone 的核心功能可以分成四类：好读、好记、好问、好存。

<div class="amd-manual-goal-grid">
  <article>
    <span>好读</span>
    <p>用 Reader 阅读长回答、查看标题大纲和切换消息，在 Sticky 栏临时保留需要对照的片段。</p>
  </article>
  <article>
    <span>好记</span>
    <p>复制整条回答或选中片段为 Markdown，单独复制公式的 LaTeX 源码，或导出公式图片。</p>
  </article>
  <article>
    <span>好问</span>
    <p>对选中的原文写下注释，配合 Prompt 模板整理成下一轮追问。</p>
  </article>
  <article>
    <span>好存</span>
    <p>将回答保存为书签，按文件夹整理；需要归档或分享时，批量导出为 Markdown、PDF 或 PNG。</p>
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
        <th>类别</th>
        <th>你遇到的需求</th>
        <th>对应功能/面板</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">好读</th>
        <td>ChatGPT 回答太长，同一个页面内消息太多了，而且还卡顿。</td>
        <td><a href="/ai-markdone/manual/reader/">Reader 阅读器</a></td>
      </tr>
      <tr>
        <th scope="row">好读</th>
        <td>想要快速切换上一条/下一条消息。</td>
        <td><a href="/ai-markdone/manual/message-navigation/">消息导航与位置</a></td>
      </tr>
      <tr>
        <th scope="row">好读</th>
        <td>对于长消息，特别是 thinking/pro 级别的长消息，我想看见完整的目录，并且随时跳转到对应的标题。</td>
        <td><a href="/ai-markdone/manual/reader/">标题大纲</a></td>
      </tr>
      <tr>
        <th scope="row">好读</th>
        <td>发送消息之后，希望保持窗口位置不变。</td>
        <td><a href="/ai-markdone/manual/message-navigation/">发送后保持位置</a></td>
      </tr>
      <tr>
        <th scope="row">好读</th>
        <td>有重要内容，我想固定住，避免看到下文的时候遗忘。</td>
        <td><a href="/ai-markdone/manual/sticky/">Sticky 临时摘录</a></td>
      </tr>
      <tr>
        <th scope="row">好记</th>
        <td>想把整一条回答都直接粘进 Obsidian、Notion、Typora 等软件内，并且保证格式正确。</td>
        <td><a href="/ai-markdone/manual/copy-markdown/">复制 Markdown</a></td>
      </tr>
      <tr>
        <th scope="row">好记</th>
        <td>我只想带格式地复制回答中的某一小部分内容，包括公式、代码块。</td>
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
        <td>想将注释的内容整理成 Prompt，直接发送给大模型，完成追问。亦或者经常重复某类追问方式，希望更快组织表达。</td>
        <td><a href="/ai-markdone/manual/reader/">Reader 发送框</a></td>
      </tr>
      <tr>
        <th scope="row">好存</th>
        <td>得到一条重要的回答，不想以后找不到了。</td>
        <td><a href="/ai-markdone/manual/bookmarks/">书签保存</a></td>
      </tr>
      <tr>
        <th scope="row">好存</th>
        <td>针对大量的书签，想要进行分类整理或者快速检索。</td>
        <td><a href="/ai-markdone/manual/bookmarks/">书签管理</a></td>
      </tr>
      <tr>
        <th scope="row">好存</th>
        <td>把好多条回答导出成 Markdown、PDF 或 PNG 格式，易于保存，也易于分享。</td>
        <td><a href="/ai-markdone/manual/export/">批量导出</a></td>
      </tr>
      <tr>
        <th scope="row">好存</th>
        <td>换设备或重装前，担心书签数据丢失。</td>
        <td><a href="/ai-markdone/manual/google-drive-backup/">Google Drive 备份与恢复</a></td>
      </tr>
    </tbody>
  </table>
</div>

<p class="amd-manual-next-copy">如果你想先看清楚整套插件如何运转，可以从插件层级开始；如果你更想直接上手，就从 Reader 开始。</p>

<p class="amd-manual-config-copy">AI-MarkDone 也提供丰富的配置选项。你可以按需开关工具栏功能，调整 Reader、公式、注释、导出图片、备份和界面偏好，让这个工作台更贴合自己的使用习惯。</p>

<div class="amd-manual-cta-row">
  <a class="amd-manual-primary-cta" href="/ai-markdone/manual/architecture/">了解插件层级</a>
  <a class="amd-manual-secondary-cta" href="/ai-markdone/manual/reader/">了解 Reader 阅读器</a>
  <a class="amd-manual-secondary-cta" href="/ai-markdone/manual/settings/">了解所有配置项</a>
</div>
