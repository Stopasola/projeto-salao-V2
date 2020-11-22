
exports.up = async knex =>  {
    
    await knex.schema.withSchema('public').createTable('orders', function(table) {
        table.increments('id').primary();
        table.datetime('created_at').notNullable().defaultTo(knex.raw('now()'));
        table.timestamp('updated_at').notNullable().defaultTo(knex.raw('now()'));
        table.float('discount');
        table.boolean('paid');
        table.float('order_value');
        table.float('paid_value');

        table
          .integer('customer_id')
          .notNullable()
          .references('id')
          .inTable('public.customer')
          .index();



    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('orders')
};

