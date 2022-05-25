//Mensagens de Sucesso e Erro

import React from 'react'

//Import do React Redux Toastr. Exibe as mensagens de sucesso ou fracasso
import ReduxToastr from 'react-redux-toastr'

//Referência para o CSS
import 'modules/react-redux-toastr/lib/css/react-redux-toastr.css'

export default props => (
    //Exibe as mensagens no Redux.
    <ReduxToastr
        timeOut={4000}
        newestOnTop={false}
        preventDuplicates={true} //Mensagens duplicadas. Não envia mensagens com clique duplo.
        position='top-right'
        transitionIn='fadeIn'
        transitionOut='fadeOut'
        progressBar
        />
)

//Depois,parte para declaração em app.jsx (por já entrar na renderização) e reducers.js