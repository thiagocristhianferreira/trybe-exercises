const assert = require('assert');
//Escreva a função addOne para passar nos testes já implementados.
const myArray = [31, 57, 12, 5];

const addOne = (myArray) => {
  let newArray = [];
  for (i = 0; i < myArray.length; i++) {
    newArray.push(myArray[i] + 1);    
  }
  return newArray;
}

const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function');
assert.deepStrictEqual(output, expected);
assert.deepStrictEqual(myArray, unchanged);