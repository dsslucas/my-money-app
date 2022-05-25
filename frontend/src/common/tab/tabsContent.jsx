//Agrupa todos os conteudos das abas dos tabs

import React from "react"

export default props => (
    <div className="tab-content">
        {props.children}
    </div>
)