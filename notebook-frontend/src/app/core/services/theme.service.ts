import {computed, Injectable, Signal, signal, WritableSignal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

    private _darkTheme: WritableSignal<boolean> = signal<boolean>(true);
    readonly darkTheme: Signal<boolean> = computed(() => this._darkTheme())

    constructor() {
      window.matchMedia('(prefers-color-scheme: dark)')
        .addEventListener('change', (e) =>  this._darkTheme.set(e.matches));
    }

    toggleDarkMode() {
      this._darkTheme.update(value => !value);
    }
}
