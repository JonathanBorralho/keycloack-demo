import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

import { Page } from 'src/app/util/page';
import { Filial } from '../models/filial.model';
import { FilialService } from '../services/filial.service';

@Component({
  selector: 'app-filiais-list',
  templateUrl: './filiais-list.component.html',
})
export class FiliaisListComponent implements OnInit {

  private PAGE_SIZE = 5;
  page$: Observable<Page<Filial>>;
  private pageNumber$: BehaviorSubject<number> = new BehaviorSubject(0);

  constructor(private filialService: FilialService, private library: FaIconLibrary) {
    this.library.addIcons(faEdit, faTrash);
  }

  ngOnInit(): void {
    this.page$ = this.pageNumber$.pipe(
      switchMap(page => this.filialService.findAll(page, this.PAGE_SIZE))
    );
  }

  onPageChange(page: number) {
    this.pageNumber$.next(page - 1);
  }

}
