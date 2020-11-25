import { Component } from '@angular/core';
import { ToastMessage, ToastSeverity } from '../toast.message';
import { ToastService } from '../toast.service';

@Component({
  selector: 'app-toast-container',
  templateUrl: './toast-container.component.html',
  styleUrls: ['./toast-container.component.css']
})
export class ToastContainerComponent {

  constructor(private toastService: ToastService) { }

  get toasts(): readonly ToastMessage[] {
    return this.toastService.toasts;
  }

  remove(toast: ToastMessage) {
    this.toastService.remove(toast);
  }

  toastClass(severity: ToastSeverity): string {
    switch (severity) {
      case ToastSeverity.SUCCESS:
        return 'bg-success text-light';
      case ToastSeverity.DANGER:
        return 'bg-danger text-light';
      default:
        return '';
    };
  }

}
