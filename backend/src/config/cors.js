module.exports = function(requisicao, resposta, next){
    requisicao.header('Access-Control-Allow-Origin','*')
    requisicao.header('Access-Control-Allow-Methods','GET, POST, OPTIONS, PUT, PATCH, DELETE')
    requisicao.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept')
    next()
}
