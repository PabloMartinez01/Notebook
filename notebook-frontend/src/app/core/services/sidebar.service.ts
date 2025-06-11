import {Injectable, signal, Signal, WritableSignal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  private _isOpen: WritableSignal<boolean> = signal<boolean>(false);
  readonly isOpen: Signal<boolean> = this._isOpen.asReadonly();

  open(): void {
    this._isOpen.set(true);
  }

  close(): void {
    this._isOpen.set(false);
  }

  setOpen(value: boolean): void {
    this._isOpen.set(value);
  }

  toggle(): void {
    this._isOpen.update(value => !value);
  }


}
