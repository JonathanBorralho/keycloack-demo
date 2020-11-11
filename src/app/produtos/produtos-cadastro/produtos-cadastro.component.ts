import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Produto } from '../produto.model';
import { ProdutoService } from '../produtos-list/produto.service';

@Component({
  selector: 'app-produtos-cadastro',
  templateUrl: './produtos-cadastro.component.html',
  preserveWhitespaces: true,
})
export class ProdutosCadastroComponent implements OnInit {

  produto: Produto;

  form: FormGroup;

  constructor(private route: ActivatedRoute, private fb: FormBuilder, private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.produto = this.route.snapshot.data['produto'] as Produto;

    this.form = this.fb.group({
      'id': null,
      'fabricante': [null, [Validators.required, Validators.minLength(5)]],
      'descricao': [null, [Validators.required, Validators.minLength(5)]],
      'codigoBarras': null,
      'valorUnitario': [null, Validators.required],
    });

    if (this.produto != null) {
      this.form.patchValue(this.produto);
    }

  }

  salvar() {
    if (this.form.valid) {
      let produto = this.form.value as Produto;
      this.produtoService.save(produto).subscribe(
        produto => console.log(produto),
        err => console.log(err)
      );
    }
  }

  get editando(): boolean {
    return this.produto != null;
  }

}
