//É disparado no começo da aplicação

const server = require('./config/server')

require('./config/database')

//Configuração das rotas
require('./config/routes')(server)

//A constante server passa os parâmetros para as rotas