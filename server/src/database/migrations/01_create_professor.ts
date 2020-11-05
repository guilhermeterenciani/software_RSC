import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('professores', table => {
        table.increments('id').primary();
        table.string('email').notNullable();
        table.string('nome').notNullable();
        table.string('senha').notNullable();
        table.string('siape').notNullable();
        table.string('cpf').notNullable();
        table.string('celular').notNullable();

    });
}

export async function down(knex: Knex) {
    return knex.schema.dropSchema('professor');
}