import {Response, Request} from 'express'
import Knex from '../database/connection'
class TeacherController {
    
    async create(request: Request, response: Response){
            const {
                nome,
                avaliador,
                avaliado,
                siape,
                cpf,
                tipoAvaliador,
                lotado,
                email,
                celular
            } = request.body;

            const teacher = {
                nome,
                avaliador,
                avaliado,
                siape,
                cpf,
                tipoAvaliador,
                lotado,
                email,
                celular
            };
        
            await Knex('avaliador').insert(teacher);
        return response.json(teacher);
    }

    async index(request: Request, response: Response){
        const professores = await Knex('avaliador').select('*');

        const serializedProfessor = professores.map(professor =>{
            return{
                nome: professor.nome,
                avaliador: professor.avaliador,
                avaliado: professor.avaliado,
                siape: professor.siape,
                cpf: professor.cpf,
                tipoAvaliador: professor.tipoAvaliador,
                lotado: professor.lotado,
                email: professor.email,
                celular: professor.celular
            }
        });
        response.json(serializedProfessor);
    }
}

export default TeacherController;