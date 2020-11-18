//Estados brasileiros
const states = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins']
let stateOptions = document.getElementById('state');
for (let statesElement = 0; statesElement < states.length; statesElement++) {
  let optionElement = document.createElement('option')
  optionElement.innerHTML = states[statesElement];
  stateOptions.appendChild(optionElement);
};

document.getElementById('prev').addEventListener('click', function (event) {
  let date = document.getElementById('beginingDate');
  let dia = date.value.substring(0, 1) + date.value.substring(1, 2);
  let mes = date.value.substring(3, 4) + date.value.substring(4, 5);
  let ano = date.value.substring(6, 7) + date.value.substring(7, 8) + date.value.substring(8, 9) + date.value.substring(9, 10);
  dia = parseInt(dia);
  mes = parseInt(mes);
  ano = parseInt(ano);
  let dateFormat = date.value.substring(2, 3);
  let dateFormat2 = '/';
  if (dateFormat != dateFormat2) {
    alert('Formato da data esta errado');
    event.preventDefault();
  }
  if (dia > 31 || dia < 1) {
    alert('Dia fora do intervalo');
    event.preventDefault();
  }
  if (mes > 12 || mes < 1) {
    alert('Mes fora do intervalo');
    event.preventDefault();
  }
  if (ano <= 1 || ano > 2030) {
    alert('Ano fora do intervalo');
    event.preventDefault();
  };
  //CONSOLIDADO
  let divConsolidated = document.getElementById('consolidated');
  let nome = document.getElementById('full-name').value;
  let name = document.createElement('p');
  name.innerHTML = nome;
  divConsolidated.append(name);
  console.log(nome);




});

