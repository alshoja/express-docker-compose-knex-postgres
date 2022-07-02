/* eslint-disable func-names */
exports.seed = function (knex) {
  return knex('campaigns')
    .del()
    .then(() => knex('campaigns').insert([
      {
        contactId: 1, campaignTypeId: 1, response: 'res 1',
      },
      {
        contactId: 1, campaignTypeId: 1, response: 'res 7',
      },
    ]));
};
