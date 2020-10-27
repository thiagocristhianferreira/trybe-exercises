let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numOrdenados=[];

function ordenaNum(a, b) {
  return b - a;
}

numbers.sort(ordenaNum);
for (i=0; i<numbers.length; i++) {
  numOrdenados.push(numbers[i]);
}

console.log(numOrdenados);