exports.up = function(knex) {
  return knex.schema
    .createTable('users', (table) => {
      table.integer('id').primary();
      table.text('username').notNullable().unique();
      table.text('password').notNullable();
      table.text('nombre').notNullable();
      table.text('nombre_completo').notNullable();
      table.string('iniciales').notNullable();
      table.text('cargo').notNullable();
      table.text('avatar');
      table.text('nota');
      table.text('observacion').defaultTo('');
    })
    .createTable('sessions', (table) => {
      table.integer('id').primary();
      table.timestamp('expires_at').notNullable();
      table.integer('user_id').references('id').inTable('users').notNullable();
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('sessions')
    .dropTableIfExists('users')
};
