import {Component, inject} from '@angular/core';
import {ThemeService} from '../../../../core/services/theme.service';
import {SidebarItemComponent} from './sidebar-item/sidebar-item.component';

@Component({
  selector: 'menubar',
  imports: [
    SidebarItemComponent

  ],
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {

  private readonly themeService: ThemeService = inject(ThemeService);

  onChangeTheme(): void {
    this.themeService.toggleDarkMode()
  }

}
