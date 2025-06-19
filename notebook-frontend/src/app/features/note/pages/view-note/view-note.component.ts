import {Component} from '@angular/core';
import {CodeEditorComponent} from '../../components/editor/code-editor.component';
import {SidebarComponent} from '../../components/sidebar/sidebar.component';
import {Splitter} from 'primeng/splitter';
import {ViewerComponent} from '../../components/viewer/viewer.component';
import {NOTE_MARKDOWN} from '../../../../core/app.constants';
import {ToolbarComponent} from '../../components/toolbar/toolbar.component';

@Component({
  selector: 'app-view-note',
  imports: [
    Splitter,
    ViewerComponent,
    ToolbarComponent,
    CodeEditorComponent
  ],
  templateUrl: './view-note.component.html'
})
export class ViewNoteComponent  {
  noteMarkdown: string =  NOTE_MARKDOWN

}
