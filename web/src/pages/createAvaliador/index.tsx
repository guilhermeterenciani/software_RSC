import { useEffect, useState } from "react"
import React, {ChangeEvent, FormEvent, Component} from 'react';
import api from '../../services/api';

import './style.css';

const CreatAvaliador = () => {
    
    
    
    return(
        <div id="page-create-avaliador">
            <header>

            </header>

            <form>
                <h1>Cadastro de <br/> avaliador</h1>

                <fieldset>
                    <legend>
                        <h2>Dados</h2>        
                    </legend>
                    <div className="field">

                        <textarea name="" id="" /*onChange={handle}*/></textarea>
                    </div>

                </fieldset>
                <button type="submit">
                    Cadastrar Avalidor
                </button>
            </form>
        </div>
    );
}

export default CreatAvaliador;