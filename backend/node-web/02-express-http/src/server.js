const express = require('express')
const PORT = 3000
const server = express()

server.get("/", (req, res) => {
    res.send('Olá mundo, meu primeiro server express criado! çãâ')
})

server.get('/artigos', (req, res) => {
    res.send("Pagina de artigos")
    res.sendStatus(200)
})


server.listen(PORT, () => {
    console.log(`Servidor rodando na porta http://localhost:${PORT}`)
})

