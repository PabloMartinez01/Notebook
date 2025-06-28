import {Component, computed, effect, inject, model, ModelSignal, Signal, signal, WritableSignal} from '@angular/core';
import {CodeEditorComponent} from '../../components/editor/code-editor.component';
import {NoteInfoComponent} from '../../components/note-info/note-info.component';
import {Splitter} from 'primeng/splitter';
import {ViewerComponent} from '../../components/viewer/viewer.component';
import {NoteService} from '../../../../core/services/note.service';
import {Note} from '../../../../core/models/note.model';
import {NoteRequest} from '../../../../core/models/note-request.model';

@Component({
  selector: 'app-create-note',
  imports: [
    CodeEditorComponent,
    NoteInfoComponent,
    Splitter,
    ViewerComponent
  ],
  templateUrl: './create-note.component.html'
})
export class CreateNoteComponent {

  private readonly noteService: NoteService = inject(NoteService);

  title: WritableSignal<string> = signal<string>('');
  content: WritableSignal<string> = signal<string>('');

  constructor() {
    effect(() => {
      console.log(this.title())
    })
  }

  saveNote(): void {

    const noteRequest: NoteRequest = {title: this.title(), content: this.content()};

    this.noteService.createNote(noteRequest).subscribe({
      next: (note: Note) => console.log(note),
      error: err => console.log(err)
    });

  }


}
