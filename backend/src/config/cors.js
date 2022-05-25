//Middleware aplicado no servidor

//Libera de forma global! Mas é possível liberar para links específicos
module.exports = (req, res, next) => {
    //Permite tudo
    res.header('Access-Control-Allow-Origin', '*')

    //Métodos permitidos
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')

    //Middlewares permitidos
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')

    next()
}