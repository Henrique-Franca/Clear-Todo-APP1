import axios from 'axios'

const URL = 'http://logalhost:3003/api/todos'

export const changeDescription = event => ({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
})

export const search = () =>{
    const requeste = axios.get(`${URL}?sort=-createdAt`)
    return{
        type: 'TODO_SEARCHED',
        payload: requeste
    }
}