import {Component, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Splitter} from 'primeng/splitter';
import {NOTE_MARKDOWN} from './core/app.constants';
import {SidebarComponent} from './features/note/components/sidebar/sidebar.component';
import {CodeEditorComponent} from './features/note/components/editor/code-editor.component';
import {ViewerComponent} from './features/note/components/viewer/viewer.component';
import {MenubarComponent} from './features/note/components/toolbar/menubar.component';
import {ThemeService} from './core/services/theme.service';
import {NoteService} from './core/services/note.service';
import {Note} from './core/models/note.model';
import {RouterOutlet} from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [
    FormsModule,
    Splitter,
    SidebarComponent,
    CodeEditorComponent,
    ViewerComponent,
    MenubarComponent,
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  sidebarVisible: boolean = false

  notes: Note[] = [];


  constructor(
    private darkThemeService: ThemeService,
    private noteService: NoteService
  ) {}

  ngOnInit(): void {

    this.darkThemeService.isDarkTheme$.subscribe((isDark) => {
      if (isDark) document.documentElement.classList.add('dark');
      else document.documentElement.classList.remove('dark');
    });

    this.noteService.findAllNotes().subscribe({
      next: notes => {this.notes = notes ; console.log(this.notes)},
      error: err => console.log(err)
    })

  }

  protected readonly noteMarkdown = NOTE_MARKDOWN;
}
