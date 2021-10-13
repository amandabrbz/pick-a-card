import { Component, OnInit } from '@angular/core';
import { Nipe } from 'src/app/models/nipe/nipe';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
})

export class ListaComponent implements OnInit {

  public nipes: Nipe[] = [
    new Nipe("ouros"),
    new Nipe("copas"),
    new Nipe("paus"),
    new Nipe("espadas"),
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
