const todosJogadores = []

function adicionarJogador () {
    
    if (confirm("Deseja confirmar?")) {

    const posicaoJogador = document.getElementById("input-posicao").value
    const nomeJogador = document.getElementById("input-nome").value
    const numeroJogador = document.getElementById("input-numero").value

    const ulEscalados = document.getElementById("ul-time")
    
    const newLi = document.createElement("li")
    newLi.id = "jogador-" + numeroJogador

    newLi.innerHTML = `<p>Posição: ${posicaoJogador}</p> \n <p>Nome: ${nomeJogador}</p> \n <p>Número: ${numeroJogador}</p> \n`
    
    const arrayJogadores = [posicaoJogador, nomeJogador, numeroJogador]
    todosJogadores.push(arrayJogadores)
    ulEscalados.appendChild(newLi)
    
    

    document.getElementById('input-posicao').value = ""
    document.getElementById('input-nome').value = ""
    document.getElementById('input-numero').value = ""
    }

    console.log(todosJogadores)
    
}

function removerJogador () {
    const numeroCamisa = prompt("Digite o número da camisa")
    for (let i = 0; i < todosJogadores.length; i++) {
        if (todosJogadores[i][2] === numeroCamisa) {
            todosJogadores.splice(i, 1)

        
        const idParaBuscar = "jogador-" + numeroCamisa
        const liParaRemover = document.getElementById(idParaBuscar)
        liParaRemover.remove()

        }   
    }

    


    console.log(todosJogadores)
}


