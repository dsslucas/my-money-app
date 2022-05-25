import React, {Component} from 'react'

//Importação da Lista do Billing Cycles
import List from './billingCycleList'

//Formulário para inclusão
import Import from './billingCycleForm'

//Create, responsável por armazenar os inputs informados no formulário
import {init, create, update, del} from './billingCycleActions'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'

//Transforma um componente em um container (o Select TAB)
import { bindActionCreators } from 'redux'

import { connect } from 'react-redux'

//TAB Actions
import { selectTab, showTabs, showDelete} from '../common/tab/tabActions'

//Import das abas
import Tabs from '../common/tab/tabs'
import TabsHeader from '../common/tab/tabsHeader'
import TabsContent from '../common/tab/tabsContent'
import TabHeader from '../common//tab/tabHeader'
import TabContent from '../common/tab/tabContent'

//Necessário transformar em classe para uma renderização mais consistente
class BillingCycle extends Component {

    //Método de Ciclo de Vida. Quando seleciona a aba, seleciona automaticamente o primeiro elemento da tabela, no caso a Lista.
    componentWillMount(){
        this.props.init()
    }

    render(){
        return (
            <div>
                <ContentHeader title="Ciclos de Pagamentos" small="Cadastro" />
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label="Listar" icon="bars" target="tabList"/>
                            <TabHeader label="Incluir" icon="plus" target="tabCreate"/>
                            <TabHeader label="Alterar" icon="pencil" target="tabUpdate"/>
                            <TabHeader label="Excluir" icon="trash-o" target="tabDelete"/>
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id="tabList">                            
                                <List/>
                            </TabContent>
                            <TabContent id="tabCreate">
                                <Import onSubmit={this.props.create}
                                submitLabel="Incluir" submitClass="primary"/>
                                {/*Quando for chamada, chama a função create */}
                            </TabContent>
                            <TabContent id="tabUpdate">
                                <Import onSubmit={this.props.update}
                                submitLabel="Alterar" submitClass="info" />
                            </TabContent>
                            <TabContent id="tabDelete">
                                <Import onSubmit={this.props.del} readOnly={true}
                                submitLabel="Excluir" submitClass="danger" />
                            </TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}
//Mapeamento dos métodos
const mapDispatchToProps = dispatch => bindActionCreators({init, showDelete, create, update, del}, dispatch)

export default connect(null, mapDispatchToProps)(BillingCycle)