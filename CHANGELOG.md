# 更新日志 (Changelog)

## 2025-12-02

### 新增功能 ✨
- **交互式函数可视化系统**: 创建基于Plotly.js的Hugo shortcode，支持在Markdown中嵌入可交互的数学函数图表
  - 创建`plotly-interactive` shortcode，单行代码即可生成交互式图表
  - 支持任意JavaScript数学表达式（三角函数、指数、条件表达式等）
  - 滑块控件动态调节参数，实时更新图表
  - 主题色自动适配（#ad5389渐变色系）
  - 响应式设计，自动适应不同屏幕尺寸
  - 示例页面包含5个函数：正弦、余弦、指数衰减、抛物线、sinc函数
  - 完整使用文档(`PLOTLY_SHORTCODE_GUIDE.md`)，包含参数说明和Python等效代码对照

- **移动端导航栏标题**: 在窄屏时(lg以下)导航栏中央显示"Liangbin's Blog"渐变色标题
  - 自适应宽度: 360px以下显示缩写"LB's Blog"，避免元素换行
  - 两行布局，左对齐，与logo图标高度协调
  - 深色模式适配

### 功能优化 🚀
- **首页Hero部分布局优化** (宽屏)
  - 768px以上: 文字与图片比例从1.2:1调整为1:1，缩小间距至2.5rem
  - 1024px以上: 比例调整为0.9:1.1，文字区域max-width 520px，图片max-width 680px
  - 整体间距从3rem优化至2rem，视觉更紧凑，图片更突出

- **研究兴趣部分性能优化**
  - 移除`backdrop-filter: blur(10px)`，消除快速滑屏时的"马赛克"现象
  - 阴影强度降低: 从0 8px 32px降至0 4px 16px
  - 过渡时间缩短: 从0.3s优化至0.2s
  - 移动端(<1024px)采用轻量级动画: hover上浮2px，阴影轻微增强
  - 桌面端保持完整动画效果: hover上浮4px，阴影明显增强

- **首页轮播卡片对齐修复**: 修正宽屏模式下精选内容第二页卡片对齐问题
  - 统一所有屏幕尺寸的滑动距离计算公式
  - 确保3卡片/2卡片/1卡片布局都能正确对齐

- **Widget样式改进**: 笔记列表页底部的类别和标签Widget
  - 添加"查看全部"链接，可快速跳转到完整分类/标签页
  - 移除默认状态的粉色边框
  - 添加柔和阴影效果(box-shadow)实现边缘虚化
  - 修复悬停时的颜色重叠问题
  - 悬停时阴影增强，提升交互反馈

### 界面改进 🎨
- **导航栏阴影效果**: 页面滚动时导航栏出现渐变阴影，增强层次感
- **About页面GitHub按钮**: 图片下方添加"在Github上Follow我"按钮
  - 方格纸贴纸效果，半透明背景
  - 与图片完美贴合，视觉一体化
  - 交互动画: 悬停时下移并增加内边距

### Bug修复 🐛
- **时间轴样式**: 右下角标记改为灰色边框和文字，圆角6px
- **时间轴按钮**: 采用渐变色边框，无背景填充，悬停时渐变填充
- **分类/标签页面包屑导航**: 修复Hugo Kind类型判断逻辑
  - 列表页: "笔记 > 分类"
  - 具体分类页: "笔记 > 分类 > 具体分类名"
- **Footer清理**: 移除重复的GitHub关注按钮
- **深色模式优化**: 
  - Giscus评论框深色模式同步: 修复初始加载时主题不匹配问题，动态检测当前主题并正确初始化
  - 导航栏与Hero Section背景色统一: 深色模式下从`rgba(28,28,30,0.95)`改为`rgba(44,44,46,0.95)`，消除视觉割裂感

### 代码质量 🔧
- **CSS注释规范化**: 修正中文注释中的全角标点符号为半角(待处理)
  - 识别出11处全角标点使用(：，（）等)

---

## 技术细节

### 响应式断点
- 移动端: < 768px (1列卡片)
- 平板端: 768px - 1023px (2列卡片)
- 桌面端: ≥ 1024px (3列卡片)
- 极窄屏: ≤ 360px (标题缩写)

### 主题色系
- 主渐变: `#ad5389` → `#3c1053`
- 深色模式: `#e091d0` → `#c084b3`
- 阴影: `rgba(173, 83, 137, 0.08-0.3)`

### 文件变更
- `/themes/hugoplate/layouts/index.html` - 轮播计算修复
- `/themes/hugoplate/layouts/partials/essentials/header.html` - 移动端标题
- `/themes/hugoplate/layouts/partials/widgets/categories.html` - Widget链接
- `/themes/hugoplate/layouts/partials/widgets/tags.html` - Widget链接
- `/themes/hugoplate/layouts/partials/breadcrumb.html` - 面包屑逻辑
- `/themes/hugoplate/layouts/partials/giscus.html` - 评论框主题动态检测
- `/assets/css/custom.css` - 所有样式更新

### 技术亮点
- **Giscus主题同步机制**: 
  - 使用JavaScript动态创建script标签，在加载前检测`document.documentElement.classList.contains('dark')`
  - MutationObserver监听HTML class变化，通过postMessage API实时同步主题切换
  - 解决了静态HTML配置无法响应动态主题的问题
