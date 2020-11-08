
//Funções para mudar cor de fundo

function mudaCorFundo(color) {
    let mudaCorLeitura1 = document.querySelector('.column-left');
    mudaCorLeitura1.style.backgroundColor = color;
    localStorage.setItem('backgroundColor', color);
    let mudaCorLeitura2 = document.querySelector('.column-right');
    mudaCorLeitura2.style.backgroundColor = color;
    localStorage.setItem('backgroundColor', color);
    let mudaCorLeitura3 = document.querySelector('.paragrafo2');
    mudaCorLeitura3.style.backgroundColor = color;
    localStorage.setItem('backgroundColor', color);
}

let botaoMudaFundo = document.querySelectorAll('#corFundo');
for (let i = 0; i < botaoMudaFundo.length; i++) {
    botaoMudaFundo[i].addEventListener('click', function (event) {
        mudaCorFundo(event.target.innerHTML);
    });
};

//Funções para mudar cor da fonte
function mudaCorFonte(color) {
    let mudaCorTexto1 = document.querySelector('.column-left');
    mudaCorTexto1.style.color = color;
    localStorage.setItem('backgroundColor', color);
    let mudaCorTexto2 = document.querySelector('.column-right');
    mudaCorTexto2.style.color = color;
    localStorage.setItem('backgroundColor', color);
    let mudaCorTexto3 = document.querySelector('.paragrafo2');
    mudaCorTexto3.style.color = color;
    localStorage.setItem('backgroundColor', color);
};

let botaoMudaCorFonte = document.querySelectorAll('#corFonte');
for (let i = 0; i < botaoMudaCorFonte.length; i++) {
    botaoMudaCorFonte[i].addEventListener('click', function (event) {
        mudaCorFonte(event.target.innerHTML);
    });
};

//Funções para mudar o tamanho da fonte
function mudaTamFonte(size) {
    let mudaTamTexto1 = document.querySelector('.column-left');
    mudaTamTexto1.style.fontSize = size;
    localStorage.setItem('fontSize', size);
    let mudaTamTexto2 = document.querySelector('.column-right');
    mudaTamTexto2.style.fontSize = size;
    localStorage.setItem('fontSize', size);
    let mudaTamTexto3 = document.querySelector('.paragrafo2');
    mudaTamTexto3.style.fontSize = size;
    localStorage.setItem('fontSize', size);
};

let botaoMudaTamFonte = document.querySelectorAll('#tamFonte');
for (let i = 0; i < botaoMudaTamFonte.length; i++) {
    botaoMudaTamFonte[i].addEventListener('click', function (event) {
        mudaTamFonte(event.target.innerHTML);
    });
};

//Funções para mudar o espaçamento entre as linhas
function mudaEspLinhas(height) {
    let mudaEspLinhas1 = document.querySelector('.column-left');
    mudaEspLinhas1.style.lineHeight = height;
    localStorage.setItem('lineHeight', height);
    let mudaEspLinhas2 = document.querySelector('.column-right');
    mudaEspLinhas2.style.lineHeight = height;
    localStorage.setItem('lineHeight', height);
    let mudaEspLinhas3 = document.querySelector('.paragrafo2');
    mudaEspLinhas3.style.lineHeight = height;
    localStorage.setItem('lineHeight', height);
};

let botaoMudaEspLinhas = document.querySelectorAll('#espLinhas');
for (let i = 0; i < botaoMudaEspLinhas.length; i++) {
    botaoMudaEspLinhas[i].addEventListener('click', function (event) {
        mudaEspLinhas(event.target.innerHTML);
    });
};

//Funções para mudar o tipo da fonte
function mudaTipoFonte(font) {
    let mudaTipoFonte1 = document.querySelector('.column-left');
    mudaTipoFonte1.style.fontFamily = font;
    localStorage.setItem('fontFamily', font);
    let mudaTipoFonte2 = document.querySelector('.column-right');
    mudaTipoFonte2.style.fontFamily = font;
    localStorage.setItem('fontFamily', font);
    let mudaTipoFonte3 = document.querySelector('.paragrafo2');
    mudaTipoFonte3.style.fontFamily = font;
    localStorage.setItem('fontFamily', font);
};

let botaoMudaTipoFonte = document.querySelectorAll('#tipoFonte');
for (let i = 0; i < botaoMudaTipoFonte.length; i++) {
    botaoMudaTipoFonte[i].addEventListener('click', function (event) {
        mudaTipoFonte(event.target.innerHTML);
    });
};

//inicializa preferencias salvas no pc do cliente
function iniciar() {
    let corFundo = localStorage.getItem('corFundo');
    if (corFundo) {
        mudaCorFundo(corFundo);
    };
    let corFonte = localStorage.getItem('color');
    if (corFonte) {
        mudaCorFundo(corFonte);
    };
    let tamFonte = localStorage.getItem('size');
    if (tamFonte) {
        mudaCorFundo(tamFonte);
    };
    let espLinas = localStorage.getItem('height');
    if (espLinas) {
        mudaCorFundo(espLinas);
    };
    let tipoFonte = localStorage.getItem('font');
    if (tipoFonte) {
        mudaCorFundo(tipoFonte);
    };
};
iniciar();
