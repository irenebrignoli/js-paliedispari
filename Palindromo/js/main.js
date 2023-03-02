

const parola = prompt('Inserisci parola');
console.log(parola);

let risultatoPalindromo = palindromoSiNo(parola);
console.log(risultatoPalindromo);


function palindromoSiNo(string) {
 
  let result = "";

  for (var i = string.length - 1; i >= 0; i--) { 

    result += string[i]; 
  }

  if(parola == result){
    result = 'La parola è palindroma';
  }else{
    result = 'La parola non è palindroma';
  }

  return result;
}





//ALTRO MODO

/*

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

*/

