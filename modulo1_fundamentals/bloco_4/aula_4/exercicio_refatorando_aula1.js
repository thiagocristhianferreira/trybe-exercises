function soma(a, b) {
    return a + b;
};
console.log(soma(10, 20));

function sub(a, b) {
    return a - b;
};
console.log(sub(10, 20));

function mult(a, b) {
    return a * b;
};
console.log(mult(10, 20));

function div(a, b) {
    return a / b;
};
console.log(div(10, 20));

function mod(a, b) {
    return a % b;
};
console.log(mod(10, 20));

function maior2Num(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
};
console.log(maior2Num(10, 20));

function maior3Num(a, b, c) {
    if (a > b && a > c) {
        return (a);
    } else if (c > a && c > b) {
        return (c);
    } else return (b);
};
console.log(maior3Num(15, 20, 35))

function posOuNeg(a) {
    if (a > 0) {
        return ("positive");
    } else if (a < 0) {
        return ("negative");
    } else return ("zero");
};
console.log(posOuNeg(-8));

function somaAng(ang1, ang2, ang3) {
    let somaAngulos = ang1 + ang2 + ang3;
    if (somaAngulos == 180) {
        return ("True");
    } else {
        return ("False");
    }
};
console.log(somaAng(30, 140, 10));

function movXadrez (pecaXadrez) {
    switch (pecaXadrez.toLowerCase()) {
        case "rei":
            console.log("Rei: O Rei pode mover-se em todas as direções (horizontal, vertical e diagonal) somente uma casa de cada vez");
            break;
        case "rainha":
            console.log("A Rainha move-se ao longo da horizontal, vertical e diagonais mas não pode pular outras peças");
            break;
        case "bispo":
            console.log("O bispo move-se ao longo da diagonal. Não pode pular outras peças.");
            break;
        case "torre":
            console.log("A torre movimenta-se pela vertical ou horizontal, mas não pode pular outras peças.");
            break;
        case "cavalo":
            console.log("O Cavalo é a única peça que pode pular as outras. O movimento do cavalo é em forma de “L”, quer dizer, duas casas em sentido horizontal e mais uma na vertical ou vice-versa.");
            break;
        case "peao":
            console.log("O peão movimenta-se apenas uma casa para frente e somente captura outras peças na diagonal. Opcionalmente, cada peão pode avançar duas casas no seu primeiro movimento do jogo.");
            break;
    }
};
console.log(movXadrez("PEAO"));

function porcentagem (nota) {
    if (nota>100 || nota<0) {
        return ("Nota Inválida");
    } else if(nota>=90) {
        return ("Nota A");
    } else if(nota>=80) {
        return ("Nota B");
    } else if(nota>=70) {
        return ("Nota C");
    } else if(nota>=60) {
        return ("Nota D");
    } else if(nota>=50) {
        return ("Nota E");
    } else if(nota<50) {
        return ("Nota F");
    }
};
console.log(porcentagem(76));

function umForPar (a, b, c) {
    if (a % 2 == 0 || b % 2 == 0 || c % 2 == 0) {
        return ("true");
    } else return ("false");
};
console.log(umForPar(1, 2, 3));

function umForImpar (a, b, c) {
    if (a % 2 != 0 || b % 2 != 0 || c % 2 != 0) {
        return ("true");
    } else {
        return ("false");
    }
};
console.log(umForImpar(1, 2, 3));

function lucro (custo, valorVenda) {
    if (custo<0 || valorVenda<0) {
        return ("Valores Inválidos")
    } else {
        let imposto=custo*0.2;
        let custoTotal=custo+imposto;
        lucro=valorVenda-custoTotal;
        return (lucro);
    }
};
console.log(lucro(25, 45));

function salarioReceber (salario) {
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
        return salarioLiquido;
    }

    //Mostra Alíquota INSS, Alíquota IR, PArcela IR e IR.

    //console.log("Salário Bruto = ",salario);
    //console.log("Alíquota INSS = ",inssAliquota);
    //console.log("Valor INSS = ",inss);
    //console.log("Alíquota IR = ",irAliquota);
    //console.log("Parcela IR = ",irParcela);
    //console.log("Valor IR = ",ir);
    //console.log("Salário Líquido = ",salarioLiquido);
}
console.log(salarioReceber(3500));