

function adicionarJogador () {
    
    const inputPosicao = document.createElement("input")
    inputPosicao.type = "text"
    inputPosicao.name = "input-posicao"
    inputPosicao.placeholder = "Posição"

    const inputNomeJogador = document.createElement("input")
    inputNomeJogador.type = "text"
    inputNomeJogador.name = "Nome"
    inputNomeJogador.placeholder = "Nome"


    const inputNumeroJogador = document.createElement("input")
    inputNumeroJogador.type = "number"
    inputNumeroJogador.name = "input-numero"
    inputNumeroJogador.placeholder = "Número do jogador"


    
    const liTime = document.createElement("li")
    liTime.append(inputPosicao, inputNomeJogador, inputNumeroJogador)
    


    const ul = document.getElementById("ul-time")
    ul.appendChild(liTime)

    
    

    


    

    
}