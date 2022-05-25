//Iniciação ao Redux

import { combineReducers } from 'redux'


//Vem do Dashboard. O "reducer de verdade"
import DashboardReducer from '../dashboard/dashboardReducer'

//Reducers do Tabs
import TabReducer from '../common/tab/tabReducer'

//Reducers da Lista de Ciclo de Pagamentos
import BillingCycleReducer from '../billingCycle/billingCycleReducer'

//Formulário do React Form, importante para a inclusão
import {reducer as formReducer} from 'redux-form'

//Toastr Reducer, para mensagem de sucesso ou erro.
import {reducer as toastrReducer} from 'react-redux-toastr'

//Resultado da combinação de todos os reducers da aplicação, no caso os dashboards
//Concatena todos os reducers da aplicação! TUDO ISSO AQUI É ESTADO!
const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    tab: TabReducer, //responsável pela parte do estado da aplicação chamado Tab
    billingCycle: BillingCycleReducer,
    form: formReducer,
    toastr: toastrReducer
})

export default rootReducer