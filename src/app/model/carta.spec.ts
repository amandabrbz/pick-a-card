import { Carta } from './carta';

describe('Carta', () => {
  let carta: Carta;

  beforeEach(() => {
    carta = new Carta("2", "ouro")
  })

  it('should create an instance', () => {
    expect(carta).toBeTruthy();
  });
});
