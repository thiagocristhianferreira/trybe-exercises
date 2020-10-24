let custo=15;
let valorVenda=25;
let imposto=custo*0.2;
let custoTotal=custo+imposto;
let lucro=0;
if (custo<0 || valorVenda<0) {
    console.log("Valores Inválidos")
} else {
    lucro=valorVenda-custoTotal;
    console.log(lucro);
}