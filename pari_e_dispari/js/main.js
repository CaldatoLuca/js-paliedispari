// 1. Prompt che chieda all' utente "pari o dispari?" (se non inserisce una di queste due stringhe dare errore)
// 2. Prompt per far inserire un numero tra 1 e 5 compresi (interi) (sempre controllo se numero è corretto)
// 3. Tramite funzione generiamo un numero random, tra 1 e 5, per il computer
// 4. Sommo i due numeri
// 5. Tramite funzione stabilisco se la somma è pari o dispari
// 6. Alert per chi vince (se somma e scelta utente sono uguali vince l' utente, altrimenti vince il computer)

"use strict";

const userInputWord = prompt("Scegli pari o dispari").toLowerCase();
if (userInputWord === "pari" || userInputWord === "dispari") {
  const userInputNumber = Number(
    prompt("Inserisci un numero tra 1 e 5 compresi")
  );
  if (userInputNumber >= 1 && userInputNumber <= 5) {
  } else {
    alert("Il valore inserito non è corretto");
  }
} else {
  alert("La parola inserita non è correta");
}
