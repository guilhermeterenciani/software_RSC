import { useEffect, useState } from "react"
import React, {ChangeEvent, FormEvent, Component} from 'react';
import api from '../../services/api';

import './style.css';

const CreatAvaliador = () => {
    
    const [formData, setFormData] = useState({
        avaliador: '',
        
    })
    
    

    function handleInputChange(event: ChangeEvent<HTMLInputElement>){
        const dadosAvaliadores = event.target.value
        
        const avaliador = dadosAvaliadores.split('    ')
        
        console.log(
            avaliador   //.map(avaliador => String(avaliador.trim()))
        )
        //setFormData({...formData, [name]: value})
    }

    return(
        <div id="page-create-avaliador">
            <header>

            </header>
            <div className="box-form">
                <div className="img">

                </div>
               <form>
                    <h1>Cadastro de Avaliadores</h1>

                    <label htmlFor="">Lista de avaliadores:</label>
                    <input type="text" name="avaliadores" onChange={handleInputChange}/>
                    
                </form>
            </div>
            
        </div>
    );
}

export default CreatAvaliador;