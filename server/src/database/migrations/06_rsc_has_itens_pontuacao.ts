import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('rsc_has_itens_pontuacao', table => {
        table.increments('id').primary();
        table.float('quantidade_comprovada').notNullable();
        table.float('pontuacao_final_com_peso').notNullable();
        table.string('pdf_comprovacao').notNullable();
        
        
        table.integer('idTable_pontuacao')
            .notNullable()
            .references('idItens_pontuacao')
            .inTable('itens_pontuacao');

        table.integer('idTable_Rsc')
            .notNullable()
            .references('id')
            .inTable('rsc');
        
        
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropSchema('rsc_has_itens_pontuacao');
}