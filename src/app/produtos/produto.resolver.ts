import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Produto } from './produto.model';
import { ProdutoService } from './produtos-list/produto.service';

@Injectable({ providedIn: 'root' })
export class ProdutoResolver implements Resolve<Produto> {

    constructor(private produtoService: ProdutoService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Produto> {
        const id = route.paramMap.get('id');
        return this.produtoService.findById(+id);
    }
}