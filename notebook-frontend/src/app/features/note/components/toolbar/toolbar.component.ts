import {Component, inject} from '@angular/core';
import * as monaco from 'monaco-editor';
import {editor} from 'monaco-editor';



@Component({
  selector: 'app-toolbar',
  imports: [],
  templateUrl: './toolbar.component.html'
})
export class ToolbarComponent {


  onBoldClick() {

    const monacoInstance = (window as any).monaco as typeof monaco;
    console.log(monacoInstance.editor.getEditors()[0].getSelection())
  }
}
