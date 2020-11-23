import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Page } from 'src/app/util/page';
import { Produto } from '../models/produto.model';
import { environment as env } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private API_URL = `${env.API_URL}/produtos`;

  constructor(private http: HttpClient) { }

  findAll(page: number = 0, size: number = 5) {
    const params = {
      'page': `${page}`,
      'size': `${size}`
    };
    return this.http.get<Page<Produto>>(this.API_URL, {params});
  }

  findById(id: number) {
    return this.http.get<Produto>(`${this.API_URL}/${id}`);
  }

  save(produto: Produto) {
    return this.http.post<Produto>(this.API_URL, produto);
  }
}
