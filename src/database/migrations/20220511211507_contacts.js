/* eslint-disable func-names */
/* eslint-disable no-unused-vars */
exports.up = function (knex, Promise) {
  return knex.schema.createTable('contacts', (tbl) => {
    tbl.increments('id');

    tbl.string('owner')
      .nullable()
      .references('email')
      .inTable('users')
      .onDelete('NO ACTION')
      .onUpdate('CASCADE');

    tbl.string('reassignedTo')
      .nullable()
      .references('email')
      .inTable('users')
      .onDelete('NO ACTION')
      .onUpdate('CASCADE');

    tbl.string('firstName');
    tbl.string('lastName');

    tbl.integer('accountId')
      .nullable()
      .references('id')
      .inTable('accounts')
      .onDelete('NO ACTION')
      .onUpdate('CASCADE');

    tbl.string('jobTitle');
    tbl.string('jobFunction');
    tbl.string('managementLevel');
    tbl.string('directPhoneNumber').unique();
    tbl.string('mobileNumber').unique();
    tbl.integer('companyHqPhone').unique();
    tbl.integer('email1').unique();
    tbl.integer('email2').unique();
    tbl.string('department');
    tbl.string('linkedinContactUrl');
    tbl.string('personStreet');
    tbl.string('personCity');
    tbl.string('personState');
    tbl.string('country');
    tbl.boolean('dndStatus');
    tbl.string('aboutCompany');
    tbl.string('researchNote');
    tbl.string('leadHealthStatus');

    tbl.string('lifeCycleStage');
    tbl.string('lifeCycleStageLeadStatus');
    tbl.string('lifeCycleStageMqlStatus');
    tbl.string('lifeCycleStageSqlStatus');

    tbl.timestamps(false, true);
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('contacts');
};

