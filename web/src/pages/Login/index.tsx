import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './styles.css';

const Login = () => {
    return(
        <div>
            
            <header>
            <nav>
            <Link to="/">
                <FiArrowLeft/>
                Voltar para Home
            </Link>
            </nav>
            </header>

            
            <body>
            <div className="">
            <form action="" className="">
                <div className="">
                    <h1>Login</h1>
                </div>

                <div className="">
                    <label htmlFor="cpf" className="">CPF: </label>
                    <input
                    type="text"
                    name="cpf"
                    id="cpf"
                    />
                </div>

                <div className="">
                    <label htmlFor="senha" className="">Senha: </label>
                    <input
                    type="text"
                    name="senha"
                    id="senha"
                    />
                </div>

                <button type="submit" className="">Entrar</button>
            </form>
            </div>
            </body>
        </div>
    )
}

export default Login;