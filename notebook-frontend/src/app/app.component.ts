import {Component, effect, inject, OnInit, Signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {SidebarComponent} from './features/note/components/sidebar/sidebar.component';
import {ThemeService} from './core/services/theme.service';
import {NoteService} from './core/services/note.service';
import {NoteInfo} from './core/models/note-info.model';
import {RouterOutlet} from '@angular/router';


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

  notes: Signal<NoteInfo[]> = this.noteService.notes;

  constructor() {
    effect(() => {
      if (this.darkThemeService.darkTheme())
        document.documentElement.classList.add('dark')
      else
        document.documentElement.classList.remove('dark')
    })
  }

  ngOnInit(): void {
    this.noteService.findAllNotes().subscribe({
      next: value => console.log("Notes loaded"),
      error: err => console.log(err)
    })
  }
}
