import React from "react";

//import das dependências criadas
import '../common/template/dependencies'

//Referencia pro Header
import Header from '../common/template/header'

//Import do Sidebar
import SideBar from '../common/template/sideBar'

//Footer
import Footer from '../common/template/footer'

//Rotas
import Routes from './routes'

//Mensagem de sucesso ou erro no formulário
import Messages from "../common/msg/messages";

export default props => (
    <div className="wrapper">
        <Header />
        <SideBar />
        <div className="content-wrapper">
            <Routes />
        </div>
        <Footer />
        <Messages />
    </div>
)