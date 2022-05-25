//Colocamos reducers, etc
//Transforma elementos em classes

import React, {Component} from 'react'

//Necessários para o Redux
import {connect} from 'react-redux'

//Importante para carregar o getSummary (no dashboardActions) quando selecionarmos o dashboard
import {bindActionCreators} from 'redux'

//Função do dashboardActions
import {getSummary} from './dashboardActions'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'

//Import do Widget
import ValueBox from '../common/widget/valueBox'

//Row
import Row from '../common/layout/row'

class Dashboard extends Component {
    
    //Ciclo de vida, quando é chamado pelo React
    componentWillMount(){
        this.props.getSummary()
    }
    
    render() {

        //Destructuring, pega do Reducers.js
        const {credit, debt} = this.props.summary

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

//Retorna um objeto. Este objeto ensina ao Redux como vai tirar os dados da store e onde irá colocar no estado,
//O mapeamento é vindo do reducers.js
const mapStateToProps = state => ({summary: state.dashboard.summary})

//Faz a ligação de todas as actions criadas, liga com o dispatch *dispara a ação*, e a partir do getSummary, automaticamente faz um dispatch para todas as aplicações do Redux
const mapDispatchToProps = dispatch => bindActionCreators({getSummary}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)