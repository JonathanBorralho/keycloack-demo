import { Component } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {

  constructor(private keycloakService: KeycloakService) {}

  logout() {
    this.keycloakService.logout();
  }
}

