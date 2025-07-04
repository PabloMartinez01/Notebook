import {Component, input, InputSignal, model, ModelSignal} from '@angular/core';
import {NoteInfo} from '../../../../core/models/note-info.model';
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
