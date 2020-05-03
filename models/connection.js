const {Pool, Client} = require('pg')
const strConnection = process.env.URI_BANCO

const con = new Pool({
    connectionString: strConnection,
})

module.exports = con