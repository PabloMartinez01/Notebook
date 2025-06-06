import {Component, OnInit} from '@angular/core';
import {CodeEditorComponent} from '../../components/editor/code-editor.component';
import {MenubarComponent} from '../../components/toolbar/menubar.component';
import {SidebarComponent} from '../../components/sidebar/sidebar.component';
import {Splitter} from 'primeng/splitter';
import {ViewerComponent} from '../../components/viewer/viewer.component';
import {NOTE_MARKDOWN} from '../../../../core/app.constants';
import {Note} from '../../../../core/models/note.model';
import {ThemeService} from '../../../../core/services/theme.service';
import {NoteService} from '../../../../core/services/note.service';

@Component({
  selector: 'app-view-note',
  imports: [
    CodeEditorComponent,
    MenubarComponent,
    SidebarComponent,
    Splitter,
    ViewerComponent
  ],
  templateUrl: './view-note.component.html'
})
export class ViewNoteComponent  {
  noteMarkdown: string =  NOTE_MARKDOWN

}
