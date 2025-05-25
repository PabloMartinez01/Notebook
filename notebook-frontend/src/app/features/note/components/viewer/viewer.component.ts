import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {MarkdownComponent} from 'ngx-markdown';
import {ThemeService} from '../../../../core/services/theme.service';
import {NgClass} from '@angular/common';

@Component({
  selector: 'viewer',
  imports: [
    MarkdownComponent,
    NgClass
  ],
  templateUrl: './viewer.component.html'
})
export class ViewerComponent implements OnInit{

  @Input() noteMarkdown: string = '';
  darkMode: boolean = false;

  constructor(private darkThemeService: ThemeService) {

  }

  ngOnInit(): void {
    this.darkThemeService.isDarkTheme$.subscribe({
      next: (darkMode: boolean) => this.darkMode = darkMode,
      error: err => console.log(err)
    })
  }

}
