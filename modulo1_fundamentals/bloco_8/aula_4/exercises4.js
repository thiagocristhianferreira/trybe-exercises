const assert = require('assert')

const people = [
    {
        name: "Nicole",
        bornIn: 1992,
        nationality: "Australian"
    },
    {
        name: "Harry",
        bornIn: 2008,
        nationality: "Australian"
    },
    {
        name: "Toby",
        bornIn: 1901,
        nationality: "Australian"
    },
    {
        name: "Frida",
        bornIn: 1960,
        nationality: "Dannish"
    },
    {
        name: "Fernando",
        bornIn: 2001,
        nationality: "Brazilian"
    }
]
// Escreva uma função filterPeople que, dada uma lista de pessoas,
// retorna todas as pessoas australianas que nasceram no século 20:
// Dica: use object destructuring .
// escreva filterPeople abaixo

const filterPeople = (people) => people.filter(person => person.nationality === "Australian" &&
person.bornIn < 2000 && person.bornIn > 1900)

const filteredPeople = filterPeople(people);

//console.log(filteredPeople)

assert.deepStrictEqual(filteredPeople[0], { name: "Nicole", bornIn: 1992, nationality: "Australian" })
assert.deepStrictEqual(filteredPeople[1], { name: "Toby", bornIn: 1901, nationality: "Australian" })