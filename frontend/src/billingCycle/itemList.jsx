//Cria os créditos

import React, {Component} from 'react'
import Grid from '../common/layout/grid'

import Input from '../common/form/input'
import Summary from './summary'

//Redux
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
//Array Insert insere dados dentro de um array. Action Creator do Redux-Form!
import { Field, arrayInsert, arrayRemove } from 'redux-form'

import If from '../common/operator/if'
import Dashboard from '../dashboard/dashboard'


class ItemList extends Component{
    //Gerencia o corpo da tabela

    //Adiciona mais uma linha nos créditos
    add(index, item = {}){
        //Se ele não estiver em modo Read Only
        if(!this.props.readOnly){
            this.props.arrayInsert('billingCycleForm', this.props.field, index, item)
        }
    }
    
    //Remove uma linha
    remove(index){
        //Se ele não estiver em modo Read Only
        //Pelo menos um item tem que ficar disponível na lista.
        if(!this.props.readOnly && this.props.list.length > 1){
            this.props.arrayRemove('billingCycleForm', this.props.field, index)
        }
    }

    //Os valores com array são oriundos do Backend
    renderRows(){
        const list = this.props.list || []

        //Item representa o item (crédito, débito) e o index é o indice.
        //Chave é obrigatória! Fica fácil para renderizar (e ver o que mudou)
        return list.map((item, index) => (
            <tr key={index}>
                <td><Field name={`${this.props.field}[${index}].name`} component={Input}
                    placeholder="Informe o nome" readOnly={this.props.readOnly}/>
                </td>
                <td><Field name={`${this.props.field}[${index}].value`} component={Input}
                    placeholder="Informe o valor" readOnly={this.props.readOnly} />
                </td>

                <If test={this.props.showStatus}>
                    <td>
                        <Field name={`${this.props.field}[${index}].status`} component={Input}
                            placeholder="Informe o status" readOnly={this.props.readOnly} />
                    </td>
                </If>

                <td>
                    <button type="button" className="btn btn-success"
                        onClick={() => this.add(index + 1)}>
                        <i className="fa fa-plus"></i>
                    </button>
                    <button type="button" className="btn btn-warning"
                        onClick={() => this.add(index + 1, item)}>
                        <i className="fa fa-clone"></i>
                    </button>
                    <button type="button" className="btn btn-danger"
                        onClick={() => this.remove(index)}>
                        <i className="fa fa-trash-o"></i>
                    </button>
                </td>
            </tr>
        ))
    }


    render(){
        return (
            <Grid cols={this.props.cols}>
                <fieldset>
                    <legend>{this.props.legend}</legend>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Valor</th>
                                <If test={this.props.showStatus}>
                                    <th>Status</th>
                                </If>
                                <th className="table-actions">Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderRows()}
                        </tbody>
                    </table>
                </fieldset>
            </Grid>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({arrayInsert, arrayRemove}, dispatch)
export default connect(null, mapDispatchToProps)(ItemList)