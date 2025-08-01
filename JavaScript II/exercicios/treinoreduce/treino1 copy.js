const votos = ['CandidatoA', 'CandidatoB', 'CandidatoA', 'CandidatoC', 'CandidatoA', 'CandidatoB'];

const contagemVotos = votos.reduce((acumulador, votoAtual) => {
  // 1. Verifica se o candidato (votoAtual) já existe como chave no objeto acumulador.
  if (acumulador[votoAtual]) {
    // 2. Se existir, incrementa o valor (a contagem) em 1.
    acumulador[votoAtual]++;
  } else {
    // 3. Se não existir, cria a chave e define o valor inicial como 1.
    acumulador[votoAtual] = 1;
  }

  // 4. Retorna o objeto acumulador atualizado para a próxima iteração.
  return acumulador;
}, {}); // <-- O {} é o valor inicial do nosso acumulador. Começamos com um objeto vazio.

console.log(contagemVotos);