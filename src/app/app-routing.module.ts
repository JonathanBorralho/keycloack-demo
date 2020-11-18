import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard, Roles } from './authguard.guard';
import { PessoasListComponent } from './pessoas-list/pessoas-list.component';

const routes: Routes = [
  { path: '', canActivate: [AuthGuard], redirectTo: '', pathMatch: 'full' },
  { path: 'pessoas', component: PessoasListComponent, canActivate: [AuthGuard] },
  {
    path: 'produtos', 
    loadChildren: () => import('./produtos/produtos.module').then(m => m.ProdutosModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'filiais', 
    loadChildren: () => import('./filiais/filiais.module').then(m => m.FiliaisModule),
    canActivate: [AuthGuard],
    data: { roles: [Roles.ADMIN] }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
