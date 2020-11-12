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
function criarBotao(nome, id) {
  let btnContainer = document.querySelector('.buttons-container');
  let botao = document.createElement('button');
  botao.id = id;
  botao.innerHTML = nome;
  btnContainer.appendChild(botao);
};
criarBotao('Feriados', 'btn-holiday');

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

// Exercicio 4
criarBotao('Sexta-feira', 'btn-friday');

// Exercicio 5
function mudaTextoFriday() {
  let btnMudaTexto = document.querySelector('#btn-friday');
  let listaDias = document.querySelectorAll('.friday');
  btnMudaTexto.addEventListener('click', function () {
    for (i = 0; i < listaDias.length; i++) {
      if (listaDias[i].innerText != 'SEXTOU') {
        listaDias[i].innerText = 'SEXTOU';
      } else {
        listaDias[i].innerText = (Number(listaDias[i].previousElementSibling.innerText) + 1);
      }
    }
  })
};
mudaTextoFriday();

// Exercicio 6
let dias = document.querySelector('#days');

function diaMouseOver() {
  dias.addEventListener('mouseover', function (evento) {
    evento.target.style.fontSize = '28px';
    evento.target.style.fontWeight = 'bold';
  });
};
diaMouseOver();

function diaMouseOut() {
  dias.addEventListener('mouseout', function (evento) {
    evento.target.style.fontSize = '20px';
    evento.target.style.fontWeight = 'normal';
  });
};
diaMouseOut();

// Exercicio 7
let taskContainer = document.querySelector('.my-tasks');
function addTaskSpan(taskName) {
  let newTask = document.createElement('span');
  newTask.innerText = taskName;
  taskContainer.appendChild(newTask);
};
addTaskSpan('cozinhar');

// Exercicio 8
function addTaksLegend(color) {
  let divLegend = document.createElement('div');
  divLegend.className = 'task';
  divLegend.style.backgroundColor = color;
  taskContainer.appendChild(divLegend);
}
addTaksLegend('green');

// Exercicio 9
function toggleTask() {
  let task = document.querySelector('.task');
  task.addEventListener('click', function(event){
    let taskSelected = document.querySelector('.task.selected');
    if (taskSelected === null) {
      event.target.className = 'task selected';
    } else {
      event.target.className = 'task';
    };
  });
};
toggleTask();

// Exercicio 10
function toggleDayColor() {
  dias.addEventListener('click', function(event) {
    let taskSelected = document.querySelector('.selected');
    if (taskSelected != null) {
      if (event.target.style.color === taskSelected.style.backgroundColor) {
        event.target.style.color = 'rgb(119,119,119)';
      } else {
        event.target.style.color = taskSelected.style.backgroundColor;
      };
    };
  });
};
toggleDayColor();