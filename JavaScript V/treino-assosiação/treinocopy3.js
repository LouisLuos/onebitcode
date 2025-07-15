class Departament {
    constructor(empresa) {
        this.empresa = empresa
        this.empregados = []
    }

    addEmpoyle(funcionario) {
        this.empregados.push(funcionario)
    }
}

class Empoyle {
    constructor(nome, idade, funcao) {
        this.nome = nome
        this.idade = idade
        this.funcao = funcao
    }
}

const empregado1 = new Empoyle ("Luiz Henrique", 19, "Programador back-end")
const empregado2 = new Empoyle ("Debora", 19, "Psicóloga Sênior")
const empregado3 = new Empoyle ("Pedro Vinicíus", 80, "Programador back-end")

const empresa1 = new Departament ("Accenture")
const empresa2 = new Departament ("PsicoClinica")
empresa1.addEmpoyle(empregado1)
empresa1.addEmpoyle(empregado3)
empresa2.addEmpoyle(empregado2)

console.log(empresa1)
console.log(empresa2)
