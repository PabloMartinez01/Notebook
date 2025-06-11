import {Component, inject, input, InputSignal} from '@angular/core';
import {DatePipe} from '@angular/common';
import {Note} from '../../../../core/models/note.model';
import {Router} from '@angular/router';
import {SidebarService} from '../../../../core/services/sidebar.service';

@Component({
  selector: 'note-card',
  imports: [
    DatePipe
  ],
  templateUrl: './note-card.component.html'
})
export class NoteCardComponent {

  private sidebarService: SidebarService = inject(SidebarService);
  private router: Router = inject(Router);

  note: InputSignal<Note> = input.required<Note>();

  onEditClick(): void {
    this.sidebarService.close();
    this.router.navigate([`/note/${this.note().id}`]).then();
  }

}
