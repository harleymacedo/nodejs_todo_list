const {Pool} = require('pg')

const con = new Pool({
    user: 'harleymacedo',
    host: 'localhost',
    database: 'todo-list',
    password: '',
    port: 5432,
})

module.exports = con