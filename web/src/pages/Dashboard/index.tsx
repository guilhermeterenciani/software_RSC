import React from 'react';
import './style.css';

const Dashboard = () =>{
    return(

    <div>
              {/* Pagina  */}
        <header className="l-header">
            <nav className="nav bd-grid">
                <div>
                    <a href="#" className="nav__logo"></a>
                </div>

                <div className="nav__menu" id="nav-menu">
                    <ul className="nav__list">
                        <li className="nav__item"><a href="#home" className="nav__link active">Menu</a></li>
                        <li className="nav__item"><a href="#skills" className="nav__link">Meus processos</a></li>
                        <li className="nav__item"><a href="#about" className="nav__link">Perfil</a></li>
                        <li className="nav__item"><a href="http://localhost:3000/create-rsc" className="nav__link">Cadastro RSC</a></li>
                    </ul>
                </div>

                <div className="nav__toggle" id="nav-toggle">
                    <i className='bx bx-menu'></i>
                </div>
            </nav>
        </header>

        <div className="l-main">
            {/* <!--===== Pagina HOME =====--> */}
            <section className="home bd-grid" id="home">
                <div className="home__data">
                    <h1 className="home__title">Seja bem-vindo<br/>Professor <br/><span className="home__title-color">Felipe Florentin</span><br/></h1>

                    <a href="#" className="button">Sair</a> 
                </div>

                <div className="home__social">
                    <a href="" className="home__social-icon"><i className='bx bxl-facebook'></i></a>
                    <a href="" className="home__social-icon"><i className='bx bxl-instagram' ></i></a>
                    <a href="" className="home__social-icon"><i className='bx bxl-twitter' ></i></a>
                </div>

                <div className="home__img">    
                    <img src="assets/img/perfil.svg" alt=""/>
                </div>
            </section>


            {/* <!--===== Processos =====--> */}
            <section className="Processos section" id="skills">
                <h2 className="section-title">Meu processos</h2>

                <div className="Processos__container bd-grid">          
                    <div>
                        <h2 className="Processos__subtitle">Processos pendentes</h2>
                        <p className="Processos__text">Esses são os processos que o senhor ficou de avaliar:</p>

                        <input type="button" value="Ver" className="contact__button button"/>
                        <div className="Processos__data">
                            <div className="Processos__names">
                                <i className='bx bxs-folder-open Processos__icon'></i>
                                <span className="Processos__name">Processo do Leandro</span>
                            </div>
                            <div className="Processos__bar Processos__html">

                            </div>
                            <div>
                                <span className="Processos__percentage">95%</span>
                            </div>
                        </div>

                        <input type="button" value="Ver" className="contact__button button"/>
                        <div className="Processos__data">
                            <div className="Processos__names">
                                <i className='bx bxs-folder-open Processos__icon'></i>
                                <span className="Processos__name">Processo do Guilherme</span>
                            </div>
                            <div className="Processos__bar Processos__css">
                                
                            </div>
                            <div>
                                <span className="Processos__percentage">85%</span>
                            </div>
                        </div>

                        <input type="button" value="Ver" className="contact__button button"/>
                        <div className="Processos__data">
                            <div className="Processos__names">
                                <i className='bx bxs-folder-open Processos__icon'></i>
                                <span className="Processos__name">Processo da gaby</span>
                            </div>
                            <div className="Processos__bar Processos__js">
                                
                            </div>
                            <div>
                                <span className="Processos__percentage">65%</span>
                            </div>
                        </div>

                        <input type="button" value="Ver" className="contact__button button"/>
                        <div className="Processos__data">
                            <div className="Processos__names">
                                <i className='bx bxs-folder-open Processos__icon'></i>
                                <span className="Processos__name">Processo do mateus</span>
                            </div>
                            <div className="Processos__bar Processos__js">
                                
                            </div>
                            <div>
                                <span className="Processos__percentage">78%</span>
                            </div>
                        </div>

                        <input type="button" value="Ver" className="contact__button button"/>
                        <div className="Processos__data">
                            <div className="Processos__names">
                                <i className='bx bxs-folder-open Processos__icon'></i>
                                <span className="Processos__name">Processo da camila</span>
                            </div>
                            <div className="Processos__bar Processos__js">
                                
                            </div>
                            <div>
                                <span className="Processos__percentage">68%</span>
                            </div>
                        </div>



                         <input type="button" value="Ver" className="contact__button button"/>
                        <div className="Processos__data">
                            <div className="Processos__names">
                                <i className='bx bxs-folder-open Processos__icon'></i>
                                <span className="Processos__name">Processo do gustavo</span>
                            </div>
                            <div className="Processos__bar Processos__ux">
                                
                            </div>
                            <div>
                                <span className="Processos__percentage">85%</span>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </section>

            {/* <!--===== Sobre o Perfil =====--> */}
            <section className="about section " id="about">
                <h2 className="section-title">Meu perfil</h2>

                <div className="about__container bd-grid">
                    <div className="about__img">
                        <img src="assets/img/about.svg" alt=""/>
                    </div>
                    
                    <div>
                        <h2 className="about__subtitle">Nome:</h2><h3> Felipe Florentin</h3><br/>
                        <h2 className="about__subtitle">Data de nascimento:</h2><h3> 12/02/2002</h3><br/>
                        <h2 className="about__subtitle">E-mail:</h2><h3> Felipe.troiar@gmail.com</h3><br/>
                        <h2 className="about__subtitle">Endereço:</h2><h3> Rua do abacaxi numero 68</h3><br/>
                        <h2 className="about__subtitle">Delefone:</h2><h3>(67)40028922</h3><br/>
                        
                        <h2 className="about__subtitle">Descrição</h2> 
                        <p >Eu sou um aluno do IFMS que neste momento está fazendo um projeto com o professor guilherme e amigos, o mesmo que tem como
                            objetivo o facilitamento da inserção de dados em um sistema.
                        </p><br/>
                        <input type="button" value="Alterar perfil" className="contact__button button"/>            
                    </div>   
                                                 
                </div>
            </section>
        </div>
        

        {/* <!--===== FOOTER =====--> */}
        <footer className="footer">
            <p className="footer__title">Projeto TCC/Estágio </p>
            <div className="footer__social">
                <a href="#" className="footer__icon"><i className='bx bxl-facebook' ></i></a>
                <a href="#" className="footer__icon"><i className='bx bxl-instagram' ></i></a>
                <a href="#" className="footer__icon"><i className='bx bxl-twitter' ></i></a>
            </div>
            <p>&#169;2020 Instituto Federal de Mato Grosso do Sul</p>
        </footer>


        {/* <!--===== SCROLL REVEAL =====--> */}
        <script src="https://unpkg.com/scrollreveal"></script>

        {/* <!--===== MAIN JS =====--> */}
        <script src="assets/js/main.js"></script>



    </div>
    );
}
export default Dashboard;