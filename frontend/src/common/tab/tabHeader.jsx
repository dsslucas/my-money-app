//Cabeçalho dos Headers

import React,  {Component} from "react";

import If from '../operator/if'

//Imports do Redux
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {selectTab} from './tabActions'

class TabHeader extends Component {
    render() {
        //Mapeado ná embaixo em StateToProps. Verifica se a aba está selecionada
        const selected = this.props.tab.selected === this.props.target

        //Define se o componente está visível ou não.
        //Se o atributo deste objeto tiver o nome do target, marca como visível
        const visible = this.props.tab.visible[this.props.target]

        //Lista das tabs
        return (
            <If test={visible}>
                <li className={selected ? 'active' : ''}>
                    <a href="javascript:;"
                        data-toggle="tab"
                        data-target={this.props.target}
                        onClick={() => this.props.selectTab(this.props.target) 
                        /* Passa o conteúdo que vai ser exibido */
                        }>
                        
                        <i className={`fa fa-${this.props.icon}`}></i> {this.props.label}
                    </a>
                </li>
            </If>
        )
    }
}

//Preica ter acesso ao estado da aplicação. Pega o TAB do reducers.js na Main
const mapStateToProps = state => ({tab: state.tab})

//Mapeamento das Actions para que possam ser disparados e estar disponível (por tabActions.js)
const mapDispatchToProps = dispatch => bindActionCreators({selectTab}, dispatch)

//Decorator
export default connect(mapStateToProps, mapDispatchToProps)(TabHeader)