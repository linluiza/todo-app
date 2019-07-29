const INITIAL_STATE = { description: "", list: [] }

export default (state = INITIAL_STATE, action) => {
    console.log('entrou no reducer')
    switch(action.type){
        case 'DESCRIPTION_CHANGED':
            return { ...state, description: action.payload }
        case 'TODO_SEARCHED':
            return {...state, list: action.payload.data}
        default:
            return state
    }
}