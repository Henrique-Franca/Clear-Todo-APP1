const INITIAL_STATE = {
    description: 'Ler livro',
    list: [{
        _id: 1,
        description: 'Pagar fatura do cartão',
        done: true
    },{
        _id: 2,
        description: 'Reunião com a equipe às 10h00',
        done: false
    },{
        _id: 3,
        description: 'Fazer o almmoço',
        done: false
    }]
}

export default (state = INITIAL_STATE, action)=> {
    switch(action.type){
        case 'DESCRIPTION_CHANGED':
            return {...state, description: action.payload}
        case 'TODO_SEARCHED':
            return { ...state, list: action.payload.data }
        default:
            return state
    }
}