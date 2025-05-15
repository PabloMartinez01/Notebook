import { Component } from '@angular/core';
import {MarkdownComponent} from 'ngx-markdown';
import {Textarea} from 'primeng/textarea';
import {FormsModule} from '@angular/forms';
import {EditorComponent} from 'ngx-monaco-editor-v2';

@Component({
  selector: 'app-root',
  imports: [
    MarkdownComponent,
    FormsModule,
    EditorComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  noteMarkdown: string = `
# Test Note

This is a short **Markdown** example.

## List

- First item
- Second item
- **Important** item

## Table

| Name  | Age |
|-------|-----|
| John  | 25  |
| Mary  | 30  |

## Java Code

\`\`\`java
public class Main {
  public static void main(String[] args) {
    System.out.println("Hello world!")
  }
}
\`\`\`

End of the note. 🎉
`;



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

}
