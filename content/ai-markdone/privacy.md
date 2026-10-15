---
title: "AI-MarkDone 隐私说明"
description: "说明 AI-MarkDone 如何处理本地资料库、公式、导出、浏览器权限，以及可选的手动 Google Drive 备份。"
type: "ai-markdone"
amd_lang: "zh"
page_kind: "privacy"
translation_url: "/ai-markdone/en/privacy/"
policy_lead: "资料库默认保存在浏览器中。本页说明哪些内容会保存、什么时候涉及外部服务，以及怎样移除本地和云端副本。"
policy_updated: "2026-10-15"
privacy_summary: [{"icon": "database", "title": "保存在当前浏览器", "text": "书签、高亮和已持久保存的注释属于当前浏览器配置文件。"}, {"icon": "cloud", "title": "备份由你发起", "text": "登录 Drive 不会上传；点击立即备份才会创建快照。"}, {"icon": "shield-check", "title": "没有自有内容服务器", "text": "资料库内容不上传到 AI-MarkDone 自有后端。"}]
privacy_menu: [{"id": "scope", "title": "适用范围"}, {"id": "no-collection", "title": "不会上传到 AI-MarkDone 自有内容服务器"}, {"id": "local-processing", "title": "阅读、输入、复制和导出时"}, {"id": "storage", "title": "保存的数据与保留条件"}, {"id": "google-drive", "title": "可选的 Google Drive 备份"}, {"id": "permissions", "title": "权限为什么需要"}, {"id": "sharing", "title": "发送、分享和外部服务"}, {"id": "delete", "title": "删除资料、退出登录与卸载"}, {"id": "contact", "title": "更新与联系"}]
---

<section id="scope">

## 适用范围

本页说明 AI-MarkDone 扩展在阅读、复制、公式编辑、消息导航、注释、高亮、书签、导出和备份中的数据处理。

完整工作区用于 ChatGPT。当前安装包还在 Gemini、Claude、DeepSeek 的指定网站提供公式处理，并声明对应的网站访问权限。这不代表这些网站具有全部 ChatGPT 工作区功能。

你使用 ChatGPT、Google Drive、浏览器同步或其他外部服务时，也会受到相应服务的数据处理规则约束。

</section>

<section id="no-collection">

## 不会上传到 AI-MarkDone 自有内容服务器

AI-MarkDone 不运营用于接收你的对话、资料库、注释或高亮内容的自有服务器。复制、格式整理、公式渲染和文件生成在浏览器中处理；资料库默认保存在当前浏览器配置文件的扩展存储中。

访问 ChatGPT、加载原文图片、发送消息、浏览器同步和 Google Drive 备份会连接相应服务，具体用途见下文。

AI-MarkDone 不出售用户数据，不把对话内容共享给广告平台，也不把 Google 用户数据用于广告、再营销、信用判断或无关的产品分析。

</section>

<section id="local-processing">

## 阅读、输入、复制和导出时

- **阅读与导航**：扩展处理你打开的对话内容和可取得的消息数据，用于 Reader、目录、复制和导出。它可能使用当前 ChatGPT 会话取得的内容；是否能取得旧消息取决于网站和账号的访问状态。
- **输入与公式**：输入增强读取当前输入框的文字和光标位置，以进行本地 Markdown 编辑、LaTeX 联想与公式预览。预览或导出一个公式本身不等于发送消息。
- **剪贴板**：点击复制或使用相应快捷键后，扩展把选定的文字、公式或图片写入系统剪贴板。其他软件如何读取和使用剪贴板，取决于你的系统与软件。
- **导出文件**：Markdown、离线 ZIP、PDF 和 PNG 保存到你选择的本地位置。文件可能包含提问、回复、选中文字、图片、来源链接或说明；分享前请检查内容。
- **图片与视觉内容**：Reader 和导出可能加载原页面中的图片或使用已加载的图表、卡片。图片来源网站可能接收正常的图片请求信息；并非所有远程内容都能保存为离线附件。

</section>

<section id="storage">

## 保存的数据与保留条件

| 数据 | 可能保存的内容 | 保留方式 |
|---|---|---|
| 资料库书签 | 页面或对话链接、标题、文件夹、消息标识、保存时间，以及选择保存的提问和回复或摘要。 | 保存在当前浏览器配置文件中，直到你删除或清理扩展数据。 |
| 高亮与已保存注释 | 选中文字、标记颜色、注释正文、来源对话和定位信息、文件夹等。 | 高亮会保存；新建注释是否跨刷新保留取决于“保存新建的注释”。已持久保存的记录不受关闭该开关影响。 |
| 设置、提示词与模板 | 外观、按钮、阅读、导出等偏好，以及你主动保存的提示词和注释复制模板。 | 使用浏览器扩展存储；其中部分设置可能通过浏览器厂商的同步存储同步。 |
| Google Drive 连接 | 连接状态、备份时间，以及 Drive 返回的账号邮箱、名称或头像链接。 | 用于显示所连接账号和备份状态。 |
| Google 授权缓存 | 访问令牌、有效期及必要连接信息。 | 缓存在扩展本地存储中以执行授权操作；退出登录时清除缓存，并尝试撤销授权。 |

未提交的注释编辑不会自动保存。点击“保存”后的新注释仍遵循“保存新建的注释”设置；关闭时它只留在当前页面。Sticky 摘录区也是临时内容，刷新会清空。

浏览器同步由浏览器厂商提供，并取决于浏览器能力和你的账号设置；它不是 AI-MarkDone 自有云服务，也不能替代完整资料库备份。

</section>

<section id="google-drive">

## 可选的 Google Drive 备份

只有你主动连接 Google 账号并点击 **立即备份**，才会上传资料库快照。连接账号不会自动上传，后续编辑和删除也不会自动同步。

扩展申请 `https://www.googleapis.com/auth/drive.file` 权限，用于创建和管理 AI-MarkDone 创建或由你通过它打开的文件，不申请整个 Drive 的广泛读写权限。备份从浏览器直接传到你的 Google Drive，目录为 `AI-MarkDone/Backups/bookmarks`。

新备份包含已保存的书签、高亮、注释和文件夹；目录名沿用旧版本，不代表只备份书签。未保存的编辑、临时注释、Sticky 摘录、提示词、扩展设置、自定义模板及账号凭据不进入这份备份。旧书签备份仍可读取，但只能恢复其实际包含的范围。

备份完成前会读取并校验上传结果。恢复时会列出备份、下载你选择的文件、显示合并预览，并在你确认后合并到本地。正常合并保留本地独有条目与冲突版本，不把远端删除传播到本地。

你请求删除某份备份时，扩展将其移入 Drive 回收站。上传中断可能留下未确认完成的文件；校验失败后会尝试清理，必要时提示你手动处理。

AI-MarkDone 对从 Google API 获得的信息的使用和转移，将遵守 Chrome Web Store User Data Policy，包括 Limited Use 要求：

> The use and transfer of information received from Google APIs by AI-MarkDone will adhere to the Chrome Web Store User Data Policy, including the Limited Use requirements.

具体步骤见 [Google Drive 备份](/ai-markdone/manual/google-drive-backup/)。

</section>

<section id="permissions">

## 权限为什么需要

| 权限或网站 | 用途 |
|---|---|
| `storage` | 保存资料库、设置、提示词、模板、备份状态和必要的授权缓存。 |
| `clipboardWrite` | 在你触发复制时，把文字、公式或图片写入剪贴板。 |
| `identity` | 为可选 Google Drive 备份打开 Google 授权流程。 |
| `chatgpt.com`、`chat.openai.com` | 在 ChatGPT 页面提供阅读、复制、输入增强、消息导航和导出等功能。 |
| `gemini.google.com`、`claude.ai`、`chat.deepseek.com` | 在这些已声明的网站中识别和处理公式；不表示完整工作区支持。 |
| `www.googleapis.com`、`oauth2.googleapis.com` | 与 Google Drive 进行授权后的文件操作、验证和撤销授权。 |

Google 登录页面可能由浏览器身份接口打开。权限提示中的域名不表示你的全部浏览记录或资料库会自动发送到这些网站。

</section>

<section id="sharing">

## 发送、分享和外部服务

- 你主动发送输入框中的内容，或把原文与注释插入后发送给 ChatGPT，这些内容会按 ChatGPT 的正常发送流程交给该服务。仅插入文字不会自动发送。
- 复制后粘贴到其他软件、分享导出文件、打开链接或发送反馈邮件，属于你选择的后续操作。相关服务会按自己的规则处理收到的数据。
- Google Drive 备份是你授权的另一种传输，范围以上文列出的备份内容为准；扩展不会把 OAuth 令牌放进备份或设置导出文件。
- 官网和扩展是不同场景。官网部署使用 Google Analytics 统计网站访问；官网统计不会因此取得扩展资料库的内容。

</section>

<section id="delete">

## 删除资料、退出登录与卸载

1. 在资料库中删除不再需要的书签、高亮或注释；删除前确认选中范围。
2. 更换浏览器、清理扩展存储或卸载前，先导出 [本地资料库备份](/ai-markdone/manual/privacy-storage/)。清理或卸载会移除当前配置文件中的本地扩展数据。
3. 不再使用 Google Drive 连接时，选择 **退出登录**。扩展会清理缓存授权，并尝试撤销 Google 授权。
4. 需要移除云端副本时，单独删除 Drive 中的备份。退出登录、卸载扩展或删除本地条目，都不会自动删除已经上传的文件。
5. 已下载的 JSON、Markdown、ZIP、PDF 和 PNG 由你保管；需要时从下载目录或其他保存位置删除。

把一份 Drive 备份移入回收站不会删除本地资料。反过来，旧备份中可能仍保留之后在本地删除的内容。

</section>

<section id="contact">

## 更新与联系

本页根据当前功能的数据处理方式更新。若后续功能改变保存或传输范围，说明也会相应调整。

隐私相关问题可发送到 [zhaoliangbin42@gmail.com](mailto:zhaoliangbin42@gmail.com)，或通过 [GitHub Issues](https://github.com/zhaoliangbin42/AI-MarkDone/issues) 联系。反馈时不需要公开完整对话、授权令牌或整份资料库备份。

</section>
