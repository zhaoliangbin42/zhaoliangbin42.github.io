---
title: "复制和导出公式"
description: "点击公式复制 LaTeX，分别设置单个公式和整段 Markdown 的格式，或复制、保存 PNG、SVG、MathML。"
type: "ai-markdone"
amd_lang: "zh"
page_kind: "manual_feature"
manual_feature: "formulas"
translation_url: "/ai-markdone/en/manual/formulas/"
prev_url: "/ai-markdone/manual/copy-markdown/"
prev_label: "上一步：Markdown 复制"
next_url: "/ai-markdone/manual/annotations/"
next_label: "下一步：灵动注释"
---

点击回复里的公式，可以复制它的源码。需要把公式放进幻灯片或文档时，可以使用公式上方的复制、保存按钮。输入框里尚未发送的公式也能预览和导出，见[输入公式与编辑助手](/ai-markdone/manual/composer/)。

## 复制一个公式

1. 在 ChatGPT 回复或 Reader 中找到公式。
2. 直接点击公式。默认行内公式带 `$...$`，行间公式带 `$$...$$`。
3. 粘贴到支持 LaTeX 的编辑器中。若只看到源码，先检查目标编辑器是否开启公式渲染。

点击没有反应时，打开 **设置 → 复制与导出**，确认已开启 **点击公式即可复制源码**。图片中的公式、无法取得源码的渲染结果，不能保证复制为可编辑的 LaTeX。

## 选择公式源码格式

在 **设置 → 复制与导出** 中，有两个独立设置：

- **单击一个公式时的复制格式**：只影响直接点击回复中的公式。
- **复制 Markdown 时的公式格式**：用于整条回复等 Markdown 复制和 Markdown 文件导出。它不会改变页面上公式的外观。

| 格式 | 行内公式 | 行间公式 |
|---|---|---|
| Markdown | `$x+y$` | `$$...$$` |
| LaTeX 分隔符 | `\(x+y\)` | `\[...\]` |
| 裸 LaTeX | `x+y` | 只保留公式源码 |
| LaTeX equation | `\(x+y\)` | `\begin{equation}...\end{equation}` |
| LaTeX equation* | `\(x+y\)` | `\begin{equation*}...\end{equation*}` |

`equation` 和 `equation*` 用于行间公式；行内公式仍使用 `\(...\)`。先按目标软件需要选择格式，再复制同一个公式检查结果。

## 复制或保存公式图片

1. 打开 **设置 → 按钮 → 公式按钮**，开启需要的回复公式操作。
2. 回到回复，把鼠标移到公式上。
3. 选择 **复制为 PNG**、**复制为 SVG**、**复制为 MathML**、**保存为 PNG** 或 **保存为 SVG**。
4. 复制后粘贴到目标软件；保存后打开下载的文件检查。

回复中的这五项操作默认关闭，需要分别开启。输入框公式预览的按钮单独设置，不受这些回复按钮开关控制。

| 用途 | 可以先尝试 |
|---|---|
| 继续编辑公式源码 | 点击复制 LaTeX |
| 在文档、聊天或幻灯片里直接展示 | PNG |
| 放大后仍希望保留矢量图形 | 保存 SVG |
| 粘到支持 MathML 的公式编辑器 | 复制 MathML |

**单个公式图片的字号** 位于 **设置 → 复制与导出**，默认 36px，可在 16–72px 之间调整。它影响单个公式 PNG/SVG，不改变回复正文字号，也不改变整条消息的 PNG 导出。

## 复制后没有出现预期结果

- SVG 剪贴板支持因浏览器和目标软件而异。复制不可用时，改用 **保存为 SVG**，再从目标软件插入文件。
- MathML 可能作为富文本公式粘贴，也可能只得到 XML 文本。这取决于浏览器剪贴板和目标编辑器；不能保证所有 Word 或 PowerPoint 版本都能直接转换。
- SVG 和 MathML 需要可用的公式源码；只有渲染画面时，PNG 可能仍可用，但不等于恢复了 LaTeX。
- 复制成功只说明写入了剪贴板。需要继续编辑时，务必在目标软件里确认公式仍可编辑。

整条回复要保存成文档或图片，请使用[消息导出](/ai-markdone/manual/export/)。
