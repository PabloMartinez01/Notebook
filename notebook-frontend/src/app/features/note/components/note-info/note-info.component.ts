import {Component, input, InputSignal, model, ModelSignal} from '@angular/core';
import {Note} from '../../../../core/models/note.model';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'note-info',
  imports: [
    FormsModule
  ],
  templateUrl: './note-info.component.html'
})
export class NoteInfoComponent {

  title: ModelSignal<string> = model.required<string>();
  date: InputSignal<string> = input.required<string>();

}
