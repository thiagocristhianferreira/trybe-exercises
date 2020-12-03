const assert = require('assert')

//Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos. Ou seja:
//Dica: use parâmetro rest .
// escreva sum abaixo

const sum = (...parametro) => parametro.reduce((acc, curr) => acc + curr, 0);

// console.log(sum())
// console.log(sum(1))
// console.log(sum(1, 2))
// console.log(sum(1, 2, 3))
// console.log(sum(1, 2, 3, 4))

assert.strictEqual(sum(), 0)
assert.strictEqual(sum(1), 1)
assert.strictEqual(sum(1, 2), 3)
assert.strictEqual(sum(1, 2, 3), 6)
assert.strictEqual(sum(1, 2, 3, 4), 10)