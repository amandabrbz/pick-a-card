import { Component } from '@angular/core';
import { Naipe } from './models/naipe/naipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  public mostraNaipe(naipe: Naipe) {
    console.log('naipe', naipe)
  }
}
