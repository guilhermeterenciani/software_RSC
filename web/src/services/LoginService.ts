import api from './api'
//import md5 from 'md5'
const md5 = require('md5')
interface DataObject{
    siape: String,
    senha: String
}
class LoginService{
    static async logar({siape,senha}:DataObject){
        try{
            let criptSenha = md5(senha)
            console.log(criptSenha)
            let resposta = await api.post('/login',{siape,senha:criptSenha})
            console.log(JSON.stringify(resposta));
            return resposta.data
        }catch(error){
            console.log(error);
        }
    }

}

export default LoginService;