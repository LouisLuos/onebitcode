const express = require('express');
const path = require('node:path')
const PORT = 3000
const app = express();
const router = require('./routes')

// config do ejs
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))


// config para o express saber qual minha pasta public
app.use(express.static("public"))

// config para ler dados de formulários direto do html
app.use(express.urlencoded({ extended: true }))

//config das rotas da aplicação 
app.use(router)



app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})