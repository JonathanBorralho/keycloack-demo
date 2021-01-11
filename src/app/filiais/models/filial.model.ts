import { Entity } from 'src/app/util/base-entity-service';

export interface Filial extends Entity {
  nome: string;
  logradouro: string;
  cidade: string;
  estado: string;
}
