import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {NoteResponse} from '../models/note-response.model';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private httpClient: HttpClient) {

  }

  findAllNotes(): Observable<NoteResponse[]> {
    return this.httpClient.get<NoteResponse[]>("http://localhost:8080/notes")
  }


}
