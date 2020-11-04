import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';

import Home from './pages/home';
import CreateAvaliador from './pages/createAvaliador';
import Login from './pages/Login';
import CreateProfessor from './pages/createProfessor';

const Routes = () => {
    return(
        <BrowserRouter>
            <Route component={Home} path="/" exact/>
            <Route component={CreateAvaliador} path="/create-avaliador"/>
            <Route component={Login} path="/login" />
            <Route component={CreateProfessor} path="/create-professor" />
        </BrowserRouter>
    )
}

export default Routes;