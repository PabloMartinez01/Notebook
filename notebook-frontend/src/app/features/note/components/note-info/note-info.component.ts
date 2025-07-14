import {
  Component, ElementRef, HostListener,
  input,
  InputSignal,
  model,
  ModelSignal,
  output,
  OutputEmitterRef, signal, ViewChild,
  WritableSignal
} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {DatePipe} from '@angular/common';
import {PickerComponent} from '@ctrl/ngx-emoji-mart';
import {EmojiComponent, EmojiData} from '@ctrl/ngx-emoji-mart/ngx-emoji';

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
  readonly onChangeTitle: OutputEmitterRef<string> = output<string>();

  title: InputSignal<string> = model.required<string>();
  date: InputSignal<string> = input.required<string>();

  showIconPicker: WritableSignal<boolean> = signal<boolean>(false);
  icon = signal(":smile:")


  save(): void {
    this.onSave.emit();
  }

  onChangeInput(event: Event): void {
    const value: string = (event.target as HTMLInputElement).value ?? '';
    this.onChangeTitle.emit(value);
  }

  onChangeIcon(event: { emoji: EmojiData; $event: PointerEvent }) {
    this.icon.set(event.emoji.colons ?? '');
    this.showIconPicker.set(false);
  }

  controlIconPicker(show: boolean) {
    this.showIconPicker.set(show);
  }



}
