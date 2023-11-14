# Palindroma e Pari/Dispari

Asseganzione di due esercizi con l' introduzione delle funzioni.

_HTML+js_

## Indice

- [Palindroma](#palindroma)
- [Pari e Dispari](#pari-e-dispari)

# Palindroma

Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma

## Indice

- [Scomposizione del problema Palindroma ](#scomposizione-del-problema-palindroma)
- [Soluzione mail](#soluzione-palindroma)

### Scomposizione del problema-Palindroma

1. Fare prompt per richiedere la parola all' utente
2. Creare una funzione che avrà come risultato true o false in base alla parola inserita (NB ricorda return)
3. Risolzione parola palindroma
   - parola letta al contrario non cambia
   - trattare la stringa come array
   - se la lettera in posizione i è uguale sia leggendola da sx a dx che viceversa è palindroma
   - confronto con ciclo le varie lettere nelle due letture (se corrispondo è palindroma)
   - non dovrebbe essere necessario finire la lettura a metà parola (se si riesce meglio, evito calcoli inutili)

### Soluzione-Palindroma

**_Fare prompt per richiedere la parola all' utente_**

```js
const userInput = prompt(
  "Inserisci una parola o una frase per scoprire se è palindroma"
).toLowerCase();
```

- uso `.toLowerCase()` per far si che sia tutto minuscolo

**_Creare una funzione che avrà come risultato true o false in base alla parola inserita (NB ricorda return)_**

```js
function palindroma(parola) {
  let resoult = true;
  return resoult;
}
```

**_Risolzione parola palindroma_**

```js
const word = [];
const reverseWord = [];

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
```

- creo due array che avranno come elementi le lettere della mia parola (il secondo la legge al contrario)
- non inserisco negli array gli spazi o gli apostrofi
- rimuovo gli accenti dalle lettere

```js
for (let i = 0; i < parola.length; i++) {
  if (word[i] === reverseWord[i]) {
    resoult = true;
  } else {
    resoult = false;
    break;
  }
}
```

- controllo se i caratteri dei deue array siano uguali in ogni posizione (stampo resoult true, se sempre uguali / stampo resoult false, se anche uno è diverso)

```js
if (resoult === true) {
  console.log("La parola o frase è palindroma");
} else if (resoult === false) {
  console.log("La parola o frase non è palindroma");
}
```

- stampo messaggio in base al valore di resault

```js
return resoult;
```

```js
palindroma(userInput);
```

- uso `return` per richiamare la funzione
- uso la funzione con userInput inserito dall' utente

# Pari e Dispari

L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.

## Indice

- [Scomposizione del problema Pari e Dispari ](#scomposizione-del-problema-pari-e-dispari)
- [Soluzione dadi-base](#soluzione-pari-e-dispari)

### Scomposizione del problema-Pari e Dispari

1. Prompt che chieda all' utente "pari o dispari?" (se non inserisce una di queste due stringhe dare errore)
2. Prompt per far inserire un numero tra 1 e 5 compresi (interi) (sempre controllo se numero è corretto)
3. Tramite funzione generiamo un numero random, tra 1 e 5, per il computer
4. Sommo i due numeri
5. Tramite funzione stabilisco se la somma è pari o dispari
6. Alert per chi vince (se somma e scelta utente sono uguali vince l' utente, altrimenti vince il computer)

### Soluzione-Pari e Dispari

**_Prompt che chieda all' utente "pari o dispari?" (se non inserisce una di queste due stringhe dare errore)_**
**_Prompt per far inserire un numero tra 1 e 5 compresi (interi) (sempre controllo se numero è corretto)_**

```js
const userInputWord = prompt("Scegli pari o dispari").toLowerCase();
const userInputNumber = Number(
  prompt("Inserisci un numero tra 1 e 5 compresi")
);

if (userInputWord === "pari" || userInputWord === "dispari") {
  if (userInputNumber >= 1 && userInputNumber <= 5 && !isNaN(userInputNumber)) {
  } else {
    alert("Il numero inserito non è corretto, riprova.");
  }
} else {
  alert("La parola inserita non è corretta, riprova.");
}
```

- chiedo i valori all' utente e verifico che siano corretti

**_Tramite funzione generiamo un numero random, tra 1 e 5, per il computer_**

```js
function randomOneToFive() {
  return Math.floor(Math.random() * 5) + 1;
}
```

**_Sommo i due numeri_**

```js
let sum = 0;

sum = userInputNumber + randomOneToFive();
```

- richiamo la funzione `randomOneToFive()` e la sommo con il valore dell' utente, salvo il risulato il sum
- le operazione avvengono se i miei if sono verificati

**_Tramite funzione stabilisco se la somma è pari o dispari_**

```js
function pariODispari(number) {
  let oddOrEven = "";
  if (number % 2 === 0) {
    oddOrEven = "pari";
  } else {
    oddOrEven = "dispari";
  }
  return oddOrEven;
}
```

- per un numero number mi chiedo se sia pari o dispari (con l' operazione modulo)
- ritorno il valore finale della funzione `return oddOrEven;`

**_Alert per chi vince (se somma e scelta utente sono uguali vince l' utente, altrimenti vince il computer)_**

```js
if (userInputWord === pariODispari(sum)) {
  alert(`Hai indovinato, la somma è: ${sum}`);
} else {
  alert(`Non hai indovinato, la somma è: ${sum}`);
}
```

- richaimo la funzione `pariODispari(sum)` con sum come valore (al posto di number)
- se la stringa inserita dall' utenete ('pari' o 'dispari') è uguale alla stringa risulatante dalla funzione stampo il messaggio di vittoria, altrimenti, stampo il messaggio di sconfitta
