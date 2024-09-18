//QUESTAO 06
function calcularFatorial(n) {
    let fatorial = 1;
    for (let i = 2; i <= n; i++) {
      fatorial *= i;
    }
    return fatorial;
  }
  let numero = 12;
  let resultadoFatorial = calcularFatorial(numero);
  console.log('O fatorial de ' + numero + ' é: ' + resultadoFatorial);