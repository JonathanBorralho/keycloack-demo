import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Filial } from '../models/filial.model';
import { FilialService } from '../services/filial.service';

@Injectable({ providedIn: 'root' })
export class FilialResolver implements Resolve<Filial> {
  constructor(private filialService: FilialService) { }

  resolve(route: ActivatedRouteSnapshot, _: RouterStateSnapshot): Observable<Filial> {
    const id = route.paramMap.get('id');
    return this.filialService.findById(+id);
  }
}