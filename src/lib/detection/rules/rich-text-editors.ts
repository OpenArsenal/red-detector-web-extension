import type { TechnologyDefinition } from '../types';

export const richTextEditorsTechnologyDefinitions = [
	{
		id: "ace",
		name: "Ace",
		website: "https://github.com/ajaxorg/ace",
		description: "Ace is an embeddable code editor written in JavaScript.",
		icon: "Ace.png",
		categories: [
			"rich-text-editors"
		],
		rules: [
			{
				id: "ace:pageGlobal:0",
				kind: "pageGlobal",
				property: "ace.EditSession",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "ace:pageGlobal:1",
				kind: "pageGlobal",
				property: "ace.Editor",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "ace:pageGlobal:2",
				kind: "pageGlobal",
				property: "ace.version",
				valuePattern: new RegExp("([\\d\\.]+)"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "adobe-golive",
		name: "Adobe GoLive",
		website: "https://www.adobe.com/products/golive",
		description: "Adobe GoLive is a WYSIWYG HTML editor and web site management application.",
		icon: "Adobe GoLive.png",
		categories: [
			"rich-text-editors"
		],
		rules: [
			{
				id: "adobe-golive:meta:0",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("Adobe GoLive(?:\\s([\\d.]+))?"),
				version: { source: "match", group: 1 },
				description: "Meta tag matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:adobe:golive:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "amaya",
		name: "Amaya",
		website: "https://www.w3.org/Amaya",
		description: "Amaya is an open-source web browser editor to create and update documents on the web.",
		icon: "Amaya.png",
		categories: [
			"rich-text-editors"
		],
		rules: [
			{
				id: "amaya:meta:0",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("Amaya(?: V?([\\d.]+[a-z]))?"),
				version: { source: "match", group: 1 },
				description: "Meta tag matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "bannerboo",
		name: "BannerBoo",
		website: "https://bannerboo.com",
		description: "BannerBoo is a graphic design software that enables users to create display banners in various sizes.",
		icon: "BannerBoo.svg",
		categories: [
			"rich-text-editors"
		],
		rules: [
			{
				id: "bannerboo:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.bannerboo\\.com/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"freemium",
				"low",
				"recurring"
			]
		}
	},
	{
		id: "blockly",
		name: "Blockly",
		website: "https://developers.google.com/blockly",
		description: "Blockly is a visual programming editor by Google that enables drag-and-drop block-based coding and serves as the underlying engine for many widely used coding education platforms.",
		icon: "Blockly.svg",
		categories: [
			"rich-text-editors"
		],
		rules: [
			{
				id: "blockly:pageGlobal:0",
				kind: "pageGlobal",
				property: "Blockly.Block",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "blockly:pageGlobal:1",
				kind: "pageGlobal",
				property: "BlocklyStorage",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false
		}
	},
	{
		id: "bluefish",
		name: "Bluefish",
		website: "https://sourceforge.net/projects/bluefish",
		description: "Bluefish is a free software text editor with a variety of tools for programming in general and the development of websites.",
		icon: "Bluefish.png",
		categories: [
			"rich-text-editors"
		],
		rules: [
			{
				id: "bluefish:meta:0",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("Bluefish(?:\\s([\\d.]+))?"),
				version: { source: "match", group: 1 },
				description: "Meta tag matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "ckeditor",
		name: "CKEditor",
		website: "https://ckeditor.com",
		description: "CKEditor is a WYSIWYG rich text editor which enables writing content directly inside of web pages or online applications. Its core code is written in JavaScript and it is developed by CKSource. CKEditor is available under open-source and commercial licenses.",
		icon: "CKEditor.svg",
		categories: [
			"rich-text-editors"
		],
		rules: [
			{
				id: "ckeditor:dom:0",
				kind: "dom",
				selector: "style[data-cke]",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "ckeditor:pageGlobal:1",
				kind: "pageGlobal",
				property: "CKEDITOR",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "ckeditor:pageGlobal:2",
				kind: "pageGlobal",
				property: "CKEDITOR.version",
				valuePattern: new RegExp("^([\\d\\.])$"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "ckeditor:pageGlobal:3",
				kind: "pageGlobal",
				property: "CKEDITOR_BASEPATH",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "ckeditor:pageGlobal:4",
				kind: "pageGlobal",
				property: "CKEDITOR_VERSION",
				valuePattern: new RegExp("^([\\d\\.])$"),
				version: { source: "match", template: "5-$1" },
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "ckeditor:pageGlobal:5",
				kind: "pageGlobal",
				property: "apex.libVersions.ckeditor5",
				valuePattern: new RegExp("^([\\d\\.])$"),
				version: { source: "match", template: "5-$1" },
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:ckeditor:ckeditor:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "codemirror",
		name: "CodeMirror",
		website: "https://codemirror.net",
		description: "CodeMirror is a JavaScript component that provides a code editor in the browser.",
		icon: "CodeMirror.svg",
		categories: [
			"rich-text-editors"
		],
		rules: [
			{
				id: "codemirror:pageGlobal:0",
				kind: "pageGlobal",
				property: "CodeMirror",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "codemirror:pageGlobal:1",
				kind: "pageGlobal",
				property: "CodeMirror.version",
				valuePattern: new RegExp("^(.+)$"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:codemirror:codemirror:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "draft-js",
		name: "Draft.js",
		website: "https://draftjs.org/",
		description: "Draft.js is a JavaScript rich text editor framework, built for React.",
		icon: "draftjs.svg",
		categories: [
			"rich-text-editors",
			"ui-library"
		],
		rules: [
			{
				id: "draft-js:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("draft-js(@|/)([\\d.]+)"),
				version: { source: "match", group: 2 },
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "dreamweaver",
		name: "DreamWeaver",
		website: "https://www.adobe.com/products/dreamweaver.html",
		description: "Dreamweaver is a development tool for creating, publishing, and managing websites and mobile content.",
		icon: "DreamWeaver.png",
		categories: [
			"rich-text-editors"
		],
		rules: [
			{
				id: "dreamweaver:html:0",
				kind: "html",
				pattern: new RegExp("<!--[^>]*(?:InstanceBeginEditable|Dreamweaver([^>]+)target|DWLayoutDefaultTable)"),
				version: { source: "match", group: 1 },
				description: "HTML contains a known technology marker."
			},
			{
				id: "dreamweaver:html:1",
				kind: "html",
				pattern: new RegExp("<!-- #BeginTemplate\\s\"[\\d_\\w/]+\\.dwt"),
				description: "HTML contains a known technology marker."
			},
			{
				id: "dreamweaver:pageGlobal:2",
				kind: "pageGlobal",
				property: "MM_preloadImages",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "dreamweaver:pageGlobal:3",
				kind: "pageGlobal",
				property: "MM_showHideLayers",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "dreamweaver:pageGlobal:4",
				kind: "pageGlobal",
				property: "MM_showMenu",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "dreamweaver:meta:5",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^Adobe dreamweaver$"),
				description: "Meta tag matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:adobe:dreamweaver:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "edit-in-place",
		name: "Edit-in-Place",
		website: "https://24ways.org/2005/edit-in-place-with-ajax",
		description: "Edit-in-Place is a tool that enables text editing directly on the page using AJAX-style updates without requiring a full page reload.",
		categories: [
			"rich-text-editors"
		],
		rules: [
			{
				id: "edit-in-place:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("/jquery\\.editinplace\\.js"),
				description: "Script source URL matches a known technology marker."
			}
		],
		requires: [
			"jquery"
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"freemium"
			]
		}
	},
	{
		id: "editor-js",
		name: "Editor.js",
		website: "https://editorjs.io",
		description: "Editor.js is a Javascript library which allows developers to implement a block base text editor with plugins on their page.",
		icon: "Editor.js.svg",
		categories: [
			"rich-text-editors"
		],
		rules: [
			{
				id: "editor-js:pageGlobal:0",
				kind: "pageGlobal",
				property: "EditorJS",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "editplus",
		name: "EditPlus",
		website: "https://www.editplus.com",
		description: "EditPlus is a text, HTML, PHP, and Java editor with a Hex Viewer for Windows, offering Notepad replacement capabilities along with features for web authors and programmers.",
		icon: "EditPlus.svg",
		categories: [
			"rich-text-editors"
		],
		rules: [
			{
				id: "editplus:meta:0",
				kind: "meta",
				key: "Generator",
				valuePattern: new RegExp("^EditPlus$"),
				description: "Meta tag matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"onetime"
			]
		}
	},
	{
		id: "etherpad",
		name: "Etherpad",
		website: "https://etherpad.org",
		description: "Etherpad is an open-source, web-based collaborative real-time editor, allowing authors to simultaneously edit a text document, and see all of the participants' edits in real-time, with the ability to display each author's text in their own colour.",
		icon: "etherpad.svg",
		categories: [
			"rich-text-editors"
		],
		rules: [
			{
				id: "etherpad:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("/ep_etherpad-lite/"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "etherpad:pageGlobal:1",
				kind: "pageGlobal",
				property: "padeditbar",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "etherpad:pageGlobal:2",
				kind: "pageGlobal",
				property: "padimpexp",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "etherpad:responseHeader:3",
				kind: "responseHeader",
				key: "Server",
				valuePattern: new RegExp("^Etherpad"),
				description: "Response header matches a known technology marker."
			}
		],
		implies: [
			"node-js"
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:etherpad:etherpad:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "freetextbox",
		name: "FreeTextBox",
		website: "https://freetextbox.com",
		description: "FreeTextBox is a free open-source HTML Editor.",
		icon: "FreeTextBox.png",
		categories: [
			"rich-text-editors"
		],
		rules: [
			{
				id: "freetextbox:html:0",
				kind: "html",
				pattern: new RegExp("<!-- \\* FreeTextBox v\\d \\((\\d+\\.\\d+\\.\\d+)"),
				version: { source: "match", group: 1 },
				description: "HTML contains a known technology marker."
			},
			{
				id: "freetextbox:pageGlobal:1",
				kind: "pageGlobal",
				property: "FTB_API",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "freetextbox:pageGlobal:2",
				kind: "pageGlobal",
				property: "FTB_AddEvent",
				description: "Page-owned global matches a known technology marker."
			}
		],
		implies: [
			"microsoft-asp-net"
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:freetextbox:freetextbox:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "froala-editor",
		name: "Froala Editor",
		website: "https://froala.com/wysiwyg-editor",
		description: "Froala Editor is a WYSIWYG HTML Editor written in Javascript that enables rich text editing capabilities for applications.",
		icon: "Froala.svg",
		categories: [
			"rich-text-editors"
		],
		rules: [
			{
				id: "froala-editor:pageGlobal:1",
				kind: "pageGlobal",
				property: "FroalaEditor.VERSION",
				valuePattern: new RegExp("([\\d\\.]+)"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			}
		],
		implies: [
			"jquery",
			"font-awesome"
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "frontpage",
		name: "FrontPage",
		website: "https://office.microsoft.com/frontpage",
		description: "FrontPage is a program for developing and maintaining websites.",
		icon: "FrontPage.png",
		categories: [
			"rich-text-editors"
		],
		rules: [
			{
				id: "frontpage:meta:0",
				kind: "meta",
				key: "ProgId",
				valuePattern: new RegExp("^FrontPage\\."),
				description: "Meta tag matches a known technology marker."
			},
			{
				id: "frontpage:meta:1",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("Microsoft FrontPage(?:\\s((?:Express )?[\\d.]+))?"),
				version: { source: "match", group: 1 },
				description: "Meta tag matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:microsoft:frontpage:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "iweb",
		name: "iWeb",
		website: "https://www.apple.com/welcomescreen/ilife/iweb-3/",
		description: "iWeb is a web site creation tool.",
		icon: "Apple.svg",
		categories: [
			"rich-text-editors"
		],
		rules: [
			{
				id: "iweb:meta:0",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^iWeb( [\\d.]+)?"),
				version: { source: "match", group: 1 },
				description: "Meta tag matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "microsoft-excel",
		name: "Microsoft Excel",
		website: "https://office.microsoft.com/excel",
		description: "Microsoft Excel is an electronic spreadsheet program used for storing, organizing, and manipulating data.",
		icon: "Microsoft Excel.svg",
		categories: [
			"rich-text-editors"
		],
		rules: [
			{
				id: "microsoft-excel:html:0",
				kind: "html",
				pattern: new RegExp("(?:<html [^>]*xmlns:w=\"urn:schemas-microsoft-com:office:excel\"|<!--\\s*(?:START|END) OF OUTPUT FROM EXCEL PUBLISH AS WEB PAGE WIZARD\\s*-->|<div [^>]*x:publishsource=\"?Excel\"?)"),
				description: "HTML contains a known technology marker."
			},
			{
				id: "microsoft-excel:dom:1",
				kind: "dom",
				selector: "html[xmlns\\:w='urn:schemas-microsoft-com:office:excel'], div[x\\:publishsource='Excel']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "microsoft-excel:meta:2",
				kind: "meta",
				key: "ProgId",
				valuePattern: new RegExp("^Excel\\."),
				description: "Meta tag matches a known technology marker."
			},
			{
				id: "microsoft-excel:meta:3",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("Microsoft Excel( [\\d.]+)?"),
				version: { source: "match", group: 1 },
				description: "Meta tag matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:microsoft:excel:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "microsoft-powerpoint",
		name: "Microsoft PowerPoint",
		website: "https://office.microsoft.com/powerpoint",
		description: "Microsoft PowerPoint is a tool to create presentations using simple drag and drop tools.",
		icon: "Microsoft PowerPoint.svg",
		categories: [
			"rich-text-editors"
		],
		rules: [
			{
				id: "microsoft-powerpoint:html:0",
				kind: "html",
				pattern: new RegExp("(?:<html [^>]*xmlns:w=\"urn:schemas-microsoft-com:office:powerpoint\"|<link rel=\"?Presentation-XML\"? href=\"?[^\"]+\\.xml\"?>|<o:PresentationFormat>[^<]+</o:PresentationFormat>[^!]+<o:Slides>\\d+</o:Slides>(?:[^!]+<o:Version>([\\d.]+)</o:Version>)?)"),
				version: { source: "match", group: 1 },
				description: "HTML contains a known technology marker."
			},
			{
				id: "microsoft-powerpoint:dom:1",
				kind: "dom",
				selector: "html[xmlns\\:w='urn:schemas-microsoft-com:office:powerpoint'], link[rel='Presentation-XML'][href*='.xml']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "microsoft-powerpoint:meta:2",
				kind: "meta",
				key: "ProgId",
				valuePattern: new RegExp("^PowerPoint\\."),
				description: "Meta tag matches a known technology marker."
			},
			{
				id: "microsoft-powerpoint:meta:3",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("Microsoft PowerPoint ( [\\d.]+)?"),
				version: { source: "match", group: 1 },
				description: "Meta tag matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:microsoft:powerpoint:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "microsoft-publisher",
		name: "Microsoft Publisher",
		website: "https://office.microsoft.com/publisher",
		description: "Microsoft Publisher is an application that allows you to create professional documents such as newsletters, postcards, flyers, invitations, brochures.",
		icon: "Microsoft Publisher.svg",
		categories: [
			"rich-text-editors"
		],
		rules: [
			{
				id: "microsoft-publisher:html:0",
				kind: "html",
				pattern: new RegExp("(?:<html [^>]*xmlns:w=\"urn:schemas-microsoft-com:office:publisher\"|<!--[if pub]><xml>)"),
				description: "HTML contains a known technology marker."
			},
			{
				id: "microsoft-publisher:dom:1",
				kind: "dom",
				selector: "html[xmlns\\:w='urn:schemas-microsoft-com:office:publisher']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "microsoft-publisher:meta:2",
				kind: "meta",
				key: "ProgId",
				valuePattern: new RegExp("^Publisher\\."),
				description: "Meta tag matches a known technology marker."
			},
			{
				id: "microsoft-publisher:meta:3",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("Microsoft Publisher( [\\d.]+)?"),
				version: { source: "match", group: 1 },
				description: "Meta tag matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:microsoft:publisher:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "microsoft-word",
		name: "Microsoft Word",
		website: "https://office.microsoft.com/word",
		description: "MS Word is a word-processing program used primarily for creating documents.",
		icon: "Microsoft Word.svg",
		categories: [
			"rich-text-editors"
		],
		rules: [
			{
				id: "microsoft-word:html:0",
				kind: "html",
				pattern: new RegExp("(?:<html [^>]*xmlns:w=\"urn:schemas-microsoft-com:office:word\"|<w:WordDocument>|<div [^>]*class=\"?WordSection1[\" >]|<style[^>]*>[^>]*@page WordSection1)"),
				description: "HTML contains a known technology marker."
			},
			{
				id: "microsoft-word:dom:1",
				kind: "dom",
				selector: "html[xmlns\\:w='urn:schemas-microsoft-com:office:word'], div[class*='WordSection1']",
				description: "DOM selector matches a known technology marker."
			},
			{
				id: "microsoft-word:meta:2",
				kind: "meta",
				key: "ProgId",
				valuePattern: new RegExp("^Word\\."),
				description: "Meta tag matches a known technology marker."
			},
			{
				id: "microsoft-word:meta:3",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("Microsoft Word( [\\d.]+)?"),
				version: { source: "match", group: 1 },
				description: "Meta tag matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:microsoft:word:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "monaco-editor",
		name: "Monaco Editor",
		website: "https://microsoft.github.io/monaco-editor/",
		description: "Monaco Editor is the code editor that powers VS Code. Monaco Editor is a tool in the text editor category of a tech stack.",
		icon: "Microsoft.svg",
		categories: [
			"rich-text-editors"
		],
		rules: [
			{
				id: "monaco-editor:stylesheetContent:0",
				kind: "stylesheetContent",
				pattern: new RegExp("\\.monaco-editor"),
				description: "Stylesheet content contains a bounded technology signature.",
			},
			{
				id: "monaco-editor:pageGlobal:1",
				kind: "pageGlobal",
				property: "MonacoEnvironment",
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "monaco-editor:pageGlobal:2",
				kind: "pageGlobal",
				property: "apex.libVersions.monacoEditor",
				valuePattern: new RegExp("^([\\d\\.]+)$"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "monaco-editor:pageGlobal:3",
				kind: "pageGlobal",
				property: "monaco.editor",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "n1ed",
		name: "N1ED",
		website: "https://n1ed.com",
		description: "N1ED is an editor for Bootstrap websites that enables block-by-block content building.",
		icon: "N1ED.svg",
		categories: [
			"rich-text-editors",
			"styling-library",
			"component-library"
		],
		rules: [
			{
				id: "n1ed:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("\\.public\\.n1ed\\.com/"),
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"freemium",
				"mid",
				"recurring",
				"poa"
			]
		}
	},
	{
		id: "powtoon",
		name: "Powtoon",
		website: "https://www.powtoon.com",
		description: "Powtoon is a digital platform that integrates animation with modern design to enable the creation of dynamic visual presentations.",
		icon: "Powtoon.svg",
		categories: [
			"rich-text-editors",
			"animation"
		],
		rules: [
			{
				id: "powtoon:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("static\\.powtoon\\.co"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "powtoon:dom:1",
				kind: "dom",
				selector: "iframe[src*='www.powtoon.com']",
				description: "DOM selector matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"mid",
				"recurring"
			]
		}
	},
	{
		id: "pspad",
		name: "PSPad",
		website: "https://www.pspad.com",
		description: "PSPad is a feature-rich text editor designed for developers and professionals working with text, offering tools for coding, syntax highlighting, and project management.",
		icon: "PSPad.svg",
		categories: [
			"rich-text-editors"
		],
		rules: [
			{
				id: "pspad:meta:0",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^PSPad editor, www.pspad.com$"),
				description: "Meta tag matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"freemium"
			]
		}
	},
	{
		id: "quill",
		name: "Quill",
		website: "https://quilljs.com",
		description: "Quill is a free open-source WYSIWYG editor.",
		icon: "Quill.svg",
		categories: [
			"rich-text-editors"
		],
		rules: [
			{
				id: "quill:pageGlobal:1",
				kind: "pageGlobal",
				property: "Quill",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "summernote",
		name: "Summernote",
		website: "https://summernote.org",
		description: "Summernote is an open-source JavaScript library that offers a feature-rich WYSIWYG editor for web applications, allowing users to create and edit formatted content in a familiar word processor-like interface.",
		icon: "Summernote.svg",
		categories: [
			"rich-text-editors"
		],
		rules: [
			{
				id: "summernote:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("/(?:S|s)ummernote(?:\\.min)?\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "summernote:scriptSrc:1",
				kind: "scriptSrc",
				pattern: new RegExp("/summernote(?:@|-)([\\d\\.]+)/"),
				version: { source: "match", group: 1 },
				description: "Script source URL matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "tinymce",
		name: "TinyMCE",
		website: "https://www.tiny.cloud/tinymce/",
		description: "TinyMCE is an online rich-text editor released as open-source software. TinyMCE is designed to integrate with JavaScript libraries, Vue.js, and AngularJS as well as content management systems such as Joomla!, and WordPress.",
		icon: "TinyMCE.svg",
		categories: [
			"rich-text-editors",
			"ui-library"
		],
		rules: [
			{
				id: "tinymce:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("/tiny_?mce(?:\\.min)?\\.js"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "tinymce:pageGlobal:1",
				kind: "pageGlobal",
				property: "tinyMCE.majorVersion",
				valuePattern: new RegExp("([\\d.]+)"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			},
			{
				id: "tinymce:pageGlobal:2",
				kind: "pageGlobal",
				property: "tinymce",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false,
			cpe: "cpe:2.3:a:tiny:tinymce:*:*:*:*:*:*:*:*"
		}
	},
	{
		id: "tiptap",
		name: "Tiptap",
		website: "https://tiptap.dev/",
		description: "Tiptap is a headless, open-source editor framework designed for flexible and customizable text editing.",
		icon: "Tiptap.svg",
		categories: [
			"rich-text-editors"
		],
		rules: [
			{
				id: "tiptap:scriptContent:0",
				kind: "scriptContent",
				pattern: new RegExp("\\.tiptap\\.dev"),
				description: "Script content contains a bounded technology signature."
			}
		],
		metadata: {
			saas: true,
			oss: true,
			pricing: [
				"mid",
				"recurring",
				"freemium"
			]
		}
	},
	{
		id: "tlooto",
		name: "tlooto",
		website: "https://tlooto.com",
		description: "tlooto is an AI assistant designed to support academic writing, research tasks, and information synthesis for educational and scholarly use.",
		icon: "tlooto.svg",
		categories: [
			"rich-text-editors"
		],
		rules: [
			{
				id: "tlooto:pageGlobal:0",
				kind: "pageGlobal",
				property: "tlooto.copilot",
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: true,
			oss: false,
			pricing: [
				"freemium",
				"low",
				"recurring"
			]
		}
	},
	{
		id: "trix",
		name: "Trix",
		website: "https://trix-editor.org",
		description: "Trix is an open-source project from Basecamp, the creators of Ruby on Rails.",
		icon: "trix.svg",
		categories: [
			"rich-text-editors"
		],
		rules: [
			{
				id: "trix:pageGlobal:0",
				kind: "pageGlobal",
				property: "Trix.VERSION",
				valuePattern: new RegExp("^(.+)$"),
				version: { source: "match", group: 1 },
				description: "Page-owned global matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "unbounce",
		name: "Unbounce",
		website: "https://unbounce.com",
		description: "Unbounce is a tool to build landing pages.",
		icon: "Unbounce.svg",
		categories: [
			"rich-text-editors",
			"platform-cms-builder"
		],
		rules: [
			{
				id: "unbounce:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("ubembed\\.com"),
				description: "Script source URL matches a known technology marker."
			},
			{
				id: "unbounce:responseHeader:1",
				kind: "responseHeader",
				key: "X-Unbounce-PageId",
				description: "Response header matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "web-stories-for-wordpress",
		name: "Web Stories for WordPress",
		website: "https://wp.stories.google",
		description: "Web Stories for WordPress is a visual editor for creating Web Stories.",
		icon: "Web-Stories.svg",
		categories: [
			"rich-text-editors",
			"wordpress-ecosystem"
		],
		rules: [
			{
				id: "web-stories-for-wordpress:meta:0",
				kind: "meta",
				key: "amp-story-generator-name",
				valuePattern: new RegExp("^Web Stories for WordPress$"),
				description: "Meta tag matches a known technology marker."
			},
			{
				id: "web-stories-for-wordpress:meta:1",
				kind: "meta",
				key: "amp-story-generator-version",
				valuePattern: new RegExp("^(.+)$"),
				version: { source: "match", group: 1 },
				description: "Meta tag matches a known technology marker."
			}
		],
		implies: [
			"web-stories"
		],
		requires: [
			"wordpress"
		],
		metadata: {
			saas: false,
			oss: true
		}
	},
	{
		id: "webdev",
		name: "WEBDEV",
		website: "https://www.windev.com/webdev/index.html",
		description: "WEBDEV is a tool to develop internet and intranet sites and applications that support data and processes.",
		icon: "webdev.svg",
		categories: [
			"rich-text-editors"
		],
		rules: [
			{
				id: "webdev:html:0",
				kind: "html",
				pattern: new RegExp("<!-- [a-zA-Z0-9_]+ [\\d/]+ [\\d:]+ WebDev \\d\\d ([\\d.]+) -->"),
				version: { source: "match", group: 1 },
				description: "HTML contains a known technology marker."
			},
			{
				id: "webdev:responseHeader:1",
				kind: "responseHeader",
				key: "WebDevSrc",
				description: "Response header matches a known technology marker."
			},
			{
				id: "webdev:meta:2",
				kind: "meta",
				key: "generator",
				valuePattern: new RegExp("^WEBDEV$"),
				description: "Meta tag matches a known technology marker."
			}
		],
		metadata: {
			saas: false,
			oss: false
		}
	},
	{
		id: "wysibb",
		name: "WysiBB",
		website: "https://wysibb.com",
		description: "WysiBB very simple and functional open-source WYSIWYG BBCode editor based on jQuery.",
		icon: "WysiBB.svg",
		categories: [
			"rich-text-editors"
		],
		rules: [
			{
				id: "wysibb:scriptSrc:0",
				kind: "scriptSrc",
				pattern: new RegExp("/jquery\\.wysibb\\.min\\.js"),
				description: "Script source URL matches a known technology marker."
			}
		],
		implies: [
			"jquery"
		],
		metadata: {
			saas: false,
			oss: true
		}
	}
] as const satisfies readonly TechnologyDefinition[];
