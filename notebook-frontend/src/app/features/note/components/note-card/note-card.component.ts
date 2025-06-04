import {Component, Input} from '@angular/core';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'note-card',
  imports: [
    DatePipe
  ],
  templateUrl: './note-card.component.html'
})
export class NoteCardComponent {

  @Input() title: string = '';
  @Input() date: string = '';



}
