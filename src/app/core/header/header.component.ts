import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { Roles } from 'src/app/core/guards/authguard.guard';
import { Clients } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  helloMessage: string;

  constructor(private keycloakService: KeycloakService) { }

  async ngOnInit() {
    this.keycloakService.isLoggedIn().then(async (loggedIn: boolean) => {
      if (loggedIn) {
        const profile = await this.keycloakService.loadUserProfile();
        this.helloMessage = `Olá, ${profile.firstName}!`;
      }
    });
  }

  logout() {
    this.keycloakService.logout();
  }

  isAdmin(): boolean {
    return this.isUserInRole(Roles.ADMIN);
  }

  isUser(): boolean {
    return this.isUserInRole(Roles.CAIXA);
  }

  private isUserInRole(role: string): boolean {
    return this.keycloakService.isUserInRole(role, Clients.VENDA_ESTOQUE_APP);
  }
}

