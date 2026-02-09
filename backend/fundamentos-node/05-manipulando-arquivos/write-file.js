const fs = require('node:fs')
const content = "Conteudo do novo arquivo async"

fs.writeFile("./arquivo.txt", content, "utf-8", (err) => {
    err ? console.log("Erro ao criar o arquivo" + err) : console.log("Arquivo criado com sucesso")
})

console.log("Criando seu arquivo async")


 
  