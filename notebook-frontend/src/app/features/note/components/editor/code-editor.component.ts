import {
  Component,
  computed,
  inject, input, InputSignal,
  model,
  ModelSignal, output,
  OutputEmitterRef,
  Signal,
  signal,
  WritableSignal
} from '@angular/core';
import {EditorComponent} from 'ngx-monaco-editor-v2';
import {FormsModule} from '@angular/forms';
import {ThemeService} from '../../../../core/services/theme.service';
import {editor} from 'monaco-editor';
import {defaultEditorOptions} from '../../../../core/configuration/monaco-themes';
import IStandaloneEditorConstructionOptions = editor.IStandaloneEditorConstructionOptions;
import IStandaloneCodeEditor = editor.IStandaloneCodeEditor;


@Component({
  selector: 'code-editor',
  imports: [
    EditorComponent,
    FormsModule
  ],
  templateUrl: './code-editor.component.html'
})
export class CodeEditorComponent  {

  private readonly themeService: ThemeService = inject(ThemeService);

  options: Signal<IStandaloneEditorConstructionOptions> = computed<IStandaloneEditorConstructionOptions>(() => ({
    ...defaultEditorOptions,
    theme: this.themeService.darkTheme() ? 'customDarkTheme' : 'customLightTheme'
  }))

  onChange: OutputEmitterRef<string> = output<string>();
  content: InputSignal<string> = input.required<string>();

  onModelChange(content: string): void {
    this.onChange.emit(content);
  }

}
