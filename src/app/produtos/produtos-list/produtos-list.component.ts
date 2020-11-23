import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { switchMap } from "rxjs/operators";
import { Page } from 'src/app/util/page';
import { ProdutoService } from '../services/produto.service';
import { Produto } from '../models/produto.model';

import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-produtos-list',
  templateUrl: './produtos-list.component.html',
})
export class ProdutosListComponent implements OnInit {

  private PAGE_SIZE = 5;
  page$: Observable<Page<Produto>>;
  private pageNumber$: BehaviorSubject<number> = new BehaviorSubject(0);

  constructor(
    private produtoService: ProdutoService, 
    private library: FaIconLibrary
  ) {
    this.library.addIcons(faEdit, faTrash);
  }

  ngOnInit(): void {
    this.page$ = this.pageNumber$.pipe(
      switchMap(page => this.produtoService.findAll(page, this.PAGE_SIZE))
    );
  }

  onPageChange(page: number) {
    this.pageNumber$.next(page - 1);
  }

}
