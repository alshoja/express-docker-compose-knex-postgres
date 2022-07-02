/* eslint-disable func-names */
/* eslint-disable no-unused-vars */
exports.up = function (knex, Promise) {
  return knex.schema.createTable('campaign_types', (tbl) => {
    tbl.increments('id');

    tbl.string('area');
    tbl.string('status');

    tbl.timestamps(false, true);
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('campaign_types');
};

