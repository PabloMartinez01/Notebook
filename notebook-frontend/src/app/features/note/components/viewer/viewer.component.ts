import {Component, effect, inject, Input, OnInit, Signal} from '@angular/core';
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
export class ViewerComponent {

  private themeService: ThemeService = inject(ThemeService);
  darkTheme: Signal<boolean> = this.themeService.darkTheme;

  @Input() noteMarkdown: string = '';




}
