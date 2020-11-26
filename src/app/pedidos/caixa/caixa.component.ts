import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { Produto } from 'src/app/produtos/models/produto.model';
import { ProdutoService } from 'src/app/produtos/services/produto.service';

@Component({
  selector: 'app-caixa',
  templateUrl: './caixa.component.html',
})
export class CaixaComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private produtoService: ProdutoService,
    private library: FaIconLibrary
  ) {
    this.library.addIcons(faTimes);
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      'tipo': 'ENTRADA',
      'filial': null,
      'itens': this.fb.array([], Validators.required),
    });
  }

  addProduto(produto: Produto) {
    const itemGroup = this.fb.group({
      'produto': this.fb.group(produto),
      'quantidade': 1,
      'valorUnitario': produto.valorUnitario,
      'status': 'PROCESSADO',
    });
    const itens = this.form.get('itens') as FormArray;
    itens.push(itemGroup);
  }

  async adicionar() {
    const produto = await this.produtoService.findById(1).toPromise();
    this.addProduto(produto);
  }

  removerItem(index: number): void {
    const itens = this.form.get('itens') as FormArray;
    itens.removeAt(index);
  }

  get itens(): AbstractControl[] {
    const itens = this.form.get('itens') as FormArray;
    return itens.controls;
  }

  salvar() {
    console.log(this.form.value);
  }

}
