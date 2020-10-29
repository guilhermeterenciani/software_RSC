import { useEffect, useState } from "react"
import React, {ChangeEvent, FormEvent, Component} from 'react';
import api from '../../services/api';

import './style.css';

interface Avaliador{
    nome: String,
    Avaliador: String,
    Avaliado: String,
    SIAPE: String,
    CPF: String,
    Tipo_Avaliador: String,
    Lotado: String,
    Email: String,
    Celular: String
}

const CreatAvaliador = () => {
    
    const [formData, setFormData] = useState({
        nome: '',
        avaliador: '',
        avaliado: '',
        siape: '',
        cpf: '',
        tipoAvaliador: '',
        lotado: '',
        email: '',
        celular: ''
    })
    
    

    function handleInputChange(event: ChangeEvent<HTMLTextAreaElement>){
        const Avaliadores = event.target.value
        
        const avaliador = Avaliadores.split('\n');
        const dadosAvaliador = avaliador.map(avaliadores => (avaliadores.split('    ')))

        //setFormData(dadosAvaliador);

        console.log(
            dadosAvaliador   //.map(avaliador => String(avaliador.trim()))
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
                    <textarea name="avaliador" id="" onChange={handleInputChange}></textarea>
                    
                </form>
            </div>
            
        </div>
    );
}

export default CreatAvaliador;