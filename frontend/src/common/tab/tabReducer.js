//Controla o estado quando uma ação é disparada

const INITIAL_STATE = { selected: '', visible: {}}

export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        case 'TAB_SELECTED':
            //evolui o estado e altera o INITIAL_STATE
            return {...state, selected: action.payload}
        case 'TAB_SHOWED':
            return {...state, visible: action.payload}
        default:
            return state
    }
}