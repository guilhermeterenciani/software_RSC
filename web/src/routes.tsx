import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';

import CreateAvaliador from './pages/createAvaliador';
import LoginECadastro from './pages/LoginECadastro';
import Dashboard from './pages/Dashboard';
//import CreateProfessor from './pages/createProfessor';

const Routes = () => {
    return(
        <BrowserRouter>
            <Route component={CreateAvaliador} path="/create-avaliador"/>

            <Route component={LoginECadastro} path="/" exact />

            <Route component={Dashboard} path="/dashboard"/>
        </BrowserRouter>
    )
}

//<Route component={CreateProfessor} path="/create-professor" />
export default Routes;