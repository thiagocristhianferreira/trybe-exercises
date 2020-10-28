let baseTri = 5;

for (let addAst = 1; addAst <= baseTri; addAst += 2) {
    let qtdAst = addAst;
    let linhaTri = "";
    qtdEsp = (baseTri - qtdAst)/2;
    for (esp = 1; esp <= qtdEsp; esp++) {
        linhaTri += " ";
    }
    for (let ast = 1; ast <= qtdAst; ast++) {
        linhaTri += "*";
    }
    console.log(linhaTri);
}