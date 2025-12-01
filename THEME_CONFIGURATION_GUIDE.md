# 主题配置规范文档

**文档版本**: v1.0.0  
**最后更新**: 2025-12-01  
**适用主题**: Hugoplate (Custom)  

---

## 📋 文档概述

本文档为 Liangbin's Notes 网站的主题配置提供全面的技术规范和最佳实践指南。所有配置修改必须严格遵循本规范,以确保网站的一致性、可维护性和性能。

---

## 🎨 设计系统规范

### 1.1 主题色彩体系

#### 1.1.1 主色调定义

| 模式 | 变量名 | 颜色值 | 用途 | 示例 |
|------|--------|--------|------|------|
| **浅色模式** | `--gradient-solid-from` | `#ad5389` | 渐变起始色 | 标题、按钮 |
| | `--gradient-solid-to` | `#3c1053` | 渐变结束色 | 标题、按钮 |
| | `--gradient-light-from` | `rgba(173, 83, 137, 0.12)` | 浅色渐变起始 | 背景、卡片 |
| | `--gradient-light-to` | `rgba(60, 16, 83, 0.12)` | 浅色渐变结束 | 背景、卡片 |
| | `--theme-color` | `#ad5389` | 主题强调色 | 链接、图标 |
| **深色模式** | `--gradient-solid-from` | `#e091d0` | 渐变起始色 | 标题、按钮 |
| | `--gradient-solid-to` | `#c084b3` | 渐变结束色 | 标题、按钮 |
| | `--gradient-light-from` | `rgba(224, 145, 208, 0.25)` | 浅色渐变起始 | 背景、卡片 |
| | `--gradient-light-to` | `rgba(192, 132, 179, 0.25)` | 浅色渐变结束 | 背景、卡片 |
| | `--theme-color` | `#e091d0` | 主题强调色 | 链接、图标 |

#### 1.1.2 颜色使用规范

**✅ 正确用法:**
```css
/* 渐变文字 */
.gradient-text {
  background: linear-gradient(90deg, var(--gradient-solid-from), var(--gradient-solid-to));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* 浅色渐变背景 */
.light-gradient-bg {
  background: linear-gradient(135deg, var(--gradient-light-from), var(--gradient-light-to));
}
```

**❌ 错误用法:**
```css
/* 不要硬编码颜色值 */
.bad-example {
  color: #ad5389; /* 应使用 var(--theme-color) */
}
```

---

### 1.2 间距系统规范

#### 1.2.1 垂直间距标准

| 场景 | 类名 | 间距值 | 应用场景 |
|------|------|--------|----------|
| 小间距 | `mb-2` / `mt-2` | 0.5rem (8px) | 内部元素间距 |
| 中间距 | `mb-4` / `mt-4` | 1rem (16px) | 段落、卡片间距 |
| 大间距 | `mb-8` / `mt-8` | 2rem (32px) | 区块间距 |
| 超大间距 | `mb-16` / `mt-16` | 4rem (64px) | 主要区域分隔 |

#### 1.2.2 Section 间距规范

```css
/* Section 顶部和底部间距 */
.section {
  padding-top: 2rem !important;   /* 固定值,不可修改 */
  padding-bottom: 6rem !important; /* 固定值,不可修改 */
}

/* Section 小尺寸变体 */
.section-sm {
  padding-top: 1.5rem !important;  /* 固定值,不可修改 */
  padding-bottom: 4rem !important; /* 固定值,不可修改 */
}
```

**⚠️ 重要提醒:**
- 禁止修改 `.section` 和 `.section-sm` 的 `padding-top` 和 `padding-bottom` 值
- 如需特殊间距,使用 utility classes: `mt-*`, `mb-*`, `pt-*`, `pb-*`

---

### 1.3 圆角规范

| 元素类型 | 圆角值 | 应用场景 |
|---------|--------|----------|
| 小圆角 | `8px` / `0.5rem` | 按钮、标签 |
| 中圆角 | `12px` / `0.75rem` | 卡片、输入框 |
| 大圆角 | `16px` / `1rem` | Banner图片、容器 |
| 圆形 | `50%` | 头像、图标按钮 |

---

### 1.4 阴影系统

#### 1.4.1 阴影层级

```css
/* 层级 1 - 轻微浮起 */
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

/* 层级 2 - 中度浮起 */
box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);

/* 层级 3 - 明显浮起 */
box-shadow: 0 10px 40px rgba(173, 83, 137, 0.15);

/* Hover 状态增强 */
box-shadow: 0 15px 50px rgba(173, 83, 137, 0.25);
```

#### 1.4.2 主题色阴影规范

**浅色模式:**
```css
box-shadow: 0 10px 40px rgba(173, 83, 137, 0.15);
```

**深色模式:**
```css
box-shadow: 0 10px 40px rgba(224, 145, 208, 0.2);
```

---

## ⚙️ Hugo 配置规范

### 2.1 站点基础配置 (`hugo.toml`)

#### 2.1.1 必填配置项

```toml
baseURL = "https://zhaoliangbin42.github.io/"  # ⚠️ 部署前必须修改
title = "Liangbin's Notes"                     # 网站标题
theme = "hugoplate"                            # 主题名称
timeZone = "Asia/Shanghai"                     # 时区设置
defaultContentLanguage = "zh"                  # 默认语言
hasCJKLanguage = true                          # CJK语言支持
publishDir = "docs"                            # 构建输出目录
```

#### 2.1.2 分页配置

```toml
[pagination]
pagerSize = 18        # 每页显示18篇文章 (3列 × 6行)
disableAliases = false
path = "page"
```

**⚠️ 分页大小约束:**
- 必须是 3 的倍数 (配合 3 列布局)
- 推荐值: 9, 12, 15, 18, 21
- 不得超过 30 (性能考虑)

#### 2.1.3 服务集成配置

```toml
[services.googleAnalytics]
ID = "G-0TRYH6SRSY"  # Google Analytics 4 测量 ID

# Disqus - 已禁用,改用 Giscus
# [services.disqus]
# shortname = "zhaoliangbin42-github-io"
```

---

### 2.2 参数配置 (`config/_default/params.toml`)

#### 2.2.1 品牌资产配置

```toml
# Logo 配置
logo = "images/logo.png"
logo_darkmode = "images/logo-darkmode.png"
logo_width = "64px"
logo_height = "64px"
logo_webp = true

# Favicon 配置
favicon = "images/favicon.png"
```

**📁 Logo 文件要求:**
- **格式**: PNG (透明背景) / SVG
- **尺寸**: 
  - 最小: 64×64px
  - 推荐: 128×128px
  - 最大: 256×256px
- **命名规范**: 
  - 浅色模式: `logo.png`
  - 深色模式: `logo-darkmode.png`

#### 2.2.2 主题配置

```toml
theme_switcher = true          # 启用主题切换器
theme_default = "light"        # 默认主题: light/dark/system
navbar_fixed = true            # 固定导航栏
```

#### 2.2.3 搜索配置

```toml
[search]
enable = true
primary_color = "#121212"
include_sections = ["notes"]   # 搜索范围: 仅笔记
show_image = true
show_description = true
show_tags = true
show_categories = true
```

#### 2.2.4 Giscus 评论系统配置

```toml
[giscus]
enable = true
repo = "zhaoliangbin42/zhaoliangbin42.github.io"
repoID = "R_kgDOOWpJ1g"
category = "Announcements"
categoryID = "DIC_kwDOOWpJ1s4CzOtT"
mapping = "pathname"           # URL 映射方式
strict = "0"
reactionsEnabled = "1"
emitMetadata = "0"
inputPosition = "top"          # 评论框位置: top/bottom
theme = "light"                # 主题: light/dark/preferred_color_scheme
lang = "zh-CN"
loading = "lazy"
```

**🔑 获取 Giscus 配置:**
1. 访问 [giscus.app](https://giscus.app/zh-CN)
2. 输入仓库信息
3. 复制生成的参数

---

## 🎯 组件样式规范

### 3.1 渐变文字规范

**用途**: 标题、强调文本、品牌元素

```html
<!-- HTML 使用 -->
<h1 class="gradient-text">主标题</h1>
<h2 class="h3 gradient-text">副标题</h2>
```

```css
/* CSS 定义 (已预定义,无需重复编写) */
.gradient-text {
  background: linear-gradient(90deg, var(--gradient-solid-from), var(--gradient-solid-to));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

**✅ 适用场景:**
- 页面主标题 (H1)
- 区域标题 (H2, H3)
- 特殊强调文本

**❌ 不适用场景:**
- 正文段落
- 导航链接
- 表单标签

---

### 3.2 文章 Banner 图片规范

**类名**: `.article-banner-image`

```html
<!-- Notes 页面 -->
{{ partial "image" (dict "Src" $image "Context" .Page "Alt" .Title "Class" "w-full article-banner-image") }}

<!-- Codes 页面 -->
{{ partial "image" (dict "Src" $image "Context" .Page "Alt" .Title "Class" "mx-auto article-banner-image") }}
```

**样式特性:**
- 圆角: `16px`
- 阴影: 主题色阴影 (浅色: `rgba(173, 83, 137, 0.15)`)
- Hover 效果: 向上浮动 `4px` + 阴影增强

**图片规范:**
- **格式**: JPG / PNG / WebP
- **最小尺寸**: 1200×630px (推荐 1920×1080px)
- **宽高比**: 16:9 或 3:2
- **文件大小**: < 500KB (推荐 < 200KB)

---

### 3.3 相关文章区域规范

**结构:**
```html
<div class="mt-16 mb-8">
  <div class="related-posts-header">
    <i class="fa-solid fa-layer-group"></i>
    <h2 class="related-posts-title">{{ T "related_posts" }}</h2>
  </div>
  <div class="row">
    <div class="lg:col-4 md:col-6 mb-8">
      <!-- 文章卡片 -->
    </div>
  </div>
</div>
```

**样式特性:**
- 标题带图标 + 渐变色
- 底部边框分隔
- 显示数量: 3 篇
- 卡片间距: `mb-8` (2rem)

---

### 3.4 评论区规范

**位置**: 在相关文章之后,作为独立区块

**间距标准:**
```css
.comments-section {
  margin-top: 5rem;    /* 与上方内容的距离 */
  padding-top: 3rem;   /* 顶部内边距 */
  border-top: 2px solid #e5e7eb;
}
```

**结构:**
```html
<div class="comments-section">
  <div class="giscus-wrapper">
    <div class="giscus-header">
      <i class="fa-regular fa-comments"></i>
      <h3>评论区</h3>
    </div>
    <div class="giscus-container">
      <!-- Giscus 脚本 -->
    </div>
  </div>
</div>
```

---

## 📝 内容创作规范

### 4.1 Frontmatter 规范

#### 4.1.1 笔记 (Notes) 模板

```yaml
---
title: "文章标题"                    # 必填,50字以内
date: 2025-12-01                     # 必填,发布日期
author: "Liangbin"                   # 必填
categories: ["分类名"]                # 必填,1-2个
tags: ["标签1", "标签2"]             # 推荐,3-5个
summary: "简短摘要,1-2句话介绍文章内容"  # 推荐,200字以内
image: "images/notes/article-name/banner.png"  # 可选,Banner图
draft: false                         # 必填,草稿状态
---
```

#### 4.1.2 代码 (Codes) 模板

```yaml
---
title: "项目标题"
date: 2025-12-01
author: "Liangbin"
categories: ["代码"]
tags: ["Python", "Machine Learning"]
summary: "项目简介"
image: "images/codes/project-name/banner.png"
paper_url: "https://arxiv.org/abs/xxx"    # 可选,论文链接
github_url: "https://github.com/user/repo" # 可选,GitHub链接
draft: false
---
```

**⚠️ 必填字段验证:**
- 缺少必填字段将导致构建错误
- `title` 不得包含特殊字符: `/`, `\`, `?`, `*`
- `categories` 和 `tags` 必须使用已定义的分类

---

### 4.2 图片资源规范

#### 4.2.1 目录结构

```
images/
├── notes/
│   └── article-slug/
│       ├── banner.png       # Banner图
│       └── image-1.png      # 文章内图片
├── codes/
│   └── project-slug/
│       ├── banner.png
│       └── screenshot.png
├── avatar.png               # 头像
├── logo.png                 # Logo
├── logo-darkmode.png        # 深色Logo
└── favicon.png              # Favicon
```

#### 4.2.2 命名规范

**✅ 正确命名:**
- `timing-recovery-algorithm.png`
- `neural-network-architecture.png`
- `setup-screenshot.png`

**❌ 错误命名:**
- `图片1.png` (使用中文)
- `IMG_20250101.png` (无意义名称)
- `Screenshot 2025-01-01 at 10.30.45.png` (空格和特殊字符)

#### 4.2.3 文件大小限制

| 图片类型 | 最大尺寸 | 最大文件大小 |
|---------|---------|-------------|
| Banner图 | 1920×1080px | 500KB |
| 文章内图 | 1200×800px | 300KB |
| 头像 | 512×512px | 100KB |
| Logo | 256×256px | 50KB |
| Favicon | 64×64px | 10KB |

---

## 🚀 部署规范

### 5.1 部署脚本规范 (`deploy_github.sh`)

```bash
#!/bin/bash

# 构建网站
hugo --minify --gc

cd docs

# 排除隐私文件
rm -rf vx_notebook .MWebMetaData

echo "My Blog. Please visit: https://zhaoliangbin42.github.io" > README.md

git init
git add .
git commit -m "Deploy: $(date +'%Y-%m-%d %H:%M:%S')"

# 强制推送到master分支
git push --force git@github.com:zhaoliangbin42/zhaoliangbin42.github.io.git master

# 清理临时.git目录
rm -rf .git

cd ..
```

**⚠️ 部署前检查清单:**
- [ ] 确认 `baseURL` 正确
- [ ] 验证所有必填字段
- [ ] 检查图片路径有效
- [ ] 测试本地构建 (`hugo server`)
- [ ] 排除敏感文件

---

### 5.2 构建命令规范

```bash
# 开发环境预览
hugo server --buildDrafts --buildFuture

# 生产环境构建
hugo --minify --gc

# 清理缓存
rm -rf docs/ resources/
```

---

## 🔧 开发规范

### 6.1 CSS 编写规范

#### 6.1.1 文件组织

```css
/* ============================================
   区域名称 (如: 导航栏)
   ============================================ */

/* 基础样式 */
.component {
  /* 属性按字母顺序排列 */
}

/* 响应式设计 */
@media (max-width: 768px) {
  .component { }
}

/* 深色模式 */
.dark .component { }
```

#### 6.1.2 命名约定

**✅ BEM 命名法:**
```css
.article-meta-card { }           /* Block */
.article-meta-item { }           /* Element */
.article-meta-item--active { }   /* Modifier */
```

**❌ 禁止使用:**
```css
.am-c { }        /* 过度缩写 */
.Article_Meta { } /* 驼峰命名 */
#article-meta { } /* ID 选择器 (仅特殊情况) */
```

---

### 6.2 模板编写规范

#### 6.2.1 Hugo 模板结构

```html
{{ define "main" }}
  <!-- 区域注释 -->
  <section class="section">
    <div class="container">
      <!-- 组件内容 -->
    </div>
  </section>
{{ end }}
```

#### 6.2.2 条件渲染规范

```html
<!-- 使用 with 检查变量存在 -->
{{ with .Params.image }}
  <img src="{{ . }}" alt="{{ $.Title }}">
{{ end }}

<!-- 使用 if 检查布尔值 -->
{{ if .TableOfContents }}
  <nav>{{ .TableOfContents }}</nav>
{{ end }}
```

---

## 📊 性能优化规范

### 7.1 图片优化

- **启用 WebP**: `logo_webp = true`
- **懒加载**: `loading="lazy"`
- **响应式图片**: 使用 Hugo 的 image processing

### 7.2 CSS/JS 加载

```toml
# 关键资源: lazy = false
[[params.plugins.css]]
link = "css/github.css"
lazy = false

# 非关键资源: lazy = true
[[params.plugins.js]]
link = "js/gallery-slider.js"
lazy = true
```

### 7.3 缓存配置

```toml
[caches.images]
maxAge = "720h"   # 30天

[caches.assets]
maxAge = "720h"   # 30天
```

---

## 🔒 安全规范

### 8.1 敏感信息保护

**⚠️ 禁止提交:**
- 私人笔记目录: `vx_notebook/`
- 元数据目录: `.MWebMetaData/`
- API 密钥 (应使用环境变量)
- 个人身份信息

**`.gitignore` 必须包含:**
```
vx_notebook/
.MWebMetaData/
*.log
.env
```

### 8.2 外部链接安全

```html
<!-- 外部链接必须添加安全属性 -->
<a href="https://example.com" 
   target="_blank" 
   rel="noopener noreferrer">
  链接文本
</a>
```

---

## 📖 多语言规范

### 9.1 翻译文件 (`i18n/zh.yaml`)

```yaml
# 导航菜单
- id: home
  translation: "首页"

- id: notes
  translation: "笔记"

# 文章元信息
- id: related_posts
  translation: "相关文章"

- id: read_more
  translation: "阅读更多"
```

**命名规范:**
- 使用下划线分隔: `read_more`
- 语义化命名,避免缩写
- 按模块分组,添加注释

---

## 🧪 测试规范

### 10.1 本地测试流程

1. **构建测试**
   ```bash
   hugo --buildDrafts
   ```

2. **预览测试**
   ```bash
   hugo server --disableFastRender
   ```

3. **跨浏览器测试**
   - Chrome (最新版)
   - Safari (最新版)
   - Firefox (最新版)

4. **响应式测试**
   - 桌面端: 1920×1080, 1366×768
   - 平板端: 768×1024
   - 移动端: 375×667, 414×896

### 10.2 上线前检查清单

- [ ] 所有链接有效
- [ ] 图片正常加载
- [ ] 深色模式正常
- [ ] 评论系统正常
- [ ] Google Analytics 正常追踪
- [ ] SEO 元信息完整
- [ ] 无控制台错误

---

## 📞 支持与维护

### 11.1 问题反馈

**GitHub Issues**: [https://github.com/zhaoliangbin42/zhaoliangbin42.github.io/issues](https://github.com/zhaoliangbin42/zhaoliangbin42.github.io/issues)

**反馈模板:**
```
### 问题类型
- [ ] Bug 报告
- [ ] 功能请求
- [ ] 文档问题

### 问题描述


### 复现步骤
1. 
2. 
3. 

### 预期行为


### 截图


### 环境信息
- 浏览器: 
- 操作系统: 
- Hugo 版本: 
```

---

### 11.2 版本管理

**分支策略:**
- `master`: 生产环境 (GitHub Pages 部署)
- `dev`: 开发分支 (主要工作分支)
- `feature/*`: 功能分支
- `hotfix/*`: 紧急修复分支

**版本号规范**: `vX.Y.Z`
- `X`: 重大更新 (破坏性变更)
- `Y`: 功能更新
- `Z`: Bug 修复

---

## 📚 附录

### A. 常用工具类 (Tailwind CSS)

| 类名 | 功能 | 示例 |
|------|------|------|
| `mb-{n}` | 底部外边距 | `mb-4` = 1rem |
| `mt-{n}` | 顶部外边距 | `mt-8` = 2rem |
| `p-{n}` | 内边距 | `p-4` = 1rem |
| `text-{color}` | 文字颜色 | `text-gray-600` |
| `bg-{color}` | 背景颜色 | `bg-white` |
| `rounded-{size}` | 圆角 | `rounded-lg` |
| `shadow-{size}` | 阴影 | `shadow-md` |

### B. Font Awesome 图标库

**版本**: v6.x

**常用图标:**
- `fa-solid fa-home` - 首页
- `fa-solid fa-layer-group` - 相关文章
- `fa-regular fa-comments` - 评论
- `fa-brands fa-github` - GitHub
- `fa-solid fa-graduation-cap` - 学术

**使用方式:**
```html
<i class="fa-solid fa-home"></i>
<i class="fa-brands fa-github fa-lg"></i>
```

### C. 快速参考

**配置文件位置:**
- 站点配置: `/hugo.toml`
- 参数配置: `/config/_default/params.toml`
- 菜单配置: `/config/_default/menus.toml`
- 自定义样式: `/assets/css/custom.css`

**模板文件位置:**
- 笔记单页: `/themes/hugoplate/layouts/notes/single.html`
- 代码单页: `/themes/hugoplate/layouts/codes/single.html`
- 评论组件: `/themes/hugoplate/layouts/partials/giscus.html`

---

## 📄 变更日志

### v1.0.0 (2025-12-01)
- ✨ 初始版本发布
- 📝 完整的主题配置规范
- 🎨 设计系统定义
- ⚙️ Hugo 配置文档
- 🚀 部署流程规范

---

## 📜 许可证

本文档遵循 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) 许可协议。

---

**文档维护者**: Liangbin Zhao  
**联系方式**: [GitHub](https://github.com/zhaoliangbin42)  
**最后更新**: 2025-12-01
