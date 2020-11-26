import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from "src/environments/environment";

import { Produto } from '../models/produto.model';
import { BaseEntityService } from 'src/app/util/base-entity-service';
import { Page } from 'src/app/util/page';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

const API_URL = `${env.API_URL}/produtos`;

@Injectable({
  providedIn: 'root'
})
export class ProdutoService extends BaseEntityService<Produto> {

  constructor(http: HttpClient) {
    super(http, API_URL);
  }

  public search(term: string): Observable<Produto[]> {
    const params = {
      'size': '5',
      'descricao': term,
    };
    return this.http.get<Page<Produto>>(API_URL, { params }).pipe(
      map(page => page.content)
    );
  }

}
