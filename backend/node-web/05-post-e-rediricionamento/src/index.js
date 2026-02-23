const express = require("express")
const path = require("node:path")
const ejs = require("ejs")
const PORT = 3000   
const app = express()

const storedUsers = []


app.use(express.urlencoded({extended: true}))

app.set('view engine', 'ejs', )
app.set('views', path.join(__dirname, 'views') )

app.get('/', (req, res) => {
    const title = "homepage"
    const message = "mensagem de boas vindas"
    res.render('index', {title, message})
})

app.get('/formulario', (req, res) => {
    res.render('form')
})

app.post('/register', (req, res) => {
    const username = req.body.username
    const password = req.body.password
    console.log(req.body)
    storedUsers.push({username, password})
    res.redirect('/usuarios', )
})

app.get('/usuarios', (req, res) => {
    res.render('users', {users: storedUsers})
})
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta http://localhost:${PORT}`)
})