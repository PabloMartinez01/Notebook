import {editor} from 'monaco-editor';
import IStandaloneThemeData = editor.IStandaloneThemeData;
import IStandaloneEditorConstructionOptions = editor.IStandaloneEditorConstructionOptions;

export const customDarkTheme: IStandaloneThemeData = {
  base: 'vs-dark',
  inherit: false,
  rules: [
    { token: '', foreground: 'D1D5DA' },
    { token: 'keyword', foreground: '577fc4' }
  ],
  colors: {
    'editor.background': '#141414',
    'editor.foreground': '#ffffff',
    'editor.lineHighlightBackground': '#171931',
    'editorCursor.foreground': '#2f3fff',
    'editor.selectionBackground': '#171931',
    'editor.inactiveSelectionBackground': '#171931',
  }

};


export const customLightTheme: IStandaloneThemeData = {
  base: 'vs',
  inherit: false,
  rules: [
    { token: '', foreground: '444444' },
    { token: 'keyword', foreground: '16418e' }
  ],
  colors: {
    'editor.background': '#ffffff',
    'editor.foreground': '#101010',
    'editor.lineHighlightBackground': '#EAEFFD',
    'editorCursor.foreground': '#2A45A0',
    'editor.selectionBackground': '#B3CDFF',
    'editor.inactiveSelectionBackground': '#D6E4FB',
  }
};

export const defaultEditorOptions: IStandaloneEditorConstructionOptions = {
  lineNumbers: "off",
    language: 'markdown',
    automaticLayout: true,
    quickSuggestions: false,
    scrollBeyondLastLine: false,
    padding: {
    top: 50,
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
