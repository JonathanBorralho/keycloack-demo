import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { ProdutoResolver } from './resolvers/produto.resolver';
import { AuthGuard, Roles } from '../core/guards/authguard.guard';
import { ProdutosListComponent } from './produtos-list/produtos-list.component';
import { ProdutosCadastroComponent } from './produtos-cadastro/produtos-cadastro.component';

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
    SharedModule,
    ReactiveFormsModule,
  ]
})
export class ProdutosModule { }
