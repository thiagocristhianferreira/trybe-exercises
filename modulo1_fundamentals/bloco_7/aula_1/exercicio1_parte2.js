const fatorial = num => {
  if (num > 1) {
    return num * fatorial(num - 1);
  }
  return num;
};

const verificaNumero = numero => {
  if (numero < 0) {
    console.log(`
    Numeros negativos nao aceitos`);
  };
  if (numero > 0) {
    let numeroFatorial = fatorial(numero);
    console.log(`Esse numero foi aceito,
    seu fatorial eh: ${numeroFatorial}`);
  };
  return `
  O numero de entrada foi ${numero}`;
};

console.log(verificaNumero(6));
console.log(verificaNumero(-5));