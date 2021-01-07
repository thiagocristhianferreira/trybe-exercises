const funcao = require('./exercicio1')

// Exercicio 1
test('Teste se a função foi chamada, qual seu retorno (10) e quantas vezes foi chamada (1)', () => {
  funcao.randomNumber = jest.fn().mockReturnValue(10);

  const number = funcao.randomNumber();

  expect(funcao.randomNumber).toHaveBeenCalled();
  expect(number).toBe(10);
  expect(funcao.randomNumber).toHaveBeenCalledTimes(1);
});
