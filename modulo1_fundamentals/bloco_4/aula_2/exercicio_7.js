let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
numeroMenor=100000;

for (let i=0; i<numbers.length; i++) {
    if (numbers[i]<numeroMenor) {
        numeroMenor=numbers[i];
    }
}

console.log("O menor número do array é: "+numeroMenor);