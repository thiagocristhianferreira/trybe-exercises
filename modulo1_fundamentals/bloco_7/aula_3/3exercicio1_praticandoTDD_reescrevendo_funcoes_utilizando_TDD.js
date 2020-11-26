//exercicio 1
const greetPeople = (people) => {
  let newGreeting = [];
  for (const person in people) {
    let greeting = 'Hello ';
    greeting += people[person];
    newGreeting.push(greeting);
  }
  return newGreeting;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

//Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.

const assert = require('assert');

assert.strictEqual(typeof greetPeople, 'function');
assert.deepStrictEqual(greetPeople(parameter), result);
