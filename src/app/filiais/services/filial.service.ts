import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from 'src/environments/environment';

import { Page } from 'src/app/util/page';
import { Filial } from '../models/filial.model';

const API_URL = `${env.API_URL}/filiais`;

@Injectable({
  providedIn: 'root'
})
export class FilialService {

  constructor(private http: HttpClient) { }

  findAll(page: number = 0, size: number = 5) {
    const params = {
      'page': `${page}`,
      'size': `${size}`,
    };
    return this.http.get<Page<Filial>>(API_URL, { params });
  }

  findById(id: number) {
    return this.http.get<Filial>(`${API_URL}/${id}`);
  }
}
