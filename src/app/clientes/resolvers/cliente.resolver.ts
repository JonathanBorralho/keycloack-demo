import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente.model';
import { ClienteService } from '../services/cliente.service';

@Injectable({ providedIn: 'root' })
export class ClienteResolver implements Resolve<Cliente> {

    constructor(private clienteService: ClienteService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Cliente> {
        const id = route.paramMap.get('id');
        return this.clienteService.findById(+id);
    }
}
