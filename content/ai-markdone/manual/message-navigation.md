---
title: "消息导航与位置"
description: "用 AI-MarkDone 在 ChatGPT 长对话中切换消息，并在发送后尽量回到原来的阅读位置。"
type: "ai-markdone"
amd_lang: "zh"
page_kind: "manual_feature"
manual_feature: "message-position"
translation_url: "/ai-markdone/en/manual/message-navigation/"
screenshot_title: "后续这里放：ChatGPT 页面右下角消息切换按钮，以及发送消息后回到原阅读位置的对比截图。"
screenshot_detail: "截图重点是右下角上一条 / 下一条按钮、长对话中的历史消息位置，以及 Settings 里的 ChatGPT 页面行为配置。"
---

## 适合谁

你经常在一条很长的 ChatGPT 对话里来回看旧回答。消息一长，翻页会变得很奢侈；刚读到一半又发了新问题，也很容易被带到最新消息，刚才看的位置一下就没了。

## 从哪里打开

这些能力在 ChatGPT 页面里直接生效。需要调整时，打开 AI-MarkDone 扩展面板，进入 **Settings**，找到 **ChatGPT 页面行为**。

## 怎么做

1. 打开一条较长的 ChatGPT 对话。
2. 用右下角上一条 / 下一条按钮移动到附近消息。
3. 如果你习惯键盘操作，在 Settings 中保留“使用左右方向键切换消息”。
4. 阅读历史消息时，如果需要继续追问，直接发送新消息。
5. “发送后恢复阅读位置”开启时，AI-MarkDone 会尽量把你带回刚才阅读的位置。

## 这三个开关分别管什么

| 设置项 | 默认状态 | 作用 |
|---|---:|---|
| 发送后恢复阅读位置 | 开 | 阅读历史消息时，发送后会尽快回到原来的阅读位置。 |
| 显示右下角消息切换按钮 | 开 | 在 ChatGPT 对话页显示小型上一条 / 下一条消息按钮。 |
| 使用左右方向键切换消息 | 开 | 不在输入时，左/右方向键会跳到上一条或下一条消息；在 ChatGPT 输入框里，它们仍然只移动光标。 |

## 用的时候注意

- 方向键只在你没有输入文字时接管消息切换；光标在 ChatGPT 输入框里时，左右方向键仍然是移动光标。
- 发送后恢复位置会尽量回到原来的阅读点，但如果页面正在重新渲染，可能会有很短的回跳过程。
- 如果你只想保留最安静的界面，可以关闭右下角按钮，只保留方向键。

## 下一步

如果你经常处理公式，可以继续看 [公式复制/导出](/ai-markdone/manual/formulas/)。完整设置表在 [配置项总览](/ai-markdone/manual/settings/#chatgpt-page-behavior)。
