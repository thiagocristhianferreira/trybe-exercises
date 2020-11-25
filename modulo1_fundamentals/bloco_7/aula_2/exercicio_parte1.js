const objeto = {
  nome: 'Edson',
  lastName: 'Arantes',
};

const createObject = (obj, chave, valor) => {
  obj[chave] = valor;
  return obj;
};

console.log(createObject(objeto, 'gols', 1000));

