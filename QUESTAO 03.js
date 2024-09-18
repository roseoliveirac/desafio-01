//QUESTÃO 03
let frascos = [12, 5, 23, 17, 8, 14, 3, 19];
function ordenarFrascos(f) {
  return f.sort((a, b) => a - b);
}
let frascosOrdenados = ordenarFrascos(frascos);
console.log('Frascos ordenados em ordem crescente:', frascosOrdenados);