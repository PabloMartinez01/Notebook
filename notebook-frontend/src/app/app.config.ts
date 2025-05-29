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

export const customTheme: IStandaloneThemeData = {
  base: 'vs',
  inherit: false,
  rules: [
    { token: '', foreground: '2A2C2D' },
    { token: 'string.key.json', foreground: '7b3814' },
    { token: 'string.value.json', foreground: '0F6980', fontStyle: 'bold' }
  ],
  colors: {
    'editor.background': '#fdfbff',
    'editor.lineHighlightBackground': '#E8E8E8',
    'editorCursor.foreground': '#0F6980',
    'editor.selectionBackground': '#D1E8F5',
    'editor.inactiveSelectionBackground': '#E5EEF5',
  }
};

// create a config and define the theme
const monacoConfig: NgxMonacoEditorConfig = {
  onMonacoLoad: () => {
    const monacoInstance = (window as any).monaco as typeof monaco;
    monacoInstance.editor.defineTheme('customTheme', customTheme);
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



