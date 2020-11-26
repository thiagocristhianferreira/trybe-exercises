const assert = require('assert');
//Escreva a função wordLengths para passar nos testes já implementados.
// escreva a função wordLengths aqui
const wordLengths = (array) => {
  let newArray = [];
  for (i = 0; i < array.length; i++) {
    newArray.push(array[i].length);
  }
  return newArray;
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);