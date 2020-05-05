const express = require('express')
const app = express()
const handleBars = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const router = require('./routers/routers')

app.engine('handlebars', handleBars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.render('login')
})
app.post('/home', (req, res) => {
    let usuario = req.body.usuario
    router.obterTareras(req, res, usuario)
})

app.get('/novaTarefa', (req, res) => {
    res.render('novaTarefa')
})

app.post('/cadastrarTarefa', (req, res) => {
    let tarefa = {id: req.body.id, titulo: req.body.titulo, descricao: req.body.descricao, estado: req.body.estado}
    router.cadastrarTarefa(req, res, tarefa)
})

app.listen(3000, () => {
    console.log('App rodando na porta 3000!')
})