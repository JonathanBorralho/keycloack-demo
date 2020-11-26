import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from 'src/environments/environment';

import { Filial } from '../models/filial.model';
import { BaseEntityService } from 'src/app/util/base-entity-service';
import { Observable } from 'rxjs';
import { Page } from 'src/app/util/page';
import { map } from 'rxjs/operators';

const API_URL = `${env.API_URL}/filiais`;

@Injectable({
  providedIn: 'root'
})
export class FilialService extends BaseEntityService<Filial> {

  constructor(http: HttpClient) {
    super(http, API_URL);
  }

  public search(nome: string): Observable<Filial[]> {
    const params = {
      'size': '5',
      'nome': nome,
    };
    return this.http.get<Page<Filial>>(API_URL, { params }).pipe(
      map(page => page.content)
    );
  }

}
