import { useEffect, useState } from "react"
import React, {ChangeEvent, FormEvent, Component} from 'react';
import api from '../../services/api';

import './styles.css';

interface Rsc{
    numero_processo: String,
    documento_rsc: String,
    id_professor: String
}

const CreatRsc = () => {
    
    const [processo, setProcesso] = useState<Rsc[]>([]);
    
    async function handleInputChange(event: ChangeEvent<HTMLInputElement>){
        const Processo = event.target.value
        
        const rsc = Processo.split('\n');

        const objectRsc = rsc.map(function(stringRsc,index){
            const splitProcesso = stringRsc.split('	');
            //console.log(splitProcesso)
            const data  ={
                "numero_processo": splitProcesso[0],
                "documento_rsc": splitProcesso[1],
                "id_professor": splitProcesso[2]
                };
            return data;
        });
        if(objectRsc.length>0){
             setProcesso([...processo,...objectRsc]);
        }
    }

    async function handleSubmit(event: FormEvent){
        event.preventDefault();
        processo.map(av=> console.log(av));
        processo.map(av=> api.post("rsc",av));
        // alert("Processo cadastrados com sucesso");
    }

    return(
        <div id="page-create-rsc">
            <header>

            </header>

            <img className="wave" src="../../assets/wave.png"/>
	        <div className="container">
		        <div className="img">
			        <img src="img/bg.svg"/>
		        </div>
		        <div className="login-content">
		
                    <form onSubmit={handleSubmit}>
                    
                        <h2 className="title">Cadastrar Processo RSC</h2>

                        <div>
                            <div className="i">
                                <input type="text" 
                                placeholder="Numero do Processo" 
                                name="numero_processo"
                                id="numero_processo"
                                onChange={handleInputChange}/>
                            </div>

                            <div>
                                <label>Documento RSC</label>
                                <input type="file" 
                                placeholder="Documento RSC" 
                                name="documento_rsc"
                                id="documento_rsc"
                                onChange={handleInputChange}/>
                            </div>

                            <div>
                                <input type="text" 
                                placeholder="Id professor" 
                                name="id_professor"
                                id="id_professor"
                                onChange={handleInputChange}/>
                            </div>
                        </div>

                        <input type="submit" className="btn" value="Cadrastar"/>
                    </form>
                </div>
            </div>         
        </div>
    );
}

export default CreatRsc;