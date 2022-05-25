import React, {Component} from "react"

import If from '../operator/if'

//Import Redux. Importante para ligar o estado.
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

class TabContent extends Component {
    render(){
        //Comparação de seleção através do ID
        const selected = this.props.tab.selected === this.props.id

        //Define se o componente está visível ou não.
        //Se o atributo deste objeto tiver o nome do target, marca como visível
        const visible = this.props.tab.visible[this.props.id]

        return (
            <If test={visible}>
                <div id={this.props.id} className={`tab-pane ${selected ? 'active' : ''}`}> 
                    {this.props.children}
                </div>
            </If>  
        )
    }
}

//Mapeamento do estado
const mapStateToProps = state => ({tab: state.tab})
export default connect(mapStateToProps)(TabContent)