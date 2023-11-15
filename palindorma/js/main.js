// 1. Fare prompt per richiedere la parola all' utente
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

/* //!correzzione 
?uso ciclo while e non creo due array appesantendo il codice, la condizione che da il riuslato sta fuori la funzione ma la usa per ridare gli alert
//  ?-------------
 !FUNZIONI
//  ?-------------
function palindroma(parola) {
if (parola.length === 0) return false;
if (parola.length === 1) return true;

const parolaMinuscola = parola.toLowerCase();
let inizio = 0;
let fine = parolaMinuscola.length - 1;

while(inizio < fine){
  if(parolaMinuscola[inizio] !== parolaMinuscola[fine]) return false;
  inizio++;
  fine--;
}

return true;

}

//  ?-------------
 !CODICE
//  ?-------------
const userInput = prompt(
  "Inserisci una parola per scoprire se è palindroma"
);

  if (palindroma(userInput)) {
    console.log("La parola o frase è palindroma");
  } else{
       console.log("La parola o frase non è palindroma");
  } 
 
*/
