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
import {NoteResponse} from './core/models/note-response.model';


@Component({
  selector: 'app-root',
  imports: [
    FormsModule,
    Splitter,
    SidebarComponent,
    CodeEditorComponent,
    ViewerComponent,
    MenubarComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  noteMarkdown: string =  NOTE_MARKDOWN
  sidebarVisible: boolean = false

  notes: NoteResponse[] = [];


  constructor(
    private darkThemeService: ThemeService,
    private noteService: NoteService
  ) {}

  ngOnInit(): void {

    this.darkThemeService.isDarkTheme$.subscribe((isDark) => {
      if (isDark) document.documentElement.classList.add('app-dark');
      else document.documentElement.classList.remove('app-dark');
    });

    this.noteService.findAllNotes().subscribe({
      next: notes => {this.notes = notes ; console.log(this.notes)},
      error: err => console.log(err)
    })

  }

}
