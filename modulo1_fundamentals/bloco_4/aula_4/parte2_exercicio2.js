let array = [2, 3, 6, 7, 10, 1];

function maiorValor(arrayAqui) {
    return Math.max.apply(Math, arrayAqui);
}

console.log(array.indexOf(maiorValor(array)));