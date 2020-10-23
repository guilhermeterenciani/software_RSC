import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';

import Home from './pages/home';
import CreateAvaliador from './pages/createAvaliador';

const Routes = () => {
    return(
        <BrowserRouter>
            <Route component={Home} path="/" exact/>
            <Route component={CreateAvaliador} path="/create-avaliador"/>
        </BrowserRouter>
    )
}

export default Routes;