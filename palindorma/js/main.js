// 1. Fare prompt per richiedere la parola all' utente (verificare che sia una parola?)
// 2. Creare una funzione che avrà come risultato true o false in base alla parola inserita (NB ricorda return)
// 3. Risolzione parola palindroma
//    - parola letta al contrario non cambia
//    - trattare la stringa come array
//    - se la lettera in posizione i è uguale sia leggendola da sx a dx che viceversa è palindroma
//    - confronto con ciclo le varie lettere nelle due letture (se corrispondo è palindroma)
//    - non dovrebbe essere necessario finire la lettura a metà parola (se si riesce meglio, evito calcoli inutili)

"use strict";
//  ?-------------
// !FUNZIONI
//  ?-------------

function palindroma(parola) {
  const word = [];
  const reverseWord = [];
  let resoult = true;
  let counter = 0;

  for (let i = 0; i < parola.length; i++) {
    if (parola[i] == " " || parola[i] == "'") {
    } else {
      word.push(parola[i].normalize("NFD").replace(/[\u0300-\u036f]/g, ""));
    }
  }
  for (let i = parola.length - 1; i >= 0; i--) {
    if (parola[i] == " " || parola[i] == "'") {
    } else {
      reverseWord.push(
        parola[i].normalize("NFD").replace(/[\u0300-\u036f]/g, "")
      );
    }
  }

  console.log(word);
  console.log(reverseWord);

  for (let i = 0; i < parola.length; i++) {
    if (word[i] === reverseWord[i]) {
      resoult = true;
    } else {
      resoult = false;
      break;
    }
  }

  if (resoult === true) {
    console.log("La parola o frase è palindroma");
  } else if (resoult === false) {
    console.log("La parola o frase non è palindroma");
  }
  return resoult;
}

//  ?-------------
// !CODICE
//  ?-------------

const userInput = prompt(
  "Inserisci una parola o una frase per scoprire se è palindroma"
).toLowerCase();

palindroma(userInput);

//!TODO  cambiare il ciclo for col break
