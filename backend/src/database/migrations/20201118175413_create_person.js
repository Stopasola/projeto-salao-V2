
exports.up = async knex =>  {
    // Create Schema
    await knex.raw('CREATE SCHEMA IF NOT EXISTS public');

    await knex.schema.withSchema('public').createTable('person', function(table) {
        table.integer('id').primary();
        table.integer('cpf').unique().notNullable();
        table.integer('phone').unique().notNullable();
        table.string('address');
        table.integer('cep');
        table.datetime('created_at').notNullable().defaultTo(knex.raw('now()'));
        table.timestamp('updated_at').notNullable().defaultTo(knex.raw('now()'));
        table.datetime('inactivated_at');
        table.string('email').unique();
        table.datetime('bithdate');
        table.string('password');
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('person')
};
