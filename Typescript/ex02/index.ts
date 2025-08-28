const planets = []
type situacion = "habitado" | "habitável" | "inabitável" | "inexplorado" 

type planet = {
    nome:string, 
    cordenadas: [number, number, number, number], 
    situacao: situacion, 
    satelites?: string[]
}

function savePlanet(nome:string, cordenadas: [number, number, number, number], situacao: situacion, satelites: string[]) {
    let planet = {
        nome,
        cordenadas,
        situacao,
        satelites
    }
    planets.push(planet)
    return planet
}

console.log(savePlanet("Terra", [20, 40, 60, 80], "habitado", ["Lua"]))

function autalizarSituacion(nome: string, situacaoNova: situacion){
    const planetaAtual = planets.find((planet) => planet.nome === nome)

    if (planetaAtual) {
        planetaAtual.situacao = situacaoNova
        console.log(`${nome} teve status alterado para ${situacaoNova}`)
    } else {
        console.log("Planeta não entrado")
    }
    console.log(planetaAtual)
    
}

autalizarSituacion("Terra", "inabitável")


function adicionarSatelite(nomePlaneta: string, satelite: string) {
    const planetaAtual = planets.find((planet) => planet.nome === nomePlaneta)

    if(planetaAtual) {
       planetaAtual.satelites.push(satelite)
       console.log(`Foi adicionado ao ${planetaAtual.nome} o satelite natural: ${satelite}`)
    } else {
        console.log("Erro registrado")
    }

    console.log(planetaAtual)
}

adicionarSatelite("Terra", "Carro do elon musk")

function exibirTodosPlanetas(){
    const allPlanets = planets.forEach((planeta) => console.log(planeta))
    return allPlanets
}

exibirTodosPlanetas()