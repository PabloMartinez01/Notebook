import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Drawer} from "primeng/drawer";

@Component({
  selector: 'sidebar',
    imports: [
        Drawer
    ],
  templateUrl: './sidebar.component.html',
  styleUrl: 'sidebar.component.css'
})
export class SidebarComponent {

  @Input() sidebarVisible: boolean = false;
  @Output() sidebarVisibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  onVisibleChange(visible: boolean): void {
    this.sidebarVisibleChange.emit(visible);
  }

}
