import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('itens_pontuacao', table => {
        table.increments('idItens_pontuacao').primary();
        table.string('descricao').notNullable();
        table.string('unidade').notNullable();
        table.integer('quantidade_maxima').notNullable();
        table.float('peso').notNullable();
        table.string('normativa_de_comprovacao').notNullable();

        table.foreign('subitem_rsc_idSubItem').references('idSubItem_rsc').inTable('subItem_rsc').notNullable();
        
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropSchema('nivel_rsc');
}