import React, {ChangeEvent, FormEvent, useState} from "react";

import api from '../../services/api';
import './style.css';

const Processos_RSC = () => {

    const [formData, setFormData] = useState({
        tipo_rsc: '',
        peso: '',
        unidade: '',
        fator_da_pontuacao: '',
        pontuacao_solicitada: '',
        pontuacao_final: '',
        qtnd_max_de_itens: '',
        quantidade_comprovada: ''
    });

    function handleInputChange(event: ChangeEvent<HTMLInputElement>){
        const {name, value} = event.target;

        setFormData({...formData, [name]: value });
    }

    async function handleSubmit(event: FormEvent) {

        event.preventDefault(); 

        const { tipo_rsc, peso, unidade, fator_da_pontuacao, pontuacao_solicitada, pontuacao_final, qtnd_max_de_itens, quantidade_comprovada} = formData;

            const data = {
                tipo_rsc,
                peso,
                unidade, 
                fator_da_pontuacao,
                pontuacao_solicitada,
                pontuacao_final, 
                qtnd_max_de_itens, 
                quantidade_comprovada
            };

            console.log(data)
            await api.post('tabela_rsc', data);
            alert("Formulário Enviado");
        }


    return(
        <div>
            <div>
                <h1>Tabela de Processos RSC</h1>
            </div>
            <br/><br/>
            <div>
                <form action="" onSubmit={handleSubmit}>

                    <h2>Insira seus Dados</h2>
                    <br/>
                    <div>
                        <input type="text" placeholder="Tipo RSC" name="tipo_rsc"
                        onChange={handleInputChange}
                        />
                    </div>
                    <br/>
                    <div>
                        <input type="text" placeholder="Peso" name="peso"
                        onChange={handleInputChange}
                        />
                    </div>
                    <br/>
                    <div>
                        <input type="text" placeholder="Unidade" name="unidade"
                        onChange={handleInputChange}
                        />
                    </div>
                    <br/>
                    <div>
                        <input type="text" placeholder="Fator da Pontuação" name="fator_da_pontuacao"
                        onChange={handleInputChange}
                        />
                    </div>
                    <br/>
                    <div>
                        <input type="text" placeholder="Pontuação Solicitada" name="pontuacao_solicitada"
                        onChange={handleInputChange}
                        />
                    </div>
                    <br/>
                    <div>
                        <input type="text" placeholder="Pontuação Final" name="pontuacao_final"
                        onChange={handleInputChange}
                        />
                    </div>
                    <br/>
                    <div>
                        <input type="text" placeholder="Quantidade Máxima de Itens" name="qtnd_max_de_itens"
                        onChange={handleInputChange}
                        />
                    </div>
                    <br/>
                    <div>
                        <input type="text" placeholder="Quantidade Comprovada" name="quantidade_comprovada"
                        onChange={handleInputChange}
                        />
                    </div>
                    <br/>
                    <div>
                        <input type="submit" value="Enviar"/>
                    </div>
                </form>     
            </div>
        </div>
    );
}

export default Processos_RSC;