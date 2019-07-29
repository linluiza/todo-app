const INITIAL_STATE = {
    description: "ler livro",
    list: 
    [{
        _id: 1,
        description: "Pagar fatura cartao",
        done:true
    }, 
    {
        _id: 2,
        description: "Reuniao diaria as 10:00",
        done:false
    }, 
    {
        _id: 3,
        description: "Consulta medica as 17:30",
        done:false
    }]
}

export default (state = INITIAL_STATE, action) => {
    console.log('entrou no reducer')
    switch(action.type){
        case 'DESCRIPTION_CHANGED':
            return { ...state, description: action.payload }
        default:
            return state
    }
}