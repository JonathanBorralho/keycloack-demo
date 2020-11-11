import { Component } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private keycloakService: KeycloakService,
    private library: FaIconLibrary,
  ) {
    this.library.addIcons(faEdit, faTrash);
  }

  logout() {
    this.keycloakService.logout();
  }

}
