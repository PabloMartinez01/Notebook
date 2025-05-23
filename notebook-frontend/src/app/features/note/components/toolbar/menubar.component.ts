import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Menubar} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';
import {DarkThemeService} from '../../../../core/services/dark-theme.service';

@Component({
  selector: 'menubar',
  imports: [
    Menubar
  ],
  templateUrl: './menubar.component.html'
})
export class MenubarComponent implements OnInit{

  @Input() sidebarVisible: boolean = false;
  @Output() sidebarVisibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private darkThemeService: DarkThemeService) {
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

  items: MenuItem[] = [
    {
      label: 'Menu',
      icon: 'pi pi-bars',
      command: () => {
        this.sidebarVisible = true;
        this.sidebarVisibleChange.emit(true);
      }
    },
    {
      label: 'Features',
      icon: 'pi pi-star'
    },
    {
      id: "theme",
      label: 'Theme',
      icon: 'pi pi-sun',
      command: ()  => {
        this.darkThemeService.toggleDarkMode()
      }
    }
  ]






}
