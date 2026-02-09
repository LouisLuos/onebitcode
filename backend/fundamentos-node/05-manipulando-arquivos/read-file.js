const fs = require('node:fs')

fs.readFile("./arquivo.txt", 'utf-8', (err, data) => {
    if(err) {
        console.log("Erro ao ler o arquivo" + err)
    } else {
        console.log(data)
    }
})


