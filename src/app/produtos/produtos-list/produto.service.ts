import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Page } from 'src/app/util/page';
import { Produto } from '../produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private API_URL = 'http://localhost:8090/produtos';

  constructor(private http: HttpClient) { }

  findAll(page: number = 0, size: number = 5) {
    const params = {
      'page': `${page}`,
      'size': `${size}`
    };
    return this.http.get<Page<Produto>>(`${this.API_URL}`, {params});
  }
}
