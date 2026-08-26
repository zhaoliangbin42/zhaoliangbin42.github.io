(function () {
  const COPY = {
    zh: {
      overview: '总览',
      back: '返回总图',
      quickTitle: '快速展开',
      hint: '拖动图面查看，滚轮或双指缩放。点击节点可以看详情。',
      nodeDetail: '节点说明',
      chooseNode: '选择一个节点',
      chooseHint: '点击节点后，这里会显示它在链路里承担的任务。',
      openPath: '进入这条链路',
      fullscreen: '全屏',
      exitFullscreen: '退出',
      source: '相关源码',
      fallback: '图形交互库加载失败，但下方内容仍可阅读。',
      lanes: {
        action: ['用户动作层', '阅读、复制、批注、保存、导出这些真实动作'],
        ui: ['产品界面层', '工具栏、Reader、书签、导出和设置这些可见入口'],
        service: ['内容与能力服务层', '把回答整理成不同功能都能消费的数据'],
        adapter: ['站点适配与对话发现层', '发现 ChatGPT 对话、轮次、锚点和页面状态'],
        runtime: ['浏览器与运行时层', 'Content、Background、存储、下载、剪贴板和备份出口'],
      },
      flows: [
        ['overview', '总览'],
        ['discovery', '内容发现'],
        ['reader', 'Reader'],
        ['copy', '复制'],
        ['bookmarks', '书签'],
        ['exportFlow', '导出'],
        ['formula', '公式'],
        ['settingsBackup', '设置与备份'],
        ['messageNavigation', '消息导航'],
      ],
      graphTitles: {
        overview: '插件层级总览',
        discovery: '内容发现链路',
        reader: 'Reader 链路',
        copy: '复制链路',
        bookmarks: '书签链路',
        exportFlow: '导出链路',
        formula: '公式链路',
        settingsBackup: '设置与备份链路',
        messageNavigation: '消息导航链路',
      },
      graphSummaries: {
        overview: '从下往上看：浏览器提供能力，适配层发现 ChatGPT 对话，服务层整理内容，界面层承接入口，最上面才是你真正点击的动作。',
        discovery: '内容发现负责把 ChatGPT 页面里的原始消息变成稳定的对话快照，再交给 Reader、复制、书签和导出使用。',
        reader: 'Reader 消费同一份 ReaderItem 数据，再把阅读、目录、分页、Sticky、灵动注释和快速发送放在一个面板里。',
        copy: '复制链路把完整回答或局部选区转成 Markdown，再交给浏览器剪贴板。',
        bookmarks: '书签链路从工具栏或 Reader 触发，经过扩展通信写入浏览器存储，并可参与备份。',
        exportFlow: '导出链路重新收集当前消息内容，再整理为 Markdown、PDF、PNG 或 ZIP。',
        formula: '公式链路从页面里的公式节点出发，按设置分流到 LaTeX 复制或 PNG、SVG、MathML 导出。',
        settingsBackup: '设置与备份链路从设置面板进入后台，最后落到浏览器存储或 Google Drive 文件。',
        messageNavigation: '消息导航把页面里的消息锚点、Reader 分页器和方向键连接起来，让长对话可以原地切换。',
      },
    },
    en: {
      overview: 'Overview',
      back: 'Back to overview',
      quickTitle: 'Quick expand',
      hint: 'Drag to pan. Scroll or pinch to zoom. Click a node for details.',
      nodeDetail: 'Node detail',
      chooseNode: 'Choose a node',
      chooseHint: 'Click a node to see what it does in the path.',
      openPath: 'Open this path',
      fullscreen: 'Fullscreen',
      exitFullscreen: 'Exit',
      source: 'Source',
      fallback: 'The graph interaction library failed to load, but the explanation remains readable.',
      lanes: {
        action: ['User action layer', 'Reading, copying, annotating, saving, exporting, and tuning'],
        ui: ['Product UI layer', 'Toolbar, Reader, bookmarks, export, and settings surfaces'],
        service: ['Content and capability services', 'Shared answer data prepared for multiple features'],
        adapter: ['Site adapter and discovery layer', 'ChatGPT turns, anchors, page state, and bridges'],
        runtime: ['Browser and runtime layer', 'Content, background, storage, downloads, clipboard, and backup exits'],
      },
      flows: [
        ['overview', 'Overview'],
        ['discovery', 'Discovery'],
        ['reader', 'Reader'],
        ['copy', 'Copy'],
        ['bookmarks', 'Bookmarks'],
        ['exportFlow', 'Export'],
        ['formula', 'Formulas'],
        ['settingsBackup', 'Settings and backup'],
        ['messageNavigation', 'Message navigation'],
      ],
      graphTitles: {
        overview: 'Plugin architecture overview',
        discovery: 'Content discovery path',
        reader: 'Reader path',
        copy: 'Copy path',
        bookmarks: 'Bookmarks path',
        exportFlow: 'Export path',
        formula: 'Formula path',
        settingsBackup: 'Settings and backup path',
        messageNavigation: 'Message navigation path',
      },
      graphSummaries: {
        overview: 'Read from bottom to top: browser capabilities, ChatGPT discovery, shared content services, product surfaces, then the actions you actually use.',
        discovery: 'Discovery turns raw ChatGPT page content into a stable conversation snapshot consumed by Reader, copy, bookmarks, and export.',
        reader: 'Reader consumes the same ReaderItem data and brings reading, outline, paging, Sticky, annotations, and quick send into one panel.',
        copy: 'Copy turns a full answer or selected passage into Markdown, then sends it to the browser clipboard.',
        bookmarks: 'Bookmarks start from the toolbar or Reader, travel through extension messaging, and land in browser storage.',
        exportFlow: 'Export collects fresh message content and formats it as Markdown, PDF, PNG, or ZIP.',
        formula: 'Formula actions start from rendered math and branch into LaTeX copy or PNG, SVG, and MathML export.',
        settingsBackup: 'Settings and backup start in the settings panel, pass through background handlers, and end in browser storage or a Drive file.',
        messageNavigation: 'Message navigation connects page anchors, the Reader pager, and arrow keys so long conversations stay reachable.',
      },
    },
  };

  const COMMON_NODES = {
    readAction: {
      lane: 'action',
      zh: ['阅读', '打开 Reader，把当前回答放进一个更安静的阅读面板。'],
      en: ['Read', 'Open Reader and move the current answer into a quieter reading panel.'],
      drill: 'reader',
    },
    partialCopyAction: {
      lane: 'action',
      zh: ['局部复制', '只复制选中的那一段，同时尽量保留 Markdown 层级、代码和公式边界。'],
      en: ['Partial copy', 'Copy only the selected passage while preserving Markdown hierarchy, code, and formula boundaries.'],
      drill: 'copy',
    },
    stickyAction: {
      lane: 'action',
      zh: ['Sticky', '把关键公式、假设或结论临时钉在旁边，看到后面也不丢前文。'],
      en: ['Sticky', 'Pin a formula, assumption, or conclusion beside the answer while you keep reading.'],
      drill: 'reader',
    },
    annotateAction: {
      lane: 'action',
      zh: ['灵动注释', '围绕具体句子做批注、复制注释，或者把注释插入发送框继续追问。'],
      en: ['Dynamic Annotation', 'Annotate exact text, copy the note, or insert it into the send box for a follow-up.'],
      drill: 'reader',
    },
    bookmarkAction: {
      lane: 'action',
      zh: ['书签保存', '保存有价值的回答，后续搜索、分类、预览，并跳回原文位置。'],
      en: ['Save bookmark', 'Save a useful answer for later search, folders, preview, and jump-back.'],
      drill: 'bookmarks',
    },
    exportAction: {
      lane: 'action',
      zh: ['批量导出', '把一条或多条回答整理成 Markdown、PDF、PNG 或 ZIP。'],
      en: ['Batch export', 'Export one or many answers as Markdown, PDF, PNG, or ZIP.'],
      drill: 'exportFlow',
    },
    formulaAction: {
      lane: 'action',
      zh: ['公式复制/导出', '点击或悬停公式，复制 LaTeX，或导出图片和结构化格式。'],
      en: ['Formula copy/export', 'Click or hover formulas to copy LaTeX or export image and structured formats.'],
      drill: 'formula',
    },
    messageNavigationAction: {
      lane: 'action',
      zh: ['消息导航', '用底部分页器、右下角按钮或方向键，在长对话中切换前后消息。'],
      en: ['Message navigation', 'Use the pager, lower-right buttons, or arrow keys to move through nearby messages.'],
      drill: 'messageNavigation',
    },
    settingsAction: {
      lane: 'action',
      zh: ['设置', '按自己的习惯裁剪工具栏、Reader、公式动作、导出和备份。'],
      en: ['Settings', 'Tune toolbar, Reader, formula actions, export, and backup to match your habits.'],
      drill: 'settingsBackup',
    },
    chatgpt: {
      lane: 'runtime',
      zh: ['ChatGPT 页面', '消息、公式、代码、表格先出现在这里，再被适配层整理成 Reader 可用的轮次。'],
      en: ['ChatGPT page', 'Messages, formulas, code, and tables start here, then the adapter turns them into Reader-ready turns.'],
    },
    contentRuntime: {
      lane: 'runtime',
      zh: ['Content runtime', '运行在 ChatGPT 页面里的扩展入口，负责接入界面和页面上下文。'],
      en: ['Content runtime', 'The extension entry running on the ChatGPT page, connecting UI and page context.'],
      source: 'src/ui/content',
    },
    backgroundRuntime: {
      lane: 'runtime',
      zh: ['Background runtime', '处理存储、备份、下载等需要后台协调的能力。'],
      en: ['Background runtime', 'Coordinates storage, backup, downloads, and other background-side capabilities.'],
      source: 'src/background',
    },
    runtimeProtocol: {
      lane: 'runtime',
      zh: ['runtime protocol', '页面脚本和后台脚本之间的请求协议。'],
      en: ['runtime protocol', 'The request protocol between content scripts and background handlers.'],
      source: 'src/contracts/protocol.ts',
    },
    browserStorage: {
      lane: 'runtime',
      zh: ['browser storage', '书签、设置和本地状态的默认保存位置。'],
      en: ['browser storage', 'The default storage location for bookmarks, settings, and local state.'],
      source: 'src/contracts/storage.ts',
    },
    clipboardDownloads: {
      lane: 'runtime',
      zh: ['clipboard / downloads', '复制和导出的最终浏览器出口。'],
      en: ['clipboard / downloads', 'The browser exit point for copy and export operations.'],
    },
    googleDrive: {
      lane: 'runtime',
      zh: ['Google Drive provider', '可选的书签备份出口，只在你主动连接 Drive 后使用。'],
      en: ['Google Drive provider', 'Optional bookmark backup output, used only after you connect Drive.'],
      source: 'src/services/cloudBackup/cloudBackupService.ts',
    },
    toolbar: {
      lane: 'ui',
      zh: ['消息工具栏', '每条回答底部的入口。Reader、复制、书签、导出都从这里开始。'],
      en: ['Message toolbar', 'The entry under each answer. Reader, copy, bookmarks, and export start here.'],
      source: 'src/ui/content/controllers/MessageToolbarOrchestrator.ts',
    },
    toolbarOrchestrator: {
      lane: 'ui',
      zh: ['MessageToolbarOrchestrator', '负责在消息下方挂载工具栏，并把不同按钮分发给对应功能。'],
      en: ['MessageToolbarOrchestrator', 'Mounts the toolbar under messages and routes buttons to each feature.'],
      source: 'src/ui/content/controllers/MessageToolbarOrchestrator.ts',
    },
    readerPanel: {
      lane: 'ui',
      zh: ['Reader 面板', '真正的阅读空间。它承载分页、目录、Sticky、选区动作和快速发送。'],
      en: ['Reader panel', 'The reading surface for paging, outline jumps, Sticky, selection actions, and quick send.'],
      source: 'src/ui/content/reader/ReaderPanel.ts',
      drill: 'reader',
    },
    adapter: {
      lane: 'adapter',
      zh: ['页面适配器', '把 ChatGPT 页面里的消息 DOM、按钮位置和当前对话信息变成插件能理解的入口。'],
      en: ['Page adapter', 'Turns ChatGPT DOM, toolbar positions, and conversation context into an extension surface.'],
      source: 'src/drivers/content/adapters/sites/chatgpt.ts',
    },
    engine: {
      lane: 'adapter',
      zh: ['对话发现引擎', '维护当前对话快照，尽量找回当前消息以及前后消息。'],
      en: ['Conversation engine', 'Maintains the current conversation snapshot and recovers nearby messages.'],
      source: 'src/drivers/content/chatgpt/ChatGPTConversationEngine.ts',
      drill: 'discovery',
    },
    snapshot: {
      lane: 'adapter',
      zh: ['对话快照', '把一轮轮用户问题和 AI 回答整理成稳定列表，给 Reader、书签和导出使用。'],
      en: ['Conversation snapshot', 'A stable list of prompts and answers used by Reader, bookmarks, and export.'],
    },
    domTurnRefs: {
      lane: 'adapter',
      zh: ['DOM turn refs', '记录页面里每一轮消息对应的 DOM 位置。'],
      en: ['DOM turn refs', 'DOM references for each message turn on the page.'],
    },
    navigationAnchor: {
      lane: 'adapter',
      zh: ['navigation anchor', '把消息切换、书签跳转和位置恢复落回页面上的具体位置。'],
      en: ['navigation anchor', 'Maps navigation, bookmark jump-back, and position restore to page locations.'],
    },
    pageBridge: {
      lane: 'adapter',
      zh: ['page bridge', '在页面上下文和扩展上下文之间传递必要状态。'],
      en: ['page bridge', 'Passes necessary state between the page context and extension context.'],
    },
    readerSource: {
      lane: 'service',
      zh: ['Reader 内容源', '决定优先使用对话快照，还是退回当前 DOM 采集。'],
      en: ['Reader content source', 'Chooses the snapshot first, then falls back to the current DOM when needed.'],
      source: 'src/services/reader/readerContentSource.ts',
    },
    readerItems: {
      lane: 'service',
      zh: ['ReaderItem', 'Reader、复制、书签和导出都能消费的回答结构。'],
      en: ['ReaderItem', 'The answer structure consumed by Reader, copy, bookmarks, and export.'],
      source: 'src/services/reader/types.ts',
    },
    markdown: {
      lane: 'service',
      zh: ['Markdown renderer', '把回答排成适合阅读的正文，同时保留代码、表格、公式等结构。'],
      en: ['Markdown renderer', 'Formats the answer for reading while keeping code, tables, and formulas structured.'],
    },
    units: {
      lane: 'service',
      zh: ['atomic selection', '公式、代码块、表格、标题和列表边界。局部复制、Sticky 和注释都靠它判断选区。'],
      en: ['atomic selection', 'Formula, code, table, heading, and list boundaries used by selection actions.'],
      source: 'src/services/reader/atomicSelection.ts',
    },
    readerMarkdownCopy: {
      lane: 'service',
      zh: ['readerMarkdownCopy', '把整条回答或选区整理成可粘贴的 Markdown。'],
      en: ['readerMarkdownCopy', 'Turns a full answer or selection into paste-ready Markdown.'],
      source: 'src/services/reader/readerMarkdownCopy.ts',
    },
    bookmarksService: {
      lane: 'service',
      zh: ['bookmarks service', '保存书签内容、预览、位置和文件夹信息。'],
      en: ['bookmarks service', 'Saves bookmark content, preview, position, and folder data.'],
      source: 'src/services/bookmarks',
    },
    exportFormatter: {
      lane: 'service',
      zh: ['export formatter', '把消息内容整理成 Markdown、PDF、PNG 或 ZIP 所需的输出。'],
      en: ['export formatter', 'Prepares message content for Markdown, PDF, PNG, or ZIP output.'],
      source: 'src/services/export',
    },
    formulaAssets: {
      lane: 'service',
      zh: ['formula asset actions', '根据设置决定公式点击、复制和导出的具体动作。'],
      en: ['formula asset actions', 'Decides formula click, copy, and export actions based on settings.'],
      source: 'src/ui/content/controllers/FormulaAssetHoverController.ts',
    },
    settingsService: {
      lane: 'service',
      zh: ['settings service', '读取和写入工具栏、Reader、公式、导出、消息导航和备份配置。'],
      en: ['settings service', 'Reads and writes toolbar, Reader, formula, export, message navigation, and backup settings.'],
      source: 'src/core/settings/types.ts',
    },
    cloudBackupClient: {
      lane: 'service',
      zh: ['cloud backup client', '把备份请求交给后台，再由 Google Drive provider 处理。'],
      en: ['cloud backup client', 'Sends backup requests to the background, then to the Drive provider.'],
      source: 'src/services/cloudBackup',
    },
    outline: {
      lane: 'service',
      zh: ['消息内目录条', '从标题中提取目录，让长回答可以在 Reader 里快速跳转。'],
      en: ['In-message outline', 'Builds an outline from headings for jumping inside long Reader messages.'],
    },
    pager: {
      lane: 'ui',
      zh: ['消息切换', '底部分页器和左右方向键，让你在 Reader 里回看前后回答。'],
      en: ['Message switching', 'Bottom pager and arrow keys move through nearby answers inside Reader.'],
      source: 'src/ui/content/controllers/ChatGPTMessageStepperController.ts',
    },
    messageStepper: {
      lane: 'ui',
      zh: ['Message Stepper', 'Reader 底部分页器与右下角消息切换按钮的界面入口。'],
      en: ['Message Stepper', 'The UI entry for Reader paging and lower-right message switching.'],
      source: 'src/ui/content/controllers/ChatGPTMessageStepperController.ts',
    },
    sendPopover: {
      lane: 'ui',
      zh: ['SendPopover', 'Reader 左下角快速发送入口，不用退出 Reader 也能继续追问。'],
      en: ['SendPopover', 'The lower-left Reader send entry for follow-ups without leaving Reader.'],
    },
    saveMessagesDialog: {
      lane: 'ui',
      zh: ['SaveMessagesDialog', '选择消息、格式和导出方式的弹窗。'],
      en: ['SaveMessagesDialog', 'The dialog for choosing messages, formats, and export actions.'],
      source: 'src/ui/content/export/SaveMessagesDialog.ts',
    },
    bookmarksPanel: {
      lane: 'ui',
      zh: ['BookmarksPanel', '管理书签、文件夹、搜索、预览和跳转。'],
      en: ['BookmarksPanel', 'Manages bookmarks, folders, search, preview, and jump-back.'],
      source: 'src/ui/content/bookmarks/BookmarksPanelController.ts',
    },
    bookmarkDialog: {
      lane: 'ui',
      zh: ['BookmarkSaveDialog', '从工具栏或 Reader 保存当前回答时出现的确认入口。'],
      en: ['BookmarkSaveDialog', 'The confirmation entry when saving the current answer from toolbar or Reader.'],
    },
    settingsPanel: {
      lane: 'ui',
      zh: ['SettingsTab', '配置工具栏、Reader、公式动作、导出、消息导航和备份。'],
      en: ['SettingsTab', 'Configures toolbar, Reader, formula actions, export, message navigation, and backup.'],
    },
    formulaHover: {
      lane: 'ui',
      zh: ['FormulaAssetHoverController', '公式上的悬浮动作入口。'],
      en: ['FormulaAssetHoverController', 'The hover action surface on rendered formulas.'],
      source: 'src/ui/content/controllers/FormulaAssetHoverController.ts',
    },
    selection: {
      lane: 'service',
      zh: ['选区识别', '读到某一段时，选中它，后面的复制、Sticky、注释都从这里分出去。'],
      en: ['Selection layer', 'Once text is selected, copy, Sticky, and annotation branch from here.'],
      drill: 'copy',
    },
    sticky: {
      lane: 'ui',
      zh: ['Sticky 栏', '把重要公式、假设、结论临时 pin 在旁边，避免看到后面忘了前面。'],
      en: ['Sticky panel', 'Pins formulas, assumptions, and conclusions beside the answer while you read.'],
    },
    annotations: {
      lane: 'ui',
      zh: ['灵动注释', '选中具体句子后写注释，可以复制，也可以插入发送框继续追问。'],
      en: ['Dynamic Annotation', 'Annotate exact text, copy notes, or insert them into the send box.'],
    },
    quickSend: {
      lane: 'ui',
      zh: ['快速发送', 'Reader 左下角发送入口。读到哪里想追问，就在原地继续问。'],
      en: ['Quick send', 'The lower-left Reader send entry for follow-up questions in place.'],
    },
    bookmarks: {
      lane: 'ui',
      zh: ['书签', '保存回答、位置和预览，后面可以搜索、分类，并跳回原文。'],
      en: ['Bookmarks', 'Save answer content, position, and preview for search and jump-back later.'],
      source: 'src/ui/content/bookmarks/BookmarksPanelController.ts',
      drill: 'storage',
    },
    export: {
      lane: 'ui',
      zh: ['批量导出', '把当前消息或多条消息导出为 Markdown、PDF、PNG 或 ZIP。'],
      en: ['Batch export', 'Export one or many messages as Markdown, PDF, PNG, or ZIP.'],
      source: 'src/ui/content/export/SaveMessagesDialog.ts',
    },
    formula: {
      lane: 'ui',
      zh: ['公式复制/导出', '点击或悬停公式，复制 LaTeX，或导出 PNG、SVG、MathML。'],
      en: ['Formula copy/export', 'Click or hover formulas to copy LaTeX or export PNG, SVG, and MathML.'],
      source: 'src/ui/content/controllers/FormulaAssetHoverController.ts',
    },
    settings: {
      lane: 'service',
      zh: ['设置', '控制 Reader、工具栏、公式动作、消息导航、导出尺寸和主题。'],
      en: ['Settings', 'Controls Reader, toolbar, formula actions, message navigation, export size, and theme.'],
      source: 'src/core/settings/types.ts',
    },
  };

  const GRAPHS = {
    overview: {
      lanes: ['action', 'ui', 'service', 'adapter', 'runtime'],
      nodes: {
        readAction: [250, 36],
        partialCopyAction: [450, 36],
        stickyAction: [650, 36],
        annotateAction: [850, 36],
        bookmarkAction: [1050, 36],
        exportAction: [250, 102],
        formulaAction: [450, 102],
        messageNavigationAction: [650, 102],
        settingsAction: [850, 102],
        toolbarOrchestrator: [250, 216],
        toolbar: [480, 216],
        readerPanel: [710, 216],
        bookmarksPanel: [940, 216],
        saveMessagesDialog: [250, 282],
        settingsPanel: [480, 282],
        formulaHover: [710, 282],
        messageStepper: [940, 282],
        readerSource: [250, 396],
        readerItems: [480, 396],
        markdown: [710, 396],
        units: [940, 396],
        readerMarkdownCopy: [240, 462],
        bookmarksService: [446, 462],
        exportFormatter: [652, 462],
        formulaAssets: [858, 462],
        settingsService: [1064, 462],
        adapter: [250, 576],
        engine: [480, 576],
        snapshot: [710, 576],
        domTurnRefs: [940, 576],
        navigationAnchor: [250, 642],
        pageBridge: [480, 642],
        chatgpt: [250, 756],
        contentRuntime: [480, 756],
        backgroundRuntime: [710, 756],
        runtimeProtocol: [940, 756],
        browserStorage: [250, 822],
        clipboardDownloads: [480, 822],
        googleDrive: [710, 822],
      },
      edges: [
        ['chatgpt', 'contentRuntime', 'discovery'],
        ['contentRuntime', 'adapter', 'discovery'],
        ['adapter', 'engine', 'discovery'],
        ['engine', 'snapshot', 'discovery'],
        ['domTurnRefs', 'navigationAnchor', 'messageNavigation'],
        ['snapshot', 'readerSource', 'discovery'],
        ['readerSource', 'readerItems', 'reader'],
        ['readerItems', 'markdown', 'reader'],
        ['readerItems', 'readerMarkdownCopy', 'copy'],
        ['readerItems', 'exportFormatter', 'exportFlow'],
        ['readerItems', 'bookmarksService', 'bookmarks'],
        ['markdown', 'units', 'copy'],
        ['units', 'formulaAssets', 'formula'],
        ['settingsService', 'readerPanel', 'settingsBackup'],
        ['settingsService', 'formulaHover', 'settingsBackup'],
        ['settingsService', 'messageStepper', 'settingsBackup'],
        ['toolbarOrchestrator', 'toolbar', 'reader'],
        ['toolbar', 'readerPanel', 'reader'],
        ['toolbar', 'bookmarksPanel', 'bookmarks'],
        ['toolbar', 'saveMessagesDialog', 'exportFlow'],
        ['readerPanel', 'readAction', 'reader'],
        ['readerPanel', 'partialCopyAction', 'copy'],
        ['readerPanel', 'stickyAction', 'reader'],
        ['readerPanel', 'annotateAction', 'reader'],
        ['bookmarksPanel', 'bookmarkAction', 'bookmarks'],
        ['saveMessagesDialog', 'exportAction', 'exportFlow'],
        ['formulaHover', 'formulaAction', 'formula'],
        ['messageStepper', 'messageNavigationAction', 'messageNavigation'],
        ['settingsPanel', 'settingsAction', 'settingsBackup'],
        ['bookmarksService', 'runtimeProtocol', 'bookmarks'],
        ['settingsService', 'runtimeProtocol', 'settingsBackup'],
        ['runtimeProtocol', 'backgroundRuntime', 'bookmarks'],
        ['backgroundRuntime', 'browserStorage', 'bookmarks'],
        ['backgroundRuntime', 'googleDrive', 'settingsBackup'],
        ['readerMarkdownCopy', 'clipboardDownloads', 'copy'],
        ['exportFormatter', 'clipboardDownloads', 'exportFlow'],
        ['formulaAssets', 'clipboardDownloads', 'formula'],
      ],
    },
    discovery: {
      lanes: ['service', 'adapter', 'runtime'],
      nodes: {
        readerSource: [940, 54],
        readerItems: [480, 54],
        adapter: [250, 236],
        engine: [480, 236],
        pageBridge: [710, 196],
        domTurnRefs: [710, 276],
        snapshot: [940, 236],
        chatgpt: [250, 416],
        contentRuntime: [480, 416],
      },
      edges: [
        ['chatgpt', 'contentRuntime', 'discovery'],
        ['contentRuntime', 'adapter', 'discovery'],
        ['adapter', 'engine', 'discovery'],
        ['engine', 'pageBridge', 'discovery'],
        ['engine', 'domTurnRefs', 'discovery'],
        ['engine', 'snapshot', 'discovery'],
        ['snapshot', 'readerSource', 'discovery'],
        ['readerSource', 'readerItems', 'discovery'],
      ],
    },
    reader: {
      lanes: ['action', 'ui', 'service', 'adapter'],
      nodes: {
        readAction: [250, 50],
        stickyAction: [480, 50],
        annotateAction: [710, 50],
        messageNavigationAction: [940, 50],
        readerPanel: [250, 230],
        pager: [480, 230],
        sticky: [710, 230],
        annotations: [710, 296],
        quickSend: [940, 296],
        sendPopover: [940, 230],
        readerSource: [250, 410],
        readerItems: [480, 410],
        markdown: [710, 410],
        outline: [940, 410],
        units: [710, 476],
        selection: [940, 476],
        snapshot: [250, 590],
      },
      edges: [
        ['snapshot', 'readerSource', 'reader'],
        ['readerSource', 'readerItems', 'reader'],
        ['readerItems', 'markdown', 'reader'],
        ['markdown', 'outline', 'reader'],
        ['markdown', 'units', 'reader'],
        ['markdown', 'readerPanel', 'reader'],
        ['outline', 'readerPanel', 'reader'],
        ['readerPanel', 'pager', 'messageNavigation'],
        ['pager', 'messageNavigationAction', 'messageNavigation'],
        ['readerPanel', 'selection', 'copy'],
        ['units', 'selection', 'copy'],
        ['selection', 'sticky', 'reader'],
        ['selection', 'annotations', 'reader'],
        ['annotations', 'quickSend', 'reader'],
        ['sendPopover', 'quickSend', 'reader'],
        ['readerPanel', 'readAction', 'reader'],
        ['sticky', 'stickyAction', 'reader'],
        ['annotations', 'annotateAction', 'reader'],
      ],
    },
    copy: {
      lanes: ['ui', 'service', 'runtime'],
      nodes: {
        toolbar: [250, 66],
        readerPanel: [480, 66],
        units: [250, 246],
        selection: [480, 246],
        readerMarkdownCopy: [710, 246],
        readerItems: [940, 246],
        clipboardDownloads: [480, 426],
      },
      edges: [
        ['toolbar', 'readerItems', 'copy'],
        ['readerPanel', 'selection', 'copy'],
        ['units', 'selection', 'copy'],
        ['readerItems', 'readerMarkdownCopy', 'copy'],
        ['selection', 'readerMarkdownCopy', 'copy'],
        ['readerMarkdownCopy', 'clipboardDownloads', 'copy'],
      ],
    },
    bookmarks: {
      lanes: ['ui', 'service', 'runtime'],
      nodes: {
        toolbar: [250, 62],
        readerPanel: [480, 62],
        bookmarkDialog: [710, 62],
        bookmarksPanel: [940, 62],
        bookmarksService: [480, 242],
        runtimeProtocol: [250, 424],
        backgroundRuntime: [480, 424],
        browserStorage: [710, 424],
        googleDrive: [940, 424],
      },
      edges: [
        ['toolbar', 'bookmarkDialog', 'bookmarks'],
        ['readerPanel', 'bookmarkDialog', 'bookmarks'],
        ['bookmarkDialog', 'bookmarksService', 'bookmarks'],
        ['bookmarksPanel', 'bookmarksService', 'bookmarks'],
        ['bookmarksService', 'runtimeProtocol', 'bookmarks'],
        ['runtimeProtocol', 'backgroundRuntime', 'bookmarks'],
        ['backgroundRuntime', 'browserStorage', 'bookmarks'],
        ['browserStorage', 'googleDrive', 'settingsBackup'],
      ],
    },
    exportFlow: {
      lanes: ['action', 'ui', 'service', 'runtime'],
      nodes: {
        exportAction: [250, 62],
        saveMessagesDialog: [250, 242],
        toolbar: [480, 242],
        readerSource: [250, 422],
        readerItems: [480, 422],
        exportFormatter: [710, 422],
        clipboardDownloads: [480, 602],
      },
      edges: [
        ['toolbar', 'saveMessagesDialog', 'exportFlow'],
        ['saveMessagesDialog', 'readerSource', 'exportFlow'],
        ['readerSource', 'readerItems', 'exportFlow'],
        ['readerItems', 'exportFormatter', 'exportFlow'],
        ['exportFormatter', 'clipboardDownloads', 'exportFlow'],
        ['saveMessagesDialog', 'exportAction', 'exportFlow'],
      ],
    },
    formula: {
      lanes: ['action', 'ui', 'service', 'runtime'],
      nodes: {
        formulaAction: [250, 62],
        formulaHover: [250, 242],
        settingsPanel: [480, 242],
        formulaAssets: [250, 422],
        settingsService: [480, 422],
        clipboardDownloads: [250, 602],
      },
      edges: [
        ['formulaHover', 'formulaAssets', 'formula'],
        ['settingsPanel', 'settingsService', 'settingsBackup'],
        ['settingsService', 'formulaAssets', 'settingsBackup'],
        ['formulaAssets', 'clipboardDownloads', 'formula'],
        ['formulaHover', 'formulaAction', 'formula'],
      ],
    },
    settingsBackup: {
      lanes: ['action', 'ui', 'service', 'runtime'],
      nodes: {
        settingsAction: [250, 62],
        settingsPanel: [250, 242],
        settingsService: [250, 422],
        cloudBackupClient: [480, 422],
        runtimeProtocol: [250, 602],
        backgroundRuntime: [480, 602],
        browserStorage: [710, 602],
        googleDrive: [940, 602],
      },
      edges: [
        ['settingsPanel', 'settingsAction', 'settingsBackup'],
        ['settingsPanel', 'settingsService', 'settingsBackup'],
        ['settingsPanel', 'cloudBackupClient', 'settingsBackup'],
        ['settingsService', 'runtimeProtocol', 'settingsBackup'],
        ['cloudBackupClient', 'runtimeProtocol', 'settingsBackup'],
        ['runtimeProtocol', 'backgroundRuntime', 'settingsBackup'],
        ['backgroundRuntime', 'browserStorage', 'settingsBackup'],
        ['backgroundRuntime', 'googleDrive', 'settingsBackup'],
      ],
    },
    messageNavigation: {
      lanes: ['action', 'ui', 'adapter', 'runtime'],
      nodes: {
        messageNavigationAction: [250, 62],
        pager: [250, 242],
        messageStepper: [480, 242],
        readerPanel: [710, 242],
        navigationAnchor: [250, 422],
        domTurnRefs: [480, 422],
        adapter: [710, 422],
        chatgpt: [250, 602],
        contentRuntime: [480, 602],
      },
      edges: [
        ['chatgpt', 'contentRuntime', 'discovery'],
        ['contentRuntime', 'adapter', 'discovery'],
        ['adapter', 'domTurnRefs', 'messageNavigation'],
        ['domTurnRefs', 'navigationAnchor', 'messageNavigation'],
        ['navigationAnchor', 'messageStepper', 'messageNavigation'],
        ['messageStepper', 'pager', 'messageNavigation'],
        ['pager', 'messageNavigationAction', 'messageNavigation'],
        ['readerPanel', 'pager', 'messageNavigation'],
      ],
    },
  };

  const LANE_LAYOUT = {
    labelWidth: 208,
    laneHeight: 180,
    safeGap: 30,
    top: 0,
    nodeWidth: 178,
    nodeHeight: 58,
    viewWidth: 1260,
  };

  function locale(instance) {
    return instance.dataset.lang === 'en' ? 'en' : 'zh';
  }

  function copy(lang) {
    return COPY[lang] || COPY.zh;
  }

  function textForNode(lang, graph, id) {
    const node = (graph.aliases && graph.aliases[id]) || COMMON_NODES[id];
    if (!node) return { label: id, description: copy(lang).chooseHint, lane: 'ui' };
    const tuple = node[lang] || node.zh;
    return {
      ...node,
      label: tuple[0],
      description: tuple[1],
    };
  }

  function graphHeight(graph) {
    return graph.lanes.length * LANE_LAYOUT.laneHeight;
  }

  function laneTop(graph, lane) {
    const index = graph.lanes.indexOf(lane);
    return LANE_LAYOUT.top + Math.max(index, 0) * LANE_LAYOUT.laneHeight;
  }

  function graphX(sourceX) {
    return sourceX;
  }

  function contentMinX() {
    return Math.max(0, LANE_LAYOUT.labelWidth - LANE_LAYOUT.safeGap);
  }

  function contentMaxX() {
    return LANE_LAYOUT.viewWidth + LANE_LAYOUT.safeGap;
  }

  function nodePosition(graph, nodeId) {
    const position = graph.nodes[nodeId];
    if (!position) return null;
    const data = textForNode('zh', graph, nodeId);
    return { x: graphX(position[0]), y: position[1], lane: data.lane };
  }

  function escapeText(value) {
    return String(value)
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;');
  }

  function edgePath(graph, fromId, toId) {
    const from = nodePosition(graph, fromId);
    const to = nodePosition(graph, toId);
    if (!from || !to) return '';
    const startX = from.x + LANE_LAYOUT.nodeWidth;
    const startY = from.y + LANE_LAYOUT.nodeHeight / 2;
    const endX = to.x;
    const endY = to.y + LANE_LAYOUT.nodeHeight / 2;
    const midX = startX + Math.max(38, (endX - startX) * 0.52);
    return `M ${startX} ${startY} C ${midX} ${startY}, ${midX} ${endY}, ${endX} ${endY}`;
  }

  function renderNode(lang, graph, id) {
    const pos = graph.nodes[id];
    const data = textForNode(lang, graph, id);
    const drill = data.drill ? ` data-drill="${data.drill}"` : '';
    const source = data.source ? ` data-source="${escapeText(data.source)}"` : '';
    const aria = escapeText(`${data.label}: ${data.description}`);
    return `
      <foreignObject x="${graphX(pos[0])}" y="${pos[1]}" width="${LANE_LAYOUT.nodeWidth}" height="${LANE_LAYOUT.nodeHeight}">
        <button xmlns="http://www.w3.org/1999/xhtml" type="button" class="amd-architecture-node" data-node="${id}" data-lane="${data.lane}"${drill}${source} aria-label="${aria}">
          <span>${escapeText(data.label)}</span>
          ${data.drill ? '<i aria-hidden="true">↗</i>' : ''}
        </button>
      </foreignObject>`;
  }

  function renderFrozenLanesMarkup(lang, graphId) {
    const graph = GRAPHS[graphId] || GRAPHS.overview;
    const c = copy(lang);
    const laneMarkup = graph.lanes.map((lane, index) => {
      const [title, description] = c.lanes[lane];
      const y = laneTop(graph, lane);
      return `
        <button type="button" class="amd-architecture-lane-label${index % 2 ? '' : ' is-alt'}" data-layer-button="${lane}" data-lane-y="${y}" aria-label="${escapeText(title)}">
          <strong>${escapeText(title)}</strong>
          <span>${escapeText(description)}</span>
        </button>`;
    }).join('');

    return `
      <div class="amd-architecture-lane-track" data-amd-architecture-lane-track>
        ${laneMarkup}
      </div>`;
  }

  function renderGraphContentSvg(lang, graphId) {
    const graph = GRAPHS[graphId] || GRAPHS.overview;
    const c = copy(lang);
    const height = graphHeight(graph);
    const minX = contentMinX();
    const width = contentMaxX() - minX;
    const laneMarkup = graph.lanes.map((lane, index) => {
      const y = laneTop(graph, lane);
      return `
        <g class="amd-architecture-lane" data-lane="${lane}">
          <rect x="${minX}" y="${y}" width="${width}" height="${LANE_LAYOUT.laneHeight}" rx="0"></rect>
          ${index > 0 ? `<path class="amd-architecture-lane-divider" d="M ${minX} ${y} H ${contentMaxX()}"></path>` : ''}
        </g>`;
    }).join('');

    const edges = graph.edges.map(([from, to, flow], index) => {
      const path = edgePath(graph, from, to);
      return path
        ? `<path class="amd-architecture-edge" data-flow="${flow}" data-from="${from}" data-to="${to}" id="amd-edge-${graphId}-${index}" marker-end="url(#amd-architecture-arrow-${graphId})" d="${path}"></path>`
        : '';
    }).join('');
    const nodes = Object.keys(graph.nodes).map((id) => renderNode(lang, graph, id)).join('');

    return `
      <svg class="amd-architecture-svg amd-architecture-content-svg" data-current="${graphId}" viewBox="0 0 ${width} ${height}" preserveAspectRatio="none" role="img" aria-label="${escapeText(c.graphTitles[graphId] || c.overview)}">
        <defs>
          <marker id="amd-architecture-arrow-${graphId}" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth">
            <path d="M0,0 L0,6 L8,3 z"></path>
          </marker>
        </defs>
        <g class="svg-pan-zoom_viewport">
          ${laneMarkup}
          <g class="amd-architecture-edges">${edges}</g>
          <g class="amd-architecture-nodes">${nodes}</g>
        </g>
      </svg>`;
  }

  function renderGraphSurfaces(lang, graphId) {
    return `
      <div class="amd-architecture-lane-pane" data-amd-architecture-lane-pane>
        ${renderFrozenLanesMarkup(lang, graphId)}
      </div>
      <div class="amd-architecture-canvas-pane" data-amd-architecture-canvas-pane>
        ${renderGraphContentSvg(lang, graphId)}
      </div>`;
  }

  function renderDetail(instance, lang, graphId, nodeId) {
    const detailEl = instance.querySelector('[data-amd-architecture-detail]');
    const c = copy(lang);
    const graph = GRAPHS[graphId] || GRAPHS.overview;
    if (!nodeId) {
      detailEl.innerHTML = `<span>${c.nodeDetail}</span><strong>${c.chooseNode}</strong><p>${c.chooseHint}</p>`;
      return;
    }
    const data = textForNode(lang, graph, nodeId);
    const laneLabel = c.lanes[data.lane] ? c.lanes[data.lane][0] : data.lane;
    const source = data.source ? `<small>${c.source}: <code>${escapeText(data.source)}</code></small>` : '';
    const drill = data.drill ? `<button type="button" data-drill="${data.drill}">${c.openPath}</button>` : '';
    detailEl.innerHTML = `<span>${escapeText(laneLabel)}</span><strong>${escapeText(data.label)}</strong><p>${escapeText(data.description)}</p>${source}${drill}`;
    const button = detailEl.querySelector('[data-drill]');
    if (button) button.addEventListener('click', () => render(instance, lang, button.dataset.drill));
  }

  function setupArchitectureCamera(instance, lanePane, contentSvg, graph, onViewChange) {
    const baseHeight = graphHeight(graph);
    const minX = contentMinX();
    const maxX = contentMaxX();
    const baseWidth = maxX - minX;
    const state = {
      x: minX,
      y: 0,
      zoom: 1,
      dragging: false,
      startX: 0,
      startY: 0,
      startViewX: 0,
      startViewY: 0,
    };

    function currentZoom() {
      return Math.round(state.zoom * 100);
    }

    function defaultZoom() {
      const rect = contentSvg.getBoundingClientRect();
      return clamp(rect.width / baseWidth, 0.42, 0.82);
    }

    function viewportSize() {
      const rect = contentSvg.getBoundingClientRect();
      return {
        width: Math.max(1, rect.width) / state.zoom,
        height: Math.max(1, rect.height) / state.zoom,
        screenWidth: Math.max(1, rect.width),
        screenHeight: Math.max(1, rect.height),
      };
    }

    function clamp(value, min, max) {
      return Math.min(Math.max(value, min), max);
    }

    function clampCamera() {
      state.zoom = clamp(Number(state.zoom) || 1, 0.42, 2.2);
      const size = viewportSize();
      if (size.width >= baseWidth) {
        state.x = minX - (size.width - baseWidth) / 2;
      } else {
        state.x = clamp(state.x, minX, maxX - size.width);
      }
      if (size.height >= baseHeight) {
        state.y = -(size.height - baseHeight) / 2;
      } else {
        state.y = clamp(state.y, 0, baseHeight - size.height);
      }
      return size;
    }

    function apply() {
      const size = clampCamera();
      const viewport = contentSvg.querySelector('.svg-pan-zoom_viewport');
      contentSvg.setAttribute('viewBox', `0 0 ${size.screenWidth} ${size.screenHeight}`);
      viewport?.setAttribute('transform', `translate(${-state.x * state.zoom} ${-state.y * state.zoom}) scale(${state.zoom})`);
      lanePane.querySelectorAll('[data-layer-button]').forEach((button) => {
        const y = Number(button.dataset.laneY) || 0;
        button.style.transform = `translateY(${(y - state.y) * state.zoom}px)`;
        button.style.height = `${LANE_LAYOUT.laneHeight * state.zoom}px`;
      });
      if (onViewChange) onViewChange(currentZoom());
    }

    function pointFromEvent(event) {
      const rect = contentSvg.getBoundingClientRect();
      return {
        rx: (event.clientX - rect.left) / rect.width,
        ry: (event.clientY - rect.top) / rect.height,
        x: state.x + (event.clientX - rect.left) / state.zoom,
        y: state.y + (event.clientY - rect.top) / state.zoom,
      };
    }

    contentSvg.addEventListener('pointerdown', (event) => {
      if (event.target.closest && event.target.closest('.amd-architecture-node')) return;
      state.dragging = true;
      state.startX = event.clientX;
      state.startY = event.clientY;
      state.startViewX = state.x;
      state.startViewY = state.y;
      contentSvg.setPointerCapture?.(event.pointerId);
    });

    contentSvg.addEventListener('pointermove', (event) => {
      if (!state.dragging) return;
      const dx = (event.clientX - state.startX) / state.zoom;
      const dy = (event.clientY - state.startY) / state.zoom;
      state.x = state.startViewX - dx;
      state.y = state.startViewY - dy;
      apply();
    });

    function stopDrag(event) {
      state.dragging = false;
      if (event?.pointerId !== undefined) contentSvg.releasePointerCapture?.(event.pointerId);
    }

    contentSvg.addEventListener('pointerup', stopDrag);
    contentSvg.addEventListener('pointercancel', stopDrag);
    contentSvg.addEventListener('mouseleave', stopDrag);

    const controller = {
      reset() {
        state.x = minX;
        state.y = 0;
        state.zoom = defaultZoom();
        apply();
      },
      fitView() {
        this.reset();
      },
      zoomIn() {
        this.setZoomAt(state.zoom + 0.15);
      },
      zoomOut() {
        this.setZoomAt(state.zoom - 0.15);
      },
      panBy(dx, dy) {
        const size = viewportSize();
        state.x += dx * size.width;
        state.y += dy * size.height;
        apply();
      },
      setZoom(percent) {
        this.setZoomAt((Number(percent) || 100) / 100);
      },
      setZoomAt(nextZoom, anchor) {
        const size = viewportSize();
        const point = anchor || { rx: 0.5, ry: 0.5, x: state.x + size.width / 2, y: state.y + size.height / 2 };
        state.zoom = clamp(Number(nextZoom) || 1, 0.42, 2.2);
        const rect = contentSvg.getBoundingClientRect();
        state.x = point.x - (point.rx * Math.max(1, rect.width)) / state.zoom;
        state.y = point.y - (point.ry * Math.max(1, rect.height)) / state.zoom;
        apply();
      },
      enterFullscreen(target) {
        target?.requestFullscreen?.();
      },
      exitFullscreen() {
        document.exitFullscreen?.();
      },
      getZoom() {
        return currentZoom();
      },
    };

    contentSvg.addEventListener('wheel', (event) => {
      event.preventDefault();
      const pointer = pointFromEvent(event);
      const factor = event.deltaY < 0 ? 1.14 : 0.88;
      controller.setZoomAt(state.zoom * factor, pointer);
    }, { passive: false });

    return controller;
  }

  function setActiveFlow(instance, flow) {
    const root = instance.querySelector('.amd-architecture-content-svg');
    if (!root) return;
    instance.querySelectorAll('[data-layer-button]').forEach((item) => item.classList.remove('is-active'));
    root.dataset.flow = flow;
    root.querySelectorAll('[data-flow], [data-node]').forEach((el) => {
      el.classList.remove('is-active', 'is-muted', 'is-selected');
    });
    if (flow === 'all') return;
    const activeNodes = new Set();
    root.querySelectorAll(`[data-flow="${flow}"]`).forEach((edge) => {
      edge.classList.add('is-active');
      activeNodes.add(edge.dataset.from);
      activeNodes.add(edge.dataset.to);
    });
    root.querySelectorAll('[data-node]').forEach((node) => {
      if (activeNodes.has(node.dataset.node)) node.classList.add('is-active');
      else node.classList.add('is-muted');
    });
    root.querySelectorAll('[data-flow]').forEach((edge) => {
      if (!edge.classList.contains('is-active')) edge.classList.add('is-muted');
    });
  }

  function setActiveLayer(instance, layer) {
    const root = instance.querySelector('.amd-architecture-content-svg');
    if (!root) return;
    instance.querySelectorAll('[data-flow-button]').forEach((item) => item.classList.remove('is-active'));
    instance.querySelectorAll('[data-layer-button]').forEach((item) => item.classList.toggle('is-active', item.dataset.layerButton === layer));
    root.querySelectorAll('[data-flow], [data-node]').forEach((el) => {
      el.classList.remove('is-active', 'is-muted', 'is-selected');
      if (el.matches('[data-node]')) {
        el.classList.toggle('is-active', el.dataset.lane === layer);
        el.classList.toggle('is-muted', el.dataset.lane !== layer);
      }
    });
    root.querySelectorAll('[data-flow]').forEach((edge) => edge.classList.add('is-muted'));
  }

  function selectNode(instance, lang, graphId, nodeId) {
    const root = instance.querySelector('.amd-architecture-content-svg');
    if (!root) return;
    root.querySelectorAll('[data-node]').forEach((node) => node.classList.remove('is-selected'));
    root.querySelector(`[data-node="${nodeId}"]`)?.classList.add('is-selected');
    renderDetail(instance, lang, graphId, nodeId);
  }

  function render(instance, lang, graphId) {
    const graphEl = instance.querySelector('[data-amd-architecture-graph]');
    const stageEl = instance.querySelector('.amd-architecture-stage');
    const captionEl = instance.querySelector('[data-amd-architecture-caption]');
    const backEl = instance.querySelector('[data-amd-architecture-back]');
    const homeEl = instance.querySelector('[data-amd-architecture-home]');
    const resetEl = instance.querySelector('[data-amd-architecture-reset]');
    const zoomInEl = instance.querySelector('[data-amd-architecture-zoom-in]');
    const zoomOutEl = instance.querySelector('[data-amd-architecture-zoom-out]');
    const zoomEl = instance.querySelector('[data-amd-architecture-zoom]');
    const fullscreenEl = instance.querySelector('[data-amd-architecture-fullscreen]');
    const shellEl = instance.querySelector('.amd-architecture-shell');
    const c = copy(lang);
    const graph = GRAPHS[graphId] || GRAPHS.overview;
    if (stageEl) stageEl.style.minHeight = `${graphHeight(graph)}px`;
    graphEl.innerHTML = renderGraphSurfaces(lang, graphId);
    graphEl.dataset.currentGraph = c.graphTitles[graphId] || c.overview;
    captionEl.textContent = c.graphSummaries[graphId] || c.hint;
    backEl.hidden = graphId === 'overview';
    backEl.textContent = c.back;
    renderDetail(instance, lang, graphId, null);

    const lanePane = graphEl.querySelector('[data-amd-architecture-lane-pane]');
    const contentSvg = graphEl.querySelector('.amd-architecture-content-svg');
    const panZoom = lanePane && contentSvg ? setupArchitectureCamera(instance, lanePane, contentSvg, graph, (zoom) => {
      if (zoomEl) zoomEl.value = String(zoom);
    }) : null;
    if (panZoom) panZoom.reset();

    graphEl.querySelectorAll('[data-layer-button]').forEach((button) => {
      button.addEventListener('click', (event) => {
        event.stopPropagation();
        setActiveLayer(instance, button.dataset.layerButton);
      });
    });

    graphEl.querySelectorAll('[data-node]').forEach((node) => {
      node.addEventListener('click', (event) => {
        event.stopPropagation();
        selectNode(instance, lang, graphId, node.dataset.node);
      });
      node.addEventListener('dblclick', (event) => {
        event.stopPropagation();
        if (node.dataset.drill) render(instance, lang, node.dataset.drill);
      });
    });

    graphEl.onclick = () => renderDetail(instance, lang, graphId, null);
    backEl.onclick = () => render(instance, lang, 'overview');
    if (homeEl) homeEl.onclick = (event) => {
      event.preventDefault();
      event.stopPropagation();
      render(instance, lang, 'overview');
    };
    if (resetEl) resetEl.onclick = (event) => {
      event.preventDefault();
      event.stopPropagation();
      panZoom?.reset();
    };
    if (zoomInEl) zoomInEl.onclick = (event) => {
      event.preventDefault();
      event.stopPropagation();
      panZoom?.zoomIn();
    };
    if (zoomOutEl) zoomOutEl.onclick = (event) => {
      event.preventDefault();
      event.stopPropagation();
      panZoom?.zoomOut();
    };
    if (zoomEl) {
      zoomEl.value = String(panZoom?.getZoom() || 100);
      zoomEl.oninput = (event) => {
        event.stopPropagation();
        panZoom?.setZoom(zoomEl.value);
      };
    }
    if (fullscreenEl) {
      const fullscreenSupported = Boolean(shellEl?.requestFullscreen && document.exitFullscreen);
      fullscreenEl.hidden = !fullscreenSupported;
      const syncFullscreenState = () => {
        const isActive = document.fullscreenElement === shellEl;
        instance.classList.toggle('is-fullscreen', isActive);
        shellEl?.classList.toggle('is-fullscreen', isActive);
        fullscreenEl.textContent = isActive ? c.exitFullscreen : c.fullscreen;
      };
      syncFullscreenState();
      fullscreenEl.onclick = (event) => {
        event.preventDefault();
        event.stopPropagation();
        if (!fullscreenSupported) return;
        if (document.fullscreenElement === shellEl) panZoom?.exitFullscreen();
        else panZoom?.enterFullscreen(shellEl);
      };
      if (!instance._amdArchitectureFullscreenListener) {
        instance._amdArchitectureFullscreenListener = true;
        document.addEventListener('fullscreenchange', syncFullscreenState);
      }
    }
    instance._amdArchitecturePanZoom = panZoom;
  }

  function init(instance) {
    const lang = locale(instance);
    const c = copy(lang);
    const quickEl = instance.querySelector('[data-amd-architecture-flows]');
    quickEl.innerHTML = c.flows.map(([id, label]) => `<button type="button" data-flow-button="${id}">${escapeText(label)}</button>`).join('');
    quickEl.querySelectorAll('[data-flow-button]').forEach((button) => {
      button.addEventListener('click', () => {
        quickEl.querySelectorAll('[data-flow-button]').forEach((item) => item.classList.toggle('is-active', item === button));
        render(instance, lang, button.dataset.flowButton || 'overview');
      });
    });
    render(instance, lang, 'overview');
  }

  function boot() {
    document.querySelectorAll('[data-amd-architecture]').forEach(init);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot, { once: true });
  } else {
    boot();
  }
})();
