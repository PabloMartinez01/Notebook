import {Component, input, InputSignal} from '@angular/core';
import {EmojiComponent} from '@ctrl/ngx-emoji-mart/ngx-emoji';

@Component({
  selector: 'sidebar-item',
  imports: [
    EmojiComponent
  ],
  templateUrl: './sidebar-item.component.html'
})
export class SidebarItemComponent {
  icon: InputSignal<string> = input.required<string>();
  title: InputSignal<string> = input.required<string>();
}
