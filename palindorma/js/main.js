"use strict";
//  ?-------------
// !FUNZIONI
//  ?-------------
//* funzione che controlla se parola è palindroma
function palindroma(parola) {
  const word = []; //*array normale
  const reverseWord = []; //*array reverse
  let resoult = true;

  //*creazione array normale
  for (let i = 0; i < parola.length; i++) {
    if (parola[i] == " " || parola[i] == "'") {
    } else {
      word.push(parola[i].normalize("NFD").replace(/[\u0300-\u036f]/g, ""));
    }
  }
  //*creazione array reverse
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

  //*controllo se i caratteri dei deue array siano uguali in ogni posizione
  for (let i = 0; i < parola.length; i++) {
    if (word[i] === reverseWord[i]) {
      resoult = true;
    } else {
      resoult = false;
      break;
    }
  }

  //* a seconda del risulatato di resoult stampo il messaggio corretto
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

//*variabili
const userInput = prompt(
  "Inserisci una parola o una frase per scoprire se è palindroma"
).toLowerCase();

//*richiamo la funzion e la uso con userInput
palindroma(userInput);

//!TODO non funziona con !,? e caratteri speciali, sostituire ciclo for col while
