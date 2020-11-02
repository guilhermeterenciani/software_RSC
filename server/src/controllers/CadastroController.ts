import {Response, Request} from 'express'
import Knex from '../database/connection'

class CadastroController{
    async create(request: Request, response: Response){
        const {
            nome,
            sobrenome,
            cpf,
            dataDeNascimento,
            genero,
            telefone,
            email,
            numero_de_processo,
            senha
        } = request.body;

        const cadastro = {
            nome,
            sobrenome,
            cpf,
            dataDeNascimento,
            genero,
            telefone,
            email,
            numero_de_processo,
            senha
        };
    
        await Knex('cadastroDeUsuario').insert(cadastro);

    return response.json(cadastro);
    }

   /* async index(request: Request, response: Response){
        const usuarios = await Knex('cadastroDeUsuario').select('*');

        const serializedUsuarios = usuarios.map(usuarios =>{
            return{
                nome: usuarios.nome, 
                sobrenome: usuarios.sobrenome,
                cpf: usuarios.cpf,
                dataDeNascimento: usuarios.dataDeNascimento,
                genero: usuarios.genero,
                telefone: usuarios.telefone,
                email: usuarios.email,
                numero_de_processo: usuarios.numero_de_processo,
                senha: usuarios.senha,
            }
        });
        response.json(serializedUsuarios);
    }  */
}

export default CadastroController;