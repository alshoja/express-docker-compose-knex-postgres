/* eslint-disable func-names */
/* eslint-disable no-unused-vars */
exports.up = function (knex, Promise) {
  return knex.schema.createTable('campaigns', (tbl) => {
    tbl.increments('id');

    tbl.integer('contactId')
      .nullable()
      .references('id')
      .inTable('contacts')
      .onDelete('NO ACTION')
      .onUpdate('CASCADE');

    tbl.integer('campaignTypeId')
      .nullable()
      .references('id')
      .inTable('campaign_types')
      .onDelete('NO ACTION')
      .onUpdate('CASCADE');

    tbl.string('response');

    tbl.timestamps(false, true);
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('campaigns');
};

