/*!-----------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.7.3(14ab24ad53d8d969e86bae0096ecc3b954d0faa0)
 * Released under the MIT license
 * https://github.com/Microsoft/vscode/blob/master/LICENSE.txt
 *-----------------------------------------------------------*/

/*---------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
define("vs/editor/editor.main.nls", {
	"vs/base/browser/ui/actionbar/actionbar": [
		"{0} ({1})"
	],
	"vs/base/browser/ui/aria/aria": [
		"{0} (occurred again)"
	],
	"vs/base/browser/ui/findinput/findInput": [
		"Use Regular Expression",
		"Match Whole Word",
		"Match Case",
		"input"
	],
	"vs/base/browser/ui/inputbox/inputBox": [
		"Error: {0}",
		"Warning: {0}",
		"Info: {0}"
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
		"Windows"
	],
	"vs/base/common/severity": [
		"Error",
		"Warning",
		"Info"
	],
	"vs/base/parts/quickopen/browser/quickOpenModel": [
		"{0}, picker",
		"picker"
	],
	"vs/base/parts/quickopen/browser/quickOpenWidget": [
		"Quick picker. Type to narrow down results.",
		"Quick Picker"
	],
	"vs/base/parts/tree/browser/treeDefaults": [
		"Collapse"
	],
	"vs/editor/common/config/commonEditorConfig": [
		"Editor",
		"Controls the font family.",
		"Controls the font weight.",
		"Controls the font size in pixels.",
		"Controls the line height. Use 0 to compute the lineHeight from the fontSize.",
		"Controls visibility of line numbers",
		"Columns at which to show vertical rulers",
		"Characters that will be used as word separators when doing word related navigations or operations",
		"The number of spaces a tab is equal to. This setting is overriden based on the file contents when `editor.detectIndentation` is on.",
		"Expected 'number'. Note that the value \"auto\" has been replaced by the `editor.detectIndentation` setting.",
		"Insert spaces when pressing Tab. This setting is overriden based on the file contents when `editor.detectIndentation` is on.",
		"Expected 'boolean'. Note that the value \"auto\" has been replaced by the `editor.detectIndentation` setting.",
		"When opening a file, `editor.tabSize` and `editor.insertSpaces` will be detected based on the file contents.",
		"Controls if selections have rounded corners",
		"Controls if the editor will scroll beyond the last line",
		"Controls after how many characters the editor will wrap to the next line. Setting this to 0 turns on viewport width wrapping (word wrapping). Setting this to -1 forces the editor to never wrap.",
		"Controls if lines should wrap. The lines will wrap at min(editor.wrappingColumn, viewportWidthInColumns).",
		"Controls the indentation of wrapped lines. Can be one of 'none', 'same' or 'indent'.",
		"A multiplier to be used on the `deltaX` and `deltaY` of mouse wheel scroll events",
		"Controls if quick suggestions should show up or not while typing",
		"Controls the delay in ms after which quick suggestions will show up",
		"Enables parameter hints",
		"Controls if the editor should automatically close brackets after opening them",
		"Controls if the editor should automatically format the line after typing",
		"Controls if suggestions should automatically show up when typing trigger characters",
		"Controls if suggestions should be accepted 'Enter' - in addition to 'Tab'. Helps to avoid ambiguity between inserting new lines or accepting suggestions.",
		"Controls whether snippets are shown with other suggestions and how they are sorted.",
		"Enable word based suggestions.",
		"Insert snippets when their prefix matches. Works best when 'quickSuggestions' aren't enabled.",
		"Controls whether the editor should highlight similar matches to the selection",
		"Controls the number of decorations that can show up at the same position in the overview ruler",
		"Control the cursor animation style, possible values are 'blink', 'smooth', 'phase', 'expand' and 'solid'",
		"Zoom the font of the editor when using mouse wheel and holding Ctrl",
		"Controls the cursor style, accepted values are 'block', 'line' and 'underline'",
		"Enables font ligatures",
		"Controls if the cursor should be hidden in the overview ruler.",
		"Controls how the editor should render whitespace characters, posibilties are 'none', 'boundary', and 'all'. The 'boundary' option does not render single spaces between words.",
		"Controls whether the editor should render control characters",
		"Controls whether the editor should render indent guides",
		"Controls whether the editor should render the current line highlight",
		"Controls if the editor shows code lenses",
		"Controls whether the editor has code folding enabled",
		"Inserting and deleting whitespace follows tab stops",
		"Remove trailing auto inserted whitespace",
		"Keep peek editors open even when double clicking their content or when hitting Escape.",
		"Controls if the diff editor shows the diff side by side or inline",
		"Controls if the diff editor shows changes in leading or trailing whitespace as diffs",
		"Controls if the Linux primary clipboard should be supported."
	],
	"vs/editor/common/config/defaultConfig": [
		"Editor content"
	],
	"vs/editor/common/controller/cursor": [
		"Unexpected exception while executing command."
	],
	"vs/editor/common/model/textModelWithTokens": [
		"The mode has failed while tokenizing the input."
	],
	"vs/editor/common/modes/modesRegistry": [
		"Plain Text"
	],
	"vs/editor/common/modes/snippetsRegistry": [
		"{0}, {1}"
	],
	"vs/editor/common/services/bulkEdit": [
		"These files have changed in the meantime: {0}"
	],
	"vs/editor/common/services/modeServiceImpl": [
		"Contributes language declarations.",
		"ID of the language.",
		"Name aliases for the language.",
		"File extensions associated to the language.",
		"File names associated to the language.",
		"File name glob patterns associated to the language.",
		"Mime types associated to the language.",
		"A regular expression matching the first line of a file of the language.",
		"A relative path to a file containing configuration options for the language.",
		"Empty value for `contributes.{0}`",
		"property `{0}` is mandatory and must be of type `string`",
		"property `{0}` can be omitted and must be of type `string[]`",
		"property `{0}` can be omitted and must be of type `string[]`",
		"property `{0}` can be omitted and must be of type `string`",
		"property `{0}` can be omitted and must be of type `string`",
		"property `{0}` can be omitted and must be of type `string[]`",
		"property `{0}` can be omitted and must be of type `string[]`",
		"Invalid `contributes.{0}`. Expected an array."
	],
	"vs/editor/common/services/modelServiceImpl": [
		"[{0}] {1}",
		"Please update your settings: `editor.detectIndentation` replaces `editor.tabSize`: \"auto\" or `editor.insertSpaces`: \"auto\""
	],
	"vs/editor/contrib/carretOperations/common/carretOperations": [
		"Move Carret Left",
		"Move Carret Right"
	],
	"vs/editor/contrib/clipboard/browser/clipboard": [
		"Cut",
		"Copy",
		"Paste"
	],
	"vs/editor/contrib/comment/common/comment": [
		"Toggle Line Comment",
		"Add Line Comment",
		"Remove Line Comment",
		"Toggle Block Comment"
	],
	"vs/editor/contrib/contextmenu/browser/contextmenu": [
		"Show Editor Context Menu"
	],
	"vs/editor/contrib/find/browser/findWidget": [
		"Find",
		"Find",
		"Previous match",
		"Next match",
		"Find in selection",
		"Close",
		"Replace",
		"Replace",
		"Replace",
		"Replace All",
		"Toggle Replace mode",
		"Only the first 999 results are highlighted, but all find operations work on the entire text.",
		"{0} of {1}",
		"No results"
	],
	"vs/editor/contrib/find/common/findController": [
		"Find",
		"Find Next",
		"Find Previous",
		"Find Next Selection",
		"Find Previous Selection",
		"Replace",
		"Add Selection To Next Find Match",
		"Add Selection To Previous Find Match",
		"Move Last Selection To Next Find Match",
		"Move Last Selection To Previous Find Match",
		"Select All Occurences of Find Match",
		"Change All Occurrences"
	],
	"vs/editor/contrib/folding/browser/folding": [
		"Unfold",
		"Unfold Recursively",
		"Fold",
		"Fold Recursively",
		"Fold All",
		"Unfold All",
		"Fold Level 1",
		"Fold Level 2",
		"Fold Level 3",
		"Fold Level 4",
		"Fold Level 5"
	],
	"vs/editor/contrib/format/common/formatActions": [
		"Format Code"
	],
	"vs/editor/contrib/goToDeclaration/browser/goToDeclaration": [
		" – {0} definitions",
		"Go to Definition",
		"Open Definition to the Side",
		"Peek Definition",
		"Click to show the {0} definitions found."
	],
	"vs/editor/contrib/gotoError/browser/gotoError": [
		"Suggested fixes: ",
		"Suggested fix: ",
		"({0}/{1})",
		"Go to Next Error or Warning",
		"Go to Previous Error or Warning"
	],
	"vs/editor/contrib/hover/browser/hover": [
		"Show Hover"
	],
	"vs/editor/contrib/hover/browser/modesContentHover": [
		"Loading..."
	],
	"vs/editor/contrib/inPlaceReplace/common/inPlaceReplace": [
		"Replace with Previous Value",
		"Replace with Next Value"
	],
	"vs/editor/contrib/indentation/common/indentation": [
		"Convert Indentation to Spaces",
		"Convert Indentation to Tabs",
		"Configured Tab Size",
		"Select Tab Size for Current File",
		"Indent Using Tabs",
		"Indent Using Spaces",
		"Detect Indentation from Content",
		"Toggle Render Whitespace",
		"Toggle Control Characters"
	],
	"vs/editor/contrib/linesOperations/common/linesOperations": [
		"Copy Line Up",
		"Copy Line Down",
		"Move Line Up",
		"Move Line Down",
		"Sort Lines Ascending",
		"Sort Lines Descending",
		"Trim Trailing Whitespace",
		"Delete Line",
		"Indent Line",
		"Outdent Line",
		"Insert Line Above",
		"Insert Line Below"
	],
	"vs/editor/contrib/links/browser/links": [
		"Cmd + click to follow link",
		"Ctrl + click to follow link",
		"Sorry, failed to open this link because it is not well-formed: {0}",
		"Sorry, failed to open this link because its target is missing.",
		"Open Link"
	],
	"vs/editor/contrib/multicursor/common/multicursor": [
		"Add Cursor Above",
		"Add Cursor Below",
		"Create Multiple Cursors from Selected Lines"
	],
	"vs/editor/contrib/parameterHints/browser/parameterHints": [
		"Trigger Parameter Hints"
	],
	"vs/editor/contrib/parameterHints/browser/parameterHintsWidget": [
		"{0}, hint"
	],
	"vs/editor/contrib/quickFix/browser/quickFix": [
		"Quick Fix"
	],
	"vs/editor/contrib/quickFix/browser/quickFixWidget": [
		"{0}, accepted",
		"Loading...",
		"No fix suggestions."
	],
	"vs/editor/contrib/quickOpen/browser/gotoLine": [
		"Go to line {0} and column {1}",
		"Go to line {0}",
		"Type a line number between 1 and {0} to navigate to",
		"Type a column between 1 and {0} to navigate to",
		"Go to line {0}",
		"Type a line number, followed by an optional colon and a column number to navigate to",
		"Go to Line..."
	],
	"vs/editor/contrib/quickOpen/browser/quickCommand": [
		"{0}, commands",
		"Type the name of an action you want to execute",
		"Command Palette"
	],
	"vs/editor/contrib/quickOpen/browser/quickOutline": [
		"{0}, symbols",
		"Type the name of an identifier you wish to navigate to",
		"Go to Symbol...",
		"symbols ({0})",
		"modules ({0})",
		"classes ({0})",
		"interfaces ({0})",
		"methods ({0})",
		"functions ({0})",
		"properties ({0})",
		"variables ({0})",
		"variables ({0})",
		"constructors ({0})",
		"calls ({0})"
	],
	"vs/editor/contrib/referenceSearch/browser/referenceSearch": [
		" – {0} references",
		"Find All References"
	],
	"vs/editor/contrib/referenceSearch/browser/referencesController": [
		"Loading..."
	],
	"vs/editor/contrib/referenceSearch/browser/referencesWidget": [
		"Failed to resolve file.",
		"{0} references",
		"{0} reference",
		"no preview available",
		"References",
		"No results",
		"References"
	],
	"vs/editor/contrib/rename/browser/rename": [
		"Sorry, rename failed to execute.",
		"Rename Symbol"
	],
	"vs/editor/contrib/rename/browser/renameInputField": [
		"Rename input. Type new name and press Enter to commit."
	],
	"vs/editor/contrib/rename/common/rename": [
		"No result."
	],
	"vs/editor/contrib/smartSelect/common/jumpToBracket": [
		"Go to Bracket"
	],
	"vs/editor/contrib/smartSelect/common/smartSelect": [
		"Expand Select",
		"Shrink Select"
	],
	"vs/editor/contrib/suggest/browser/suggestController": [
		"Trigger Suggest"
	],
	"vs/editor/contrib/suggest/browser/suggestWidget": [
		"Read More...{0}",
		"{0}, suggestion, has details",
		"{0}, suggestion",
		"Go back",
		"Loading...",
		"No suggestions.",
		"{0}, accepted",
		"{0}, suggestion, has details",
		"{0}, suggestion"
	],
	"vs/editor/contrib/toggleTabFocusMode/common/toggleTabFocusMode": [
		"Toggle Use of Tab Key for Setting Focus"
	],
	"vs/editor/contrib/toggleWordWrap/common/toggleWordWrap": [
		"View: Toggle Word Wrap"
	],
	"vs/editor/contrib/zoneWidget/browser/peekViewWidget": [
		"Close"
	],
	"vs/platform/configuration/common/configurationRegistry": [
		"Contributes configuration settings.",
		"A summary of the settings. This label will be used in the settings file as separating comment.",
		"Description of the configuration properties.",
		"if set, 'configuration.type' must be set to 'object",
		"'configuration.title' must be a string",
		"'configuration.properties' must be an object"
	],
	"vs/platform/extensions/common/abstractExtensionService": [
		"Extension `{1}` failed to activate. Reason: unknown dependency `{0}`.",
		"Extension `{1}` failed to activate. Reason: dependency `{0}` failed to activate.",
		"Extension `{0}` failed to activate. Reason: more than 10 levels of dependencies (most likely a dependency loop).",
		"Activating extension `{0}` failed: {1}."
	],
	"vs/platform/extensions/common/extensionsRegistry": [
		"Got empty extension description",
		"property `{0}` is mandatory and must be of type `string`",
		"property `{0}` is mandatory and must be of type `string`",
		"property `{0}` is mandatory and must be of type `string`",
		"property `{0}` is mandatory and must be of type `object`",
		"property `{0}` is mandatory and must be of type `string`",
		"property `{0}` can be omitted or must be of type `string[]`",
		"property `{0}` can be omitted or must be of type `string[]`",
		"properties `{0}` and `{1}` must both be specified or must both be omitted",
		"property `{0}` can be omitted or must be of type `string`",
		"Expected `main` ({0}) to be included inside extension's folder ({1}). This might make the extension non-portable.",
		"properties `{0}` and `{1}` must both be specified or must both be omitted",
		"The display name for the extension used in the VS Code gallery.",
		"The categories used by the VS Code gallery to categorize the extension.",
		"Banner used in the VS Code marketplace.",
		"The banner color on the VS Code marketplace page header.",
		"The color theme for the font used in the banner.",
		"The publisher of the VS Code extension.",
		"Activation events for the VS Code extension.",
		"Dependencies to other extensions. The identifier of an extension is always ${publisher}.${name}. For example: vscode.csharp.",
		"Script executed before the package is published as a VS Code extension.",
		"All contributions of the VS Code extension represented by this package."
	],
	"vs/platform/keybinding/browser/keybindingServiceImpl": [
		"Here are other available commands: ",
		"({0}) was pressed. Waiting for second key of chord...",
		"The key combination ({0}, {1}) is not a command."
	],
	"vs/platform/message/common/message": [
		"Close",
		"Later",
		"Cancel"
	]
});