//QUESTÃO 04
let numeros = [23, 16, 11, 8, 19, 14, 5, 21];

function ePrimo(numero) {
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return numero > 1;
}

let primos = numeros.filter(ePrimo);
console.log('Os números primos são:', primos);