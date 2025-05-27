lista_de_imoveis = []
let opcao
do {
    let menu = "Imóveis cadastrados:\n"
    if (lista_de_imoveis.length === 0) {
        menu += "Imóveis cadastrados vazio.\n"
    } else {
        
    }

    menu += "\nEscolha uma opção:\n"
    menu += "1 - Salvar imóvel\n"
    menu += "2 - Listar imóveis\n"
    menu += "3 - Sair"

    opcao = parseInt(prompt(menu))

switch(opcao) {
    case 1:
        const imovel = {}
        imovel['nome'] = prompt("Qual nome do imóvel: ")
        imovel['quartos'] = parseInt(prompt("Quantos quartos tem no imóvel? "))
        imovel['banherios'] = parseInt(prompt("Quantos banheiros tem no imóvel?  "))
        imovel['Garagem'] = (prompt("O imóvel tem garagem? (S/N)").toUpperCase())
        lista_de_imoveis.push(imovel)
        break
    
    case 2:
        if (lista_de_imoveis.length === 0) {
            alert("Não há imóveis cadastrados")
        }
        else {
            let mensagemLista = "Imóveis Cadastrados:\n";
                for (const imovel of lista_de_imoveis) {
                    mensagemLista += imovel.nome + '\n'
                    mensagemLista += imovel.quartos + '\n'
                    mensagemLista += imovel.banherios + '\n'
                    mensagemLista += imovel.Garagem + '\n'
                    mensagemLista += '\n\n'
                    }
                    alert(mensagemLista)
                    }
                    break

    case 3:
        break

    default:
        alert("Escolha uma opção válida")
    
    
    } 
    } while (opcao !== 3)
