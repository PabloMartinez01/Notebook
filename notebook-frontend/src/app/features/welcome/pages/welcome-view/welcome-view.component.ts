import {Component, signal, WritableSignal} from '@angular/core';
import {PickerComponent} from '@ctrl/ngx-emoji-mart';

@Component({
  selector: 'app-welcome-view',
  imports: [
  ],
  templateUrl: './welcome-view.component.html'
})
export class WelcomeViewComponent {

  emoji: WritableSignal<string> = signal<string>("");


}
