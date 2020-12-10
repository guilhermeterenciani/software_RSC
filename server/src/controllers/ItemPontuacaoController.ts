import {Response, Request} from 'express'
import Knex from '../database/connection'
class ItemPotuacaoController {
    
    async create(request: Request, response: Response){
            const {
                descricao,
                unidade,
                quantidade_maxima,
                peso,
                normativa_de_comprovacao,
                subitem_rsc_idSubItem,
            } = request.body;

            const Item = {
                descricao,
                unidade,
                quantidade_maxima,
                peso,
                normativa_de_comprovacao,
                subitem_rsc_idSubItem,
            };
        
            await Knex('itens_pontuacao').insert(Item);
        return response.json(Item);
    }

    async index(request: Request, response: Response){
        const itensPontuacao = await Knex('itens_pontuacao').select('*');

        const serializedItensPontuacao = itensPontuacao.map(itensPontuacao =>{
            return{
                id:                         itensPontuacao.idItens_pontuacao,
                descricao:                  itensPontuacao.descricao,
                unidade:                    itensPontuacao.unidade,
                quantidade_maxima:          itensPontuacao.quantidade_maxima,
                peso:                       itensPontuacao.peso,
                normativa_de_comprovacao:   itensPontuacao.normativa_de_comprovacao,
                subitem_rsc_idSubItem:      itensPontuacao.subitem_rsc_idSubItem,
            }
        });
        response.json(serializedItensPontuacao);
    }
}

export default ItemPotuacaoController;