import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from "src/environments/environment";

import { Page } from 'src/app/util/page';
import { Cliente } from '../models/cliente.model';

const API_URL = `${env.API_URL}/clientes`;

@Injectable({ providedIn: 'root' })
export class ClienteService {

    constructor(private http: HttpClient) { }

    findAll(page: number = 0, size: number = 0) {
        const params = {
            'page': `${page}`,
            'size': `${size}`
        };
        return this.http.get<Page<Cliente>>(API_URL, { params });
    }

    findById(id: number) {
        return this.http.get<Cliente>(`${API_URL}/${id}`)
    }

    save(cliente: Cliente) {
        if (cliente.id != null) return this.update(cliente);
        return this.http.post<Cliente>(API_URL, cliente);
    }

    private update(cliente: Cliente) {
        return this.http.put<Cliente>(`${API_URL}/${cliente.id}`, cliente);
    }

}
