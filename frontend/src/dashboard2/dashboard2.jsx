//SEM REDUX!
//Transforma elementos em classes

import React, {Component} from 'react'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'

//Import do Widget
import ValueBox from '../common/widget/valueBox'

//Row
import Row from '../common/layout/row'

import axios from 'axios'

const BASE_URL = 'http://localhost:3003/api'

export default class Dashboard2 extends Component {
    
    constructor(props){
        super(props)
        this.state = {credit: 0, debt: 0}
    }


    //Ciclo de vida, quando é chamado pelo React
    compomentWillMount(){
        //Tem promise
        axios.get(`${BASE_URL}/billingCycles/summary`).then(resp => this.setState(resp.data))
    }
    
    render() {

        //Destructuring, pega do Reducers.js
        const {credit, debt} = this.state

        return (
            <div>
                <ContentHeader title="Dashboard" small="Versão 1.0"/>
                <Content>
                    <Row>
                        <ValueBox cols="12 4" color="green" icon="bank" value={`R$ ${credit}`} text="Total de Créditos" />
                        <ValueBox cols="12 4" color="red" icon="credit-card" value={`R$ ${debt}`} text="Total de Débitos" />
                        <ValueBox cols="12 4" color="blue" icon="money" value={`R$ ${credit - debt}`} text="Total Consolidado" /> 
                    </Row>
                </Content>
            </div>
        )
    }
}