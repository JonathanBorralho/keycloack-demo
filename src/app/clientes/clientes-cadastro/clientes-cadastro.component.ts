import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from '../models/cliente.model';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-clientes-cadastro',
  templateUrl: './clientes-cadastro.component.html',
})
export class ClientesCadastroComponent implements OnInit {

  cliente: Cliente;
  form: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private clienteService: ClienteService
  ) { }

  ngOnInit(): void {
    this.cliente = this.route.snapshot.data['cliente'] as Cliente;

    this.form = this.fb.group({
      'id': null,
      'nome': [null, Validators.required]
    });

    if (this.cliente != null) {
      this.form.patchValue(this.cliente);
    }
  }

  get editando(): boolean {
    return this.cliente != null;
  }

  salvar() {
    if (this.form.valid) {
      const cliente = this.form.value as Cliente;
      this.clienteService.save(cliente).subscribe(saved => {
        console.log(saved);
      });
    }
  }

}
