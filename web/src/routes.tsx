import React from 'react'; 
import {Route, BrowserRouter, Switch, Redirect} from 'react-router-dom'; 
 
import PrivateRoute from './Routes/Private'; 
import CreateRsc from './pages/createRsc';
import CreateAvaliador from './pages/createAvaliador'; 
import LoginECadastro from './pages/LoginECadastro'; 
import Dashboard from './pages/Dashboard'; 
import Processos_RSC from './pages/ProcessosRSC';
//import CreateProfessor from './pages/createProfessor'; 
 
 
 
const Routes = () => { 
    return( 
        <BrowserRouter> 
            <Switch> 
                <PrivateRoute component={CreateAvaliador} path="/create-avaliador"/> 
 
                <Route component={LoginECadastro} path="/" exact /> 

                <PrivateRoute component={CreateRsc} path="/create-rsc"/>

                <PrivateRoute component={Dashboard} path="/dashboard"/> 

                <PrivateRoute component={Processos_RSC} path="/cadastro-processos-rsc"/>
                
            </Switch> 
        </BrowserRouter> 
    ) 
} 

export default Routes;

// import React from 'react';
// import {Route, BrowserRouter} from 'react-router-dom';

// import CreateAvaliador from './pages/createAvaliador';
// import CreateRsc from './pages/createRsc';
// import LoginECadastro from './pages/LoginECadastro';
// import Dashboard from './pages/Dashboard';
// //import CreateProfessor from './pages/createProfessor';

// const Routes = () => {
//     return(
//         <BrowserRouter>
//             <Route component={CreateAvaliador} path="/create-avaliador"/>

//             <Route component={CreateRsc} path="/create-rsc"/>
            
//             <Route component={LoginECadastro} path="/" exact />

//             <Route component={Dashboard} path="/dashboard"/>

//         </BrowserRouter>
//     )
// }

// //<Route component={CreateProfessor} path="/create-professor" />
// export default Routes;