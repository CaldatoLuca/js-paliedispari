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

//  ?-------------
// !CODICE
//  ?-------------

const userInput = prompt(
  "Inserisci una parola o una frase per scoprire se è palindroma"
);
const word = [];
const reverseWord = [];

for (let i = 0; i < userInput.length; i++) {
  word.push(userInput[i]);
}
for (let i = userInput.length - 1; i >= 0; i--) {
  reverseWord.push(userInput[i]);
}
