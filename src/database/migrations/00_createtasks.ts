import Knex from 'knex';

export async function up(knex: Knex) {
    return await knex.schema.createTable('tasks', table => {
        table.increments('id').primary();
        table.string('title').notNullable();
        table.string('description').notNullable();
    });
}

export async function down(knex: Knex) {
    return await knex.schema.dropTable('tasks');
}