import { Component } from '@angular/core';

@Component({
  selector: 'app-table-shimmer-loading',
  template: `
    <div class="row" style="margin-top: 20px;">
      <div class="col">
          <ngx-shimmer-loading [width]="'100%'" [height]="'300px'"></ngx-shimmer-loading>
      </div>
    </div>

    <div class="row">
      <div class="col">
          <ngx-shimmer-loading [width]="'20%'" [height]="'40px'"></ngx-shimmer-loading>
      </div>
    </div>
  `,
})
export class TableShimmerLoadingComponent { }
