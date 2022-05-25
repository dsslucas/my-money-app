import React from 'react'
import ReactDOM from 'react-dom'
import App from './main/app'

//Relacionados ao Redux
import {applyMiddleware, createStore} from 'redux'
import { Provider } from 'react-redux'
import reducers from './main/reducers'

import promise from 'redux-promise'

//Middlewares do Redux para carregamento automático do Ciclo de Pagamentos
import multi from 'redux-multi'
import thunk from 'redux-thunk'

/* ATENÇÃO
    COMANDO PARA EXECUTAR O FORNTEND NO CMD: npm run dev

    PARA O BACKEND:
    npm run production -f (na pasta BACKEND)
    mongod (qualquer lugar)
*/

//Para aparecer no plugin do DevTools no Chrome
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = applyMiddleware(multi, thunk, promise)(createStore)(reducers, devTools)

//Tudo do React inicia por aqui. Ele pega o ID do index.html
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app')
)

export default props => {

}