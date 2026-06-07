---
title: "AI-MarkDone 插件层级"
description: "用一张交互图看懂 AI-MarkDone 如何从 ChatGPT 页面发现内容，并把 Reader、复制、书签、导出、公式、设置与备份连接起来。"
type: "ai-markdone"
amd_lang: "zh"
page_kind: "manual_feature"
manual_feature: "architecture"
translation_url: "/ai-markdone/en/manual/architecture/"
screenshot_title: "交互式插件层级图"
screenshot_detail: "这张图不需要截图；你可以直接拖动、缩放、全屏查看。"
prev_url: "/ai-markdone/manual/"
prev_label: "返回手册总览"
next_url: "/ai-markdone/manual/reader/"
next_label: "下一步：Reader 阅读器"
---

## 这张图解决什么问题

AI-MarkDone 不是一排互不相关的按钮。它先在 ChatGPT 页面里找到当前对话和消息，再把回答整理成可以被 Reader、复制、书签、导出、公式和设置共同使用的结构。

如果你想知道一个动作背后到底经过了哪些层，可以从这张图开始看。

## 怎么使用这张图

1. 从下往上看：底层是浏览器和扩展运行时，中间是 ChatGPT 适配和内容服务，最上面才是你点击的功能。
2. 点击顶部的快捷入口，可以单独查看内容发现、Reader、复制、书签、导出、公式、设置与备份、消息导航。
3. 点击图中的节点，可以在右侧看到它负责什么；双击带箭头的节点，可以进入更具体的子链路。
4. 图面支持拖动、缩放、复位和全屏。内容多的时候，建议直接全屏看。

## 交互式插件层级图

{{< amd-plugin-architecture lang="zh" >}}

## 链路索引

### 内容发现

ChatGPT 页面先提供原始消息。AI-MarkDone 通过页面适配器和对话发现引擎整理出对话快照，再交给 Reader 内容源使用。

### Reader

Reader 使用同一份 ReaderItem 数据，提供 Markdown 阅读、消息切换、目录跳转、Sticky、灵动注释和快速发送。

### 复制

复制可以来自消息工具栏，也可以来自 Reader 里的选区。最后都会整理成更适合粘贴的 Markdown，再写入剪贴板。

### 书签

书签保存的不只是文字，还包括预览、位置和管理信息。后续你可以搜索、分类、预览，并跳回原来的回答位置。

### 导出

导出会重新收集当前消息内容，再按照 Markdown、PDF、PNG 或 ZIP 的目标格式整理输出。

### 公式

公式动作从页面里的公式节点开始。你可以复制 LaTeX，也可以按需导出 PNG、SVG 或 MathML。

### 设置与备份

设置控制工具栏、Reader、公式、导出、消息导航和备份。书签备份会通过后台服务写入你授权的 Google Drive 文件。

### 消息导航

消息导航依赖页面中的消息锚点。Reader 底部分页器、右下角消息按钮和左右方向键，都会使用这条链路。

## 下一步

- 想先看阅读体验，继续看 [Reader 阅读器](/ai-markdone/manual/reader/)。
- 想了解复制链路，继续看 [局部复制](/ai-markdone/manual/partial-copy/) 和 [复制 Markdown](/ai-markdone/manual/copy-markdown/)。
- 想保存重要回答，继续看 [书签保存](/ai-markdone/manual/bookmarks/)。
- 想整理成文件，继续看 [批量导出](/ai-markdone/manual/export/)。
- 想调整插件行为，继续看 [配置项总览](/ai-markdone/manual/settings/)。
