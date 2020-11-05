import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';

import CreateAvaliador from './pages/createAvaliador';
import LoginECadastro from './pages/LoginECadastro';
//import CreateProfessor from './pages/createProfessor';

const Routes = () => {
    return(
        <BrowserRouter>
            <Route component={CreateAvaliador} path="/create-avaliador"/>
            <Route component={LoginECadastro} path="/" />
            
        </BrowserRouter>
    )
}

//<Route component={CreateProfessor} path="/create-professor" />
export default Routes;