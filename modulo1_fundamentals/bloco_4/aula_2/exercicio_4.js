let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
soma=0;
media=0;
for (i=0; i<numbers.length; i++) {
    soma=(soma+numbers[i]);
    media=soma/numbers.length;
}
console.log("A Média Aritimética do array é: "+media);

if (media>20) {
    console.log("O valor da média é maior que 20");
} else {
    console.log("O valor da média é menor que 20");
}