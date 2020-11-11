import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produto } from '../produto.model';

@Component({
  selector: 'app-produtos-cadastro',
  templateUrl: './produtos-cadastro.component.html',
})
export class ProdutosCadastroComponent implements OnInit {

  produto: Produto;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.produto = this.route.snapshot.data['produto'] as Produto;
  }

}
