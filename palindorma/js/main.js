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
  let resoult = false;

  for (let i = 0; i < userInput.length; i++) {
    word.push(userInput[i]);
  }
  for (let i = userInput.length - 1; i >= 0; i--) {
    reverseWord.push(userInput[i]);
  }

  console.log(word);
  console.log(reverseWord);

  for (let i = 0; i < userInput.length; i++) {
    if (word[i] === reverseWord[i]) {
      resoult = true;
    } else {
      resoult = false;
      break;
    }
  }
  if (resoult === true) {
    console.log("La parola è palindroma");
  } else if (resoult === false) {
    console.log("La parola non è palindroma");
  }
  return resoult;
}

//  ?-------------
// !CODICE
//  ?-------------

const userInput = prompt(
  "Inserisci una parola o una frase per scoprire se è palindroma"
);

palindroma(userInput);

//!TODO  cambiare il ciclo for col break e rendere il codice funzionante anche per le frasi (lo spazio rovina le condizioni)
// nella creazione degli array non pushare se il carattere è vuoto o apostrofo?
