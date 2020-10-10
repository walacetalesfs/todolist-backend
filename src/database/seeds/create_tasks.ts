import Knex from 'knex';

export async function seed(knex: Knex) {
    return await knex('tasks').insert([
        { title: 'nlw', description: 'fazer o curso' }
    ]);
}