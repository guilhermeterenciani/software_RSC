import React, { ChangeEvent, useState, FormEvent } from 'react';

import api from '../../services/api';

const CreateProfessor = () =>{
    const [formData, setFormData] = useState({
        email: '',
        nome: '',
        senha: '',
        siape: '',
        cpf: '',
        processorsc: '',
        numprocesso: '',
        celular: ''
    });

    function handleInputChange(event: ChangeEvent<HTMLInputElement>){
        const {name, value} = event.target;

        setFormData({ ...formData, [name]: value });
    }

    async function handleSubmit(event: FormEvent) {
        event.preventDefault(); 

        const { email, nome, senha, siape, cpf, processorsc, numprocesso, celular} = formData;

        const data = {
            email,
            nome,
            senha,
            siape,
            cpf,
            processorsc,
            numprocesso,
            celular 
        };

        console.log(data)
        await api.post('professores', data);
        alert("Professor cadastrado !");
    }

    return (

        <form onSubmit={handleSubmit}>
        <fieldset>
        <div>
            <label>Email</label>
            <input
                type= "text"
                name= "email"
                id= "email"
                onChange={handleInputChange}
            />
        </div>

        <div>
            <label>Nome</label>
            <input
                type= "text"
                name= "nome"
                id= "nome"
                onChange={handleInputChange}
            />
        </div>
        
        <div>
            <label>Senha</label>
            <input
                type= "password"
                name= "senha"
                id= "senha"
                onChange={handleInputChange}
            />
        </div>

        <div>
            <label>Siape</label>
            <input
                type= "text"
                name= "siape"
                id= "siape"
                onChange={handleInputChange}
            />
        </div>

        <div>
            <label>Cpf</label>
            <input
                type= "text"
                name= "cpf"
                id= "cpf"
                onChange={handleInputChange}
            />
        </div>

        <div>
            <label>Processo de RSC</label>
            <input
                type= "text"
                name= "processorsc"
                id= "processorsc"
                onChange={handleInputChange}
            />
        </div>

        <div>
            <label>Numero do processo RSC</label>
            <input
                type= "text"
                name= "numprocesso"
                id= "numprocesso"
                onChange={handleInputChange}
            />
        </div>

        <div>
            <label>Celular</label>
            <input
                type= "text"
                name= "celular"
                id= "celular"
                onChange={handleInputChange}
            />
        </div>

        </fieldset>

        <button type="submit" >
            Cadastrar
        </button>
        
        </form>
    );
}
export default CreateProfessor;