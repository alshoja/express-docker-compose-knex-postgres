/* eslint-disable func-names */
/* eslint-disable no-unused-vars */
exports.up = function (knex, Promise) {
  return knex.schema.createTable('users', (tbl) => {
    tbl.increments('id');

    tbl.string('title').nullable();
    tbl.string('name').nullable();
    tbl.string('email').unique();
    tbl.string('role');

    tbl.string('reportingManager')
      .nullable()
      .references('email')
      .inTable('users')
      .onDelete('NO ACTION')
      .onUpdate('CASCADE');

    tbl.string('team').nullable();
    tbl.string('type').nullable();
    tbl.integer('roleLevel').unique();

    tbl.timestamps(false, true);
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('users');
};
