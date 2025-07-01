import {Component, effect, inject, OnInit, Signal, signal, WritableSignal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NOTE_MARKDOWN} from './core/app.constants';
import {SidebarComponent} from './features/note/components/sidebar/sidebar.component';
import {ThemeService} from './core/services/theme.service';
import {NoteService} from './core/services/note.service';
import {Note} from './core/models/note.model';
import {RouterOutlet} from '@angular/router';
import {toSignal} from '@angular/core/rxjs-interop';


@Component({
  selector: 'app-root',
  imports: [
    FormsModule,
    SidebarComponent,
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  private readonly darkThemeService: ThemeService = inject(ThemeService);
  private readonly noteService: NoteService = inject(NoteService)

  notes: Signal<Note[]> = this.noteService.notes;

  constructor() {
    effect(() => {
      if (this.darkThemeService.darkTheme())
        document.documentElement.classList.add('dark')
      else
        document.documentElement.classList.remove('dark')
    })
  }


  ngOnInit(): void {
    this.noteService.findAllNotes();
  }
}
