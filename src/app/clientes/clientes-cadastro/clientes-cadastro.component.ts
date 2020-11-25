import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { ToastSeverity } from 'src/app/core/toast/toast.message';
import { ToastService } from 'src/app/core/toast/toast.service';
import { Cliente } from '../models/cliente.model';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-clientes-cadastro',
  templateUrl: './clientes-cadastro.component.html',
})
export class ClientesCadastroComponent implements OnInit {

  cliente: Cliente;
  form: FormGroup;

  loading: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private clienteService: ClienteService,
    private toaster: ToastService,
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
      this.loading = true;
      const cliente = this.form.value as Cliente;
      this.clienteService
        .save(cliente)
        .pipe(finalize(() => this.loading = false))
        .subscribe(this.onSuccess, this.onError);
    }
  }

  private onSuccess = (cliente: Cliente) => {
    this.toaster.show({
      header: 'Clientes',
      body: `${this.editando ? 'Edição realizada' : 'Cadastro realizado'} com sucesso!`,
      severity: ToastSeverity.SUCCESS,
    });
    this.router.navigate(['clientes']);
  }

  private onError = (error: any) => {
    this.toaster.show({
      header: 'Clientes',
      body: 'Houve um erro!',
      severity: ToastSeverity.DANGER,
    });
  }

}
