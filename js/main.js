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
const resetdom = document.getElementById('reset-input');
const resultDom = document.getElementById('result');

//pulsante di avvio
buttonDom.addEventListener('click',

  function(){
    const userNumber = parseInt(inputDom.value);
    console.log('Numero utente: ' + userNumber);

    if(userNumber > 5){
      alert('Numero non valido! Inserisci un munero minore di 5');
    }else if(userNumber == 0){
      alert('Numero non valido! Inserisci un munero maggiore di 0');
    }

    let computerNumber = generateRandomNumber (1, 5);
    console.log(`Numero computer: ${computerNumber}`);

    let sumResult = sum (userNumber, computerNumber);
    console.log(`Somma dei due numeri: ${sumResult}`);

    console.log(generateEvenOdd (sumResult));
    resultDom.innerHTML += `Il risultato della somma è ${sumResult}, quindi il vincitore è`;
    

  }
  
)

//pulsante di reset
resetdom.addEventListener('click', 
    function() {

        inputDom.value = "";
    }
);


//FUNZIONI

//function somma
function sum (numberA, numberB) {

  let sum = numberA + numberB;
  return sum;
}


//function pari e dispari
function generateEvenOdd (numbertocheck){

  let result = '';

  if (numbertocheck % 2 == 0) {
    result = 'Il numero è pari';
  } else{
    result = 'il numero è dispari';
  }

  return result;

}


//function random number
function generateRandomNumber(min, max) {
   
  let randomNumber = Math.floor( Math.random() * max) + 1;
  return randomNumber;
}








