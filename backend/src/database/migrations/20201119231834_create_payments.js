
exports.up = async knex =>  {
    
    await knex.schema.withSchema('public').createTable('payment', function(table) {
        table.increments('id').primary();
        table.datetime('payed_at').notNullable();
        table.float('value').notNullable();;
        table.string('payment_method').notNullable();
        table.integer('portion').notNullable();
        table.integer('total_portions').notNullable();
        table
          .integer('order_id')
          .notNullable()
          .references('id')
          .inTable('public.orders')
          .index();
        
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('payment')
};