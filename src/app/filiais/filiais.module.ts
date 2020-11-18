import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { FiliaisListComponent } from './filiais-list/filiais-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { FiliaisCadastroComponent } from './filiais-cadastro/filiais-cadastro.component';
import { FilialResolver } from './resolvers/filial.resolver';
import { ReactiveFormsModule } from '@angular/forms';

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
    FontAwesomeModule,
    NgbPaginationModule,
    ReactiveFormsModule,
  ]
})
export class FiliaisModule { }
