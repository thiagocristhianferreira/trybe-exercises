let num = 5;

for (let linha = 1; linha <= num; linha++) {
    let qtdAst = linha;
    qtdEsp = num - qtdAst;
    let adicionaEspaco = [];
    let espaco = " ";
    for (let esp = 1; esp <= qtdEsp; esp++) {
        adicionaEspaco = adicionaEspaco + espaco;
    }
    let adicionaAsterisco = [];
    let asterisco = "*";
    for (let ast = 1; ast <= qtdAst; ast++) {
        adicionaAsterisco = adicionaAsterisco + asterisco;
    }
    adicionaAsterisco = adicionaEspaco + adicionaAsterisco;
    console.log(adicionaAsterisco);
}