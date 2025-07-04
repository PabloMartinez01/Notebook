import {Routes} from '@angular/router';
import {ViewNoteComponent} from './features/note/pages/view-note/view-note.component';
import {WelcomeViewComponent} from './features/welcome/pages/welcome-view/welcome-view.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/welcome',
    pathMatch: 'full'
  },
  {
    path: 'note/:id',
    component: ViewNoteComponent
  },
  {
    path: 'welcome',
    component: WelcomeViewComponent
  }
];
