const randomNumber = () => {
  const r = Math.floor(Math.random() * 100);
  return r;
};

const isDivisible = (number) => (randomNumber() % number) === 0;

test('Testando se a função foi chamada', () => {
  isDivisible.randomNumber = jest.fn();

  isDivisible.randomNumber();
  expect(isDivisible.randomNumber).toHaveBeenCalled();
});

test('Testando se a função foi chamada e quando a randomNumber() retorna um número par e isDivisible() recebe um dois, o retorno é true ', () => {
  isDivisible.randomNumber = jest.fn().mockReturnValue('true');

  isDivisible.randomNumber();
  expect(isDivisible.randomNumber).toHaveBeenCalled();
  expect(isDivisible.randomNumber(2)).toBe('true');
});

test('Testando se a função foi chamada e quando a randomNumber() retorna um número par e isDivisible() recebe um dois, o retorno é true ', () => {

  isDivisible.randomNumber = jest
    .fn()
    .mockReturnValue('default value')
    .mockReturnValueOnce('first call')
    .mockReturnValueOnce('second call');

    expect(isDivisible.randomNumber).toHaveBeenCalledTimes(0);

    expect(isDivisible.randomNumber()).toBe("first call");
    expect(isDivisible.randomNumber).toHaveBeenCalledTimes(1);
  
    expect(isDivisible.randomNumber()).toBe("second call");
    expect(isDivisible.randomNumber).toHaveBeenCalledTimes(2);
  
    expect(isDivisible.randomNumber()).toBe("default value");
    expect(isDivisible.randomNumber).toHaveBeenCalledTimes(3);

    isDivisible.randomNumber();
    expect(isDivisible.randomNumber).toHaveBeenCalledTimes(4);
});
