let array = [2, 4, 6, 7, 10, 0, -3];

function maiorValor(arrayAqui) {
    return Math.min.apply(Math, arrayAqui);
}

console.log(array.indexOf(maiorValor(array)));