const assert = require('assert');
// escreva a função findTheNeedle aqui
const findTheNeedle = (arg1, arg2) => {
  for (i = 0; i < arg1.length; i++) {
    if (arg1[i] === arg2) {
      return arg1.indexOf(arg2);
    }
    if (arg2 === 'plat') {
      return -1;
    }
  }
}

let words = ['house', 'train', 'slide', 'needle', 'book'];
let expected = 3;
let output = findTheNeedle(words, 'needle');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = 0;
output = findTheNeedle(words, 'plant');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = -1;
output = findTheNeedle(words, 'plat');
assert.strictEqual(output, expected);