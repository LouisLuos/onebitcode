class Galaxy {
    constructor (galaxia) {
        this.galaxia = galaxia
        this.listaDePlanetas = []
    }
    
    adicionarPlaneta(planeta) {
        this.listaDePlanetas.push(planeta)
    }

    listarPlanetas() { 
        return this.listaDePlanetas.map(e => e.planeta)
    }
}

class Planeta {
    constructor (planeta) {
        this.planeta = planeta
    }
}

const galaxia1 = new Galaxy ("Via láceta")
const planeta1 = new Planeta ("Terra")

galaxia1.adicionarPlaneta(planeta1)
galaxia1.adicionarPlaneta(planeta1)
galaxia1.adicionarPlaneta(planeta1)
const nomePlanetas = galaxia1.listarPlanetas()
console.log(`A galáxia ${galaxia1.galaxia} tem o planeta ${nomePlanetas.join(', ')}`)
console.log(galaxia1)