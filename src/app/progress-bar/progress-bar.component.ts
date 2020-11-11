import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html'
})
export class ProgressBarComponent {

  @Input() active: boolean = false;
  @Input() progress: number = 25;

  get progressClass(): string {
    return `w-${this.progress}`;
  }

}
