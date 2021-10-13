import { Nipe } from './nipe';

describe('Nipe', () => {
  let nipe: Nipe;

  beforeEach(() => {
    nipe = new Nipe("paus")
  })

  it('should create an instance', () => {
    expect(nipe).toBeTruthy();
  });
});
