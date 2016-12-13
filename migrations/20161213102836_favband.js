
exports.up = function(knex, Promise) {
  return knex.schema.createTable('favband', (table) =>{
    table.increments();
    table.string('name').notNullable();
    table.integer('number_of_albums').nullable();
    table.string('fav_song')
    table.string('genre')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('favband');
};
