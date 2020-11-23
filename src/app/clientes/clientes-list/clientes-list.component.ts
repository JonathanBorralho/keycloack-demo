import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Page } from 'src/app/util/page';
import { Cliente } from '../models/cliente.model';
import { ClienteService } from '../services/cliente.service';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-clientes-list',
  templateUrl: './clientes-list.component.html'
})
export class ClientesListComponent implements OnInit {

  private PAGE_SIZE = 5;
  page$: Observable<Page<Cliente>>;
  private pageNumber$: BehaviorSubject<number> = new BehaviorSubject(0);

  constructor(
    private clienteService: ClienteService,
    private library: FaIconLibrary
  ) {
    this.library.addIcons(faEdit, faTrash);
  }

  ngOnInit(): void {
    this.page$ = this.pageNumber$.pipe(
      switchMap(page => this.clienteService.findAll(page, this.PAGE_SIZE))
    );
  }

  onPageChange(page: number) {
    this.pageNumber$.next(page - 1);
  }

}
