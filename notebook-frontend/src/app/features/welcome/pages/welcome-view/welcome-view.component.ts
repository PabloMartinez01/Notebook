import { Component } from '@angular/core';
import {CodeEditorComponent} from '../../../note/components/editor/code-editor.component';
import {MenubarComponent} from '../../../note/components/toolbar/menubar.component';
import {SidebarComponent} from '../../../note/components/sidebar/sidebar.component';
import {Splitter} from 'primeng/splitter';
import {ViewerComponent} from '../../../note/components/viewer/viewer.component';

@Component({
  selector: 'app-welcome-view',
  imports: [
    CodeEditorComponent,
    MenubarComponent,
    SidebarComponent,
    Splitter,
    ViewerComponent
  ],
  templateUrl: './welcome-view.component.html'
})
export class WelcomeViewComponent {
  sidebarVisible: boolean = false

}
