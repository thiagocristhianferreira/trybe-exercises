const sum = require('./funcoes').sum;
const encode = require('./funcoes').encode;
const decode = require('./funcoes').decode;
const techList = require('./funcoes').techList;
const hydrate = require('./funcoes').hydrate;

describe('Exercicio 1 - Testes 1 a 5 - 7.3', () => {
  it('Teste se o retorno de sum(4, 5) é 9', () => {
    expect(9).toEqual(sum(4, 5));
  });
  it('Teste se o retorno de sum(0, 0) é 0', () => {
    expect(0).toEqual(sum(0, 0))
  });
  it('Teste se a função sum lança um erro quando os parametros são 4 e "5"', () => {
    expect(() => {
      sum(4, '5');
    }).toThrow();
  });
  it('Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")', () => {
    expect(() => {
      sum(4, '5');
    }).toThrow('parameters must be numbers');
  });
});

describe('Exercicio 2', () => {
  it('Testa se "encode" eh uma funcao', () => {
    expect(typeof encode).toEqual('function')
  });
  it('Testa se "decode" eh uma funcao', () => {
    expect(typeof decode).toEqual('function')
  });
});

describe('Exercicio 3', () => {
  it('Testa se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente', () => {
    expect(encode('aeiou')).toEqual('12345')
  });
});

describe('Exercicio 4', () => {
  it('Testa se os números 1, 2, 3, 4 e 5 são convertido nas vogais a, e, i, o, u , respectivamente', () => {
    expect(decode('12345')).toEqual('aeiou')
  });
});

describe('Exercicio 5', () => {
  it('Testa se os demais números 6, 7, 8, 9 e 10 não são convertidos em vogais', () => {
    expect(encode('678910')).toEqual('678910')
  });
  it('Testa se as demais letras t, h, g, c, f não são convertidos em números', () => {
    expect(decode('thgcf')).toEqual('thgcf')
  });
});

describe('Exercicio 6', () => {
  it('Testa se a string que é retornada pela função encode têm o mesmo número de caracteres que a string passada como parâmetro', () => {
    expect(encode('thiago').length).toEqual(6)
  });
  it('Testa se a string que é retornada pela função decode têm o mesmo número de caracteres que a string passada como parâmetro', () => {
    expect(decode('thiago').length).toEqual(6)
  });
});

describe('Exercicio 7 - Testa a função techList', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  })
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas'
      },
      {
        tech: 'HTML',
        name: 'Lucas'
      },
      {
        tech: 'JavaScript',
        name: 'Lucas'
      },
      {
        tech: 'Jest',
        name: 'Lucas'
      },
      {
        tech: 'React',
        name: 'Lucas'
      }
    ]);
  });
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});

describe('Testa a função hydrate', () => {
  it('Testa se a função hydrate é definida', () => {
    expect(hydrate).toBeDefined();
  });
  it('Testa se hydrate é uma função', () => {
    expect(typeof hydrate).toBe('function');
  });
  it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
    expect(hydrate('1 cerveja')).toBe('1 copo de água');
    expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
    expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
    expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
    expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
  });
});