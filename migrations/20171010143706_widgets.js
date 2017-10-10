
exports.up = function (knex, Promise) {
  return knex.schema.createTable('widgets', function (table) {
    table.integer('id')
    table.string('name')
    table.string('price')
    table.string('mfg')
    table.increments('inStock')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('widgets')
}
