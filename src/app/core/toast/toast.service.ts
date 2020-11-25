import { Injectable } from '@angular/core';
import { ToastMessage } from './toast.message';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  private _toasts: ToastMessage[] = [];

  constructor() { }

  show(message: ToastMessage) {
    this._toasts.push(message);
  }

  remove(toast: ToastMessage) {
    this._toasts = this._toasts.filter(t => t != toast);
  }

  get toasts(): readonly ToastMessage[] {
    return this._toasts;
  }

}
