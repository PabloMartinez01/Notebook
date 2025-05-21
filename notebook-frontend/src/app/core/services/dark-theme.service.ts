import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DarkThemeService {

    private darkThemeSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.getSystemTheme());
    isDarkTheme$ = this.darkThemeSubject.asObservable();

    constructor() {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      mediaQuery.addEventListener('change', (e) => {
        this.setDarkMode(e.matches);
      });
    }

    private getSystemTheme(): boolean {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    private setDarkMode(isDark: boolean) {
      this.darkThemeSubject.next(isDark);

    }

    toggleDarkMode() {
      this.setDarkMode(!this.darkThemeSubject.value);
    }


}
