exports.up = async knex =>  {
    
  await knex.schema.withSchema('public').createTable('product_type', function(table) {
      table.increments('id').primary();        
      table.string('description').notNullable(); 
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('product_type')
};

