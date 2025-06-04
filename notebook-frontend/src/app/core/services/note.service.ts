import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Note} from '../models/note.model';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private httpClient: HttpClient) {

  }

  findAllNotes(): Observable<Note[]> {
    return this.httpClient.get<Note[]>("http://localhost:8080/notes")
  }


}
