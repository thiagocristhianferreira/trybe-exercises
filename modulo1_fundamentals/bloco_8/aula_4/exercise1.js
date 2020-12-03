const assert = require('assert')

// Dado o código abaixo, complete-o de forma que seja impressa a área dos 3 retângulos.
// O código deve retornar em sequência 2 , 15 e 54 .
const rectangleArea = (width, height) => width * height

const rectangle1 = [1, 2]
const rectangle2 = [3, 5]
const rectangle3 = [6, 9]
const rectangles = [rectangle1, rectangle2, rectangle3]

//console.log(rectangleArea(...rectangle1))
//console.log(rectangleArea(...rectangle2))
//console.log(rectangleArea(...rectangle3))

for(rectangle of rectangles) {
  assert.strictEqual(rectangleArea(), rectangle * rectangle)
  //console.log(rectangle)
  //console.log(rectangleArea(...rectangle))
  // altere a chamada da funcao rectangleArea
}