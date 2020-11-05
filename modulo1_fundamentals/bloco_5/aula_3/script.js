function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;
        weekDaysList.appendChild(dayListItem);
    };
};

createDaysOfTheWeek();

// Exercicio 1

function diasCalendario() {
    let dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    let diasDez = document.querySelector('#days')
    for (i = 0; i < dezDaysList.length; i++) {
        let dias = dezDaysList[i];
        let listaDias = document.createElement('li');
        listaDias.className = 'day';
        diasDez.appendChild(listaDias);
        listaDias.innerHTML = dias;
        if (dezDaysList[i] == 24 || dezDaysList[i] == 25 || dezDaysList[i] == 31) {
            listaDias.className += ' holiday';
        };
        if (dezDaysList[i] == 4 || dezDaysList[i] == 11 || dezDaysList[i] == 18 || dezDaysList[i] == 25) {
            listaDias.className += ' friday';
        };
    };
};
diasCalendario();

// Exercicio 2
function criarBotao() {
    let btnContainer = document.querySelector('.buttons-container');
    let botao = document.createElement('button');
    botao.id = 'btn-holiday';
    botao.innerHTML = 'Feriados';
    btnContainer.appendChild(botao);
};
criarBotao();

// Exercicio 3
function mudaCorFeriados() {
    let btnMudaCor = document.querySelector('#btn-holiday');
    let listaFeriados = document.querySelectorAll('.holiday');
    btnMudaCor.addEventListener('click', function () {
        for (i = 0; i < listaFeriados.length; i++) {
            if (listaFeriados[i].style.backgroundColor === 'yellow') {
                listaFeriados[i].style.backgroundColor = 'rgb(238,238,238)';
            } else {
                listaFeriados[i].style.backgroundColor = 'yellow';
            }
        }
    })
};
mudaCorFeriados();
