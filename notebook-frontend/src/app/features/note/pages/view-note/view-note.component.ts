import {Component} from '@angular/core';
import {CodeEditorComponent} from '../../components/editor/code-editor.component';
import {Splitter} from 'primeng/splitter';
import {ViewerComponent} from '../../components/viewer/viewer.component';
import {NOTE_MARKDOWN} from '../../../../core/app.constants';

@Component({
  selector: 'app-view-note',
  imports: [
    Splitter,
    ViewerComponent,
    CodeEditorComponent
  ],
  templateUrl: './view-note.component.html'
})
export class ViewNoteComponent  {
  noteMarkdown: string =  NOTE_MARKDOWN

}
