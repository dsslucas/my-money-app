//Todos os Actions Creators

//HTTP Client, realiza chamadas pro backend
import axios from 'axios'

//Toastr, para gerar mensagem de erro ou sucesso
import { toastr } from 'react-redux-toastr'

//Reseta o preenchimento do formulário. Action Creator!
import {reset as resetForm, initialize} from 'redux-form'

//Actions Creators sobre as abas criadas em common/tabs. Queremos disparar as ações de reset para resetar o formulário e definir as abas visualizadas
import {showTabs, selectTab} from '../common/tab/tabActions'

//Onde está os dados da API
const BASE_URL = 'http://localhost:3003/api'

//Valores iniciais de Débito e Crédito sejam carregados (para preenchimento)
const INITIAL_VALUE = {credits: [{}], debts: [{}]}

//Dispara a Action
export function getList(){
    const request = axios.get(`${BASE_URL}/billingCycles`)
    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
}

//Lida com os valores informados no Input ao ser clicado o botão
export function create(values) {
    //Retorno de função por Middleware Thunk
    return submit(values, 'post')
}

//Edição dos Ciclos de Pagamentos
export function update(values){
    return submit(values, 'put')
}

//Exclusão de um Ciclo de Pagamento
export function del(values){
    return submit(values, 'delete')
}

//Queremos reusar o código para criar, alterar e excluir.
function submit(values, method){
    return dispatch => {
        //Para Edição e Exclusão, é necessário informar na URL o ID do Ciclo de Pag.
        //ID gerado no MongoDB
        const id = values._id ? values._id : ''

        //Chama a API do client e realiza o método POST
        //Array é comando JavaScript para colocar 'put' 'post' e eticetera sem colocar axios.put.
        axios[method](`${BASE_URL}/billingCycles/${id}`, values)
        .then(resp => {
            //Mensagem de sucesso na aplicação
            toastr.success("Sucesso", "Operação Realizada com sucesso!")
            //Só podemos fazer isso porque colocamos o Redux Multi
            dispatch([
                //Reseta o formulário pelo ID, definido em billingCycleForm
                resetForm('billingCycleForm'),
                
                //Obtem a lista
                getList(),

                //Seleciona a listagem de tabs com ID definido em billingCycle.jsx
                selectTab('tabList'),

                //Exibe as abas de Lista e Criação
                showTabs('tabList', 'tabCreate')
            ])
        }).catch(e=> {
            //Mensagem de falha no post.
            e.response.data.errors.forEach(error => toastr.error("Erro!", error))
        })
    }
    //Importante mencionar que estas mensagens vem do Backend!
}

//Nova Action Create. Esse parâmetro é o que vai ser passado quando for clicado em Edit ou Delete.
export function showUpdate(billingCycle){
    //Middleware Redux Multi, permite retornar um array de várias actions
    return [
        //Chama a tabActions com o ID
        showTabs('tabUpdate'),

        //Seleciona a aba
        selectTab('tabUpdate'),

        //Inicializa a aba de Edição, já com os dados carregados
        initialize('billingCycleForm', billingCycle),

    ]
}

//Renderização da Exclusão, efeitos de clique
export function showDelete(billingCycle){
    //Middleware Redux Multi, permite retornar um array de várias actions
    return [
        //Chama a tabActions com o ID
        showTabs('tabDelete'),

        //Seleciona a aba
        selectTab('tabDelete'),

        //Inicializa a aba de Edição, já com os dados carregados
        initialize('billingCycleForm', billingCycle),

    ]
}

//Início do cadastro de valores, inicialmente por 0
export function init(){
    //Middleware Redux Multi, permite retornar um array de várias actions
    return [
        //Mostrar apenas a aba de Criar e Editar
        showTabs('tabList', 'tabCreate'),

        //Seleciona a aba de listagem
        selectTab('tabList'),

        //Pega a lista mais atual
        getList(),

        //Inicia o formulário com os valores iniciais, definidos por uma constante
        initialize('billingCycleForm', INITIAL_VALUE)
    ]
}


