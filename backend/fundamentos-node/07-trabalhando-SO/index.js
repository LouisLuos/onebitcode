const os = require("node:os")
// aqui conseguimos acessar metodos e propriedades relacionadas ao sistema operacional do usuário

//mostra informação dos threads do cpu, array de objetos threads
const cpu = os.cpus().forEach((cpu) => console.log(cpu.speed)) 
console.log(cpu)

//mostra o sistema do usuário, se é andoird, linux, windows...
const plataform = os.platform()
console.log(plataform)

const nomeDaMaquina = os.hostname()
console.log(nomeDaMaquina)

const memoria = os.totalmem()

const memoryFormated = (memoria / 1024 / 1024 / 1024).toFixed(2)
console.log(memoryFormated)
