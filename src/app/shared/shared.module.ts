import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxShimmerLoadingModule } from  'ngx-shimmer-loading';

import { TableShimmerLoadingComponent } from './table-shimmer-loading/table-shimmer-loading.component';

@NgModule({
  declarations: [TableShimmerLoadingComponent],
  exports: [
    FontAwesomeModule,
    NgbPaginationModule,
    NgxShimmerLoadingModule,
    TableShimmerLoadingComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    NgbPaginationModule,
    NgxShimmerLoadingModule,
  ]
})
export class SharedModule { }
