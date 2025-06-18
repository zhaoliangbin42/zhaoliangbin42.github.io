# Liangbin' Notes

[toc]

这个仓库包含了我的个人网站。

访问网站: [Liangbin's Notes](https://zhaoliangbin42.github.io)

## 安装与运行

```bash
# 安装所有依赖
npm install

# 启动开发服务器
npm run dev  # 启动后可以在浏览器访问 http://localhost:3000

# 构建网站
npm run build  # 构建完成后的文件会生成在 dist/ 目录下

# 预览构建后的网站
npm run preview

# 如果遇到构建问题，可以尝试清除缓存
npm run clean && npm run build

# Hugo相关命令
hugo  # 构建网站
hugo server  # 启动本地开发服务器
hugo new content/notes/新笔记名.md  # 创建新笔记
hugo --minify  # 构建并压缩网站，如果要上传至github，则应该运行这一段，完整编译构建项目
```

本网站构建之后，会自动生成一个`docs/`文件夹，该文件夹包含网页相关的所有静态文件，在上传github的时候，只需要上传该文件夹即可。后面会有部署到Github的操作流程。

## 项目结构

```
.
├── assets/            # 资源文件（SCSS、JS等）
├── content/           # 内容文件夹
│   ├── en/            # 英文内容
│   │   ├── about/     # 关于页面
│   │   ├── notes/     # 英文笔记
│   │   └── pages/     # 其他页面
│   └── zh/            # 中文内容
│       ├── about/     # 关于页面
│       ├── notes/     # 中文笔记
│       └── pages/     # 其他页面
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
4. 相关资源（如图片）可以放在同名文件夹内的assets目录中，例如：`content/zh/notes/新笔记名/index.assets/`



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
   # 创建中文内容目录
   mkdir -p content/zh/projects
   # 创建英文内容目录
   mkdir -p content/en/projects
   ```

2. **创建_index.md文件**：
   ```bash
   # 中文索引页
   hugo new content/zh/projects/_index.md
   # 英文索引页
   hugo new content/en/projects/_index.md
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
   在`hugo.toml`中的`[menu]`部分添加：
   ```toml
   # 中文导航
   [[languages.zh.menu.main]]
   name = "项目"
   url = "projects"
   weight = 4
   
   # 英文导航
   [[languages.en.menu.main]]
   name = "Projects"
   url = "projects"
   weight = 4
   ```

6. **添加到搜索范围**：
   在`hugo.toml`中修改搜索配置：
   ```toml
   [search]
   enable = true
   includeSections = ["notes", "projects", "works"]  # 添加新的section
   ```

## 多语言支持

本站支持中英双语，通过`hugo.toml`中的语言设置配置：
- 默认语言：`defaultContentLanguage = 'zh'`
- 中文内容：`content/zh/`
- 英文内容：`content/en/`

每种语言可以拥有独立的导航菜单和翻译文件。

## 调试技巧

- 开发过程中可以通过浏览器的开发者工具来调试样式和布局
- 查看控制台输出以捕获JavaScript错误
- 使用 `hugo server` 进行开发，它支持热重载
- 使用 `hugo server --disableFastRender` 可避免某些缓存问题
- 使用 `hugo server --navigateToChanged` 可在保存文件后自动导航到修改的页面

## 网站部署

本网站通过GitHub Pages进行部署，整个部署过程已经通过`deploy.sh`脚本自动化：

```bash
# 部署网站到GitHub Pages
./deploy.sh
```

### 部署流程说明

1. 首先构建网站：`hugo --minify`（此步骤会在docs目录生成所有静态文件）
2. 执行`deploy.sh`脚本，该脚本将：
   - 进入docs目录
   - 创建一个简单的README.md
   - 初始化一个新的git仓库
   - 添加并提交所有文件
   - 强制推送到GitHub仓库的master分支
   - 清理临时git目录

### 部署注意事项

- 确保你有对`zhaoliangbin42/zhaoliangbin42.github.io`仓库的写入权限
- 确保你的SSH密钥已添加到GitHub账户
- 部署前先运行`hugo`命令构建最新版本
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



















