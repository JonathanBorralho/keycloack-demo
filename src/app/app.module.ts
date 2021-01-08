import { ApplicationRef, DoBootstrap, NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';

import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';

import { NgxCurrencyModule } from "ngx-currency";
import { customCurrencyMaskConfig } from './util/currency-mask-config';

import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt, 'pt');

let keycloakService: KeycloakService = new KeycloakService();

@NgModule({
  declarations: [AppComponent],
  imports: [
    CoreModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    KeycloakAngularModule,
    NgxCurrencyModule.forRoot(customCurrencyMaskConfig),
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
    {
      provide: KeycloakService,
      useValue: keycloakService
    },
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
