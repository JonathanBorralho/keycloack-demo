import { Entity } from 'src/app/util/base-entity-service';

export interface Produto extends Entity {
  fabricante: string;
  descricao: string;
  codigoBarras: string;
  valorUnitario: number;
}
