# Liangbin Zhao — Research, writing & tools

个人学术网站与 AI-MarkDone 产品站。使用原生 Hugo 生成静态 HTML，共享浅色 Signal 设计系统，不依赖 Hugoplate、Tailwind、React 或客户端路由。

- 网站：https://zhaoliangbin42.github.io/
- 设计规范：`DESIGN.md`
- 工作约定：`AGENTS.md`

## 本地运行与验证

需要 Hugo extended 0.161.1 或更新版本，以及 Node.js。npm 依赖仅用于代码格式化。

```bash
npm install
npm run dev
```

本地预览位于 `http://localhost:1313/`。开发/预览环境写入 `/tmp/liangbin-site-preview`，不会覆盖发布产物。

```bash
npm run build -- --environment preview --cleanDestinationDir
node scripts/verify-site.mjs /tmp/liangbin-site-preview
node scripts/verify-ai-markdone-site.mjs /tmp/liangbin-site-preview
```

自动检查覆盖页面结构、图片与站内目标、语言对应关系、历史别名、产品能力边界和内部制作说明。发布前还需在浏览器检查桌面、手机、滚动动效、文章公式、代码复制、目录、研究筛选和产品工作流。

## 内容与路由

| 内容 | 中文 | English |
| --- | --- | --- |
| 首页 | `/` | `/en/` |
| 研究 | `/research/` | `/en/research/` |
| 写作索引 | `/writing/` | `/en/writing/` |
| 文章 | `/notes/<slug>/` | `/en/notes/<slug>/` |
| 作品 | `/projects/` | `/en/projects/` |
| 关于 | `/about/` | `/en/about/` |
| 联系 | `/contact/` | `/en/contact/` |
| AI-MarkDone | `/ai-markdone/` | `/ai-markdone/en/` |

好友迹 / Mappamory 的作品入口直接打开独立官网 `https://mappamory.com`。

个人站采用 Hugo 的 `index.md` / `index.en.md` 翻译对，配对文件使用相同 `translationKey`。图片放在同一个 page bundle 的 `index.assets/`。中文原文章地址和 Giscus `pathname` 评论映射保持不变；原型的 `/writing/<slug>/` 地址是兼容别名。

英文文件的 `aliases` 相对语言根目录填写，例如 `/writing/example/`，不要重复添加 `/en/`。草稿继续使用 `draft: true`。

AI-MarkDone 为保留现有地址，继续使用 `amd_lang` 与 `translation_url`，英文文件在 `content/ai-markdone/en/`。产品保留自己的导航、页脚、手册和一个返回博客入口。

## 源码结构

```text
content/                 Markdown 内容与翻译
  notes/                 博客及其 page bundle 图片
  research/              论文列表与研究详情
  codes/                 实现与复现说明
  projects/              作品展示
  ai-markdone/           产品页、工作流、手册、FAQ、隐私与联系
layouts/                 Hugo 页面模板与渲染钩子
  partials/signal/        个人站共享壳与阅读界面
  partials/ai-markdone/   独立产品壳与产品内容组件
assets/css/signal*.css    共享视觉、页面和阅读样式
assets/js/signal*.js      滚动、筛选、目录、复制等渐进增强
assets/ai-markdone/       产品图片、图标、交互和样式
static/images/signal/    首页与作品图片
static/fonts/            本地字体及许可证
data/signal/             首页文案、论文元数据和图标
data/ai_markdone/        手册导航与支持者数据
scripts/                 网站验证脚本
docs/                    生产构建产物
```

`data/signal/research.json` 是论文元数据的唯一来源；`data/ai_markdone/manual_nav.toml` 是产品手册目录的唯一来源。正式页面中不要出现设计制作过程、原型交付或截图计划说明。

数学通过 Goldmark passthrough 保留 TeX，并按需加载 MathJax。代码使用 Hugo Chroma，Mermaid 使用渲染钩子。Plotly 仍由 `plotly-interactive` 短代码承载。正文图片、字体和产品资产必须可纳入 Git，避免只在本机缓存中存在。

## 发布

源码维护在 `dev`；GitHub Pages 从 `dev` 分支的 `/docs` 发布。`master` 保留为旧部署历史，不再由脚本强制覆盖。

1. 在功能分支完成修改与隔离验证。
2. 执行 `npm run build -- --cleanDestinationDir`，生成完整 `docs/`。
3. 执行 `npm run verify:site` 与 `npm run verify:ai-markdone`，再检查生产构建的浏览器表现。
4. 查看 `git status --short`，将本次源码和 `docs/` 一起提交。
5. 将通过验收的提交合入并推送 `dev`。
6. 核实 GitHub Pages 构建成功，并检查线上页面的内容、资源和主要跳转。

`static/.nojekyll` 随产物发布。不要手改 `docs/`，不要在产物目录初始化另一个 Git 仓库，也不要强制推送部署。编辑器数据库、侧车元数据、构建锁与旧 Tailwind 统计不属于发布内容。
