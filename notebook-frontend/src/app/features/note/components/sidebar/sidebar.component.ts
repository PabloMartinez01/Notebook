import {Component, inject, input, InputSignal, Signal} from '@angular/core';
import {ThemeService} from '../../../../core/services/theme.service';
import {SidebarItemComponent} from './sidebar-item/sidebar-item.component';
import {NoteInfo} from '../../../../core/models/note-info.model';
import {NoteService} from '../../../../core/services/note.service';

@Component({
  selector: 'sidebar',
  imports: [
    SidebarItemComponent

  ],
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {

  private readonly themeService: ThemeService = inject(ThemeService);
  private readonly noteService: NoteService = inject(NoteService);

  notes: Signal<NoteInfo[]> = this.noteService.notes;

  onChangeTheme(): void {
    this.themeService.toggleDarkMode()
  }

  getIcon(i: number): string {
    const icons: string[] = ["📝", "🗒️", "🧾", "📰", "🧠", "📌", "📍", "🔖", "✏️", "🗂️", "📓", "📋"]
    return icons[i % icons.length];
  }

}
