import {Response, Request} from 'express'
import Knex from '../database/connection'
class ProfessorController {
    
    async create(request: Request, response: Response){
            const {
                email,
                nome,
                senha,
                siape,
                cpf,
                processorsc,
                numprocesso,
                celular
            } = request.body;

            const professor = {
                email,
                nome,
                senha,
                siape,
                cpf,
                processorsc,
                numprocesso,
                celular
            };
        
            await Knex('professores').insert(professor);
        return response.json(professor);
    }

    async index(request: Request, response: Response){
        const prof = await Knex('professores').select('*');

        const serializedUmProfessor = prof.map(umprofessor =>{
            return{
                email: umprofessor.email,
                nome: umprofessor.nome,
                senha: umprofessor.senha,
                siape: umprofessor.siape,
                cpf: umprofessor.cpf,
                processorsc: umprofessor.processorsc,
                numprocesso: umprofessor.numprocesso,
                celular: umprofessor.celular
            }
        });
        response.json(serializedUmProfessor);
    }
}

export default ProfessorController;