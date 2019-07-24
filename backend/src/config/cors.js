module.exports = function(requisicao, resposta, next){
    resposta.header('Access-Control-Allow-Origin','*')
    resposta.header('Access-Control-Allow-Methods','GET, POST, OPTIONS, PUT, PATCH, DELETE')
    resposta.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept')
    next()
}
