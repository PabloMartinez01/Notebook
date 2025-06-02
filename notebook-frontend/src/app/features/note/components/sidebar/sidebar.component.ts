import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Drawer} from "primeng/drawer";
import {NoteCardComponent} from '../note-card/note-card.component';
import {NoteService} from '../../../../core/services/note.service';

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

  constructor(private noteService: NoteService) {
  }

  onVisibleChange(visible: boolean): void {
    this.sidebarVisibleChange.emit(visible);
  }

}
