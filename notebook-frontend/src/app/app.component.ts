import {Component, effect, inject, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NOTE_MARKDOWN} from './core/app.constants';
import {SidebarComponent} from './features/note/components/sidebar/sidebar.component';
import {MenuComponent} from './features/note/components/navbar/menu.component';
import {ThemeService} from './core/services/theme.service';
import {NoteService} from './core/services/note.service';
import {Note} from './core/models/note.model';
import {RouterOutlet} from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [
    FormsModule,
    SidebarComponent,
    MenuComponent,
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  private darkThemeService: ThemeService = inject(ThemeService);
  private noteService: NoteService = inject(NoteService)

  notes: Note[] = [];

  constructor() {
    effect(() => {
      if (this.darkThemeService.darkTheme()) {
        document.documentElement.classList.add('dark')
      }
      else {
        document.documentElement.classList.remove('dark')
      }

    })
  }


  ngOnInit(): void {

    this.noteService.findAllNotes().subscribe({
      next: notes => {this.notes = notes ; console.log(this.notes)},
      error: err => console.log(err)
    })

  }

  protected readonly noteMarkdown = NOTE_MARKDOWN;
}
