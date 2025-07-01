import {Component, inject, signal, WritableSignal} from '@angular/core';
import {PickerComponent} from '@ctrl/ngx-emoji-mart';
import {NoteService} from '../../../../core/services/note.service';

@Component({
  selector: 'app-welcome-view',
  imports: [
  ],
  templateUrl: './welcome-view.component.html'
})
export class WelcomeViewComponent {

  noteService: NoteService = inject(NoteService);




}
