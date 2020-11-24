import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [],
  exports: [
    FontAwesomeModule,
    NgbPaginationModule,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    NgbPaginationModule,
  ]
})
export class SharedModule { }
