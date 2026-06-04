---
title: "复制 ChatGPT 为 Markdown"
description: "用 AI-MarkDone 复制完整 ChatGPT 回答，或在 Reader 中复制局部选区，并尽量保留公式、表格和代码块结构。"
type: "ai-markdone"
amd_lang: "zh"
page_kind: "manual_feature"
manual_feature: "copy-markdown"
translation_url: "/ai-markdone/en/manual/copy-markdown/"
screenshot_title: "后续这里放：消息工具栏的复制 Markdown 按钮，以及 Reader 中选中局部内容后的复制动作。"
screenshot_detail: "截图最好同时展示原始回答和复制后的 Markdown 结果。"
prev_url: "/ai-markdone/manual/reader/"
prev_label: "上一步：Reader"
next_url: "/ai-markdone/manual/formulas/"
next_label: "下一步：公式"
---

## 这个功能解决什么问题

ChatGPT 自带复制经常不够稳定。你想要 Markdown，结果可能带着引用噪音、丢掉表格结构，或者把公式变成不好复用的文本。

AI-MarkDone 的复制动作更偏向“拿去继续写”。它会尽量按源码边界处理公式、代码块、表格、图片和局部选区。

## 什么时候用

- 想把完整回答放进 Obsidian、Typora、VS Code 或 Git。
- 只想复制长回答中的几段。
- 回答里有代码块、列表、表格或公式。
- 想减少复制后的二次清理。

## 从哪里打开

整条回答用消息工具栏里的“复制 Markdown”。局部复制先进入 Reader，再选择具体范围。

## 具体怎么做

1. 复制整条回答时，直接点击消息工具栏里的“复制 Markdown”。
2. 复制局部内容时，先打开 Reader。
3. 选中你要的段落、列表、表格、代码块或公式。
4. 使用 Reader 里的复制动作。
5. 粘贴到你的笔记或编辑器中检查结果。
6. 如果是代码块，确认链接没有被当作引用噪音误删。
7. 如果是表格或公式，确认目标编辑器支持对应格式。

## 常见问题

### 为什么局部复制要在 Reader 里做？

Reader 能更稳定地知道你选中的内容属于哪个 Markdown 单元。原页面的 DOM 更复杂，选区更容易被页面结构打断。

### 所有内容都能完美还原吗？

不能保证。AI-MarkDone 会尽量保留闭合单元的 Markdown 结构，但最终效果也取决于 ChatGPT 当前页面和目标编辑器。

