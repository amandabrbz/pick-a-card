import { Component, OnInit } from '@angular/core';
import { Naipe } from 'src/app/models/naipe/naipe';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
})

export class ListaComponent implements OnInit {

  public naipes: Naipe[] = [
    new Naipe("ouros"),
    new Naipe("copas"),
    new Naipe("paus"),
    new Naipe("espadas"),
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
