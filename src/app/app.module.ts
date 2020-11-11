import { ApplicationRef, DoBootstrap, NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';

import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';

import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './authguard.guard';

import { AppComponent } from './app.component';
import { PessoasListComponent } from './pessoas-list/pessoas-list.component';
import { HeaderComponent } from './header/header.component';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';

registerLocaleData(localePt, 'pt');

let keycloakService: KeycloakService = new KeycloakService();

@NgModule({
  declarations: [AppComponent, PessoasListComponent, HeaderComponent, ProgressBarComponent],
  imports: [AppRoutingModule, BrowserModule, HttpClientModule, KeycloakAngularModule],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
    {
      provide: KeycloakService,
      useValue: keycloakService
    },
    AuthGuard,
  ],
  entryComponents: [AppComponent],
})
export class AppModule implements DoBootstrap {
  async ngDoBootstrap(app: ApplicationRef) {
    const { keycloakConfig } = environment;

    try {
      await keycloakService.init({ config: keycloakConfig });
      app.bootstrap(AppComponent);
    } catch (error) {
      console.error('Keycloak init failed', error);
    }
  }
}
