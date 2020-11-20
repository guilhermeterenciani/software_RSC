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
                "nome": splitAvaliadores[0],
                "avaliador": splitAvaliadores[1],
                "avaliado": splitAvaliadores[2],
                "siape": splitAvaliadores[3],
                "cpf": splitAvaliadores[4],
                "tipoAvaliador": splitAvaliadores[5],
                "lotado": splitAvaliadores[6],
                "email": splitAvaliadores[7],
                "celular": splitAvaliadores[8]
            };
            return data;
        });
        if(objectAvaliador.length>0){
             setAvaliadores([...avaliadores,...objectAvaliador]);
        }
    }

    async function handleSubmit(event: FormEvent){
        event.preventDefault();
        avaliadores.map(av=> console.log(av));
        avaliadores.map(av=> api.post("avaliador",av));
        // alert("Avaliadores cadastrados com sucesso");
    }

    return(
        <div id="page-create-avaliador">
            <header>

            </header>

            <img className="wave" src="../../assets/wave.png"/>
	        <div className="container">
		        <div className="img">
			        <img src="img/bg.svg"/>
		        </div>
		        <div className="login-content">
		
                    <form onSubmit={handleSubmit}>
                    
                        <h2 className="title">Cadastrar Avaliador</h2>

                        <div className="input-div one">
                            <div className="i">
                                <i className="fas fa-user"></i>
                            </div>
                            <textarea className= "textarea" rows={15} cols={30} onChange={handleInputChange}></textarea>
                        </div>

                        <input type="submit" className="btn" value="Cadrastar"/>
                    </form>
                </div>
            </div>         
        </div>
    );
}

export default CreatAvaliador;