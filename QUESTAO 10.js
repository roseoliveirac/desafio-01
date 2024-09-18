// QUESTAO 10
let string = "LoReM IpSuM Is sImPlY DuMmY TeXt oF ThE PrInTiNg aNd tYpEsEtTiNg iNdUsTrY";
function contarMaiusculas(s) {
  let contador = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i].toUpperCase() && s[i] !== s[i].toLowerCase()) {
      contador++;
    }
  }
  return contador;
}
let numeroDeMaiusculas = contarMaiusculas(string);
console.log('Número de letras maiúsculas:', numeroDeMaiusculas);