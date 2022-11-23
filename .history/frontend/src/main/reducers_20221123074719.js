import {combineReducers} from 'redux'

const rootReducers = combineReducers({
    todo:() => ({
        description: 'Ler livro',
        list: [{
            _id: 1,
            description: 'Pagar fatura do cartão',
            done: true
        },{
            _id: 2,
            description: 'Reunião com a equipe às 10h00',
            done: false
        }]
    })
})

