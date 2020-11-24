import React, {useEffect, useState, ChangeEvent, FormEvent} from 'react';
import './styles.css';
import log from '../../assets/log.svg';
import register from '../../assets/register.svg';

import api from '../../services/api';

const Rsc = () => {

    const [formData, setFormData] = useState({
        numero_processo: '',
        documento_rsc: '',
        id_professor: ''
        
    });

    function handleInputChange(event: ChangeEvent<HTMLInputElement>){
        const {name, value} = event.target;

        setFormData({ ...formData, [name]: value });
    }

    async function handleSubmit(event: FormEvent) {

        const {numero_processo, documento_rsc, id_professor} = formData;

            const data = {
                numero_processo,
                documento_rsc,
                id_professor
            };
                 
        

            console.log(data)
            await api.post('rsc', data);
            alert("Processo cadastrado !");
        }


    const [alterar, setCounter] = useState("container");



    return(
    
    <div>
            <div>
                <div className={alterar} >
                   
                    <div className="forms-container">
                        <div className="signin-signup">
          
                        <form action="#" className="sign-up-form" onSubmit={handleSubmit}>
                            <h2 className="title">Cadastro de Processo RSC</h2>

                            <div className="input-field">
                                <i className="fas fa-user"></i>

                                <input type="text" 
                                placeholder="Numero de Processo" 
                                name="numero_processo"
                                id="numero_processo"
                                onChange={handleInputChange}/>
                            </div>

                            <div className="input-field">
                                <i className="fas fa-address-card"></i>

                                <input type="file" 
                                placeholder="Documento RSC" 
                                name="documento_rsc"
                                id="documento_rsc"
                                onChange={handleInputChange}/>
                            </div>

                            <div className="input-field">
                                <i className="fas fa-envelope"></i>

                                <input type="text" 
                                placeholder="Id Professor" 
                                name="id_professor"
                                id="id_professor"
                                onChange={handleInputChange}/>
                            </div>

                            
                            <input type="submit" className="btn" value="Cadastrar" />
           
                            <p className="social-text">Usar redes sociais para realizar o cadastro?</p>
            
                            </form>
                        </div>
                    </div> 
                </div>   
            </div>
    </div>
    )
}

export default Rsc;