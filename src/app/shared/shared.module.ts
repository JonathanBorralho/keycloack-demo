import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxShimmerLoadingModule } from  'ngx-shimmer-loading';

import { NgxLoaderIndicatorModule } from 'ngx-loader-indicator';
import { loaderIndicatorConfig } from '../util/loader-indicator';

import { TableShimmerLoadingComponent } from './table-shimmer-loading/table-shimmer-loading.component';

@NgModule({
  declarations: [TableShimmerLoadingComponent],
  exports: [
    FontAwesomeModule,
    NgbPaginationModule,
    NgxShimmerLoadingModule,
    TableShimmerLoadingComponent,
    NgxLoaderIndicatorModule,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    NgbPaginationModule,
    NgxShimmerLoadingModule,
    NgxLoaderIndicatorModule.forRoot(loaderIndicatorConfig),
  ]
})
export class SharedModule { }
