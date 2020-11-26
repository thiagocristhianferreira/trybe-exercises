const parameter = 'Dayane';
const result = 'D1y2n3';

const removeVowels = (word) => {
  const characters = word.split('');
  let results = [];
  let j = 0;
  for (let i = 0; i < characters.length; i += 1) {
    if (
      characters[i] === 'a' ||
      characters[i] === 'o' ||
      characters[i] === 'i' ||
      characters[i] === 'e' ||
      characters[i] === 'u'
    ) {
      j = j + 1;
      results = results + j;
    } else {
      results = results + characters[i];
    };
  };
  return results;
};
removeVowels(parameter);

const assert = require('assert');
assert.strictEqual(typeof removeVowels, 'function');
assert.deepStrictEqual(removeVowels(parameter), result);
