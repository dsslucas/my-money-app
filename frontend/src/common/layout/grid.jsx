//Vai fazer uma "réplica" do Bootstrap

import React, { Component } from 'react'

export default class Grid extends Component {
    //String com número de colunas, transforma em classes CSS do Bootstrap
    toCssClasses(numbers){
        //Se verdadeiro, quebra em strings, caso contrário, gera array vazio
        const cols = numbers ? numbers.split(' ') : []

        //Todas as classes do Bootstrap concatenadas que podemos colocar no HTML
        let classes = ''

        if(cols[0]) classes += `col-xs-${cols[0]}` 
        if(cols[1]) classes += ` col-sm-${cols[1]}`
        if(cols[2]) classes += ` col-md-${cols[2]}`
        if(cols[3]) classes += ` col-lg-${cols[3]}`

        //Retorna a string
        return classes 
    }

    //Obrigatório para classes
    render(){
        const gridClasses = this.toCssClasses(this.props.cols || '12')
        return (
            <div className={gridClasses}>
                {this.props.children}
            </div>
        )
    }
}