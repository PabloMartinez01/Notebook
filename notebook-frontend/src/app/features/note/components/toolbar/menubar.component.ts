import {Component, EventEmitter, Input, Output} from '@angular/core';
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
export class MenubarComponent {

  @Input() sidebarVisible: boolean = false;
  @Output() sidebarVisibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private darkThemeService: DarkThemeService) {
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
      label: 'Theme',
      icon: 'pi pi-sun',
      command: ()  => this.darkThemeService.toggleDarkMode()
    }
  ]




}
