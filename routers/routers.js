const con = require('../models/connection')

const router = {
    obterTareras: async (req, res, usuario) => {
        try{
            let strQuery = 'select * from tarefa'
            await con.connect()
            await con.query(strQuery, (err, result) => {
                if (result !== null)
                console.log(result)
                res.render('home', {dados: result, userName: usuario})
            })
        } catch(err) {
            console.log(err.toString())
        }
    }

}

module.exports = router