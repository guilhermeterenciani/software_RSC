import knex from 'knex';
import path from 'path'
import { createConnection } from 'typeorm';

//createConnection().then(() => console.log("Sucesso da Conexao"));

const connection = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite'),
    },
    
    useNullAsDefault: true,
})

export default connection;