const assert = require('assert')

// Escreva uma função greet que, dado o nome de uma pessoa,
// retorna uma mensagem de cumprimento:
// Dica: use default params .

// escreva greet abaixo
const greet = (par1, par2 = "Hi") => {
  //console.log(par1)
  //console.log(par2)
  if (par2 === undefined) {
    return `Hi ${par1}`;
  };
  return `${par2} ${par1}`
};

// console.log(greet("thiago"))
// console.log(greet("John"))
// console.log(greet("thiago", "Oi"))

assert.strictEqual(greet("John"), "Hi John")
assert.strictEqual(greet("John", "Good morning"), "Good morning John")
assert.strictEqual(greet("Isabela", "Oi"), "Oi Isabela")