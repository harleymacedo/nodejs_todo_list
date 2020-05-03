const con = require('../models/connection')

const router = {
    obterTareras: async (req, res, usuario) => {
        try{
            let strQuery = 'select * from tarefa'
            await con.connect()
            await con.query(strQuery, (err, data) => {
                if (data !== null)
                console.log(data)
                res.render('home', {dados: data, userName: usuario})
            })
        } catch(err) {
            console.log(err.toString())
        }
    }

}

module.exports = router