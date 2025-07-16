import {
  Component,
  computed,
  model,
  ModelSignal,
  output,
  OutputEmitterRef,
  Signal,
  signal,
  WritableSignal
} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {DatePipe} from '@angular/common';
import {PickerComponent} from '@ctrl/ngx-emoji-mart';
import {EmojiComponent, EmojiData} from '@ctrl/ngx-emoji-mart/ngx-emoji';
import {Note} from '../../../../core/models/note.model';

@Component({
  selector: 'note-info',
  imports: [
    FormsModule,
    DatePipe,
    PickerComponent,
    EmojiComponent
  ],
  templateUrl: './note-info.component.html'
})
export class NoteInfoComponent {

  readonly onSave: OutputEmitterRef<void> = output<void>();

  note: ModelSignal<Note | null> = model.required<Note | null>();

  showIconPicker: WritableSignal<boolean> = signal<boolean>(false);
  icon = signal("1F605")


  save(): void {
    this.onSave.emit();
  }

  onChangeInput(event: Event): void {
    const title: string = (event.target as HTMLInputElement).value;
    if (title && this.note())
      this.note.update(note => note ? { ...note, title } : null);
  }

  onChangeIcon(event: { emoji: EmojiData; $event: PointerEvent }) {
    this.icon.set(event.emoji.unified ?? '');
    this.showIconPicker.set(false);
  }

  controlIconPicker(show: boolean) {
    this.showIconPicker.set(show);
  }



}
