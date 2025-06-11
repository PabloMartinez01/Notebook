import {Component, computed, inject, model, ModelSignal, Signal, signal, WritableSignal} from '@angular/core';
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

  private themeService: ThemeService = inject(ThemeService);
  private editor!: IStandaloneCodeEditor;

  options: Signal<IStandaloneEditorConstructionOptions> = computed<IStandaloneEditorConstructionOptions>(() => ({
    ...defaultEditorOptions,
    theme: this.themeService.darkTheme() ? 'customDarkTheme' : 'customLightTheme'
  }))

  content: ModelSignal<string> = model.required<string>();


  onEditorInit(editor: IStandaloneCodeEditor): void {
    this.editor = editor;
  }


  onModelChange(content: string): void {
    this.content.set(content);
  }
}
