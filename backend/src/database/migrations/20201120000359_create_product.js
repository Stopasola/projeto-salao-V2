exports.up = async knex =>  {
    
  await knex.schema.withSchema('public').createTable('product', function(table) {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.float('cost_value').notNullable();
      table.float('sale_value').notNullable();
      table.integer('stock').notNullable();
      table.datetime('created_at').notNullable().defaultTo(knex.raw('now()'));
      table.timestamp('updated_at').notNullable().defaultTo(knex.raw('now()'));
      table.timestamp('inactivated_at').notNullable().defaultTo();
      table.string('bar_code').notNullable();
      
      table
        .integer('product_type_id')
        .notNullable()
        .references('id')
        .inTable('public.product_type')
        .index();

      // Aplicado apenas nos casos em que o funcionário ganha comissão na venda
      table
        .integer('employee_id')
        .references('id')
        .inTable('public.employee')
        .index();
      
      
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('product')
};
