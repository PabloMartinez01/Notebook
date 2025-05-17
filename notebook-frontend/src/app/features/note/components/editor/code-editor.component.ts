import {Component, EventEmitter, Input, Output} from '@angular/core';
import {EditorComponent} from 'ngx-monaco-editor-v2';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'code-editor',
  imports: [
    EditorComponent,
    FormsModule
  ],
  templateUrl: './code-editor.component.html'
})
export class CodeEditorComponent {

  @Input() noteMarkdown: string = '';
  @Output() noteMarkdownChange: EventEmitter<string> = new EventEmitter<string>();

  editorOptions = {
    theme: 'vs-light',
    language: 'markdown',
    automaticLayout: true,
    quickSuggestions: false,
    scrollBeyondLastLine: false,
    scrollbar: {
      verticalScrollbarSize: 6,
    }
  };

  onModelChange(content: string): void {
    this.noteMarkdownChange.emit(content);
  }


}
