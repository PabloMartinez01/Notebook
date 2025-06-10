import {Component, OnInit} from '@angular/core';
import {CodeEditorComponent} from '../../components/editor/code-editor.component';
import {NavbarComponent} from '../../components/navbar/navbar.component';
import {SidebarComponent} from '../../components/sidebar/sidebar.component';
import {Splitter} from 'primeng/splitter';
import {ViewerComponent} from '../../components/viewer/viewer.component';
import {NOTE_MARKDOWN} from '../../../../core/app.constants';
import {Note} from '../../../../core/models/note.model';
import {ThemeService} from '../../../../core/services/theme.service';
import {NoteService} from '../../../../core/services/note.service';
import {ToolbarComponent} from '../../components/toolbar/toolbar.component';

@Component({
  selector: 'app-view-note',
  imports: [
    CodeEditorComponent,
    NavbarComponent,
    SidebarComponent,
    Splitter,
    ViewerComponent,
    ToolbarComponent
  ],
  templateUrl: './view-note.component.html'
})
export class ViewNoteComponent  {
  noteMarkdown: string =  NOTE_MARKDOWN

}
