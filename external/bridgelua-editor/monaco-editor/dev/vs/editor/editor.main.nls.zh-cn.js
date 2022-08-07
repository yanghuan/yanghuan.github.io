/*!-----------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.7.3(14ab24ad53d8d969e86bae0096ecc3b954d0faa0)
 * Released under the MIT license
 * https://github.com/Microsoft/vscode/blob/master/LICENSE.txt
 *-----------------------------------------------------------*/

define("vs/editor/editor.main.nls.zh-cn", {
	"vs/base/browser/ui/actionbar/actionbar": [
		"{0} ({1})",
	],
	"vs/base/browser/ui/aria/aria": [
		"{0} (已再次发生)",
	],
	"vs/base/browser/ui/findinput/findInput": [
		"使用正则表达式",
		"全字匹配",
		"区分大小写",
		"输入",
	],
	"vs/base/browser/ui/inputbox/inputBox": [
		"错误: {0}",
		"警告: {0}",
		"信息: {0}",
	],
	"vs/base/common/keybinding": [
		"Windows",
		"Control",
		"Shift",
		"Alt",
		"Command",
		"Windows",
		"Ctrl",
		"Shift",
		"Alt",
		"Command",
		"Windows",
	],
	"vs/base/common/severity": [
		"错误",
		"警告",
		"信息",
	],
	"vs/base/parts/quickopen/browser/quickOpenModel": [
		"{0}，选取器",
		"选取器",
	],
	"vs/base/parts/quickopen/browser/quickOpenWidget": [
		"快速选取器。键入以缩小结果范围。",
		"快速选取器",
	],
	"vs/base/parts/tree/browser/treeDefaults": [
		"折叠",
	],
	"vs/editor/common/config/commonEditorConfig": [
		"编辑器",
		"控制字体系列。",
		"控制字体粗细。",
		"以像素为单位控制字号。",
		"控制行高。使用 0 通过字号计算行高。",
		"控制行号的可见性",
		"显示垂直标尺的列",
		"执行文字相关的导航或操作时将用作文字分隔符的字符",
		"一个制表符等于的空格数。该设置在 `editor.detectIndentation` 启用时根据文件内容进行重写。",
		"应为 \"number\"。注意，值\"auto\"已由 \"editor.detectIndentation\" 设置替换。",
		"按 \"Tab\" 时插入空格。该设置在 `editor.detectIndentation` 启用时根据文件内容进行重写。",
		"应为 \"boolean\"。注意，值 \"auto\" 已由 \"editor.detectIndentation\" 设置替换。",
		"当打开文件时，将基于文件内容检测 \"editor.tabSize\" 和 \"editor.insertSpaces\"。",
		"控制选取范围是否有圆角",
		"控制编辑器是否可以滚动到最后一行之后",
		"控制在多少个字符后编辑器会自动换到下一行。将其设置为 0 则将打开视区宽度换行(自动换行)。将其设置为 -1 则将强制编辑器始终不换行。",
		"控制是否应换行。换行依据为 min(editor.wrappingColumn, viewportWidthInColumns)。",
		"控制换行的行的缩进。可以是\"none\"、 \"same\" 或 \"indent\"。",
		"要对鼠标滚轮滚动事件的 \"deltaX\" 和 \"deltaY\" 使用的乘数 ",
		"控制键入时是否应显示快速建议",
		"控制延迟多少毫秒后将显示快速建议",
		"启用参数提示",
		"控制编辑器是否应该在左括号后自动插入右括号",
		"控制编辑器是否应在键入后自动设置行的格式",
		"控制键入触发器字符时是否应自动显示建议",
		"控制除了 \"Tab\" 以外，是否还应在 \"Enter\" 时接受建议。帮助避免“插入新行”或“接受建议”之间的歧义。",
		"控制是否将代码段与其他建议一起显示以及它们的排序方式。",
		"启用基于字的建议。",
		"当其前缀匹配时插入代码段。当 \"quickSuggestions\" 未启用时，效果最佳。",
		"控制编辑器是否应突出显示选项的近似匹配",
		"控制可在概述标尺同一位置显示的效果数量",
		"控制光标动画样式，可能的值为 \"blink\"、\"smooth\"、\"phase\"、\"expand\" 和 \"solid\"",
		"通过使用鼠标滚轮同时按住 Ctrl 可缩放编辑器的字体",
		"控制光标样式，接受的值为 \"block\"、\"line\" 和 \"underline\"",
		"启用字体连字",
		"控制光标是否应隐藏在概述标尺中。",
		"控制编辑器是否应呈现空白字符",
		"控制编辑器是否应呈现控制字符",
		"控制编辑器是否应呈现缩进参考线",
		"控制编辑器是否应呈现当前行突出显示",
		"控制编辑器是否显示代码滤镜",
		"控制编辑器是否启用代码折叠功能",
		"在制表位后插入和删除空格",
		"删除尾随自动插入的空格",
		"即使在双击编辑器内容或按 Esc 键时，也要保持速览编辑器的打开状态。",
		"控制 Diff 编辑器以并排或内联形式显示差异",
		"控制差异编辑器是否将对前导空格或尾随空格的更改显示为差异",
		"控制是否支持 Linux 主剪贴板。",
	],
	"vs/editor/common/config/defaultConfig": [
		"编辑器内容",
	],
	"vs/editor/common/controller/cursor": [
		"执行命令时出现意外异常。",
	],
	"vs/editor/common/model/textModelWithTokens": [
		"标记输入时模式失败。",
	],
	"vs/editor/common/modes/modesRegistry": [
		"纯文本",
	],
	"vs/editor/common/modes/snippetsRegistry": [
		"{0}, {1}",
	],
	"vs/editor/common/services/bulkEdit": [
		"这些文件也已同时更改: {0}",
	],
	"vs/editor/common/services/modeServiceImpl": [
		"有助于语言声明。",
		"语言 ID。",
		"语言的别名。",
		"与语言关联的文件扩展名。",
		"与语言关联的文件名。",
		"与语言关联的文件名 glob 模式。",
		"与语言关联的 Mime 类型。",
		"与语言文件的第一行匹配的正则表达式。",
		"包含语言配置选项的文件的相对路径。",
		"“contributes.{0}”的值为空",
		"属性“{0}”是必需的，其类型必须是“字符串”",
		"属性“{0}”可以省略，其类型必须是 \"string[]\"",
		"属性“{0}”可以省略，其类型必须是 \"string[]\"",
		"属性“{0}”可以省略，其类型必须是“字符串”",
		"属性“{0}”可以省略，其类型必须是“字符串”",
		"属性“{0}”可以省略，其类型必须是 \"string[]\"",
		"属性“{0}”可以省略，其类型必须是 \"string[]\"",
		"无效的“contributes.{0}”。应为数组。",
	],
	"vs/editor/common/services/modelServiceImpl": [
		"[{0}] {1}",
		"请更新设置: \"editor.detectIndentation\" 替换 \"editor.tabSize\": \"auto\" 或 \"editor.insertSpaces\": \"auto\"",
	],
	"vs/editor/contrib/carretOperations/common/carretOperations": [
		"左移 Carret",
		"右移 Carret",
	],
	"vs/editor/contrib/clipboard/browser/clipboard": [
		"剪切",
		"复制",
		"粘贴",
	],
	"vs/editor/contrib/comment/common/comment": [
		"切换行注释",
		"添加行注释",
		"删除行注释",
		"切换块注释",
	],
	"vs/editor/contrib/contextmenu/browser/contextmenu": [
		"显示编辑器上下文菜单",
	],
	"vs/editor/contrib/find/browser/findWidget": [
		"查找",
		"查找",
		"上一个匹配",
		"下一个匹配",
		"在选定内容中查找",
		"关闭",
		"替换",
		"替换",
		"替换",
		"全部替换",
		"切换替换模式",
		"仅前 999 个结果突出显示，但所有查找操作均针对整个文本。",
		"第 {0} 个(共 {1} 个)",
		"无结果",
	],
	"vs/editor/contrib/find/common/findController": [
		"查找",
		"查找下一个",
		"查找上一个",
		"查找下一个选择",
		"查找上一个选择",
		"替换",
		"将选择添加到下一个查找匹配项",
		"将选择内容添加到上一查找匹配项",
		"将上次选择移动到下一个查找匹配项",
		"将上个选择内容移动到上一查找匹配项",
		"选择所有找到的查找匹配项",
		"更改所有匹配项",
	],
	"vs/editor/contrib/folding/browser/folding": [
		"展开",
		"以递归方式展开",
		"折叠",
		"以递归方式折叠",
		"全部折叠",
		"全部展开",
		"折叠级别 1",
		"折叠级别 2",
		"折叠级别 3",
		"折叠级别 4",
		"折叠级别 5",
	],
	"vs/editor/contrib/format/common/formatActions": [
		"格式代码",
	],
	"vs/editor/contrib/goToDeclaration/browser/goToDeclaration": [
		" – {0} 定义",
		"转到定义",
		"打开侧边的定义",
		"查看定义",
		"单击此处显示找到的 {0} 个定义。",
	],
	"vs/editor/contrib/gotoError/browser/gotoError": [
		"建议的修正:",
		"建议的修正:",
		"({0}/{1})",
		"转到下一个错误或警告",
		"转到上一个错误或警告",
	],
	"vs/editor/contrib/hover/browser/hover": [
		"显示悬停",
	],
	"vs/editor/contrib/hover/browser/modesContentHover": [
		"正在加载...",
	],
	"vs/editor/contrib/inPlaceReplace/common/inPlaceReplace": [
		"替换为上一个值",
		"替换为下一个值",
	],
	"vs/editor/contrib/indentation/common/indentation": [
		"将缩进转换为空格",
		"将缩进转换为制表符",
		"已配置制表符大小",
		"选择当前文件的制表符大小",
		"使用 \"Tab\" 缩进",
		"使用空格缩进",
		"检查内容中的缩进",
		"切换显示空格",
		"切换控制字符",
	],
	"vs/editor/contrib/linesOperations/common/linesOperations": [
		"向上复制行",
		"向下复制行",
		"向上移动行",
		"向下移动行",
		"按升序排列行",
		"按降序排列行",
		"裁剪尾随空格",
		"删除行",
		"行缩进",
		"行减少缩进",
		"在上面插入行",
		"在下面插入行",
	],
	"vs/editor/contrib/links/browser/links": [
		"Cmd + 单击以跟踪链接",
		"Ctrl + 单击以跟踪链接",
		"抱歉，无法打开此链接，因为其格式不正确: {0}",
		"抱歉，无法打开此链接，因为其目标丢失。",
		"打开链接",
	],
	"vs/editor/contrib/multicursor/common/multicursor": [
		"在上面添加光标",
		"在下面添加光标",
		"从所选行创建多个光标",
	],
	"vs/editor/contrib/parameterHints/browser/parameterHints": [
		"触发参数提示",
	],
	"vs/editor/contrib/parameterHints/browser/parameterHintsWidget": [
		"{0}，提示",
	],
	"vs/editor/contrib/quickFix/browser/quickFix": [
		"快速修复",
	],
	"vs/editor/contrib/quickFix/browser/quickFixWidget": [
		"{0}, accepted",
		"Loading...",
		"No fix suggestions.",
	],
	"vs/editor/contrib/quickOpen/browser/gotoLine": [
		"转到行 {0} 和列 {1}",
		"转到行 {0}",
		"输入要导航到的介于 1 到 {0} 之间的行号",
		"输入要导航到的介于 1 到 {0} 之间的列",
		"Go to line {0}",
		"输入行号，后跟可选的冒号以及要导航到的列号",
		"转到行...",
	],
	"vs/editor/contrib/quickOpen/browser/quickCommand": [
		"{0}, commands",
		"输入你想要执行的操作的名称",
		"命令面板",
	],
	"vs/editor/contrib/quickOpen/browser/quickOutline": [
		"{0}, symbols",
		"输入你想要导航到的标识符的名称",
		"转到符号...",
		"符号({0})",
		"模块({0})",
		"类({0})",
		"接口({0})",
		"方法({0})",
		"函数({0})",
		"属性({0})",
		"变量({0})",
		"变量({0})",
		"构造函数({0})",
		"调用({0})",
	],
	"vs/editor/contrib/referenceSearch/browser/referenceSearch": [
		" – {0} 个引用",
		"查找所有引用",
	],
	"vs/editor/contrib/referenceSearch/browser/referencesController": [
		"正在加载...",
	],
	"vs/editor/contrib/referenceSearch/browser/referencesWidget": [
		"解析文件失败。",
		"{0} 个引用",
		"{0} 个引用",
		"无可用预览",
		"引用",
		"无结果",
		"引用",
	],
	"vs/editor/contrib/rename/browser/rename": [
		"抱歉，重命名无法执行。",
		"重命名符号",
	],
	"vs/editor/contrib/rename/browser/renameInputField": [
		"重命名输入。键入新名称并按 \"Enter\" 提交。",
	],
	"vs/editor/contrib/rename/common/rename": [
		"无结果。",
	],
	"vs/editor/contrib/smartSelect/common/jumpToBracket": [
		"转到括号",
	],
	"vs/editor/contrib/smartSelect/common/smartSelect": [
		"扩大选择",
		"缩小选择",
	],
	"vs/editor/contrib/suggest/browser/suggestController": [
		"触发建议",
	],
	"vs/editor/contrib/suggest/browser/suggestWidget": [
		"阅读更多...{0}",
		"{0}(建议)具有详细信息",
		"{0}，建议",
		"返回",
		"正在加载...",
		"无建议。",
		"{0}，已接受",
		"{0}(建议)具有详细信息",
		"{0}，建议",
	],
	"vs/editor/contrib/toggleTabFocusMode/common/toggleTabFocusMode": [
		"切换使用 Tab 键，设置焦点",
	],
	"vs/editor/contrib/toggleWordWrap/common/toggleWordWrap": [
		"查看: 切换自动换行",
	],
	"vs/editor/contrib/zoneWidget/browser/peekViewWidget": [
		"关闭",
	],
	"vs/platform/configuration/common/configurationRegistry": [
		"用于配置字符串。",
		"设置摘要。此标签将在设置文件中用作分隔注释。",
		"配置属性的描述。",
		"如果进行设置，\"configuration.type\" 必须设置为对象",
		"configuration.title 必须是字符串",
		"configuration.properties 必须是对象",
	],
	"vs/platform/extensions/common/abstractExtensionService": [
		"无法激活扩展”{1}“。原因：未知依赖关系”{0}“。",
		"无法激活扩展”{1}“。原因: 无法激活依赖关系”{0}“。",
		"无法激活扩展”{0}“。原因: 依赖关系多于 10 级(最可能是依赖关系循环)。",
		"激活扩展“{0}”失败: {1}。",
	],
	"vs/platform/extensions/common/extensionsRegistry": [
		"已获得空扩展说明",
		"属性“{0}”是必需的，其类型必须是“字符串”",
		"属性“{0}”是必需的，其类型必须是“字符串”",
		"属性“{0}”是必需的，其类型必须是“字符串”",
		"属性“{0}”为必需且其类型必须为 \"object\"",
		"属性“{0}”是必需的，其类型必须是“字符串”",
		"属性“{0}”可以省略或其类型必须是 \"string[]\"",
		"属性“{0}”可以省略或其类型必须是 \"string[]\"",
		"必须同时指定或同时省略属性”{0}“和”{1}“",
		"属性“{0}”可以省略，或者其类型必须是“字符串”",
		"应在扩展文件夹({1})中包含 \"main\" ({0})。这可能会使扩展不可移植。",
		"必须同时指定或同时省略属性”{0}“和”{1}“",
		"VS Code 库中使用的扩展的显示名称。",
		"VS Code 库用于对扩展进行分类的类别。",
		"VS Code 商城使用的横幅。",
		"VS Code 商城页标题上的横幅颜色。",
		"横幅中使用的字体颜色主题。",
		"VS Code 扩展的发布服务器。",
		"VS Code 扩展的激活事件。",
		"其他扩展的依赖关系。扩展的标识符始终是 ${publisher}.${name}。例如: vscode.csharp。",
		"包作为 VS Code 扩展发布前执行的脚本。",
		"由此包表示的 VS Code 扩展的所有贡献。",
	],
	"vs/platform/keybinding/browser/keybindingServiceImpl": [
		"以下是其他可用命令:",
		"已按下({0})。正在等待同时按下第二个键...",
		"组合键({0}, {1})不是命令。",
	],
	"vs/platform/message/common/message": [
		"关闭",
		"稍后",
		"取消",
	]
});