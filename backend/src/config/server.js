//Responsavel por toda a configuração do servidor

//COMANDO NO CMD: npm run dev

const port = 3003

//Faz o parse no corpo da requisição e nos entrega já pronto
const bodyParser = require('body-parser')

//retorna uma instância única
const express = require('express')

const server = express()

const allowCors = require('./cors')

//Transforma um parâmetro de string para inteiro
const queryParser = require('express-query-int')

//extended interpreta mais dados do que o padrão
server.use(bodyParser.urlencoded({extended: true}))

//outro middleware
server.use(bodyParser.json())

server.use(allowCors)

//Converte string em valor numérico
server.use(queryParser())

//Escuta a porta
server.listen(port, function() {
    console.log(`BACKEND is running on port ${port}.`)
})

module.exports = server