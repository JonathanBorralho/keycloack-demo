import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Filial } from '../models/filial.model';

@Component({
  selector: 'app-filiais-cadastro',
  templateUrl: './filiais-cadastro.component.html',
  styles: [
  ]
})
export class FiliaisCadastroComponent implements OnInit {

  filial: Filial;
  form: FormGroup;

  constructor(private route: ActivatedRoute, private fb: FormBuilder) {
    this.filial = this.route.snapshot.data['filial'] as Filial;

    this.form = this.fb.group({
      'id': null,
      'nome': [null, Validators.required],
      'logradouro': [null, Validators.required],
      'cidade': [null, Validators.required],
      'estado': [null, Validators.required],
    });

    if (this.filial != null) {
      this.form.patchValue(this.filial);
    }
  }

  ngOnInit(): void {
    console.log(this.filial);
  }

  get editando(): boolean {
    return this.filial != null;
  }

  salvar() {
    console.log(this.filial);
  }

}
