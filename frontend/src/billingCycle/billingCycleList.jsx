import React, {Component} from 'react'

//Precisa estar ligado a um Container, consequentemente, ao Redux
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

//Actions Creators responsáveis pela listatgem, edição e exclusão
import { getList, showUpdate, showDelete } from './billingCycleActions'

class BillingCycleList extends Component {

    //Método de Ciclo de Vida
    componentWillMount(){
        //Só chama os reducers, evolui o estado pra então chamar o Render apenas quando a Promise for resolvida
            this.props.getList()
    }

    //Renderiza as linhas da tabela
    renderRows(){
        //Recebe a lista ou parâmetro vazio
        const list = this.props.list || []

        //Recebe a lista, realiza o map, transforma o billingCycle (bc) no BACKEND em um trecho de JSX.
        //Map percorre o array e retorna um array de mesmo tamanho
        return list.map(bc => (
            <tr key={bc._id}>
                <td>{bc.name}</td>
                <td>{bc.month}</td>
                <td>{bc.year}</td>
                <td>
                    {/* Lembrar de colocar showUpdate no mapeamento! */}
                    <button className="btn btn-warning" onClick={() => this.props.showUpdate(bc)}>
                        <i className="fa fa-pencil"></i>
                    </button>
                    <button className='btn btn-danger' onClick={() => this.props.showDelete(bc)}>
                        <i className='fa fa-trash-o'></i>
                    </button>
                </td>
            </tr>
        ))
    }

    render(){
        return(
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Mês</th>
                            <th>Ano</th>
                            <th className="table-actions">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
            </div>
        )
    }
}

//Retorna um objeto, do mapeamento dos componentes da tabela e onde este estado estará presente para jogar nas propriedades
const mapStateToProps = state => ({list: state.billingCycle.list})

//Dispara automaticamente a cada chamada realizada em this.props.getList
const mapDispatchToProps = dispatch => bindActionCreators({getList, showUpdate, showDelete}, dispatch)

//Decorator
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleList)