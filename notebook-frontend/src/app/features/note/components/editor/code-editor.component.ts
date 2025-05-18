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

  onModelChange(content: string): void {
    this.noteMarkdownChange.emit(content);
  }


}
