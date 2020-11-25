const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

//Exercicio 1
function addTurno(objeto, chave, valor) {
  objeto[chave] = valor;
  return objeto;
};

addTurno(lesson2, 'turno', 'manha')

console.log(addTurno(lesson2, 'turno', 'manha'));

//Exercicio 2
function listaKeys(objeto) {
  return Object.keys(objeto);
};

listaKeys(lesson3);

console.log(listaKeys(lesson3));

//Exercicio 3
function tamanhoObjeto(objeto) {
  return Object.keys(objeto).length;
};

tamanhoObjeto(lesson1);

console.log(tamanhoObjeto(lesson1));

//Exercicio 4
function valoresObjeto(objeto) {
  return Object.values(objeto);
};

valoresObjeto(lesson3);

console.log(valoresObjeto(lesson3));

//Exercicio 5
const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

console.log(allLessons);

//Exercicio 6
const somaEstudantes = (allLessons) => {
  let numSoma = 0;
  const lessons = Object.keys(allLessons);
  for (let indexObject = 0; indexObject < lessons.length; indexObject++) {
    numSoma += allLessons[lessons[indexObject]].numeroEstudantes;
  };
  return numSoma;
};

console.log(somaEstudantes(allLessons));

//Exercicio 7
const getValueByIndex = (object, indexObject) => {
  const lessons = Object.values(lesson1);
  return lessons[indexObject];
};
getValueByIndex(lesson1, 0);

console.log(getValueByIndex(lesson1, 0));

//Exercicio 8
const verifica = (objeto, chave, valor) => {
  if (objeto[chave] === valor) {
    return true;
  } else {
    return false;
  };
};

console.log(verifica(lesson3, 'turno', 'noite'));

console.log(verifica(lesson3, 'materia', 'Maria Clara'));