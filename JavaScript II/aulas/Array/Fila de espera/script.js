lista_de_pacientes = [];

do {
    let menu = "Fila de Espera:\n";
    if (lista_de_pacientes.length === 0) {
        menu += "A fila está vazia.\n";
    } else {
        for (let i = 0; i < lista_de_pacientes.length; i++) {
            menu += (i + 1) + "º " + lista_de_pacientes[i] + "\n";
        }
    }
    menu += "\nEscolha uma opção:\n";
    menu += "1 - Novo Paciente\n";
    menu += "2 - Consultar Paciente\n";
    menu += "3 - Listar Pacientes\n";
    menu += "4 - Sair";

    opcao = parseInt(prompt(menu));

    switch (opcao) {
        case 1:
            let novoPaciente = prompt("Digite o nome do novo paciente:");
            if (novoPaciente) {
                lista_de_pacientes.push(novoPaciente);
                alert(novoPaciente + " foi adicionado à fila.");
            } else {
                alert("Nome do paciente não pode ser vazio.");
            }
            break;

        case 2:
            if (lista_de_pacientes.length > 0) {
                let pacienteConsultado = lista_de_pacientes.shift();
                alert(pacienteConsultado + " foi consultado(a).");
            } else {
                alert("A fila está vazia. Não há pacientes para consultar.");
            }
            break;

        case 3:
            if (lista_de_pacientes.length > 0) {
                let listaFormatada = "Pacientes na fila:\n";
                for (let i = 0; i < lista_de_pacientes.length; i++) {
                    listaFormatada += (i + 1) + "º " + lista_de_pacientes[i] + "\n";
                }
                alert(listaFormatada);
            } else {
                alert("A fila está vazia.");
            }
            break;

        case 4:
            alert("Saindo do programa.");
            break;

        default:
            alert("Opção inválida. Por favor, escolha uma opção do menu.");
    }

} while (opcao !== 4);

//Adicionando elementos:
// push: Adiciona um elemento no final do array e devolve o novo tamanho do array
// unshift: Adiciona um elemento no começo do array e devolve o novo tamanho do array


//Removendo elementos:
// pop: Remove um elemento no final do array e devolve o elemento removido
// shift: Remove um elemento no começo do array e devolve o elemento removido


//Pesquisando por um elemento:
// includes: Verifica se um certo elemento está presente no array 
// indexOf: Encontra o índice que possui o elemento indicado, ou -1 caso ele não exista no array


//Cortando e concatenando:
// slice: Copia uma parte do array e devolve a parte copiada sem alterar o array original. Também pode ser usado com números negativos referenciar o final do array
// concat: Junta dois ou mais arrays e/ou itens e devolve o resultado (sem alterar nenhum dos arrays)


//Substituindo elementos:
// splice: Permite remover elementos em qualquer posição do array e substituir por novos


//Interando sobre elementos:
// Usando o for para percorrer cada elemento do array :

//for (let indice = 0; indice < sociedade.length; indice++) {
//  const elemento = sociedade[indice]
//  console.log(elemento + " se encontra na posição " + indice)


/*
Escreva um programa em javascript para simular uma fila de espera em um consultório médico.
 O programa deve iniciar mostrando na tela um menu interativo contendo a lista de todos os pacientes esperando em 
 ordem mostrando sua posição ao lado do nome (ex.: 1º Matheus, 2º Marcos, etc).
 O menu também deve permitir escolher entre as opções de “Novo paciente”, para adicionar um novo paciente ao fim da fila 
 (pedindo o nome do paciente), “Consultar paciente”,
  que retira o primeiro paciente da fila e mostra na tela o nome do paciente consultado, e “Sair”.
 O programa só deve ser encerrado ao escolher a opção de “Sair”, caso contrário deve voltar ao menu. 
 */