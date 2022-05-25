//Input para o CreditList, que permite adição e exclusão dos créditos

import React from "react";

export default props => (
    //Estamos espalhando as propriedades vindas de input
    <input {...props.input}
        className="form-control"
        placeholder={props.placeholder}
        readOnly={props.readOnly}
        type={props.type} />
)