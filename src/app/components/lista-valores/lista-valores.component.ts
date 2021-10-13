import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Valor } from 'src/app/models/valor/valor';

@Component({
  selector: 'app-lista-valores',
  templateUrl: './lista-valores.component.html',
  styleUrls: ['./lista-valores.component.css'],
})

export class ListaValoresComponent implements OnInit {

  @Output()
  public valorSelecionado: EventEmitter<Valor> = new EventEmitter();

  public valores: Valor[] = [
    new Valor("A"),
    new Valor("2"),
    new Valor("3"),
    new Valor("4"),
    new Valor("5"),
    new Valor("6"),
    new Valor("7"),
    new Valor("8"),
    new Valor("9"),
    new Valor("J"),
    new Valor("Q"),
    new Valor("K"),
  ]

  constructor() { }

  ngOnInit(): void {
  }

  public selecionaValor(valor: Valor) {
    this.valorSelecionado.emit(valor);
  }
}
