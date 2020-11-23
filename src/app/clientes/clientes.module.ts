import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ClientesListComponent } from './clientes-list/clientes-list.component';
import { ClientesCadastroComponent } from './clientes-cadastro/clientes-cadastro.component';
import { ClienteResolver } from './resolvers/cliente.resolver';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: ClientesListComponent },
  { path: 'novo', component: ClientesCadastroComponent },
  {
    path: ':id',
    component: ClientesCadastroComponent,
    resolve: { cliente: ClienteResolver }
  },
];

@NgModule({
  declarations: [ClientesListComponent, ClientesCadastroComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgbPaginationModule,
    FontAwesomeModule,
    ReactiveFormsModule,
  ]
})
export class ClientesModule { }
