//Questão 02
let numeros = [15, 8, 90, 75, 102, 6, 2];
function encontrarNumeros(numeros) {
  let menor = numeros[0];
  let maior = numeros[0];

  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] < menor) {
      menor = numeros[i];
    }
    if (numeros[i] > maior) {
      maior = numeros[i];
    }
  }

  console.log('O menor número é: ' + menor);
  console.log('O maior número é: ' + maior);
}
encontrarNumeros(numeros);