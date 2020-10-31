import {Response, Request} from 'express'
import Knex from '../database/connection'
class AvaliadorController {
    
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

            const Avaliador = {
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
        
            await Knex('avaliador').insert(Avaliador);
        return response.json(Avaliador);
    }

    async index(request: Request, response: Response){
        const avaliadores = await Knex('avaliador').select('*');

        const serializedAvaliador = avaliadores.map(avaliadores =>{
            return{
                nome: avaliadores.nome,
                avaliador: avaliadores.avaliador,
                avaliado: avaliadores.avaliado,
                siape: avaliadores.siape,
                cpf: avaliadores.cpf,
                tipoAvaliador: avaliadores.tipoAvaliador,
                lotado: avaliadores.lotado,
                email: avaliadores.email,
                celular: avaliadores.celular
            }
        });
        response.json(serializedAvaliador);
    }
}

export default AvaliadorController;