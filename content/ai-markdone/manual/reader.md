---
title: "ChatGPT Reader 阅读模式"
description: "在 AI-MarkDone Reader 中阅读 ChatGPT 长回答，使用 Markdown 渲染、消息切换、标题大纲、Sticky 摘录、灵动注释和发送框继续追问。"
type: "ai-markdone"
amd_lang: "zh"
page_kind: "manual_feature"
manual_feature: "reader"
translation_url: "/ai-markdone/en/manual/reader/"
screenshot_title: "后续这里放：Reader 面板、Markdown 渲染、公式、标题大纲、底部分页、Sticky 区和发送框。"
screenshot_detail: "截图重点是 Reader 如何把一条 ChatGPT 长回答变成可阅读的 Markdown 页面。"
prev_url: "/ai-markdone/manual/architecture/"
prev_label: "上一步：插件层级"
next_url: "/ai-markdone/manual/partial-copy/"
next_label: "下一步：局部复制"
---

## Reader 是做什么的

ChatGPT 很擅长回答问题，但长回答真正读起来时，原页面并不总是舒服。Reader 把当前回答放进一个更安静的阅读面板里，让你能更沉浸地进行阅读。

Reader 里的动作都围绕一件事：读长回答时，不要被一切事情打扰。你可以在里面快速完成批注、复制、切换消息等动作。听我一一道来。

1. 更干净的阅读空间：当前回答会以 Markdown 阅读形态重新排版，标题、段落、代码、表格、公式会更适合连续阅读。
2. 更快的消息切换：你可以用底部的分页器切换消息，也可以配合左右方向键，在长对话里快速回看前后回答。
3. 长文快速跳转到想要的位置：针对长消息，Reader 会自动识别目录，并支持在消息内部快速跳转。
4. 一切事情都可以原地解决：无论你是看到后面忘了前面的信息，还是想将部分重要内容摘录出去，都可以在 Reader 里完成。
5. 在 Reader 里继续追问：Reader 左下角提供快速发送入口。读到某个地方想继续问，可以直接在 Reader 里发出去。

## 怎么打开 Reader

在 ChatGPT 每条消息底部的 AI-MarkDone 工具栏里，点击 **Reader**，就可以打开当前消息的阅读器。

打开后，Reader 会载入当前回答。你可以继续阅读这一条，也可以切换到前后消息。

## 功能概览

1. Markdown 阅读排版
   Reader 会把回答整理成更适合阅读的 Markdown 页面。长段落、标题、列表、代码块、表格和公式会更清楚。回答一长，这个差别会很明显。

2. 消息切换
   底部分页器可以切换上一条 / 下一条消息。如果你开启了方向键切换，也可以用 Left / Right 在消息之间移动。详细说明见：[消息导航与位置](/ai-markdone/manual/message-navigation/)。

3. 长文目录跳转
   当回答里有多个标题时，Reader 会识别出目录。长回答里想跳到某一节，直接点右侧标题就行。这个功能可以在 Settings 里开启或关闭。

4. 局部复制
   只想复制回答中的一小段时，直接在 Reader 里选中对应内容。AI-MarkDone 会尽量保留 Markdown 层级、代码、表格和公式边界。详细说明见：[局部复制](/ai-markdone/manual/partial-copy/)。

5. Sticky 临时摘录
   看到后面忘了前面时，把关键公式、假设、结论先 Stick 到旁边。它适合临时对照，也适合先把重要内容摘出来再慢慢处理。详细说明见：[Sticky 临时摘录](/ai-markdone/manual/sticky/)。

6. 灵动注释
   读到某一句不会、想追问、想改写，都可以直接选中并写注释。注释可以复制，也可以插入到 Reader 的发送框里继续追问。详细说明见：[灵动注释](/ai-markdone/manual/annotations/)。

7. 快速发送
   Reader 左下角提供发送入口。读到某个地方想继续问，可以直接在 Reader 里发出去。一选、一问、一存，动作会顺很多。

8. 右上角工具区
   Reader 右上角放着常用操作，比如刷新、复制、设置、全屏、关闭。具体显示哪些按钮，会跟你的设置有关。

## 截图建议

这里后续放一张 Reader 总览截图。建议在图里标注：

1. Reader 正文阅读区
2. 右侧目录导航
3. 左侧 Sticky 区
4. 底部消息切换
5. 左下角快速发送入口
6. 右上角工具区
7. 选中文本后的复制 / 注释 / Stick 动作

## 常见问题

### 什么时候值得打开 Reader？

遇到数学推导、实验方案、代码解释，或者一条包含多级标题的回答，就可以打开 Reader。短回答直接在原页面处理就好，Reader 更适合那些需要坐下来慢慢看的内容。

### Reader 里的发送入口适合问什么？

适合问和当前阅读位置强相关的问题。比如“这里的公式为什么这么化简”“这一节能不能给一个例子”“把刚才这段改成论文表述”。问题刚冒出来时就发出去，通常比滚回输入框以后再想一遍更顺。

### Sticky 应该放什么？

放那些“现在有用，但还没决定怎么处理”的内容。比如前文的假设、关键公式、一个中间结论、几条可能要比较的方案。读完以后再决定复制、注释、追问或保存书签。

### 目录为什么有时不出现？

目录依赖回答里的 Markdown 标题。如果这一条回答本身没有标题，或者 Settings 里关闭了 Reader 标题大纲，就不会显示。遇到很长但没有标题的回答，可以让 ChatGPT 重新按小节整理一次。

### 复制时要注意什么？

尽量选完整的段落、列表项、代码块或公式块，不要从结构中间硬切一半。这样复制出去的 Markdown 更干净，公式和表格也更不容易坏。

### Reader 里的东西会自动保存吗？

不会。Reader 是阅读和处理当前回答的工作区，Sticky 也是临时的。如果这条内容以后还要找回，请保存成 [书签](/ai-markdone/manual/bookmarks/)；如果要带到别的软件里，请用复制或导出。
