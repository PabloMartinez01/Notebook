import {Component, input, InputSignal, model, ModelSignal, output, OutputEmitterRef} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'note-info',
  imports: [
    FormsModule
  ],
  templateUrl: './note-info.component.html'
})
export class NoteInfoComponent {

  readonly onSave: OutputEmitterRef<void> = output<void>();
  readonly onChangeTitle: OutputEmitterRef<string> = output<string>();

  title: InputSignal<string> = model.required<string>();
  date: InputSignal<string> = input.required<string>();

  save(): void {
    this.onSave.emit();
  }

  onChangeInput(event: Event): void {
    const value: string = (event.target as HTMLInputElement).value ?? '';
    this.onChangeTitle.emit(value);
  }

}
