import {Response, Request} from 'express'
import Knex from '../database/connection'
class NivelRscController {
    
    async create(request: Request, response: Response){
            const {
                nivel,
                maximo_pontos,
                minimo_pontos
            } = request.body;

            const NivelRsc = {
                  nivel,
                  maximo_pontos,
                  minimo_pontos
            };
        
            await Knex('nivel_rsc').insert(NivelRsc);
        return response.json(NivelRsc);
    }

    async index(request: Request, response: Response){
        const NiveisProcesso = await Knex('nivel_rsc').select('*');

        const serializedNivelRsc = NiveisProcesso.map(NiveisProcesso =>{
            return{
                nivel: NiveisProcesso.nivel,
                maximo_pontos: NiveisProcesso.maximo_pontos,
                minimo_pontos: NiveisProcesso.minimo_pontos
            }
        });
        response.json(serializedNivelRsc);
    }
}

export default NivelRscController;