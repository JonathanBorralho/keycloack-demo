import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

import { ProdutosListComponent } from './produtos-list/produtos-list.component';
import { ProdutosCadastroComponent } from './produtos-cadastro/produtos-cadastro.component';
import { ProdutoResolver } from './produto.resolver';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuard, Roles } from '../authguard.guard';

const routes: Routes = [
  { path: '', component: ProdutosListComponent },
  { path: 'novo', component: ProdutosCadastroComponent },
  {
    path: ':id', component: ProdutosCadastroComponent,
    resolve: { produto: ProdutoResolver },
    canActivate: [AuthGuard],
    data: { roles: [Roles.CAIXA] }
  },
];

@NgModule({
  declarations: [ProdutosListComponent, ProdutosCadastroComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FontAwesomeModule,
    NgbPaginationModule,
    ReactiveFormsModule,
  ]
})
export class ProdutosModule { }
