const express = require('express')
const app = express()
const handleBars = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

//app.set('view engine', {})

app.get('/', (req, res) => {
    res.send('Teste1')
})

app.listen(3000, () => {
    console.log('App rodando na porta 3000!')
})