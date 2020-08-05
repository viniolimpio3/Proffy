import Knex from 'knex';

export const up = async (knex: Knex) =>{
    return knex.schema.createTable('connections', table =>{
        table.increments('id').primary();

        table.integer('user_id',10).notNullable().unsigned()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');

        table.string('created_at')
        .defaultTo('now()')
        .notNullable()
    });
}

export const down = async (knex: Knex) =>{
    return knex.schema.dropTable('connections');
}