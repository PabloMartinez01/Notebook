import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Menubar} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';
import {ThemeService} from '../../../../core/services/theme.service';
import {SidebarService} from '../../../../core/services/sidebar.service';

@Component({
  selector: 'menubar',
  imports: [

  ],
  templateUrl: './menubar.component.html'
})
export class MenubarComponent implements OnInit{

  constructor(private darkThemeService: ThemeService, private sidebarService: SidebarService) {

  }

  ngOnInit(): void {
    this.darkThemeService.isDarkTheme$.subscribe({
      next: (darkMode: boolean) => {
        const themeItem = this.items.find(item => item.id === 'theme');
        if (themeItem) {
          themeItem.label = (darkMode) ? 'Light Theme' : 'Dark Theme';
          themeItem.icon = (darkMode) ? 'pi pi-sun' : 'pi pi-moon';
        }
      }
    })
  }

  onClickMenu(): void {
    this.sidebarService.open();
  }

  onChangeTheme(): void {
    this.darkThemeService.toggleDarkMode()
  }

  items: MenuItem[] = [
    {
      label: 'Menu',
      icon: 'pi pi-bars',
      command: () => {

      }
    },
    {
      id: "theme",
      label: 'Theme',
      icon: 'pi pi-sun',
      command: ()  => {

      }
    }
  ]
}
