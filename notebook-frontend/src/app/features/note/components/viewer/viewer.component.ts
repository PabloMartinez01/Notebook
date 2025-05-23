import {Component, Input} from '@angular/core';
import {MarkdownComponent} from 'ngx-markdown';

@Component({
  selector: 'viewer',
  imports: [
    MarkdownComponent
  ],
  templateUrl: './viewer.component.html'
})
export class ViewerComponent {

  @Input() noteMarkdown: string = '';

}
