import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { FilialResolver } from './resolvers/filial.resolver';
import { FiliaisListComponent } from './filiais-list/filiais-list.component';
import { FiliaisCadastroComponent } from './filiais-cadastro/filiais-cadastro.component';

const routes: Routes = [
  { path: '', component: FiliaisListComponent },
  { path: 'nova', component: FiliaisCadastroComponent },
  { path: ':id', component: FiliaisCadastroComponent, resolve: { filial: FilialResolver } },
];

@NgModule({
  declarations: [FiliaisListComponent, FiliaisCadastroComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    SharedModule,
  ]
})
export class FiliaisModule { }
