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

// *Funzione che genera un numero random tra 1 e 5
function randomOneToFive() {
  return Math.floor(Math.random() * 5) + 1;
}

// *Funzione che controlla se la somma è pari o dispari
function pariODispari(number) {
  let oddOrEven = "";
  if (number % 2 === 0) {
    oddOrEven = "pari";
  } else {
    oddOrEven = "dispari";
  }
  return oddOrEven;
}

//  ?-------------
// !CODICE
//  ?-------------

//* variabili
const userInputWord = prompt("Scegli pari o dispari").toLowerCase();
const userInputNumber = Number(
  prompt("Inserisci un numero tra 1 e 5 compresi")
);
let sum = 0;

//* condizione sulla parola inserita dall' utente
if (userInputWord === "pari" || userInputWord === "dispari") {
  //* condizone sul numero inserito dall' utente
  if (userInputNumber >= 1 && userInputNumber <= 5 && !isNaN(userInputNumber)) {
    sum = userInputNumber + randomOneToFive(); //* somma dei due numeri, richiamo la funzione
    console.log(sum);
    //* controllo se la stringa utente è uguale a quella della funzione pari/dispari (sostituisco number con sum nella funzione/riutilizzabile)
    if (userInputWord === pariODispari(sum)) {
      alert(`Hai indovinato, la somma è: ${sum}`);
    } else {
      alert(`Non hai indovinato, la somma è: ${sum}`);
    }
  } else {
    alert("Il numero inserito non è corretto, riprova.");
  }
} else {
  alert("La parola inserita non è corretta, riprova.");
}
