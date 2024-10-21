exports.up = function(knex) {
  return knex.schema
    .createTable('users', (table) => {
      table.increments('id');
      table.text('username').notNullable().unique();
      table.text('password').notNullable();
      table.text('nombre').notNullable();
      table.text('nombre_completo').notNullable();
      table.string('iniciales').notNullable();
      table.text('cargo').notNullable();
      table.text('avatar');
    })
    .createTable('notas', (table) => {
      table.integer('user_id').references('id').inTable('users').notNullable();
      table.text('nota');
      table.text('observacion').notNullable().defaultTo('');
    })
    .createTable('sessions', (table) => {
      table.text('id').primary();
      table.timestamp('expires_at').notNullable();
      table.integer('user_id').references('id').inTable('users').notNullable();
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('sessions')
    .dropTableIfExists('notas')
    .dropTableIfExists('users')
};
