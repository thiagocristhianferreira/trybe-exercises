let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
numeroMaior=0;

for (i=0; i<numbers.length; i++) {
    if (numbers[i]>numeroMaior) {
        numeroMaior=numbers[i];
    }
}

console.log("O maior número do array é: "+numeroMaior);