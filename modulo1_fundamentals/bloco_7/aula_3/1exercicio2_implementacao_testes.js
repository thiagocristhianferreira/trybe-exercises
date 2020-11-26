const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

const array1 = [1, 2, 3, 4];
const array2 = [1, 2, 4];

//Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
assert.deepStrictEqual(myRemove(array1, 3), array2);

//Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
assert.notDeepStrictEqual(myRemove(array1, 3), array1);

//Verifique se o array passado por parâmetro não sofreu alterações
assert.deepStrictEqual(array1, array1);

//Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado
assert.deepStrictEqual(myRemove(array1, 5), array1);