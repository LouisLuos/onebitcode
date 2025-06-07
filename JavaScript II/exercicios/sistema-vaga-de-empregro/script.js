const vagas = []

function listarVagas() {
    if (vagas.length === 0){
        alert("Não há nenhuma vaga cadastrada")        
        return;
    }

    let lista_de_vagas = '--- Vagas Disponíveis ---\n'

    vagas.forEach(function (vaga, indice){
        lista_de_vagas += `Vaga ${indice + 1}: ${vaga.nome} (${vaga.candidatos.length} candidatos)\n`
    })
    
    alert(lista_de_vagas)
}

function criar_vaga() {
    let vaga = {}
    vaga.nome = prompt("Digite o nome da vaga")
    vaga.descricao = prompt("Digite a descrição")
    vaga.dataLimite = prompt("Qual a data limite? (dd/mm/aaaa)")
    vaga.candidatos = []
    
    const confirmacao = confirm(
        "Deseja criar a vaga com as seguintes informações?\n" +
        "Nome: " + vaga.nome + "\n" +
        "Descrição: " + vaga.descricao + "\n" +
        "Data Limite: " + vaga.dataLimite
    )

    if (confirmacao) {
        vagas.push(vaga)
        alert("Vaga criada com sucesso!")
    } else {
        alert("Operação cancelada. A vaga não foi criada.")
    }
}

function visualizarVaga() {
    if (vagas.length === 0) {
        alert("Não há vagas cadastradas!")
        return;
    }
    
    const indiceUsuario = parseInt(prompt("Qual índice da vaga deseja visualizar?"))
    const indiceArray = indiceUsuario - 1

    const vagaEncontrada = vagas[indiceArray]

    if (vagaEncontrada) { 
        let nomesDosCandidatos = "Nenhum candidato inscrito."
        if (vagaEncontrada.candidatos.length > 0) {
            nomesDosCandidatos = vagaEncontrada.candidatos.join(", ")  
        }
        
        const textoAlerta = `--- Detalhes da Vaga ---\n` +
                  `Índice: ${indiceUsuario}\n` +
                  `Nome: ${vagaEncontrada.nome}\n` +
                  `Descrição: ${vagaEncontrada.descricao}\n` +
                  `Data Limite: ${vagaEncontrada.dataLimite}\n` +
                  `Quantidade de Candidatos: ${vagaEncontrada.candidatos.length}\n` +
                  `Candidatos Inscritos: ${nomesDosCandidatos}`

        alert(textoAlerta)
    } else {
        alert("Vaga não existe! Verifique o índice digitado.")
    }
}


function inscreverCandidato () {
    const nomeCandidato = prompt("Qual seu nome?")
    let indiceVaga = parseInt(prompt("Qual indice da vaga deseja buscar?"))
    if (isNaN(indiceVaga)){
        alert("O número não é válido")
    }
    const indiceArray = indiceVaga - 1
    const vagaEncontrada = vagas[indiceArray]

    if (!vagaEncontrada) {
        alert("Vaga inválida, verifique o indice digitado!")
        return
    }

    const confirmacao = confirm(
        "Deseja confirmar a inscrição para a vaga?\n\n" +
        "Vaga: " + vagaEncontrada.nome + "\n" +
        "Descrição: " + vagaEncontrada.descricao
    )

    if (confirmacao) {
        vagaEncontrada.candidatos.push(nomeCandidato)
        alert("Candidato cadastrado com sucesso")
    } else {
        alert("Candidato não foi cadastrado")
    }
}


function excluirVaga () {
    let indiceVaga = parseInt(prompt("Digite o indíce da vaga que desjea excluir"))
    const indiceArray = indiceVaga - 1
    const vagaExcluir = vaga[indiceArray]

    if (!vagaExcluir) { 
        alert("Essa vaga não existe, verifique novamente!")
        return
    }

        const confirmacao = confirm(
        "Tem certeza que deseja excluir a vaga abaixo?\n\n" +
        `Índice: ${vagaExcluir}\n` +
        `Nome: ${vagaExcluir.nome}\n` +
        `Descrição: ${vagaExcluir.descricao}`
    )

    if (confirmacao) {
        vagas.splice(indiceVaga, 1)
        alert("Vaga excluída com sucesso")
    } else {
        alert("Vaga não exlcuída")
    }

}



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


function executar() {
  let opcao = "";

  do {
    opcao = exibirMenu();

    switch (opcao) {
      case "1":
        listarVagas();
        break;
      case "2":
        criar_vaga();
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


executar();