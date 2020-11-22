
exports.up = async knex =>  {
    
    await knex.schema.withSchema('public').createTable('customer', function(table) {
        table.increments('id').primary();
        table.float('balance').notNullable();
        table.string('description');
        table
          .integer('person_id')
          .notNullable()
          .references('id')
          .inTable('public.person')
          .index();
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('customer')
};
