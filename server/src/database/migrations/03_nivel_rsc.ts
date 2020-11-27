import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('nivel_rsc', table => {
        table.increments('idNivel_rsc').primary();
        table.string('numero_processo').notNullable();
        table.binary('documento_rsc').notNullable();
        table.string('id_professor').notNullable();
        
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropSchema('Rsc');
}