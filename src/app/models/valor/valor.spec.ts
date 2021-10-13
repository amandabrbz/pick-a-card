import { Valor } from './valor';

describe('Valor', () => {
  let valor: Valor;

  beforeEach(() => {
    valor = new Valor("A")
  })

  it('should create an instance', () => {
    expect(valor).toBeTruthy();
  });
});
