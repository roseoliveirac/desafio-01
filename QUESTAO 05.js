//QUESTÃO 05
function contarPalavras(frase) {
    let palavras = frase.replace(/[.?!]/g, '').split(' ');
    palavras = palavras.filter(Boolean);
    return palavras.length;
  }
  let frase = "What is Lorem Ipsum?";
  let totalPalavras = contarPalavras(frase);
  console.log('O número total de palavras na frase é:', totalPalavras);