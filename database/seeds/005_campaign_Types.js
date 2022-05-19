/* eslint-disable func-names */
exports.seed = function (knex) {
  return knex('campaign_types')
    .del()
    .then(() => knex('campaign_types').insert([
      {
        area: 'USA', status: 'ONGOING',
      },
      {
        area: 'INDIA', status: 'HOLD',
      },
      {
        area: 'JAPAN', status: 'HOLD',
      },
      {
        area: 'CANADA', status: 'HOLD',
      },
    ]));
};
