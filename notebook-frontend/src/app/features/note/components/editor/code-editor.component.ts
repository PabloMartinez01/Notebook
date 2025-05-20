import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EditorComponent} from 'ngx-monaco-editor-v2';
import {FormsModule} from '@angular/forms';
import {DarkThemeService} from '../../../../core/services/dark-theme.service';

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

  constructor(private darkThemeService: DarkThemeService) {

  }

  editorOptions = {
    theme: 'vs-dark',
    language: 'markdown',
    automaticLayout: true,
    quickSuggestions: false,
    scrollBeyondLastLine: false,
    padding: {
      top: 20,
      bottom: 20
    },
    scrollbar: {
      verticalScrollbarSize: 6,
    }
  };

  ngOnInit(): void {
    this.darkThemeService.isDarkTheme$.subscribe({
      next: darkTheme => this.editorOptions = {...this.editorOptions, theme: darkTheme ? 'vs-dark' : 'vs-light'},
      error: err => console.log(err)
    })
  }

  onModelChange(content: string): void {
    this.noteMarkdownChange.emit(content);
  }


}
