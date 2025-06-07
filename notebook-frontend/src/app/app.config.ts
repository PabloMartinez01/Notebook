import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideMarkdown} from 'ngx-markdown';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {providePrimeNG} from 'primeng/config';
import {NgxMonacoEditorConfig, provideMonacoEditor} from 'ngx-monaco-editor-v2';
import * as monaco from 'monaco-editor';
import {customDarkTheme, customLightTheme} from './core/configuration/monaco-themes';
import {applicationPreset} from './core/configuration/primeng-preset';
import {provideHttpClient} from '@angular/common/http';


const monacoConfig: NgxMonacoEditorConfig = {
  onMonacoLoad: () => {
    const monacoInstance = (window as any).monaco as typeof monaco;
    monacoInstance.editor.defineTheme('customLightTheme', customLightTheme);
    monacoInstance.editor.defineTheme('customDarkTheme', customDarkTheme)
  }
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideMarkdown(),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        options: {
          darkModeSelector: '.dark'
        },
        preset: applicationPreset
      }
    }),
    provideMonacoEditor(monacoConfig) ,
  ]
};



