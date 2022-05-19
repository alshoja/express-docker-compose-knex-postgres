/* eslint-disable func-names */
exports.seed = function (knex) {
  return knex('interactions')
    .del()
    .then(() => knex('interactions').insert([
      {
        contactId: 1, interactionTypeId: 1, response: 'res 1',
      },
      {
        contactId: 1, interactionTypeId: 7, response: 'res 7',
      },
      {
        contactId: 1, interactionTypeId: 12, response: 'res 12',
      },
      {
        contactId: 1, interactionTypeId: 16, response: 'res 16',
      },
    ]));
};
