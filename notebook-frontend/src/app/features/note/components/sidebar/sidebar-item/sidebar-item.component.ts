import {Component, input, InputSignal} from '@angular/core';

@Component({
  selector: 'sidebar-item',
  imports: [],
  templateUrl: './sidebar-item.component.html'
})
export class SidebarItemComponent {

  icon: InputSignal<string> = input.required<string>();
  title: InputSignal<string> = input.required<string>();

}
