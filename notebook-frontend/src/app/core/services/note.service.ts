import {inject, Injectable, Signal, signal, WritableSignal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Note} from '../models/note.model';
import {Observable, tap} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private readonly httpClient: HttpClient = inject(HttpClient);

  private _notes: WritableSignal<Note[]> = signal([]);
  notes: Signal<Note[]> = this._notes.asReadonly();


  findAllNotes(): void {
    this.httpClient.get<Note[]>("http://localhost:8080/notes").subscribe({
      next: notes => this._notes.set(notes),
      error: err => console.log(err)
    })
  }

  createNote(): Observable<Note> {
    return this.httpClient.post<Note>("http://localhost:8080/notes", {title: "New note", content: ""})
      .pipe(
        tap(note => this._notes.update(notes => [...notes, note]))
      )
  }


}
