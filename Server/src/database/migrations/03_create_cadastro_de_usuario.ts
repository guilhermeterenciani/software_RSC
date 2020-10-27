import Knex from 'knex';
import knex from 'knex';

export async function up(knex: Knex){
   
    return knex.schema.createTable('cadastroDeUsuario', table => {
        table.increments('id').primary().notNullable();
        
        table.string('name ').notNullable();
        table.string('sobrenome').notNullable();
        table.string('cpf').notNullable();
        table.string('dataDeNascimento').notNullable();
        table.string('genero').notNullable();
        table.string('telefone').notNullable();
        table.string('email').notNullable();
        table.string('numero_do_processo').notNullable();
        table.integer('senha').notNullable();
        
    })
}
export async function down(knex: Knex){
   
    return knex.schema.dropTable('cadastroDeUsuario');
}