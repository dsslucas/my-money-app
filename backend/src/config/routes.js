const express = require('express')

module.exports = function(server){
    //URL BASE PARA TODAS AS ROTAS
    const router = express.Router()
    
    //Direciona os serviços da API com base no router
    server.use('/api', router)

    //Rotas do Ciclo de Pagamento
    const BillingCycle = require('../api/billingCycle/billingCycleService')
    BillingCycle.register(router, '/billingCycles')
}