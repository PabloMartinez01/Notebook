import {Component, computed, effect, EventEmitter, inject, Input, OnInit, Output, Signal} from '@angular/core';
import {Menubar} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';
import {ThemeService} from '../../../../core/services/theme.service';
import {SidebarService} from '../../../../core/services/sidebar.service';

@Component({
  selector: 'menubar',
  imports: [

  ],
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {

  private themeService: ThemeService = inject(ThemeService);
  private sidebarService: SidebarService = inject(SidebarService);


  onClickMenu(): void {
    this.sidebarService.open();
  }

  onChangeTheme(): void {
    this.themeService.toggleDarkMode()
  }

}
