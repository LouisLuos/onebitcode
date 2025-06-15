

function adicionarJogador () {
    
    if (confirm("Deseja confirmar?")) {

    const posicaoJogador = document.getElementById("input-posicao").value
    const nomeJogador = document.getElementById("input-nome").value
    const numeroJogador = document.getElementById("input-numero").value

    const ulEscalados = document.getElementById("ul-time")
    
    const newLi = document.createElement("li")

    newLi.innerHTML = `<p>Posição: ${posicaoJogador}</p> \n <p>Nome: ${nomeJogador}</p> \n <p>Número: ${numeroJogador}</p> \n`

    ulEscalados.appendChild(newLi)
    

    document.getElementById('input-posicao').value = ''
    document.getElementById('input-nome').value = ''
    document.getElementById('input-numero').value = ''
    }
    
}