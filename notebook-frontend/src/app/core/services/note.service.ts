import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Note} from '../models/note.model';
import {NoteRequest} from '../models/note-request.model';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private readonly httpClient: HttpClient) {

  }

  findAllNotes(): Observable<Note[]> {
    return this.httpClient.get<Note[]>("http://localhost:8080/notes")
  }

  createNote(): Observable<Note> {
    return this.httpClient.post<Note>("http://localhost:8080/notes", {title: "New note", content: ""});
  }


}
