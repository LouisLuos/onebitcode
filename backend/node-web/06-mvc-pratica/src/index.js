const express = require('express');
const app = express();
const path = require('path');
const router = require('./routes');
const port = process.env.PORT || 3000

// config do ejs 
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// config para o express saber qual minha pasta public
app.use(express.static("public"))

// config para ler dados de formulários direto do html
app.use(express.urlencoded({ extended: true }))

//config das rotas da aplicação 
app.use(router)



app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})

