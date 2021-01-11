import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from "src/environments/environment";

import { Cliente } from '../models/cliente.model';
import { BaseEntityService } from 'src/app/util/base-entity-service';

const API_URL = `${env.API_URL}/clientes`;

@Injectable({ providedIn: 'root' })
export class ClienteService extends BaseEntityService<Cliente> {

  constructor(http: HttpClient) {
    super(http, API_URL);
  }

}
