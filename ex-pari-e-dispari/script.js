// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

//Richiesta utente se sceglie pari oppure dispari
var sceltaGioco = prompt("pari o dispari?");

//Richiesta numero da 1 a 5
var numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5"));

//numeri random da 1 a 5 cpu
var numeroCpu = numeroRandomCpu();

//somma dei due numeri
var risultatoSomma = numeroUtente + numeroCpu;
console.log(numeroUtente);
console.log(numeroCpu);
console.log(risultatoSomma);

//dichiarare il vincitore
var esito = pariDispari(esito);

if (sceltaGioco == "pari" && esito == true) {
  console.log("Hai vinto tu");
} else if (sceltaGioco == "dispari" && esito == false) {
  console.log("Hai vinto tu");
} else {
  console.log("Ha vinto il computer");
}

//Funzioni

//Funzione numero random per computer
function numeroRandomCpu (numRand) {
  var max = 5;
  var min = 1;
  numRand = Math.floor(Math.random() * (max - min + 1)) + min;
  return numRand;
}

//Funzione per stabilire se la somma è pari o dispari
function pariDispari (esito) {
  if (risultatoSomma %2 == 0) {
    return true;
  } else {
    return false;
  }
}
