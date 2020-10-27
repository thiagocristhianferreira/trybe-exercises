let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbersMultiplicados = [];

for (let i=0; i<numbers.length; i++) {
    if (i<numbers.length-1) {
        m=numbers[i]*numbers[i+1];
        numbersMultiplicados.push(m);
    } else {
        m=numbers[i]*2;
        numbersMultiplicados.push(m);
    }
    
}
console.log(numbersMultiplicados);