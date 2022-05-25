//Usa a API do Mongoose com Restful

//Faz o mapeamento do objeto e como colocará no banco de dados. É um Esquema!

const restful = require('node-restful')
const mongoose = restful.mongoose

//Esquema de crédito
const creditSchema = new mongoose.Schema({
    name : {type: String, required: true},
    value: {type : Number, min: 0, required: true}
})

//Esquema de débito
const debtSchema = new mongoose.Schema({
    name: {type: String, required: true},
    value: {type: Number, min: 0, required: [true, 'Informe o valor do débito!']},
    status: {type: String, required: false, uppercase: true, 
        enum: ['PAGO', 'PENDENTE', 'AGENDADO']}
})

//Esquema do ciclo de pagamento
const billingCycleSchema = new mongoose.Schema({
    name: {type: String, required: true},
    month: {type: Number, min: 1, max:12, required: true},
    year: {type: Number, min: 1970, max: 2100, required: true},
    credits: [creditSchema],
    debts: [debtSchema]
})

module.exports = restful.model('BillingCycle', billingCycleSchema)