import { useEffect, useState } from "react"
import React, {ChangeEvent, FormEvent, Component} from 'react';
import api from '../../services/api';

import './style.css';

interface Avaliador{
    nome: String,
    avaliador: String,
    avaliado: String,
    siape: String,
    cpf: String,
    tipoAvaliador: String,
    lotado: String,
    email: String,
    celular: String
}

const CreatAvaliador = () => {
    
    const [avaliadores, setAvaliadores] = useState<Avaliador[]>([]);
    
    async function handleInputChange(event: ChangeEvent<HTMLTextAreaElement>){
        const Avaliadores = event.target.value
        
        const avaliador = Avaliadores.split('\n');

        const objectAvaliador = avaliador.map(function(stringAvaliador,index){
            const splitAvaliadores = stringAvaliador.split('	');
            //console.log(splitAvaliadores)
            const data  ={
                "nome": splitAvaliadores[1],
                "avaliador": splitAvaliadores[2],
                "avaliado": splitAvaliadores[3],
                "siape": splitAvaliadores[4],
                "cpf": splitAvaliadores[5],
                "tipoAvaliador": splitAvaliadores[6],
                "lotado": splitAvaliadores[7],
                "email": splitAvaliadores[8],
                "celular": splitAvaliadores[9]
            };
            return data;
        });
        if(objectAvaliador.length>0){
             setAvaliadores([...avaliadores,...objectAvaliador]);
        }
    }

    async function handleSubmit(event: FormEvent){
        event.preventDefault();
        //avaliadores.map(av=> console.log(av));
        avaliadores.map(av=> api.post("avaliador",av));
        alert("Avaliadores cadastrados com sucesso");
    }

    return(
        <div id="page-create-avaliador">
            <header>

            </header>
            <div className="box-form">
                <div className="img">

                </div>
               <form onSubmit={handleSubmit}>
                    <h1>Cadastro de Avaliadores</h1>

                    <label htmlFor="">Lista de avaliadores:</label>
                    <textarea name="avaliador" id="" onChange={handleInputChange}></textarea>
                    <button type="submit">Cadastrar Avaliadores</button>
                    
                </form>
            </div>
            
        </div>
    );
}

export default CreatAvaliador;