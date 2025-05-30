import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {provideMarkdown} from 'ngx-markdown';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {providePrimeNG} from 'primeng/config';
import Aura from '@primeng/themes/aura';
import {definePreset} from '@primeng/themes';
import {NgxMonacoEditorConfig, provideMonacoEditor} from 'ngx-monaco-editor-v2';
import * as monaco from 'monaco-editor';
import {editor} from 'monaco-editor';
import IStandaloneThemeData = editor.IStandaloneThemeData;
import IStandaloneEditorConstructionOptions = editor.IStandaloneEditorConstructionOptions;

const MyPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '{blue.50}',
      100: '{blue.100}',
      200: '{blue.200}',
      300: '{blue.300}',
      400: '{blue.400}',
      500: '{blue.500}',
      600: '{blue.600}',
      700: '{blue.700}',
      800: '{blue.800}',
      900: '{blue.900}',
      950: '{blue.950}'
    }
  }
});

export const customDarkTheme: IStandaloneThemeData = {
  base: 'vs-dark',
  inherit: false,
  rules: [
    { token: '', foreground: 'D1D5DA' }, // Texto por defecto (gris claro)
    { token: 'string.key.json', foreground: '79B8FF' }, // Claves JSON (azul claro)
    { token: 'string.value.json', foreground: '9ECBFF' }, // Valores JSON (azul hielo)
    { token: 'number', foreground: 'B392F0' }, // Números (lila suave)
    { token: 'keyword', foreground: '58A6FF' }, // Palabras clave (azul claro)
    { token: 'comment', foreground: '6A737D', fontStyle: 'italic' }, // Comentarios (gris suave)
    { token: 'variable', foreground: 'D1D5DA' },
    { token: 'type', foreground: '56D4DD' }, // Tipos (turquesa claro)
    { token: 'function', foreground: 'FFD700' }, // Funciones (amarillo suave)
  ],
  colors: {
    'editor.background': '#0D1117', // Muy oscuro con tinte azul
    'editor.foreground': '#D1D5DA',
    'editor.lineHighlightBackground': '#161B22',
    'editorCursor.foreground': '#58A6FF',
    'editor.selectionBackground': '#264F78',
    'editor.inactiveSelectionBackground': '#3A3D41',
    'editorLineNumber.foreground': '#444C56',
    'editorLineNumber.activeForeground': '#8B949E',
    'editorIndentGuide.background': '#2C313A',
    'editorIndentGuide.activeBackground': '#3B4451',
  }
};


const defaultOptions: IStandaloneEditorConstructionOptions = {
  lineNumbers: "off"
}

// create a config and define the theme
const monacoConfig: NgxMonacoEditorConfig = {
  defaultOptions,
  onMonacoLoad: () => {
    const monacoInstance = (window as any).monaco as typeof monaco;
    monacoInstance.editor.defineTheme('customTheme', customDarkTheme);
  }
};


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideMarkdown(),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        options: {
          darkModeSelector: '.app-dark'
        },
        preset: MyPreset
      }
    }),
    provideMonacoEditor(monacoConfig) ,
  ]
};



