//Cria API REST. Pega os métodos do HTTP e aplica uma semântica a partir de uma URL.

//Modelo exportado a partir de billingCycle.js
const BillingCycle = require('./billingCycle')

//Error Handler, que retorna mensagem de erro.
const errorHandler = require('../commom/errorHandler')

//A partir daqui, cria uma API REST

//Quais métodos quero criar na aplicação. Persistência Mongoose
BillingCycle.methods(['get', 'post', 'put', 'delete'])

//Retorna a versão atual de um método
BillingCycle.updateOptions({new: true, runValidators: true})

//Chama os middlewares em errorHandler.js
BillingCycle.after('post', errorHandler).after('put', errorHandler)

//TESTE

//Rota específica para o método GET
BillingCycle.route('get', (req, res, next) => {
    BillingCycle.find({}, (err, docs) => {
        if(!err) {
            res.json(docs)
        } else {
            res.status(500).json({errors: [error]})
        }
    })
})

//Contagem de registros, para calcular quantas páginas serão exibidas
BillingCycle.route('count', (req, res, next) => {
    //Pega a quantidade de elementos na tabela. Valor inteiro
    BillingCycle.count((error, value) => {
        if(error){
            //Retorna um erro na parte do frontend
            res.status(500).json({errors: [error]})
        } else {
            //Retorna o objeto, no caso o contador
            res.json({value})
        }
    })
})

//Sumário
BillingCycle.route('summary', (req, res, next) => {

    /*
        Recebe vários parâmetros em forma de objetos. São os passos para a pipeline que agregam os benefícios
        Pipeline tem documentação, é praticamente um $ seguido das variáveis definidas em billingCycle.jS
        
        Agregate é do MONGODB, NÃO DO REACT! 
    */

    BillingCycle.aggregate({ 
        //Aquilo que quero extrair do projeto, no caso, faz a soma dos créditos e dos débitos para cada um dos métodos POST criados
        $project: {credit: {$sum: "$credits.value"}, debt: {$sum: "$debts.value"}}
    }, { 
        //Agrupa os valores com base em um critério, como mês, ano, id, etc
        //Credit não é o mesmo do $project, é uma nova variavel, com base no que está nos métodos POST/GET
        $group: {_id: null, credit: {$sum: "$credit"}, debt: {$sum: "$debt"}}
    }, { 
        //0 falso, 1 true. Valores binários
        $project: {_id: 0, credit: 1, debt: 1}
    }, (error, result) => {
        //Callback
        if(error) {
            res.status(500).json({errors: [error]})
        } else {
            res.json(result[0] || {credit: 0, debt: 0})
        }
    })
})



module.exports = BillingCycle