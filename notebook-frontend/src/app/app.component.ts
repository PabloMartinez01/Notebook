import { Component } from '@angular/core';
import {MarkdownComponent} from 'ngx-markdown';
import {Textarea} from 'primeng/textarea';
import {FormsModule} from '@angular/forms';
import {EditorComponent} from 'ngx-monaco-editor-v2';
import {Splitter} from 'primeng/splitter';
import {Menubar} from 'primeng/menubar';
import {MenuItem, MenuItemCommandEvent} from 'primeng/api';
import {Sidebar} from 'primeng/sidebar';
import {Button} from 'primeng/button';
import {Drawer} from 'primeng/drawer';
import {NOTE_MARKDOWN} from './core/app.constants';
import {editor} from 'monaco-editor';
import IEditorOptions = editor.IEditorOptions;
import EditorOptionsType = editor.EditorOptionsType;
import EditorOption = editor.EditorOption;
import {SidebarComponent} from './shared/sidebar/sidebar.component';
import {CodeEditorComponent} from './features/note/components/editor/code-editor.component';

@Component({
  selector: 'app-root',
  imports: [
    MarkdownComponent,
    FormsModule,
    EditorComponent,
    Splitter,
    Menubar,
    Sidebar,
    Button,
    Drawer,
    SidebarComponent,
    CodeEditorComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  noteMarkdown: string =  NOTE_MARKDOWN
  sidebarVisible: boolean = false



  items: MenuItem[] = [
    {
      label: 'Menu',
      icon: 'pi pi-bars',
      command: () => this.sidebarVisible = true
    },
    {
      label: 'Features',
      icon: 'pi pi-star'
    },
  ]


}
