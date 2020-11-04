import React from 'react';
import { Link } from 'react-router-dom';

const CreatePoint = () => {

    return(
        <div>
            <h1>hello,World</h1>
            <br/><br/>
            
            <Link to="/login">           
            <strong>
            Login
            </strong>
            </Link>
            <br/><br/>

            <Link to="/create-professor">           
            <strong>
            Cadastrar
            </strong>
            </Link>
            <br/><br/>

            <Link to="/login-cadastro">
                       
                <strong>
                 Entra ai filhao
                </strong>
            </Link>
        </div>
        
    );
}

export default CreatePoint;