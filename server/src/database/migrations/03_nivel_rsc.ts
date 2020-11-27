import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('nivel_rsc', table => {
        table.increments('idNivel_rsc').primary();
        table.string('nivel').notNullable();
        table.string('maximo_pontos').notNullable();
        table.string('minimo_pontos').notNullable();
        
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropSchema('nivel_rsc');
}