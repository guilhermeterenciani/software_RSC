import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('subItem_rsc', table => {
        table.increments('idSubItem_rsc').primary();
        table.string('nome').notNullable();
        table.string('pontuacao_sem_peso').notNullable();
        table.string('minimo_com_peso').notNullable();
        table.string('pontuacao_maxima').notNullable();
        
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropSchema('nivel_rsc');
}