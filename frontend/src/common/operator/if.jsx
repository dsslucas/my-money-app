import React from 'react'

//Cria um If
export default props => {
    if(props.test){
        return props.children
    }
    else{
        return false
    }
}