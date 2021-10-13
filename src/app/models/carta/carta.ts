import { Naipe } from '../naipe/naipe'

export class Carta {
  constructor(
    public valor: string,
    public naipe: Naipe,
  ) {

  }

  public getNaipe(): string {
    return `${this.naipe.nome}`;
  }
}
