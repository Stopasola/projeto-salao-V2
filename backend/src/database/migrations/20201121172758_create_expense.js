exports.up = async knex =>  {
    
    await knex.schema.withSchema('public').createTable('expense', function(table) {
        table.increments('id').primary();
        table.float('value').notNullable();
        table.string('description').notNullable();
        table.datetime('created_at').notNullable().defaultTo(knex.raw('now()'));
        table.timestamp('updated_at').notNullable().defaultTo(knex.raw('now()'));
        table.string('payment_method').notNullable();
        table.integer('portion').notNullable();
        table.integer('total_portions').notNullable();
    })
  };
  
  exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('expense')
  };
  