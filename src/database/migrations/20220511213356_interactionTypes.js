/* eslint-disable func-names */
/* eslint-disable no-unused-vars */
exports.up = function (knex, Promise) {
  return knex.schema.createTable('interaction_types', (tbl) => {
    tbl.increments('id');

    tbl.string('text');
    tbl.string('type');

    tbl.timestamps(false, true);
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('interaction_types');
};

