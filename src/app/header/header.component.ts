import { Component } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { Roles } from '../authguard.guard';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {

  constructor(private keycloakService: KeycloakService) {}

  logout() {
    this.keycloakService.logout();
  }

  isAdmin(): boolean {
    return this.isUserInRole(Roles.ADMIN);
  }

  isUser(): boolean {
    return this.isUserInRole(Roles.USER);
  }

  private isUserInRole(role: string): boolean {
    return this.keycloakService.isUserInRole(role, 'venda-estoque-api');
  }
}

