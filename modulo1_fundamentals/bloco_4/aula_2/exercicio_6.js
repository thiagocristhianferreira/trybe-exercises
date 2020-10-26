let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numeroMaior=0;
let qntdeImpares=0;

for (i=0; i<numbers.length; i++) {
    if (numbers[i]%2 !=0) {
        qntdeImpares=qntdeImpares+1
    }
}

if (qntdeImpares===0) {
    console.log("nenhum valor ímpar encontrado");
} else {
    console.log("A quantidade de números ímpares do array é: "+qntdeImpares);
}