import {Request, Response} from 'express';
import Knex from 'knex';
import { getRepository } from 'typeorm'; 

import User from '../app/models/User';

class LoginController {
    async autenticar(req: Request, res: Response ){
        const dados = Knex('professores');
        console.log(dados);
    }
}


export default new LoginController();



// 30:40





































// import {Response, Request, request} from 'express'
// import Knex from '../database/connection'

// const TokenUtil = require("../util/TokenUtil")


// interface DataObject{
//     siape: String,
//     senha: String
// }
// interface Professor{
//     siape: String,
//     senha: String
// }
// class LoginController {
//     //devolver usuario logado com token
//     static loggedUserFormatter(user: { id: any; email: any; nome: any; role: any; }, token: any) {
//         return {
//             id: user.id,
//             //email: user.email,
//             nome: user.nome,
//             //role: user.role,
//             token: token
//         };
//     }


//     static async autenticar(request: Request, response: Response){
//         try {        
//             if (!request.body.siape || !request.body.senha)
//                 //throw { message: "E-mail e Senha devem ser informados!" };
//                 return response.status(200).send({status: 401, message: "E-mail e Senha devem ser informados!"});
//             console.log(JSON.stringify({siape:request.body.siape,senha:request.body.senha}))
//             let user = await Knex('professores').where({siape:request.body.siape}).first();
//             console.log(JSON.stringify(user)) 
            
//             if(!user) return response.status(200).send({status: 401, message: "Usuário não encontrado!"});

//             if(user.senha != request.body.senha) return response.status(200).send({status: 401, message: "Senha inválida!"});


//             let token = TokenUtil.genereteToken({nome: user.nome, siape: user.siape}) //email: user.email, _id: user._id, role: user.role});

//             let userLogado = await LoginController.loggedUserFormatter(user, token);
//             console.log(JSON.stringify(userLogado))
//             return response.status(200).send(userLogado);
//         } catch (error) {
//             return response.status(500).send(error.message)
        
//         }
//     }
// }

// export default LoginController