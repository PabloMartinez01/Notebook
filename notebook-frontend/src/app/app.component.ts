import { Component } from '@angular/core';
import {MarkdownComponent} from 'ngx-markdown';
import {Textarea} from 'primeng/textarea';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [
    MarkdownComponent,
    Textarea,
    FormsModule
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

## JavaScript Code

\`\`\`js
function greet(name) {
  console.log('Hello, ' + name + '!');
}

greet('World');
\`\`\`

End of the note. 🎉
`;
}
