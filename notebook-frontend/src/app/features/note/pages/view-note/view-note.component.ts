import {Component, computed, inject, linkedSignal, OnInit, signal, Signal, WritableSignal} from '@angular/core';
import {CodeEditorComponent} from '../../components/editor/code-editor.component';
import {Splitter} from 'primeng/splitter';
import {ViewerComponent} from '../../components/viewer/viewer.component';
import {NOTE_MARKDOWN} from '../../../../core/app.constants';
import {NoteInfoComponent} from '../../components/note-info/note-info.component';
import {ActivatedRoute} from '@angular/router';
import {NoteService} from '../../../../core/services/note.service';
import {Note} from '../../../../core/models/note.model';
import {flatMap, switchMap} from 'rxjs';

@Component({
  selector: 'app-view-note',
  imports: [
    Splitter,
    ViewerComponent,
    CodeEditorComponent,
    NoteInfoComponent
  ],
  templateUrl: './view-note.component.html'
})
export class ViewNoteComponent implements OnInit {

  private readonly activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  private readonly noteService: NoteService = inject(NoteService);

  note: WritableSignal<Note | null> = signal(null);

  title: Signal<string> = computed(() => this.note()?.title ?? '');
  date: Signal<string> = computed(() => this.note()?.date ?? '');
  content: WritableSignal<string>= linkedSignal(() => this.note()?.content ?? '');


  ngOnInit(): void {

    this.activatedRoute.paramMap.pipe(
      switchMap(params => this.noteService.findNote(params.get('id') ?? ""))
    ).subscribe({
      next: note => this.note.set(note),
      error: err => console.log(err)
    });

  }


}
