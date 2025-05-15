import { Component } from '@angular/core';
import {MarkdownComponent} from 'ngx-markdown';

@Component({
  selector: 'app-root',
  imports: [
    MarkdownComponent
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
