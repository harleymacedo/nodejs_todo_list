const con = require('../models/connection')

const router = {
    obterTareras: async (req, res, usuario) => {
        try{            
            await con.connect()
            await con.query('select * from tarefa', (err, result) => {
                if (err) {
                    console.log(err.toString())
                } else {
                    if (result !== null)
                        res.render('home', {dados: result, userName: usuario})
                    else
                        res.render('login')
                }
            })
        } catch(err) {
            console.log(err.toString())
        }
    }

}

module.exports = router