import React from 'react'

//Apenas renderiza o cabeçalho, as classes extrairam do template
export default props => (
    <section className="content-header">
        <h1>{props.title} <small>{props.small}</small></h1>
    </section>
)