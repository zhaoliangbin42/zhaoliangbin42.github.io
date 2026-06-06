# Liangbin' Notes

[toc]

这个仓库包含了我的个人网站。

访问网站: [Liangbin's Notes](https://zhaoliangbin42.github.io)

## 安装与运行

```bash
# 安装所有依赖
npm install

# 启动开发服务器
npm run dev  # Hugo 默认会在 http://localhost:1313 启动本地站点

# 构建网站
npm run build  # 构建完成后的文件会生成在 docs/ 目录下

# 预览构建后的网站
npm run preview

# Hugo相关命令
hugo  # 构建网站
hugo server  # 启动本地开发服务器
hugo new content/notes/新笔记名.md  # 创建新笔记
hugo --minify  # 构建并压缩网站；发布前优先使用 npm run build，确保参数一致
```

本网站构建之后，会自动生成一个`docs/`文件夹，该文件夹包含网页相关的所有静态文件，在上传github的时候，只需要上传该文件夹即可。后面会有部署到Github的操作流程。

## 项目结构

```
.
├── assets/            # 资源文件（SCSS、JS等）
├── content/           # 内容文件夹
│   ├── about/         # 关于页面
│   ├── codes/         # 代码相关
│   ├── contact/       # 联系方式
│   ├── notes/         # 笔记
│   ├── pages/         # 其他页面
│   ├── projects/      # 项目
│   └── sections/      # 首页分区
├── layouts/           # 自定义布局模板
├── static/            # 静态资源文件（直接复制到输出目录）
├── hugo.toml          # 主要配置文件
├── package.json       # NPM配置
└── docs/              # 构建输出目录（GitHub Pages部署目录）
```

## 如何修改内容

### 新增笔记

所有笔记都存放在`content/`目录下，以Markdown格式编写。

创建新笔记步骤：

1. 在相应文件夹下创建一个新的Markdown文件（`.md`或`.md`）
2. 添加必要的前置元数据（frontmatter）
3. 编写笔记内容
4. 相关资源（如图片）可以放在同名文件夹内的assets目录中，例如：`content/notes/新笔记名/index.assets/`



### 笔记元数据说明

每篇笔记都需要在文件开头添加以下元数据：

```markdown
---
title: "笔记标题"           # 笔记的主标题，会显示在页面顶部
meta_title: "标签页中的标题"  # 显示在浏览器标签页中的标题（可选）
description: "笔记简短描述"   # 用于SEO和预览的简短描述
date: "2025-04-11"        # 发布日期，格式为YYYY-MM-DD
image: "index.assets/banner.png"  # 笔记的封面图片路径（可选）
author: "作者名称"          # 作者信息
tags: ["标签1", "标签2"]    # 相关标签，用于分类和搜索
categories: ["Communication"]  # 文章分类，比标签粒度更大
summary: "显示在列表页面的摘要"  # 在列表页面显示的摘要内容
math: true               # 是否需要数学公式渲染支持，true或false
draft: false             # 草稿状态，true则不会在生产环境显示
---
```

元数据字段说明：
- **title**: 笔记的标题，会显示在页面顶部
- **meta_title**: 浏览器标签页显示的标题（可选）
- **description**: 简短描述，用于SEO和预览
- **date**: 发布日期，格式为YYYY-MM-DD
- **image**: 笔记的封面图片路径（可选）
- **author**: 文章作者
- **tags**: 标签数组，用于细粒度分类和筛选
- **categories**: 文章分类，比标签粒度更大
- **summary**: 在列表页面显示的文章摘要
- **math**: 是否启用数学公式渲染（如需显示LaTeX公式）
- **draft**: 草稿状态，设为true则不会在生产环境中显示

### 修改网站设置和样式

- 网站的主要配置在根目录的`hugo.toml`文件中
- 主题相关设置在 themes 目录下


### 新增页面类型

如果要创建一个新的页面类型(如projects、works等)：

1. **创建内容目录**：
   ```bash
   mkdir -p content/projects
   ```

2. **创建_index.md文件**：
   ```bash
   hugo new content/projects/_index.md
   ```

3. **在_index.md中添加元数据**：
   ```markdown
   ---
   title: "项目展示"
   meta_title: "项目展示"
   description: "我的项目作品集"
   image: "/images/projects-banner.jpg"
   draft: false
   ---
   ```

4. **创建布局模板**：
   如果需要自定义布局，在`layouts`目录下创建相应模板：
   ```
   layouts/
   └── projects/
       ├── list.html    # 项目列表页模板
       └── single.html  # 单个项目页模板
   ```

5. **添加到导航菜单**：
   在`config/_default/menus.toml`中添加：
   ```toml
   [[main]]
   name = "项目"
   url = "/projects"
   weight = 4
   ```

6. **添加到搜索范围**：
   在`hugo.toml`中修改搜索配置：
   ```toml
   [search]
   enable = true
   includeSections = ["notes", "projects", "works"]  # 添加新的section
   ```

## 语言说明

目前站点只保留一套内容，所有页面都直接位于 `content/` 目录下。

## 调试技巧

- 开发过程中可以通过浏览器的开发者工具来调试样式和布局
- 查看控制台输出以捕获JavaScript错误
- 使用 `hugo server` 进行开发，它支持热重载
- 使用 `hugo server --disableFastRender` 可避免某些缓存问题
- 使用 `hugo server --navigateToChanged` 可在保存文件后自动导航到修改的页面

## 网站部署

本网站通过 GitHub Pages 部署，当前仓库的生产静态文件输出在 `docs/` 目录。发布前使用仓库脚本完成构建和校验，然后把源码变更与生成后的 `docs/` 输出一起提交并推送。

```bash
npm run build

# 如果本次包含 AI-MarkDone 页面变更，还需要运行：
node scripts/verify-ai-markdone-site.mjs
```

### 部署流程说明

1. 修改 `content/`、`layouts/`、`assets/`、`data/`、`static/` 或 `scripts/` 中的源文件。
2. 如果页面结构、功能说明或发布流程变化，同步更新对应 SSOT，例如 `static/llms.txt`、`AGENTS.md` 或本 README。
3. 运行 `npm run build`，让 Hugo 重新生成 `docs/`。
4. AI-MarkDone 相关改动还需要运行 `node scripts/verify-ai-markdone-site.mjs`。
5. 本地检查关键页面，例如 `/ai-markdone/`、`/ai-markdone/en/`、`/ai-markdone/manual/`、`/ai-markdone/en/manual/`。
6. 检查 `git status --short`，确认源码和生成文件都在预期范围内。
7. 提交并推送当前发布分支。

### 部署注意事项

- 确保你有对`zhaoliangbin42/zhaoliangbin42.github.io`仓库的写入权限
- 确保你的SSH密钥已添加到GitHub账户
- 部署前先运行 `npm run build` 构建最新版本
- AI-MarkDone 页面发布前必须运行 `node scripts/verify-ai-markdone-site.mjs`
- `docs/` 是生成输出目录，不要手工编辑；需要调整页面时应修改源文件后重新构建
- 部署后等待几分钟，GitHub Pages需要一些时间来处理更新

完成部署后，网站将在几分钟内在 https://zhaoliangbin42.github.io 更新。


## 网站说明
### 数学公式

本网站支持KaTeX或MathJax数学公式渲染。在笔记的前置元数据中设置`math: true`即可启用。

示例：
```tex
$$
f(x) = \int_{-\infty}^{\infty} \hat{f}(\xi) e^{2\pi i \xi x} d\xi
$$
```

公式换行要用`////`而并非`//`。

## 图片

图片资源建议放在与Markdown文件同名的assets目录下：

```
content/
└── zh/
    └── notes/
        └── 笔记名/
            ├── index.md
            └── index.assets/
                ├── image1.png
                └── image2.jpg
```

在Markdown中引用：`![图片说明](index.assets/image1.png)`

为了提高网站加载速度，建议对大图片进行压缩和优化。

## 常见问题

### 本地预览与生产环境不一致

- 检查`hugo.toml`中的`baseURL`配置
- 确认是否有环境特定的条件语句
- 清除浏览器缓存或使用隐身模式访问

### 图片路径问题

- 确保使用相对路径引用图片
- 检查大小写是否正确，服务器可能区分大小写

### 部署失败

- 检查SSH密钥配置
- 确认GitHub仓库权限设置
- 查看`deploy.sh`脚本执行的错误信息
```

## 致谢

本项目基于以下开源技术和框架：

- [Hugo](https://gohugo.io/) - The world's fastest framework for building websites
- [Hugoplate](https://github.com/zeon-studio/hugoplate) - 现代化的Hugo主题模板
- [GitHub Pages](https://pages.github.com/) - 提供网站托管服务


## Resources

- Gradient colors: https://uigradients.com/#eXpresso


## Images Generating Prompts
### Background Images
A minimalist 3D render of **[Over-ear Headphones]**, floating directly in the center against the background. The object features a smooth matte plastic texture and is rendered in **beautiful, aesthetically pleasing colors suitable for high-end design**. It is medium scale relative to the vast frame, leaving ample negative space around it. Soft diffused studio lighting. The background is a luxurious abstract fluid gradient, shades of **[cyan, soft blue, and purple]**, blurred, elegant, tech vibe. ultra-detailed, 8k resolution --ar 16:9 --no background card, platform, podium

### Icon Images
A cute, minimalist 3D render icon of **[a graduation cap]**, floating centrally in a seamless pure white studio space. The object has a smooth matte plastic texture with friendly, rounded edges and toy-like geometry. It is rendered in aesthetically pleasing, modern design colors chosen by the AI. Soft, diffused studio lighting from top-left creates gentle highlights. A soft, realistic ambient occlusion shadow is cast on the invisible white ground plane directly underneath the object, emphasizing that it is suspended in mid-air. Isometric view, sharp focus, high detailed 3D rendering, C4D style. Square aspect ratio (1:1).






