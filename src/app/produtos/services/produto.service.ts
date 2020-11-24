import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from "src/environments/environment";

import { Produto } from '../models/produto.model';
import { BaseEntityService } from 'src/app/util/base-entity-service';

const API_URL = `${env.API_URL}/produtos`;

@Injectable({
  providedIn: 'root'
})
export class ProdutoService extends BaseEntityService<Produto> {

  constructor(http: HttpClient) {
    super(http, API_URL);
  }

}
