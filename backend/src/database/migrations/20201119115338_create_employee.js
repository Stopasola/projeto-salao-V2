
exports.up = async knex =>  {
    
    await knex.schema.withSchema('public').createTable('employee', function(table) {
        table.increments('id').primary();
        table.float('salary');
        table.string('job');
        table.boolean('manager');
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
    .dropTableIfExists('employee')
};

