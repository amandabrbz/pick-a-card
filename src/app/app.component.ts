import { Component } from '@angular/core';
import { Naipe } from './models/naipe/naipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  public naipeSelecionado?: Naipe

  public mostraNaipe(naipe: Naipe) {
    this.naipeSelecionado = naipe
  }
}
