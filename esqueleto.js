// Comece com um array vazio para armazenar as vagas.
// Cada vaga será um objeto dentro deste array.
const vagas = [];

/**
 * Função para listar as vagas salvas.
 */
function listarVagas() {
  // 1. Use o método .forEach() ou um laço for para percorrer o array `vagas`.
  // 2. Para cada vaga, crie uma string que mostre o índice, o nome da vaga e a quantidade de candidatos (usando vaga.candidatos.length).
  // 3. Exiba a string no console ou com um alert.
  // 4. Se não houver vagas, mostre uma mensagem "Nenhuma vaga cadastrada."
  console.log("--- Executando a listagem de vagas ---");
  alert("Implemente a lógica para listar as vagas aqui.");
}

/**
 * Função para criar uma nova vaga.
 */
function criarVaga() {
  // 1. Peça ao usuário o nome, a descrição e a data limite para a vaga usando `prompt()`.
  // 2. Crie um objeto para representar a nova vaga com as informações recebidas. Lembre-se de adicionar um array vazio para os `candidatos`.
  // 3. Peça ao usuário uma confirmação (`confirm()`) mostrando todas as informações da vaga.
  // 4. Se o usuário confirmar, adicione o objeto da nova vaga ao array `vagas` usando o método .push().
  console.log("--- Executando a criação de vaga ---");
  alert("Implemente a lógica para criar uma nova vaga aqui.");
}

/**
 * Função para visualizar os detalhes de uma vaga específica.
 */
function visualizarVaga() {
  // 1. Peça ao usuário o índice da vaga que ele deseja ver. Lembre-se que o usuário digita 1, mas o índice do array é 0.
  // 2. Use o índice para encontrar a vaga no array `vagas`.
  // 3. Se a vaga não existir, mostre um alerta de "Vaga não encontrada".
  // 4. Se existir, mostre todas as informações da vaga: índice, nome, descrição, data limite, quantidade de candidatos e os nomes dos candidatos.
  console.log("--- Executando a visualização de vaga ---");
  alert("Implemente a lógica para visualizar uma vaga aqui.");
}

/**
 * Função para inscrever um candidato em uma vaga.
 */
function inscreverCandidato() {
  // 1. Peça ao usuário o nome do candidato.
  // 2. Peça o índice da vaga para a qual ele quer se inscrever.
  // 3. Encontre a vaga no array `vagas` usando o índice.
  // 4. Se a vaga existir, peça uma confirmação (`confirm()`) mostrando os dados da vaga.
  // 5. Se o usuário confirmar, adicione o nome do candidato ao array `candidatos` dentro do objeto da vaga encontrada.
  console.log("--- Executando a inscrição de candidato ---");
  alert("Implemente a lógica para inscrever um candidato aqui.");
}

/**
 * Função para excluir uma vaga.
 */
function excluirVaga() {
  // 1. Peça ao usuário o índice da vaga que deseja excluir.
  // 2. Encontre a vaga no array.
  // 3. Se a vaga não existir, mostre um alerta.
  // 4. Se existir, mostre os dados da vaga e peça uma confirmação (`confirm()`) para a exclusão.
  // 5. Se o usuário confirmar, use o método .splice() para remover a vaga do array `vagas`.
  console.log("--- Executando a exclusão de vaga ---");
  alert("Implemente a lógica para excluir uma vaga aqui.");
}

/**
 * Função para exibir o menu de opções.
 */
function exibirMenu() {
  return prompt(
    "Sistema de Vagas de Emprego\n\n" +
    "Escolha uma opção:\n" +
    "1. Listar vagas disponíveis\n" +
    "2. Criar uma nova vaga\n" +
    "3. Visualizar uma vaga\n" +
    "4. Inscrever candidato em uma vaga\n" +
    "5. Excluir uma vaga\n" +
    "6. Sair"
  );
}

// Função principal que executa o programa
function executar() {
  let opcao = "";

  do {
    opcao = exibirMenu();

    switch (opcao) {
      case "1":
        listarVagas();
        break;
      case "2":
        criarVaga();
        break;
      case "3":
        visualizarVaga();
        break;
      case "4":
        inscreverCandidato();
        break;
      case "5":
        excluirVaga();
        break;
      case "6":
        alert("Saindo do sistema...");
        break;
      default:
        alert("Opção inválida. Tente novamente.");
    }
  } while (opcao !== "6");
}

// Inicia o programa
executar();