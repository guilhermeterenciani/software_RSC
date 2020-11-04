import React from 'react';
import './styles.css';
import log from '../../assets/log.svg';
import register from '../../assets/register.svg';


const LoginECadastro = () => {
    
    let sign_in_btn = "container";

    function mover(){
        const mudar = "container sign-up-mode";
        const voltar = "container"
        // const sign_up_btn = "#sign-up-btn";
        // const container = ".container";

        // sign_up_btn.addEventListener("click", () => {
        //     container.classList.add("sign-up-mode");
        // });
        
        // sign_in_btn.addEventListener("click", () => {
        //     container.classList.remove("sign-up-mode");
    }

    return(
    
    <div>
            
    
            <div>
                <div className="container" >
                   
                    <div className="forms-container">
                        <div className="signin-signup">

                        <form action="#" className="sign-in-form">

                            <h2 className="title">Seja Bem-Vindo</h2>

                            <div className="input-field">
                                <i className="fas fa-user"></i>
                                <input type="text" placeholder="SIAPE" />
                            </div>

                            <div className="input-field">
                                <i className="fas fa-lock"></i>
                                <input type="password" placeholder="Senha" />
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
          
                        <form action="#" className="sign-up-form">
                            <h2 className="title">Informações Pessoais</h2>

                            <div className="input-field">
                                <i className="fas fa-user"></i>
                                <input type="text" placeholder="Nome" />
                            </div>

                            <div className="input-field">
                                <i className="fas fa-user"></i>
                                <input type="text" placeholder="CPF" />
                            </div>

                            <div className="input-field">
                                <i className="fas fa-envelope"></i>
                                <input type="email" placeholder="E-mail" />
                            </div>

                            <div className="input-field">
                                <i className="fas fa-envelope"></i>
                                <input type="number" placeholder="SIAPE" />
                            </div>


                            <div className="input-field">
                                <i className="fas fa-lock"></i>
                                <input type="password" placeholder="Senha" />
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
                                <h3>Não possui Cadastro?</h3>
                                <p>
                                Por Favor, faça seu cadastro utilizando informações pessoas validas
                                </p>
            
                                <br/>
                                <br/>
                                
                                <button className="btn transparent" id="sign-up-btn" onClick={mover}>
                                Cadastrar-se
                                </button>
                            </div>
                    
                            <img src={log} className="image" alt="" />
                        </div>
        
                        <div className="panel right-panel">
                            
                            <div className="content">
                                <h3>Já possui cadastro?</h3>
            
                                <br/>
                                
                                <button className="btn transparent" id="sign-in-btn">
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