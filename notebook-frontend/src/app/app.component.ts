import {Component, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Splitter} from 'primeng/splitter';
import {NOTE_MARKDOWN} from './core/app.constants';
import {SidebarComponent} from './shared/sidebar/sidebar.component';
import {CodeEditorComponent} from './features/note/components/editor/code-editor.component';
import {ViewerComponent} from './features/note/components/viewer/viewer.component';
import {MenubarComponent} from './features/note/components/toolbar/menubar.component';
import {DarkThemeService} from './core/services/dark-theme.service';
import {StyleClass} from 'primeng/styleclass';


@Component({
  selector: 'app-root',
  imports: [
    FormsModule,
    Splitter,
    SidebarComponent,
    CodeEditorComponent,
    ViewerComponent,
    MenubarComponent,
    StyleClass
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  noteMarkdown: string =  NOTE_MARKDOWN
  sidebarVisible: boolean = false

  constructor(private darkThemeService: DarkThemeService) {}

  ngOnInit(): void {
    this.darkThemeService.isDarkTheme$.subscribe((isDark) => {
      if (isDark) document.documentElement.classList.add('app-dark');
      else document.documentElement.classList.remove('app-dark');
    });
  }

}
