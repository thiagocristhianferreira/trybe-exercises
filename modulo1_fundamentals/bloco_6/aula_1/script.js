//Estados brasileiros
const states = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins']
let stateOptions = document.getElementById('state');
for (let statesElement = 0; statesElement < states.length; statesElement++) {
  let optionElement = document.createElement('option')
  optionElement.innerHTML = states[statesElement];
  stateOptions.appendChild(optionElement);
};

