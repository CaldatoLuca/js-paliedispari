// 1. Prompt che chieda all' utente "pari o dispari?" (se non inserisce una di queste due stringhe dare errore)
// 2. Prompt per far inserire un numero tra 1 e 5 compresi (interi) (sempre controllo se numero è corretto)
// 3. Tramite funzione generiamo un numero random, tra 1 e 5, per il computer
// 4. Sommo i due numeri
// 5. Tramite funzione stabilisco se la somma è pari o dispari
// 6. Alert per chi vince (se somma e scelta utente sono uguali vince l' utente, altrimenti vince il computer)

"use strict";

//  ?-------------
// !FUNZIONI
//  ?-------------

function randomOneToFive() {
  return Math.floor(Math.random() * 5) + 1;
}

function pariODispari() {
  let oddOrEven = "";
  if (sum % 2 === 0) {
    oddOrEven = "pari";
  } else {
    oddOrEven = "dispari";
  }
  return oddOrEven;
}

//  ?-------------
// !CODICE
//  ?-------------
const userInputWord = prompt("Scegli pari o dispari").toLowerCase();
const userInputNumber = Number(
  prompt("Inserisci un numero tra 1 e 5 compresi")
);
let sum = 0;
let check = "";

if (userInputWord === "pari" || userInputWord === "dispari") {
  if (userInputNumber >= 1 && userInputNumber <= 5) {
    sum = userInputNumber + randomOneToFive();
    console.log(sum);
    check = pariODispari();
    console.log(check);
  } else {
    alert("Il numero inserito non è corretto, riprova.");
  }
} else {
  alert("La parola inserita non è corretta, riprova.");
}
