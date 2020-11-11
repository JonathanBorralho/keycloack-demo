import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

import { ProdutosListComponent } from './produtos-list/produtos-list.component';
import { ProdutosCadastroComponent } from './produtos-cadastro/produtos-cadastro.component';
import { ProdutoResolver } from './produto.resolver';

export const routes: Routes = [
  { path: '', component: ProdutosListComponent },
  { path: ':id', component: ProdutosCadastroComponent, resolve: { produto: ProdutoResolver } },
];

@NgModule({
  declarations: [ProdutosListComponent, ProdutosCadastroComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FontAwesomeModule,
    NgbPaginationModule,
  ]
})
export class ProdutosModule { }
