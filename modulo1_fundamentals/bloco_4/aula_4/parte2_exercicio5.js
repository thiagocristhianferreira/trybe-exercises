function numMaisRepete(numeros) {
  let verifRepeticoes = 0;
  for (i in numeros) {
    let numRepetido = [];
    let repeticoes = 0;
    for (j in numeros) {
      if (numeros[i] == numeros[j]) {
        numRepetido = numeros[j];
        repeticoes++;
        verifRepeticoes = repeticoes;
      }
    }
  }
}
console.log([2, 3, 2, 5, 8, 2, 3]); 