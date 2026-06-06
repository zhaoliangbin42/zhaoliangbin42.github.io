---
title: "问题排查"
description: "工具栏不显示、复制或导出不符合预期、书签或备份异常时，按步骤自行检查 AI-MarkDone。"
type: "ai-markdone"
amd_lang: "zh"
page_kind: "manual_feature"
manual_feature: "troubleshooting"
translation_url: "/ai-markdone/en/manual/troubleshooting/"
screenshot_title: "后续这里放：浏览器扩展管理页、ChatGPT 页面工具栏、控制台错误截图的拼图。"
screenshot_detail: "截图重点是用户反馈时需要提供哪些信息。"
---

## 工具栏不显示

先做最简单的检查：

1. 确认你正在 ChatGPT 页面上使用。
2. 刷新 ChatGPT 页面。
3. 打开浏览器扩展管理页，确认 AI-MarkDone 已启用。
4. 检查扩展是否有访问当前网站的权限。
5. 如果 ChatGPT 页面刚更新，等页面加载完成后再看一次。

## 复制或导出不符合预期

复制出来的结果，最后还会受目标编辑器影响。建议这样排查：

1. 先粘贴到纯 Markdown 编辑器里看源码是否完整。
2. 公式显示异常时，确认目标编辑器是否支持 LaTeX。
3. PNG 导出太长或太大时，降低导出宽度或倍率。
4. PDF 导出异常时，检查浏览器打印预览设置。

## 书签与备份排查

1. 先确认书签是否出现在书签管理面板。
2. 大改动前先导出本地备份。
3. Google Drive 恢复前，先确认当前账号是否是你备份时使用的账号。
4. 恢复前保留一份当前数据，避免误操作后没有退路。

## 给开发者反馈

如果你愿意反馈，最好附上这些信息：

- 浏览器名称和版本。
- AI-MarkDone 插件版本。
- 问题发生在哪个页面或哪个按钮。
- 截图或录屏。
- 简短复现步骤。
- 如果你懂控制台，可以附上相关错误。

公开问题建议发到 [GitHub Issue](https://github.com/zhaoliangbin42/AI-MarkDone/issues)。不方便公开时，可以发邮件到 `zhaoliangbin42@gmail.com`。
