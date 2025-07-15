const Adress = require("./Adress")
const Person = require("./Person")

const addr = new Adress("Rua amelia", 53, "Aguas Largas", "Olinda", "Pernambuco")
const pessoa = new Person("Luiz", addr)

console.log(pessoa)
console.log(pessoa.name)
console.log(pessoa.address.fullAdress())