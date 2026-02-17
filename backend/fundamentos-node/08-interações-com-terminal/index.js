// process.stdout.write("Olá Mundo")

// process.stdin.on("data", (data) => console.log(data.toString()))

const { read } = require("node:fs")
const readLine = require("node:readline")

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout

})


// rl.on("line", (input) => rl.write(`Você digitou: ${input}`) )

// rl.question("Qual capital da lua?", (anws) => {
//     rl.write("Capital da lua é " + anws)
//     rl.close()

// })

// rl.on("close", () => {
//     rl.write("\nPrograma encerrado")
//     //process.exit(0)
    
// })

rl.on("SIGINT", () => {
    rl.question("Desjea realmente sair? (s/n)", (answer) => {
        if(answer.toLowerCase().trim() === "s"){
            rl.write("\nPrograma encerrado")
            process.exit(0)
        }})

    })