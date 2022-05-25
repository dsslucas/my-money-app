//Bem simples para a necessidade do projeto. PS: Express vem junto!

const _ = require('lodash')
const nodeRestful = require('node-restful')

//retornar um Middleware, vai ser usado para tratar erros na aplicação (lá no POstman)
module.exports = (req, res, next) => {
    //Tentará pegar os erros, que vem do Restful
    const bundle = res.locals.bundle

    if(bundle.errors){
        //Array com todas as strings dos erros capturados
        const errors = parseErrors(bundle.errors)
        res.status(500).json({errors})
    } else {
        //Interrompe a requisição neste ponto
        next()
    }
}

const parseErrors = (nodeRestfulErrors) => {
    const errors = []

    //Faz um for em cima de Year e Month e retorna a mensagem de erro
    _.forIn(nodeRestfulErrors, error => errors.push(error.message))
    return errors

}