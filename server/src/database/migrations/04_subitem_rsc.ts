import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('subItem_rsc', table => {
        table.increments('idSubItem_rsc').primary();
        table.string('nome').notNullable();
        table.float('pontuacao_sem_peso').notNullable();
        table.float('minimo_com_peso').notNullable();
        table.float('pontuacao_maxima').notNullable();

        table.integer('nivel_rsc_idNivel')
        .notNullable()    
        .references('idNivel_rsc')
        .inTable('nivel_rsc')
            
        
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropSchema('subItem_rsc');
}