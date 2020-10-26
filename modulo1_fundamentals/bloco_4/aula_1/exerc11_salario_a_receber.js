let salario=3500;
let inss=0;
let ir=0;
let inssAliquota=0;
let irAliquota=0;
let irParcela=0;
let restoParcelas=0;
let salarioBase=0;
let salarioLiquido=0;

//Cálculo INSS

if (salario<1556.94) {
    inssAliquota="Alíquota de 8%";
    inss=0.08*salario;
} else if(salario>=1556.95 && salario<=2594.92) {
    inssAliquota="Alíquota de 9%";
    inss=0.09*salario;
} else if(salario>=2594.93 && salario<=5189.82) {
    inssAliquota="Alíquota de 11%";
    inss=0.11*salario;
} else {
    inss=570.88
}

//Cálculo IR

salarioBase=salario-inss;

if (salarioBase<1903.98) {
    ir=0;
} else if (salarioBase>=1903.99 && salarioBase<=2826.65) {
    irAliquota="Alíquota de 7,5%";
    irParcela=142.80;
    ir=(0.075*salarioBase)-irParcela;
    salarioLiquido=salarioBase-ir;
} else if (salarioBase>=2826.66 && salarioBase<=3751.05) {
    irAliquota="Alíquota de 15%";
    irParcela=354.80;
    ir=(0.15*salarioBase)-irParcela;
    salarioLiquido=salarioBase-ir;
} else if (salarioBase>=3751.06 && salarioBase<=4664.68) {
    irAliquota="Alíquota de 22,5%";
    irParcela=636.13;
    ir=(0.225*salarioBase)-irParcela;
    salarioLiquido=salarioBase-ir;
} else (salarioBase>4664.68); { 
    irAliquota="Alíquota de 27,5%";
    irParcela=869.36;
    ir=(0.275*salarioBase)-irParcela;
    salarioLiquido=salarioBase-ir;
}

//Mostra Alíquota INSS, Alíquota IR, PArcela IR e IR.

console.log("Salário Bruto = ",salario);
console.log("Alíquota INSS = ",inssAliquota);
console.log("Valor INSS = ",inss);
console.log("Alíquota IR = ",irAliquota);
console.log("Parcela IR = ",irParcela);
console.log("Valor IR = ",ir);
console.log("Salário Líquido = ",salarioLiquido);