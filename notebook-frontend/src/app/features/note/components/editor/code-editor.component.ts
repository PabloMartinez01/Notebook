import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EditorComponent, NgxMonacoEditorConfig} from 'ngx-monaco-editor-v2';
import {FormsModule} from '@angular/forms';
import {ThemeService} from '../../../../core/services/theme.service';
import * as monaco from 'monaco-editor';
import {editor} from 'monaco-editor';
import IStandaloneEditorConstructionOptions = editor.IStandaloneEditorConstructionOptions;



@Component({
  selector: 'code-editor',
  imports: [
    EditorComponent,
    FormsModule
  ],
  templateUrl: './code-editor.component.html'
})
export class CodeEditorComponent implements OnInit {

  @Input() noteMarkdown: string = '';
  @Output() noteMarkdownChange: EventEmitter<string> = new EventEmitter<string>();

  constructor(private darkThemeService: ThemeService) {

  }

  editorOptions: IStandaloneEditorConstructionOptions = {
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
  };

  ngOnInit(): void {
    this.darkThemeService.isDarkTheme$.subscribe({
      next: darkTheme => {
        this.editorOptions = {...this.editorOptions, theme: darkTheme ? 'customDarkTheme' : 'customLightTheme'}
      },
      error: err => console.log(err)
    })

  }

  onModelChange(content: string): void {
    this.emitMarkdownChange(content);
  }

  private emitMarkdownChange(content: string): void {
    this.noteMarkdownChange.emit(content);
  }

}
