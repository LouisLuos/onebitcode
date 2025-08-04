function escalarJogador () {
    const confirmacao = confirm("Confirma?")

    if (confirmacao === true) {
    const posicao = document.getElementById("posicao")
    const nome = document.getElementById("nome")
    const numero = document.getElementById("numero")
    const ul = document.getElementById("posisao-jogadores")
    const li = document.createElement("li")
    li.id = 'jogador-' + numero.value    
    li.textContent = `${posicao.value}: ${nome.value} (Camisa: ${numero.value})`
    ul.appendChild(li)
    posicao.value = ""
    nome.value = ""
    numero.value = ""
}
}


function removerJogador () {
    const numeroJogador = document.getElementById("numero").value

    const idRemover = "jogador-" + numeroJogador

    const jogadorRemover = document.getElementById(idRemover)

    if (jogadorRemover) {
        jogadorRemover.remove()
        
    }
}