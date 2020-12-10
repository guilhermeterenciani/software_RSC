import {Response, Request} from 'express'
import Knex from '../database/connection'
class SubItemRscController {
    
    async create(request: Request, response: Response){
            const {
                nome,
                pontuacao_sem_peso,
                pontuacao_com_peso,
                pontuacao_maxima,
                nivel_rsc_idNivel
            } = request.body;

            const SubItemRsc = {
                  nome,
                  pontuacao_sem_peso,
                  pontuacao_com_peso,
                  pontuacao_maxima,
                  nivel_rsc_idNivel
            };
        
            await Knex('subItem_rsc').insert(SubItemRsc);
        return response.json(SubItemRsc);
    }

    async index(request: Request, response: Response){
        const SubItens = await Knex('subItem_rsc').select('*');

        const serializedSubItens = SubItens.map(SubItens =>{
            return{
                id: SubItens.idSubItem_rsc,
                nome: SubItens.nome,
                pontuacao_sem_peso: SubItens.pontuacao_sem_peso,
                pontuacao_com_peso: SubItens.pontuacao_com_peso,
                pontuacao_maxima: SubItens.pontuacao_maxima,
                nivel_rsc_idNivel: SubItens.nivel_rsc_idNivel
            }
        });
        response.json(serializedSubItens);
    }
}

export default SubItemRscController;