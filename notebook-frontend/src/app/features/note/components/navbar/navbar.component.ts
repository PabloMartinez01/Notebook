import {Component, computed, effect, EventEmitter, inject, Input, OnInit, Output, Signal} from '@angular/core';
import {Menubar} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';
import {ThemeService} from '../../../../core/services/theme.service';
import {SidebarService} from '../../../../core/services/sidebar.service';

@Component({
  selector: 'menubar',
  imports: [

  ],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {

  private themeService: ThemeService = inject(ThemeService);
  private sidebarService: SidebarService = inject(SidebarService);

  items: Signal<MenuItem[]> = computed<MenuItem[]>(() => {
    const darkTheme: boolean = this.themeService.darkTheme();
    return [
      {
        label: 'Menu',
        icon: 'pi pi-bars',
      },
      {
        id: "theme",
        label: (darkTheme) ? 'Light Theme' : 'Dark Theme',
        icon: (darkTheme) ? 'pi pi-sun' : 'pi pi-moon',
      }
    ]
  })


  onClickMenu(): void {
    this.sidebarService.open();
  }

  onChangeTheme(): void {
    this.themeService.toggleDarkMode()
  }


}
