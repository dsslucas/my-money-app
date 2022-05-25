//Melhoria do formulário em billingCycleForm.
//Exporta os componentes que são recebidos pelo "component"

import React from "react";

//Import do Grid, propriedade Bootstrap
import Grid from '../layout/grid'

//Field (do Redux) renderiza tudo. Aqui, só passa as propriedades para ele.
export default props => (
    <Grid cols={props.cols}>
        <div className="form-group">
            <label htmlFor={props.name}>{props.label}</label>
            <input {...props.input} className="form-control"
                placeholder={props.placeholder}
                readOnly={props.readOnly}
                type={props.type}
            />
        </div>
    </Grid>
)