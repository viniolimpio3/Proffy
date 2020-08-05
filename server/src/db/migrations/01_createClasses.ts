import Knex from 'knex';

export const up = async (knex: Knex) =>{
    return knex.schema.createTable('classes', table =>{
        table.increments('id').primary();
        table.string('subject').notNullable();
        table.decimal('cost').notNullable();
        
        table.integer('user_id',10).notNullable().unsigned();
        table.foreign('user_id').references('id').inTable('users');
    });
}

export const down = async (knex: Knex) =>{
    return knex.schema.dropTable('classes');
}