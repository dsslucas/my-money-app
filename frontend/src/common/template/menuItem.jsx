import React from 'react'

//iMPORT Do menu
import Menu from './menu'

import { Link } from 'react-router'

//Itens do menu

export default props => (
    <li> 
        <a href={props.path}>
            <i className={`fa fa-${props.icon}`}></i> <span>{props.label}</span>
        </a>
    </li>
)