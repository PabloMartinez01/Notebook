import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Menubar} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'menubar',
  imports: [
    Menubar
  ],
  templateUrl: './menubar.component.html'
})
export class MenubarComponent {

  @Input() sidebarVisible: boolean = false;
  @Output() sidebarVisibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  items: MenuItem[] = [
    {
      label: 'Menu',
      icon: 'pi pi-bars',
      command: () => {
        this.sidebarVisible = true;
        this.sidebarVisibleChange.emit(true);
      }
    },
    {
      label: 'Features',
      icon: 'pi pi-star'
    },
  ]




}
