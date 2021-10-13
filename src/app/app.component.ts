import { Component } from '@angular/core';
import { Naipe } from './models/naipe/naipe';
import { Valor } from './models/valor/valor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  public naipeSelecionado?: Naipe
  public valorSelecionado?: Valor

  public mostraNaipe(naipe: Naipe) {
    this.naipeSelecionado = naipe
  }

  public mostraValor(valor: Valor) {
    this.valorSelecionado = valor
  }
}
