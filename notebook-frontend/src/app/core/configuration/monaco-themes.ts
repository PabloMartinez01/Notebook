import {editor} from 'monaco-editor';
import IStandaloneThemeData = editor.IStandaloneThemeData;
import IStandaloneEditorConstructionOptions = editor.IStandaloneEditorConstructionOptions;

export const customDarkTheme: IStandaloneThemeData = {
  base: 'vs-dark',
  inherit: false,
  rules: [
    { token: '', foreground: 'D1D5DA' },
    { token: 'string.key.json', foreground: 'AABEFF' },
    { token: 'string.value.json', foreground: 'C5A3FF' },
    { token: 'number', foreground: 'B392F0' },
    { token: 'keyword', foreground: '9F7BFF' },
    { token: 'variable', foreground: 'AABEFF' },
    { token: 'type', foreground: '8BE9FD' },
    { token: 'function', foreground: 'FFD866' },
    { token: 'invalid', foreground: 'FF5555' },
  ],
  colors: {
    'editor.background': '#0D1117',
    'editor.foreground': '#D1D5DA',
    'editor.lineHighlightBackground': '#1A1535',
    'editorCursor.foreground': '#A277FF',
    'editor.selectionBackground': '#3B2B5A',
    'editor.inactiveSelectionBackground': '#2A2340',
    'editorLineNumber.foreground': '#444C56',
    'editorLineNumber.activeForeground': '#AABEFF',
    'editorIndentGuide.background': '#2C313A',
    'editorIndentGuide.activeBackground': '#4B4A66',
  }
};

export const customLightTheme: IStandaloneThemeData = {
  base: 'vs',
  inherit: false,
  rules: [
    { token: '', foreground: '1A1A1A' },
    { token: 'string.key.json', foreground: '2A45A0' },
    { token: 'string.value.json', foreground: '2F4BD1' },
    { token: 'number', foreground: '5E3EC2' },
    { token: 'keyword', foreground: '5633B9' },
    { token: 'variable', foreground: '2A45A0' },
    { token: 'type', foreground: '006FA1' },
    { token: 'function', foreground: 'A65700' },
    { token: 'invalid', foreground: 'C02B2B' }
  ],
  colors: {
    'editor.background': '#f8f8f8',
    'editor.foreground': '#101010',
    'editor.lineHighlightBackground': '#EAEFFD',
    'editorCursor.foreground': '#2A45A0',
    'editor.selectionBackground': '#B3CDFF',
    'editor.inactiveSelectionBackground': '#D6E4FB',
    'editorLineNumber.foreground': '#7A7F87',
    'editorLineNumber.activeForeground': '#2A45A0',
    'editorIndentGuide.background': '#DADCE0',
    'editorIndentGuide.activeBackground': '#BFC8D9'
  }
};

export const defaultEditorOptions: IStandaloneEditorConstructionOptions = {
  lineNumbers: "off",
    language: 'markdown',
    automaticLayout: true,
    quickSuggestions: false,
    scrollBeyondLastLine: false,
    padding: {
    top: 20,
      bottom: 20
  },
  scrollbar: {
    verticalScrollbarSize: 2,
  },
  contextmenu: false,
    fontFamily: 'Fira Code, monospace',
    fontSize: 15,
    fontLigatures: true,
    minimap: {
    side: "left",
  },
}
