import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard, Roles } from './authguard.guard';

const routes: Routes = [
  { path: '', canActivate: [AuthGuard], redirectTo: '/produtos', pathMatch: 'full' },
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
