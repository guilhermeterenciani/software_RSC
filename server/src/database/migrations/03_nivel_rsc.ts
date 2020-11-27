import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('nivel_rsc', table => {
        table.increments('idNivel_rsc').primary();
        table.integer('nivel').notNullable();
        table.float('maximo_pontos').notNullable();
        table.float('minimo_pontos').notNullable();
        
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropSchema('nivel_rsc');
}