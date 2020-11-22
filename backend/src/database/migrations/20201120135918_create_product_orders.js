exports.up = async knex =>  {
    
    await knex.schema.withSchema('public').createTable('product_orders', function(table) {
        table.increments('id').primary();     
        table.integer('qtd_sold').notNullable();
           
        table
          .integer('order_id')
          .notNullable()
          .references('id')
          .inTable('public.orders')
          .index();
        
          table
          .integer('product_id')
          .notNullable()
          .references('id')
          .inTable('public.product')
          .index();
  
    })
  };
  
  exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('product_orders')
  };