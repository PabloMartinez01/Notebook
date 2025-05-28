import {Component, Input} from '@angular/core';

@Component({
  selector: 'note-card',
  imports: [],
  templateUrl: './note-card.component.html'
})
export class NoteCardComponent {

  @Input() title: string = '';
  @Input() date: string = '';



}
