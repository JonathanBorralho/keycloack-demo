import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { CaixaComponent } from './caixa/caixa.component';
import { IncrementerComponent } from './incrementer/incrementer.component';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  { path: '', redirectTo: '/pedidos/caixa', pathMatch: 'full' },
  { path: 'caixa', component: CaixaComponent },
];

@NgModule({
  declarations: [CaixaComponent, IncrementerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    SharedModule,
    NgbTypeaheadModule,
  ]
})
export class PedidosModule { }
