const { it } = require('@jest/globals');
const funcao = require('./exercicio1')

// Exercicio 3

describe('Exercicio 3', () => {
  it('3 Parametros - Teste se a função foi chamada, qual seu retorno (60), quantas vezes foi chamada (2) e Quais o dados de entrada (3, 4, 5)', () => {
    // implementacao "mockada"
    funcao.randomNumber = jest.fn().mockImplementation((x, y, z) => x * y * z);
  
    funcao.randomNumber();
  
    expect(funcao.randomNumber).toHaveBeenCalled();
    expect(funcao.randomNumber(3, 4, 5)).toBe(60);
    expect(funcao.randomNumber).toHaveBeenCalledTimes(2);
    expect(funcao.randomNumber).toHaveBeenCalledWith(3, 4, 5);
  
  });
  // retorno a funcao original e fazendo nova implementacao
  it('Retorno a funcao original e fazendo nova implementacao, dado de entrada (3), retorno (6)', () => {
    funcao.randomNumber.mockRestore();
    funcao.randomNumber = jest.fn().mockImplementation((x) => x * 2);

    funcao.randomNumber();

    expect(funcao.randomNumber).toHaveBeenCalled();
    expect(funcao.randomNumber(3)).toBe(6);
    expect(funcao.randomNumber).toHaveBeenCalledTimes(2);
    expect(funcao.randomNumber).toHaveBeenCalledWith(3);
  });
});
