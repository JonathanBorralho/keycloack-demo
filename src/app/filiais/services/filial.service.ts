import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from 'src/environments/environment';

import { Filial } from '../models/filial.model';
import { BaseEntityService } from 'src/app/util/base-entity-service';

const API_URL = `${env.API_URL}/filiais`;

@Injectable({
  providedIn: 'root'
})
export class FilialService extends BaseEntityService<Filial> {

  constructor(http: HttpClient) {
    super(http, API_URL);
  }

}
