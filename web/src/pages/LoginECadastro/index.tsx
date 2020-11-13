import React, {useEffect, useState, ChangeEvent, FormEvent} from 'react';
import './styles.css';
import log from '../../assets/log.svg';
import register from '../../assets/register.svg';

import api from '../../services/api';
import LoginService from '../../services/LoginService';

const LoginECadastro = () => {

    const [formData, setFormData] = useState({
        email: '',
        nome: '',
        senha: '',
        confirmarsenha: '',
        siape: '',
        cpf: '',
        celular: ''
    });

    function handleInputChange(event: ChangeEvent<HTMLInputElement>){
        const {name, value} = event.target;

        setFormData({ ...formData, [name]: value });
    }

    async function handleSubmit(event: FormEvent) {

        event.preventDefault(); 
        if(formData.confirmarsenha == formData.senha){

            const { email, nome, senha, siape, cpf, celular} = formData;

            const data = {
                email,
                nome,
                senha,
                siape,
                cpf,
                celular 
            };

            console.log(data)
            await api.post('professor', data);
            alert("Professor cadastrado !");
        }
        else{ alert("As senhas não se conhecidem !")}
    }

    const [alterar, setCounter] = useState("container");




    async function handleLogar (event: FormEvent) {

        event.preventDefault(); 

        const {senha, siape} = formData;

        const dataLogin = {
            senha,
            siape
            
        };
        //let data
        let data = await LoginService.logar(dataLogin);
        if(data.status){
            throw new Error(data.message);
        }
        
        if(!data.token){
            throw new Error("Não foi possível realizar o login, tente mais tarde!");    
        }

        localStorage.setItem('user', JSON.stringify(data));
        api.defaults.headers['x-access-token'] = data.token
        return Promise.resolve();
    }


    return(
    
    <div>
            
    
            <div>
                <div className={alterar} >
                   
                    <div className="forms-container">
                        <div className="signin-signup">

                        <form action="#" className="sign-in-form" onSubmit={handleLogar}>

                            <h2 className="title">Seja Bem-Vindo</h2>

                            <div className="input-field">
                                <i className="fas fa-chalkboard-teacher"></i>
                                <input type="text" placeholder="SIAPE" name="siape" onChange={handleInputChange}/>
                            </div>

                            <div className="input-field">
                                <i className="fas fa-lock"></i>
                                <input type="password" placeholder="Senha" name="senha" onChange={handleInputChange}/>
                            </div>
            
                            <input type="submit" value="Entrar" className="btn solid" />
                            <p className="social-text">Usar suas redes sociais para o Login</p>
            
                            <div className="social-media">
                                <a href="#" className="social-icon">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                        
                                <a href="#" className="social-icon">
                                    <i className="fab fa-twitter"></i>
                                </a>
              
                                <a href="#" className="social-icon">
                                    <i className="fab fa-google"></i>
                                </a>
              
                                <a href="#" className="social-icon">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                            </div>
                        
                        </form>
          
                        <form action="#" className="sign-up-form" onSubmit={handleSubmit}>
                            <h2 className="title">Informações Pessoais</h2>

                            <div className="input-field">
                                <i className="fas fa-user"></i>

                                <input type="text" 
                                placeholder="Nome" 
                                name="nome"
                                id="nome"
                                onChange={handleInputChange}/>
                            </div>

                            <div className="input-field">
                                <i className="fas fa-address-card"></i>

                                <input type="number" 
                                placeholder="CPF" 
                                name="cpf"
                                id="cpf"
                                onChange={handleInputChange}/>
                            </div>

                            <div className="input-field">
                                <i className="fas fa-envelope"></i>

                                <input type="email" 
                                placeholder="E-mail" 
                                name="email"
                                id="email"
                                onChange={handleInputChange}/>
                            </div>

                            <div className="input-field">
                                <i className="fas fa-chalkboard-teacher"></i>

                                <input type="number" 
                                placeholder="SIAPE" 
                                name="siape"
                                id="siape"
                                onChange={handleInputChange}/>
                            </div>

                            <div className="input-field">
                                <i className="fas fa-phone-alt"></i>

                                <input type="number" 
                                placeholder="Celular" 
                                name="celular" 
                                id= "celular"
                                onChange={handleInputChange}/>
                            </div>

                            <div className="input-field">
                                <i className="fas fa-lock"></i>

                                <input type="password" 
                                placeholder="Senha" 
                                name="senha"
                                id="senha"
                                onChange={handleInputChange}/>
                            </div>

                            <div className="input-field">
                                <i className="fas fa-lock"></i>

                                <input type="password" 
                                placeholder="Confirmar senha" 
                                name="confirmarsenha" 
                                id= "confirmarsenha"
                                onChange={handleInputChange}/>
                            </div>
                           
                            <input type="submit" className="btn" value="Cadastrar" />
           
                            <p className="social-text">Usar redes sociais para realizar o cadastro?</p>
            
                            <div className="social-media">
                
                                <a href="#" className="social-icon">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
            
                                <a href="#" className="social-icon">
                                    <i className="fab fa-twitter"></i>
                                </a>
                
                                <a href="#" className="social-icon">
                                    <i className="fab fa-google"></i>
                                </a>
              
                                <a href="#" className="social-icon">
                                   <i className="fab fa-linkedin-in"></i>
                                </a>
                            </div>
                        </form>
                    </div>
    
    </div>

                    <div className="panels-container">
                        
                        <div className="panel left-panel">
                            <div className="content">
                                <h3><b>NÃO POSSUI CADASTRO?</b></h3>
                                <p>
                                Por Favor, faça seu cadastro utilizando informações pessoas validas
                                </p>
            
                                <br/>
                                <br/>
                                
                                <button className="btn transparent" id="sign-up-btn" onClick={() => setCounter("container sign-up-mode")} >
                                Cadastrar-se
                                </button>
                            </div>
                    
                            <img src={log} className="image" alt="" />
                        </div>
        
                        <div className="panel right-panel">
                            
                            <div className="content">
                                <h3>JÁ TENHO CADASTRO</h3>
            
                                <br/>
                                
                                <button className="btn transparent" id="sign-in-btn" onClick={() => setCounter("container")} >
                                Entrar
                                </button>
                            </div>
                    
                            <img src={register} className="image" alt="" />
                        </div>
                    </div>
                </div>

                
            </div>
    </div>
    )
}

export default LoginECadastro;