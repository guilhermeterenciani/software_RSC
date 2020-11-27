import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('rsc', table => {
        table.increments('id').primary();
        table.string('numero_processo').notNullable();
        table.binary('documento_rsc').notNullable();
        table.integer('id_professor').notNullable();
        
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropSchema('rsc');
}