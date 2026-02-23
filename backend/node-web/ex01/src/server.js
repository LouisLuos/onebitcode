const express = require("express")
const PORT = 3000
const app = express()
const path = require("node:path")

app.use(express.urlencoded({extended: true}))

app.set('view engine', 'ejs', )
app.set('views', path.join(__dirname, 'views') )

const storedEmails = []


app.get('/', (req, res) => {
    res.render('index')
})

app.post('/register', (req, res) => {
    const username = req.body.name
    const email = req.body.email
    const password = req.body.password
    storedEmails.push({username, email, password})
    console.log(storedEmails)
    res.redirect('/sucess')
})

app.get('/sucess', (req, res) => {
    res.render('sucess')
})


app.get('/emails', (req, res) => {
    res.render('emails', {emails: storedEmails})
})

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta http://localhost:${PORT}`)
})