const path = require('node:path')

// path.join junta todos meus argumentos em um caminho de diretório
// const fullName = path.join("src", "app", "components", "button.jsx")
                        //esse meu __dirname vai referenciar ao meu caminho do diretorio deste meu arquivo atual aqui index.js
const fullPath = path.join(__dirname, "src", "script.js")

console.log(fullPath)

const relativePath = "../arquivos/relatorio.pdf"

const absolutePath = path.resolve(relativePath)
console.log(absolutePath)

const fileName = path.basename(relativePath)
console.log(fileName)

const ext = path.extname(absolutePath)
console.log(ext)