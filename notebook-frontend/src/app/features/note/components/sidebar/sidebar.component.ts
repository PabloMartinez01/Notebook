import {Component, computed, EventEmitter, inject, Input, OnInit, Output, Signal} from '@angular/core';
import {Drawer} from "primeng/drawer";
import {NoteCardComponent} from '../note-card/note-card.component';
import {NoteService} from '../../../../core/services/note.service';
import { Note } from '../../../../core/models/note.model';
import {SidebarService} from '../../../../core/services/sidebar.service';

@Component({
  selector: 'sidebar',
  imports: [
    Drawer,
    NoteCardComponent
  ],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {

  @Input() notes: Note[] = [];

  private sidebarService: SidebarService = inject(SidebarService);
  isOpen: Signal<boolean> = this.sidebarService.isOpen;

  onVisibleChange(open: boolean): void {
    this.sidebarService.setOpen(open)
  }

}
