//Estados brasileiros
const states = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins']
let stateOptions = document.getElementById('state');
for (let statesElement = 0; statesElement < states.length; statesElement++) {
  let optionElement = document.createElement('option')
  optionElement.innerHTML = states[statesElement];
  stateOptions.appendChild(optionElement);
};

function formatar(mascara, documento) {
  let i = documento.value.length;
  let saida = mascara.substring(0, 1);
  let texto = mascara.substring(i);
  if (texto.substring(0, 1) != saida) {
    documento.value += texto.substring(0, 1);
  };
};


let fullName = document.getElementById('full-name');

fullName.addEventListener("input", function (event) {

  if (fullName.validity.valid) {
    // In case there is an error message visible, if the field
    // is valid, we remove the error message.
    error.innerHTML = ""; // Reset the content of the message
    error.className = "error"; // Reset the visual state of the message
  }
}, false);
form.addEventListener("submit", function (event) {
  // Each time the user tries to send the data, we check
  // if the email field is valid.
  if (!email.validity.valid) {
    
    // If the field is not valid, we display a custom
    // error message.
    error.innerHTML = "I expect an e-mail, darling!";
    error.className = "error active";
    // And we prevent the form from being sent by canceling the event
    event.preventDefault();
  }
}, false);


