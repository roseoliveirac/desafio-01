//QUESTAO 11
// Função para calcular a idade
function calcularIdade(dataNascimento) {
    let dataNasc = new Date(dataNascimento);
    let dataAtual = new Date();
    let idade = dataAtual.getFullYear() - dataNasc.getFullYear();
    let mesAtual = dataAtual.getMonth();
    let diaAtual = dataAtual.getDate();
    if (mesAtual < dataNasc.getMonth() || 
        (mesAtual === dataNasc.getMonth() && diaAtual < dataNasc.getDate())) {
      idade--;
    }
    return idade;
  }
  let anoNascimento = "2003-03-10"; // yyyy-MM-dd
  let idade = calcularIdade(anoNascimento);
  console.log('Idade com base na data de nascimento: ' + idade);