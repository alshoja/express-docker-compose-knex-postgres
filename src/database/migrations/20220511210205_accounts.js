/* eslint-disable func-names */
/* eslint-disable no-unused-vars */
exports.up = function (knex, Promise) {
  return knex.schema.createTable('accounts', (tbl) => {
    tbl.increments('id');

    tbl.string('owner')
      .nullable()
      .references('email')
      .inTable('users')
      .onDelete('NO ACTION')
      .onUpdate('CASCADE');

    tbl.string('companyName');
    tbl.string('website');
    tbl.string('revenueRange');
    tbl.string('sicCode1');
    tbl.string('sicCode2');
    tbl.string('naicsCode1');
    tbl.string('naicsCode2');
    tbl.string('primaryIndustry');
    tbl.string('primarySubIndustry');
    tbl.string('facebookUrl');
    tbl.string('twitterUrl');
    tbl.string('linkedinUrl');
    tbl.string('ownershipType');
    tbl.string('businessModel');
    tbl.string('totalFunding');
    tbl.string('recentFundingRound');
    tbl.string('recentInvestors');
    tbl.string('companyStreetAddress');
    tbl.string('companyCity');
    tbl.string('companyState');
    tbl.string('companyZipCode');
    tbl.string('companyCountry');
    tbl.string('fullAddress');
    tbl.string('lifecycleStage');
    tbl.string('aboutCompany');
    tbl.string('researchNote');
    //   Needed to be another frgn table
    tbl.string('campaignsAssigned');

    tbl.timestamps(false, true);
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('accounts');
};

