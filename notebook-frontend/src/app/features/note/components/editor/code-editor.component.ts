import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EditorComponent, NgxMonacoEditorConfig} from 'ngx-monaco-editor-v2';
import {FormsModule} from '@angular/forms';
import {ThemeService} from '../../../../core/services/theme.service';
import * as monaco from 'monaco-editor';
import {editor} from 'monaco-editor';
import IStandaloneEditorConstructionOptions = editor.IStandaloneEditorConstructionOptions;



@Component({
  selector: 'code-editor',
  imports: [
    EditorComponent,
    FormsModule
  ],
  templateUrl: './code-editor.component.html'
})
export class CodeEditorComponent implements OnInit {

  @Input() noteMarkdown: string = '';
  @Output() noteMarkdownChange: EventEmitter<string> = new EventEmitter<string>();

  constructor(private darkThemeService: ThemeService) {

  }

  editorOptions: IStandaloneEditorConstructionOptions = {
    theme: 'customTheme',


  };

  ngOnInit(): void {
    /*
    this.darkThemeService.isDarkTheme$.subscribe({
      next: darkTheme => this.editorOptions = {...this.editorOptions, theme: darkTheme ? 'my-darker-theme' : 'vs-light'},
      error: err => console.log(err)
    })
    */

  }

  onModelChange(content: string): void {
    this.emitMarkdownChange(content);
  }

  private emitMarkdownChange(content: string): void {
    this.noteMarkdownChange.emit(content);
  }

}
