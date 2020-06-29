/*Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma*/

//chiedere la parola all'utente
var parolaUtente = prompt("Inserisci una parola");
console.log(parolaUtente);
console.log(palindrome(parolaUtente));


//Funzione
function palindrome(parolaUtente) {
  parolaUtente = parolaUtente.toLowerCase();
  var len = parolaUtente.length;
  var mid = Math.floor(len/2);
  for ( var i = 0; i < mid; i++ ) {
    if (parolaUtente[i] !== parolaUtente[len - 1 - i]) {
      return false;
    }
  }
  return true;
}
