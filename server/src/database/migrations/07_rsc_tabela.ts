import Knex from 'knex';

export async function up(knex: Knex) { 
    return knex.schema.createTable('tabela_rsc', table => {
        table.increments('id').primary();
        table.string('tipo_rsc').notNullable();
        table.float('peso').notNullable();
        table.float('fator_da_pontuacao').notNullable();
        table.float('pontuacao_solicitada').notNullable();
        table.float('pontuacao_final').notNullable();
        table.float('quantidade_comprovada').notNullable();
        table.float('qtnd_max_de_itens').notNullable();
        table.float('unidade').notNullable();
       
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropSchema('tabela_rsc');
}