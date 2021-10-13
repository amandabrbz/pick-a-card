import { Naipe } from '../naipe/naipe'
import { Valor } from '../valor/valor';

export class Carta {
  constructor(
    public valor: Valor,
    public naipe: Naipe,
  ) {

  }

  public getNaipe(): string {
    return `${this.naipe.nome}`;
  }

  public getValorCarta(): string {
    return `${this.valor.nome}`;
  }
}
