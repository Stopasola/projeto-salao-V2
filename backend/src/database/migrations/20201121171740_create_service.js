exports.up = async knex =>  {
    
    await knex.schema.withSchema('public').createTable('service', function(table) {
        table.increments('id').primary();
        table.float('value').notNullable();
        table.datetime('created_at').notNullable().defaultTo(knex.raw('now()'));
        table.timestamp('updated_at').notNullable().defaultTo(knex.raw('now()'));
        table.timestamp('inactivated_at').notNullable().defaultTo();
        table.float('commission').notNullable();
        table
          .integer('employee_id')
          .notNullable()
          .references('id')
          .inTable('public.employee')
          .index();
        table
          .integer('orders_id')
          .references('id')
          .inTable('public.orders')
          .index();
        
        
    })
  };
  
  exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('service')
  };
  