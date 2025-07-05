import {inject, Injectable, Signal, signal, WritableSignal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NoteInfo} from '../models/note-info.model';
import {Observable, tap} from 'rxjs';
import {toSignal} from '@angular/core/rxjs-interop';
import {Note} from '../models/note.model';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private readonly httpClient: HttpClient = inject(HttpClient);

  private _notes: WritableSignal<NoteInfo[]> = signal([]);
  notes: Signal<NoteInfo[]> = this._notes.asReadonly();


  findAllNotes(): void {
    this.httpClient.get<NoteInfo[]>("http://localhost:8080/notes").subscribe({
      next: notes => this._notes.set(notes),
      error: err => console.log(err)
    })
  }

  createNote(): Observable<NoteInfo> {
    return this.httpClient.post<NoteInfo>("http://localhost:8080/notes", {title: "New note", content: ""})
      .pipe(
        tap(note => this._notes.update(notes => [...notes, note]))
      )
  }

  findNote(id: string): Observable<Note>{
    return this.httpClient.get<Note>("http://localhost:8080/notes/" + id);
  }


}
