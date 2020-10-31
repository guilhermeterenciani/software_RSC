import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('avaliador', table => {
        table.increments('id').primary();
        table.string('nome').notNullable();
        table.string('avaliador').notNullable();
        table.string('avaliado').notNullable();
        table.string('siape').notNullable();
        table.string('cpf').notNullable();
        table.string('tipoAvaliador').notNullable();
        table.string('lotado').notNullable();
        table.string('email').notNullable();
        table.string('celular').notNullable();
        
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropSchema('teacher');
}