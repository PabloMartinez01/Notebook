import { Routes } from '@angular/router';
import {AppComponent} from './app.component';
import {ViewNoteComponent} from './features/note/pages/view-note/view-note.component';

export const routes: Routes = [
  {
    path: 'note/:id',
    component: ViewNoteComponent
  }
];
