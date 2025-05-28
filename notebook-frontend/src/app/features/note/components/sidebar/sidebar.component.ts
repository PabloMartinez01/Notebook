import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Drawer} from "primeng/drawer";
import {NoteCardComponent} from '../note-card/note-card.component';

@Component({
  selector: 'sidebar',
  imports: [
    Drawer,
    NoteCardComponent
  ],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {

  @Input() sidebarVisible: boolean = false;
  @Output() sidebarVisibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  onVisibleChange(visible: boolean): void {
    this.sidebarVisibleChange.emit(visible);
  }

}
