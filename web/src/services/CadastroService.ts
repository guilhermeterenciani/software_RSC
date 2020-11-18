import api from './api';


const md5 = require('md5')
interface DataObject{
    
    email: String,
    nome: String,
    senha: String,
    siape: String,
    cpf: String,
    celular : String,  
}
class CadastroService{
    static async cadastrar({ email, nome ,senha, siape, cpf, celular}:DataObject){
        try{
            let criptSenha = md5(senha)

            let resposta = await api.post('/cadastro',{email, nome ,senha, siape, cpf, celular:criptSenha})
            console.log(JSON.stringify(resposta));
            return resposta.data
        }catch(error){
            console.log(error);
        }
    }

}

export default CadastroService;
