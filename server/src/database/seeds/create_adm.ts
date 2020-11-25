import Knex from 'knex';

export async function seed(knek: Knex){
    await knek('professores').insert([
        { 
            nome: 'Guilherme Terenciani',
            email:'guilhermeterenciani@gmail.com',
            senha: '2e3817293fc275dbee74bd71ce6eb056',
            siape: '2350676',
            cpf: '052.199.779-58',
            celular: '67 996238979'
        },
    ]);
}

//Comando para rodar o SEED "npm run knex:seed"