

const parola = prompt('Inserisci parola');
console.log(parola);

// let parolaDivisa = parola.split('');
// console.log(parolaDivisa);

// let parolaReverse = parolaDivisa.reverse();
// console.log(parolaReverse);

// let parolaInvertita = parolaReverse.join('');
// console.log(parolaInvertita);

let parolaAlContrario = invertiParola(parola);

if(parola == parolaAlContrario){
  console.log('la parola è palindroma');
  } else {
    console.log('la parola non è palindroma');
  }
  


function invertiParola(parolaDaInvertire){
  let parolaInversa = parolaDaInvertire.split('').reverse().join('');  
  return parolaInversa;
}



