import axios from 'axios'

const URL = 'http://localhost:3003/api/todos'

export const changeDescription = event => ({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
})

export const search = (description) =>{
    const searchString = description ? `&description__regex=/${description}/` : ''
    const request = axios.get(`${URL}?sort=-createdAt${searchString}`)
    return  {
        type: 'TODO_SEARCHED',
        payload: request
    }
}

export const add = (description) => {
    return  dispatch => {
        axios.post(URL, {description})
            .then(resp => dispatch({ type: 'TODO_ADDED', payload: resp}))
            .then(resp => dispatch(search()))
    }
}

export const remove = (id) => {
    return  dispatch => {
        axios.delete(`${URL}/${id}`)
            .then(resp => dispatch({ type: 'TODO_REMOVED', payload: resp}))
            .then(resp => dispatch(search()))
    }
}

export const markAsDone = (todo) => {
    return  dispatch => {
        axios.put(`${URL}/${todo._id}`, {...todo, done: true})
            .then(resp => dispatch({ type: 'TODO_DONE', payload: resp}))
            .then(resp => dispatch(search()))
    }
}