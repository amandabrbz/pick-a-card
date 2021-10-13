import { Naipe } from './naipe';

describe('Nipe', () => {
  let naipe: Naipe;

  beforeEach(() => {
    naipe = new Naipe("paus")
  })

  it('should create an instance', () => {
    expect(naipe).toBeTruthy();
  });
});
