import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard, Roles } from './core/guards/authguard.guard';

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
  {
    path: 'clientes', 
    loadChildren: () => import('./clientes/clientes.module').then(m => m.ClientesModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'pedidos', 
    loadChildren: () => import('./pedidos/pedidos.module').then(m => m.PedidosModule),
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
