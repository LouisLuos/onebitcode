const express = require("express")
const path = require("node:path")
const ejs = require("ejs")
const PORT = 3000   
const app = express()

app.set('view engine', 'ejs', )
app.set('views', path.join(__dirname, 'views') )

app.get('/', (req, res) => {
    const title = "homepage"
    const message = "mensagem de boas vindas"
    res.render('index', {title, message})
})


app.listen(PORT, () => {
    console.log(`Servidor rodando na porta http://localhost:${PORT}`)
})