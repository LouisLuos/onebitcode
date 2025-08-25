function sendSpaceship(name: string, capitain: string) {
    const spaceship = {
        name,
        capitain,
        velocity: 20,
        inMission: true,
        crew: []   
    }
    
    alert(`A nave ${spaceship.name} com os tripulantes ${spaceship.crew.length} foram enviados a uma missão a bordo do capitão ${spaceship.capitain}`)
    return spaceship
}

function accelerate(acelerar: number, spaceship: {name: string, velocity: number}){
    if(spaceship.velocity > acelerar){
        alert(`reduzindo a velocidade de ${spaceship.velocity} para ${acelerar}`)
        spaceship.velocity = acelerar
    } else {
        alert(`aumento a velocidade da nave para ${acelerar}`)
        spaceship.velocity = acelerar
    }
    return spaceship
}

function addTripulante(tripulante: string, spaceship: {crew: string[]}){
    spaceship.crew.push(tripulante)
    alert("O triuplante" + tripulante + "Foi adicionado a Naveeeeeeee")
    console.log(spaceship)
}

const nomeDaNave = prompt("Digite o nome da nave")
const nomeDoCapitao = prompt("Digite o nome do capitão")
const primeiroTripulante = prompt("Digite o nome do tripulante")
const espacoNave = sendSpaceship(nomeDaNave, nomeDoCapitao)

console.log(accelerate(100, espacoNave))
console.log(addTripulante("Luiz", espacoNave))