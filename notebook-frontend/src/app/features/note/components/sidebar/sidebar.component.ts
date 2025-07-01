import {Component, inject, input, InputSignal} from '@angular/core';
import {ThemeService} from '../../../../core/services/theme.service';
import {SidebarItemComponent} from './sidebar-item/sidebar-item.component';
import {Note} from '../../../../core/models/note.model';

@Component({
  selector: 'sidebar',
  imports: [
    SidebarItemComponent

  ],
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {

  private readonly themeService: ThemeService = inject(ThemeService);

  notes: InputSignal<Note[]> = input.required<Note[]>();

  onChangeTheme(): void {
    this.themeService.toggleDarkMode()
  }

  getIcon(i: number): string {
    const icons: string[] = ["📝", "🗒️", "🧾", "📰", "🧠", "📌", "📍", "🔖", "✏️", "🗂️", "📓", "📋"]
    return icons[i % icons.length];
  }

}
