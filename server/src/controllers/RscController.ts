import {Response, Request} from 'express'
import Knex from '../database/connection'
class RscController {
    
    async create(request: Request, response: Response){
            const {
                numero_processo,
                documento_rsc,
                id_professor
            } = request.body;

            const Rsc = {
                numero_processo,
                documento_rsc,
                id_professor
            };
        
            await Knex('rsc').insert(Rsc);
        return response.json(Rsc);
    }

    async index(request: Request, response: Response){
        const processo = await Knex('rsc').select('*');

        const serializedRsc = processo.map(processo =>{
            return{
                numero_processo: processo.numero_processo,
                documento_rsc: processo.documento_rsc,
                id_professor: processo.id_professor
            }
        });
        response.json(serializedRsc);
    }
}

export default RscController;