import { Component } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, ResolveEnd, ResolveStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoading = false;
  progress = 0;

  constructor(private router: Router) {
    this.router.events.subscribe(
      event => {
        if (event instanceof NavigationStart) {
          this.isLoading = true;
          this.progress = 25;
        }

        if (event instanceof ResolveStart) {
          this.progress = 50;
        }

        if (event instanceof ResolveEnd) {
          this.progress = 75;
        }

        if (event instanceof NavigationEnd || event instanceof NavigationCancel || event instanceof NavigationError) {
          this.progress = 100;
          this.isLoading = false;
        }
      }
    );
  }

}
