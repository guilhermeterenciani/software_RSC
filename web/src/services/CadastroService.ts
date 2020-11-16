import api from './api';


const md5 = require('md5')
interface DataObject{
    siape: String,
    senha: String
}
class CadastroService{
    static async cadastrar({ senha, siape}:DataObject){
        try{
            let criptSenha = md5(senha)

            let resposta = await api.post('/cadastro',{siape,senha:criptSenha})
            console.log(JSON.stringify(resposta));
            return resposta.data
        }catch(error){
            console.log(error);
        }
    }

}

export default CadastroService;
