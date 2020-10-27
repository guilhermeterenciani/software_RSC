import Knex from 'knex';

export async function seed(knek: Knex){
    await knek('cadastroDeUsuario').insert([
        { 
            name: 'Guilherme',
            sobrenome: 'Terenciani',
            cpf: '0001112223',
            dataDeNascimento: '02/02/1950',
            genero: 'Masculino',
            telefone: '40028922',
            email: 'tere@edu.gov.br',
            numero_do_processo: '00001',
            senha: 'gui_tere000'

        },
    ]);
}

//Comando para rodar o SEED "npm run knex:seed"