//Formulário para adição de novos ciclos de pagamentos

import React, {Component} from 'react'

//Redux Form: Parecido com a função connect, decora os componentes para ligar ao estado gerenciado pelo Redux.
//Field: tag para controlar os campos
//formValueSelector: pega valores de dentro do formulário
import {reduxForm, Field, formValueSelector } from 'redux-form'

import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'

//Campos do formulário mais identado
import labelAndInput from '../common/form/labelAndInput'

//Inicialização do formulário, criado nesse diretório
import {init} from './billingCycleActions'

//Créditos
import ItemList from './itemList'

//Sumário (dashboard caseiro)
import Summary from './summary'

class BillingCycleForm extends Component{
    //Calcular os valores
    calculateSummary(){
        //Diz que é popular (no uso). É necessário para reduzir a soma dos valores
        //Valor armazenado, valor atual, depois o cálculo
        const sum = (t, v) => t + v
        
        //Faz a soma total dos créditos e débitos para exibir ao dashboard caseiro
        return {
            //C representa crédito. Reduce é padrão do map Reducer. Nada de Redux!
            sumOfCredits: this.props.credits.map(c => +c.value || 0).reduce(sum),
            sumOfDebts: this.props.debts.map(d => +d.value || 0).reduce(sum)
        }
    }
    
    
    render(){

        //Read Only é importante para o Delete. Idem para credits.
        const { handleSubmit, readOnly, credits, debts } = this.props

        //Função de soma dos créditos e débitos, para ser exibido ao dashboard caseiro
        const {sumOfCredits, sumOfDebts} = this.calculateSummary()

        return(
            <form action="" className="form" onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field name="name" component={labelAndInput} readOnly={readOnly}
                        label="Nome" cols="12 4" placeholder="Informe o nome"
                    />
                    <Field name="month" component={labelAndInput} readOnly={readOnly}
                        type="number" label="Mês" cols="12 4" placeholder="Informe o mês"
                    />
                    <Field name="year" component={labelAndInput} readOnly={readOnly}
                        type="number" label="Ano" cols="12 4" placeholder="Informe o ano"
                    />

                    <Summary credit={sumOfCredits} debt={sumOfDebts}/>

                    <ItemList cols="12 6" list={credits} readOnly={readOnly}
                        field="credits" legend="Créditos" />
                    <ItemList cols="12 6" list={debts} readOnly={readOnly}
                        field="debts" legend="Débitos" showStatus={true}/>
                </div>
                <div className="box-footer">
                    <button type="submit" className={`btn btn-${this.props.submitClass}`}>{this.props.submitLabel}</button>
                    <button type="button" className="btn btn-default" onClick={this.props.init}>
                        Cancelar
                    </button>
                </div>
            </form>
        )
    }
}

/*
    Está decorado para que tenha uma conexão com o reduxForm
    DestroyOnUnmount permite destruir os dados do formulário quando o componente for destruído.
    Neste caso, queremos usar o mesmo formulário, deixando-o sempre disponível.
    Não queremos que os dados sejam destruídos quando o formulário for destruído.
*/
BillingCycleForm = reduxForm({form: 'billingCycleForm', destroyOnUnmount: false})(BillingCycleForm)

const selector = formValueSelector('billingCycleForm')

//Dado que está em estado controlado e joga dentro das propriedades do componente
//Necessário para puxar os dados dos créditos e débitos
const mapStateToProps = state => ({
    credits: selector(state, 'credits'),
    debts: selector(state, 'debts')
})

const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm)