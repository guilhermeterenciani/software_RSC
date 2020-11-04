import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';

import Home from './pages/home';
import CreateAvaliador from './pages/createAvaliador';
import Login from './pages/Login';
import LoginECadastro from './pages/LoginECadastro';
import CreateProfessor from './pages/createProfessor';

const Routes = () => {
    return(
        <BrowserRouter>
            <Route component={Home} path="/" exact/>
            <Route component={CreateAvaliador} path="/create-avaliador"/>
            <Route component={Login} path="/login" />
        </BrowserRouter>
    )
}

export default Routes;