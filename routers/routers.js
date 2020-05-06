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
    },

    cadastrarTarefa: async (req, res, tarefa) => {
        try {
            await con.connect()
            await con.query("insert into tarefa (id, titulo, descricao, estado) values ($1, $2, $3, $4)", [tarefa.id, tarefa.titulo, tarefa.descricao, false], (err, result) => {
                if (err) { 
                    console.log(err.toString())
                    res.render('novaTarefa', {mensagem: 'Erro ao cadastrar'})
                } else {
                    res.render('novaTarefa', {mensagem: 'Cadastrado com sucesso'})
                }
            })
        } catch(err) {
            console.log(err.toString())
        }
    }

}

module.exports = router