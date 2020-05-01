const express = require('express')
const app = express()
const handleBars = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

app.engine('handlebars', handleBars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.send('login')
})

app.listen(3000, () => {
    console.log('App rodando na porta 3000!')
})