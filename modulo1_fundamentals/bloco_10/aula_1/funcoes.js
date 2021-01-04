const sum = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }
  return a + b;
}

// Desafio 9
function encode(string) {
  let troca = string;
  for (i in troca) {
    if (troca[i] == "a") {
      troca = troca.replace(troca[i], "1");
    }
    if (troca[i] == "e") {
      troca = troca.replace(troca[i], "2");
    }
    if (troca[i] == "i") {
      troca = troca.replace(troca[i], "3");
    }
    if (troca[i] == "o") {
      troca = troca.replace(troca[i], "4");
    }
    if (troca[i] == "u") {
      troca = troca.replace(troca[i], "5");
    }
  }
  return troca;
}
//console.log(encode("hi there!"));

function decode(string) {
  let troca = string;

  for (i in troca) {
    if (troca[i] == "1") {
      troca = troca.replace(troca[i], "a");
    }
    if (troca[i] == "2") {
      troca = troca.replace(troca[i], "e");
    }
    if (troca[i] == "3") {
      troca = troca.replace(troca[i], "i");
    }
    if (troca[i] == "4") {
      troca = troca.replace(troca[i], "o");
    }
    if (troca[i] == "5") {
      troca = troca.replace(troca[i], "u");
    }
  }
  return troca;
}
//console.log(decode("h3 th2r2!"));

// Desafio 10
function techList(tecnologia, name) {
  if (tecnologia.length === 0) {
    return "Vazio!"
  } else {
    let tecnoligaOrdenada = tecnologia.sort();
    let list = [];
    for (i in tecnoligaOrdenada) {
      let objeto = {};
      objeto["tech"] = tecnologia[i];
      objeto["name"] = name;
      list.push(objeto);
    }
    return list;
  }
}
//console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas"));

// Desafio 13
function hydrate(phrase) {
  const result = phrase.match(/\d+/g);
  const newResult = [];
  let coposAgua = 0;
  for (i in result) {
    if (result[i] >= 1 && result[i] <= 9) {
      newResult.push(parseInt(result[i]));
      coposAgua = coposAgua + newResult[i];
    } else {
      return "Tomar água não vai adiantar - error 404"
    }
  }
  if (coposAgua > 1) {
    return coposAgua + " copos de água";
  } else {
    return coposAgua + " copo de água";
  }
}
//console.log(hydrate("1 cerveja e 5 copos de terra"));
//console.log(hydrate("3 cachaça, 10 cervejas e 3 copo de vinho"));
//console.log(hydrate("1 cachaça, 5 cervejas e 1 copo de vinho"));

module.exports = {
  decode,
  encode,
  techList,
  hydrate,
  sum,
}
