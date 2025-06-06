const vagas = []




function listarVagas() {
    if (vagas.length === 0){
        alert("Não há nenhuma vaga cadastrada")        
    } else {

    let lista_de_vagas = ''

    vagas.forEach(function (vaga, indice){
        lista_de_vagas += `Vaga: ${indice + 1}, ${vaga.nome}, pessoas cadastradas: ${vaga.candidatos.length}`
    })
    
    alert(lista_de_vagas)
}
}



function criar_vaga() {
    let vaga = {}
    vaga.nome = prompt("Digite o nome da vaga")
    vaga.descricao = prompt("Digite a descrição")
    vaga.limite = prompt("Qual a data limite? (00/00/0000")
    vaga.candidatos = []
    const confirmacao = prompt("Confirma a criação da vaga?").toUpperCase()
    if (confirmacao === "SIM") {
        vagas.push(vaga)
        alert("Vaga criada com sucesso!")
    } else {
        alert("A vaga não foi criada")
    }
}



