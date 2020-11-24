import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { ClienteResolver } from './resolvers/cliente.resolver';
import { ClientesListComponent } from './clientes-list/clientes-list.component';
import { ClientesCadastroComponent } from './clientes-cadastro/clientes-cadastro.component';

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
    SharedModule,
    ReactiveFormsModule,
  ]
})
export class ClientesModule { }
