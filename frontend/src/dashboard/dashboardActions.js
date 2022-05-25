//Referência do Axios, que fará as requisições com o backend
import axios from 'axios'

const BASE_URL = 'http://localhost:3003/api'

export function getSummary () {
    //Armazena a Requisição. Por ser assíncorna, vai armazenar uma Promise.
    const request = axios.get(`${BASE_URL}/billingCycles/summary`)

    return {
        type: 'BILLING_SUMMARY_FETCHED', //Sumário obtido
        payload: request
    }

    //Depois disso, dashBoardReducer é chamado.
}