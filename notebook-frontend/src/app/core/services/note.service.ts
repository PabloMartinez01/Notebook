import {inject, Injectable, Signal, signal, WritableSignal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NoteInfo} from '../models/note-info.model';
import {Observable, tap} from 'rxjs';
import {Note} from '../models/note.model';
import {NoteRequest} from '../models/note-request.model';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private readonly API_ENDPOINT: string = "http://localhost:8080/notes"
  private readonly DEFAULT_NOTE: NoteRequest = {title: "New note", content: '', icon: ''}

  private readonly httpClient: HttpClient = inject(HttpClient);
  private readonly _notes: WritableSignal<NoteInfo[]> = signal([]);

  notes: Signal<NoteInfo[]> = this._notes.asReadonly();

  findAllNotes(): Observable<NoteInfo[]> {
    return this.httpClient.get<NoteInfo[]>(this.API_ENDPOINT).pipe(
      tap(notes => this._notes.set(notes))
    );
  }

  createNote(): Observable<NoteInfo> {
    return this.httpClient.post<NoteInfo>(this.API_ENDPOINT, this.DEFAULT_NOTE)
      .pipe(
        tap(note => this.addNoteToSignalList(note))
      )
  }

  saveNote(id: string, noteRequest: NoteRequest): Observable<NoteInfo> {
    return this.httpClient.put<NoteInfo>(`${this.API_ENDPOINT}/${id}`, noteRequest)
      .pipe(
        tap(note => this.updateNoteInSignalList(note))
    );
  }

  findNote(id: string): Observable<Note> {
    return this.httpClient.get<Note>(`${this.API_ENDPOINT}/${id}`);
  }

  private addNoteToSignalList(note: NoteInfo) {
    this._notes.update(notes => [...notes, note]);
  }

  private updateNoteInSignalList(note: NoteInfo) {
    this._notes.update(notes => notes.map(n => (n.id === note.id) ? note : n));
  }


}
