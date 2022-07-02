/* eslint-disable func-names */
/* eslint-disable no-unused-vars */
exports.up = function (knex, Promise) {
  return knex.schema.createTable('interactions', (tbl) => {
    tbl.increments('id');

    tbl.integer('contactId')
      .nullable()
      .references('id')
      .inTable('contacts')
      .onDelete('NO ACTION')
      .onUpdate('CASCADE');

    tbl.integer('interactionTypeId')
      .nullable()
      .references('id')
      .inTable('interaction_types')
      .onDelete('NO ACTION')
      .onUpdate('CASCADE');

    tbl.string('response');

    tbl.timestamps(false, true);
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('interactions');
};

