import {Component, inject, signal, WritableSignal} from '@angular/core';
import {PickerComponent} from '@ctrl/ngx-emoji-mart';
import {NoteService} from '../../../../core/services/note.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-welcome-view',
  imports: [
  ],
  templateUrl: './welcome-view.component.html'
})
export class WelcomeViewComponent {

  noteService: NoteService = inject(NoteService);
  router: Router = inject(Router)

  createNote(): void {
    this.noteService.createNote().subscribe({
      next: note => this.router.navigate(['/note/', note.id]).then(),
      error: err => console.log(err)
    })
  }




}
