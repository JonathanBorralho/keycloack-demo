import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { ToastSeverity } from 'src/app/core/toast/toast.message';
import { ToastService } from 'src/app/core/toast/toast.service';

import { Produto } from '../models/produto.model';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-produtos-cadastro',
  templateUrl: './produtos-cadastro.component.html',
  preserveWhitespaces: true,
})
export class ProdutosCadastroComponent implements OnInit {

  produto: Produto;

  form: FormGroup;
  loading: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private produtoService: ProdutoService,
    private toaster: ToastService,
  ) { }

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

  get editando(): boolean {
    return this.produto != null;
  }

  salvar() {
    if (this.form.valid) {
      this.loading = true;
      const produto = this.form.value as Produto;
      this.produtoService
        .save(produto)
        .pipe(finalize(() => this.loading = false))
        .subscribe(this.onSuccess, this.onError);
    }
  }

  private onSuccess = (produto: Produto) => {
    this.toaster.show({
      header: 'Produtos',
      body: `${this.editando ? 'Edição realizada' : 'Cadastro realizado'} com sucesso!`,
      severity: ToastSeverity.SUCCESS,
    });
    this.router.navigate(['produtos']);
  }

  private onError = (error: any) => {
    this.toaster.show({
      header: 'Produtos',
      body: 'Houve um erro!',
      severity: ToastSeverity.DANGER,
    });
  }

}
