---
title: "复制一条回复的 Markdown"
description: "复制完整 ChatGPT 回复或提问与回复，保留 Markdown 结构，并按需要调整链接、代码和公式输出格式。"
type: "ai-markdone"
amd_lang: "zh"
page_kind: "manual_feature"
manual_feature: "copy-markdown"
translation_url: "/ai-markdone/en/manual/copy-markdown/"
prev_url: "/ai-markdone/manual/reader/"
prev_label: "上一步：Reader"
next_url: "/ai-markdone/manual/formulas/"
next_label: "下一步：公式"
---

**复制 Markdown** 用于拿到可以继续编辑的回答文本。标题、列表、引用、表格、代码和可取得源码的公式会尽量保留相应写法；复制结果还会受内容保留设置和目标编辑器影响。

## 复制完整回复

1. 找到要保存的 ChatGPT 回复，展开回复下方的 AI-MarkDone 工具栏。
2. 点击 **复制 Markdown**。
3. 粘贴到 Markdown 编辑器，检查标题、代码和公式。

Reader 中也有 **复制 Markdown**，用于当前正在阅读的回复。只需要其中几句话时，可以直接在 ChatGPT 页面或 Reader 中选择文字，再使用选区复制，见[局部复制](/ai-markdone/manual/partial-copy/)。不必为了复制片段强制切换到 Reader。

## 把提问和回复一起复制

把鼠标移到回复工具栏的 **复制 Markdown** 按钮，在下方次级操作中选择 **复制提问＋回复**。结果会用简短角色标题区分提问和回答。

同一按钮上方的 **复制为 PNG** 是图片操作，不是 Markdown 文本。需要一次保存多条消息，用[导出](/ai-markdone/manual/export/)。

## 决定哪些内容保留

打开 **设置 → 阅读与消息 → 内容保留规则**：

| 设置 | 默认值 | 会改变什么 |
|---|---|---|
| 保留回复链接 | 关闭 | 开启后尽量保留链接地址；关闭时保留可读文字，不保留链接目标。 |
| 包含回复代码块 | 开启 | 关闭后，整条复制、Reader 和消息导出中会省去代码块。 |

这组设置不会重写已保存的书签，也不会改变你明确选中的局部片段。复制结果少了链接或代码时，先检查这里，而不是反复点击复制。

公式写法在 **设置 → 复制与导出 → 复制 Markdown 时的公式格式** 中调整。它与“单击一个公式时的复制格式”分开；可以分别选择 `$...$ / $$...$$`、LaTeX 分隔符、裸 LaTeX、`equation` 或 `equation*`。详见[公式复制与导出](/ai-markdone/manual/formulas/)。

## 粘贴后应该看到什么

- 标题和列表保留 Markdown 层级。
- 完整代码块尽量保留语言标记、缩进和空行；页面上的 Run、Copy 等控制按钮不会当成代码复制。
- 表格转成 Markdown 表格；复杂合并单元格或目标编辑器不支持的格式可能需要调整。
- 可取得源码的公式保留 LaTeX；只有图片的公式不等于可编辑公式。
- 支持的图表、卡片保留可读说明或可取得的数据。需要一起保存静态图片附件，使用 **Markdown 离线包（ZIP）**。

## 结果不完整时

先等回复生成完成再复制。若正文在网页上已经不完整，先让目标回复重新加载；复制功能不会凭空补齐不可用的内容。

把结果先粘到纯 Markdown 编辑器中检查源码，再检查目标应用是否支持公式、表格和代码块。屏幕上显示正常，不代表每个编辑器都用相同规则渲染。仍有问题时，提供出错片段与复现步骤，见[问题排查](/ai-markdone/manual/troubleshooting/)。
