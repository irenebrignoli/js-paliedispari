/*
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma

Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.

Consigli del giorno
1. Scriviamo sempre in italiano i passaggi che vogliamo fare
2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.
Buon lavoro e buon divertimento! :faccia_leggermente_sorridente:
*/

const inputDom = document.getElementById('user-nummber');
const buttonDom = document.getElementById('read-input');
const computerNumberDom = document.getElementById('computer-number');

buttonDom.addEventListener('click',

  function(){
    const userNumber = inputDom.value;
    console.log('Numero utente: ' + userNumber);

    if(userNumber > 5){
      alert('Numero non valido! Inserisci un munero minore di 5');
    }else if(userNumber == 0){
      alert('Numero non valido! Inserisci un munero maggiore di 0');
    }

    console.log('Numero computer: '+ generateRandomNumber (1, 5));

  }
  
)




//function


function generateRandomNumber(min, max) {
   
  let randomNumber = Math.floor( Math.random() * max) +1;
  return randomNumber;
}








//risultatoNome.innerHTML = nomeInserito;