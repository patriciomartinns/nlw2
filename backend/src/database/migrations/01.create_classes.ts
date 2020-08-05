import Knex from 'knex'

export async function up(knex: Knex) {
  return await knex.schema.createTable('classes', table => {
    table.increments('id').primary()
    table.string('subject').notNullable()
    table.string('cost').notNullable()

    table.integer('user_id')
    .notNullable()
    .references('id')
    .inTable('users')
    .onUpdate('CASCADE')
    .onDelete('CASCADE')
  })
}

export async function down(knex: Knex) {
  return await knex.schema.dropTable('classes')
}
