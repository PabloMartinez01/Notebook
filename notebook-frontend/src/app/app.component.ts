import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Splitter} from 'primeng/splitter';
import {NOTE_MARKDOWN} from './core/app.constants';
import {SidebarComponent} from './shared/sidebar/sidebar.component';
import {CodeEditorComponent} from './features/note/components/editor/code-editor.component';
import {ViewerComponent} from './features/note/components/viewer/viewer.component';
import {MenubarComponent} from './features/note/components/toolbar/menubar.component';

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
export class AppComponent {

  noteMarkdown: string =  NOTE_MARKDOWN
  sidebarVisible: boolean = false

}
