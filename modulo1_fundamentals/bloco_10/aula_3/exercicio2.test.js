const { expect } = require('@jest/globals');
const funcao = require('./exercicio1')

// Exercicio 2
test('2 Parametros - Teste se a função foi chamada, qual seu retorno (7), quantas vezes foi chamada (2) e Quais o dados de entrada (14, 2)', () => {
  funcao.randomNumber = jest.fn().mockImplementation((x, y) => x / y);

  funcao.randomNumber();

  expect(funcao.randomNumber).toHaveBeenCalled();
  expect(funcao.randomNumber(14, 2)).toBe(7);
  expect(funcao.randomNumber).toHaveBeenCalledTimes(2);
  expect(funcao.randomNumber).toHaveBeenCalledWith(14, 2);
});
