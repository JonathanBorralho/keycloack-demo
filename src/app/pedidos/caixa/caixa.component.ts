import { Component, OnInit, TemplateRef } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, switchMap } from 'rxjs/operators';

import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { NgbTypeaheadSelectItemEvent } from '@ng-bootstrap/ng-bootstrap';

import { Produto } from 'src/app/produtos/models/produto.model';
import { ProdutoService } from 'src/app/produtos/services/produto.service';
import { FilialService } from 'src/app/filiais/services/filial.service';
import { Filial } from 'src/app/filiais/models/filial.model';

@Component({
  selector: 'app-caixa',
  templateUrl: './caixa.component.html',
})
export class CaixaComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private produtoService: ProdutoService,
    private filialService: FilialService,
    private library: FaIconLibrary
  ) {
    this.library.addIcons(faTimes);
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      'tipo': 'ENTRADA',
      'filial': [null, Validators.required],
      'itens': this.fb.array([], Validators.required),
    });
  }

  private addProduto(produto: Produto) {
    const itens = this.getItensFormArray();
    if (this.alreadyHas(produto)) {
      const index = this.getIndex(produto);
      itens.at(index).patchValue({
        'quantidade': itens.at(index).value['quantidade'] as number + 1,
      });
    } else {
      const itemGroup = this.fb.group({
        'produto': this.fb.group(produto),
        'quantidade': 1,
        'valorUnitario': produto.valorUnitario,
        'status': 'PROCESSADO',
      });
      itens.push(itemGroup);
    }
  }

  private alreadyHas(produto: Produto): boolean {
    const itens = this.getItensFormArray();
    return itens.controls.map(c => c.get('produto.id').value as number).includes(produto.id);
  }

  private getIndex(produto: Produto): number {
    const itens = this.getItensFormArray();
    return itens.controls
      .findIndex(c => c.get('produto.id').value == produto.id)
  }

  removerItem(index: number): void {
    const itens = this.getItensFormArray();
    itens.removeAt(index);
  }

  get itens(): AbstractControl[] {
    const itens = this.getItensFormArray();
    return itens.controls;
  }

  salvar() {
    console.log(this.form.value);
  }

  search = (text$: Observable<string>) => {
    return text$.pipe(
      filter(text => text.trim().length > 2),
      distinctUntilChanged(),
      debounceTime(300),
      switchMap(text => this.produtoService.search(text))
    );
  }

  formatter = (p: Produto) => p.descricao;

  onSelect(event: NgbTypeaheadSelectItemEvent) {
    this.addProduto(event.item as Produto);
    event.preventDefault();
  }

  private getItensFormArray(): FormArray {
    return this.form.get('itens') as FormArray;
  }

  searchFilial = (text$: Observable<string>) => {
    return text$.pipe(
      filter(text => text.trim().length > 2),
      distinctUntilChanged(),
      debounceTime(300),
      switchMap(text => this.filialService.search(text))
    );
  }

  filialFormatter = (f: Filial) => `${f.nome} - ${f.cidade}`;

}
