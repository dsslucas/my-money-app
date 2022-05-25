//Reducer de verdade

//Estado inicial do Dashboard
const INITIAL_STATE = {summary: {credit: 0, debt: 0}}

export default function (state = INITIAL_STATE, action) {
    switch (action.type){
        case 'BILLING_SUMMARY_FETCHED':
            //Muda a armazenagem do sumário no Dashboard
            return {...state, summary: action.payload.data}
        default:
            return state
    }
}