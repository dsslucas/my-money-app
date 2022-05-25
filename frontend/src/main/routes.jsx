//Rotas

import React from 'react'

import {Router, Route, Redirect, hashHistory} from 'react-router'

//COMPONENTES QUE NECESSITARÃO SER PASSADOS POR ROTAS

//Necessário pra ligar o componente à rota
import Dashboard from '../dashboard/dashboard'

import BillingCycle from '../billingCycle/billingCycle'

export default props => (
    <Router history={hashHistory}>
        <Route path="/" component={Dashboard}/>
        <Route path="/billingCycles" component={BillingCycle}/>
        <Redirect from="*" to="/"/>
    </Router>
)