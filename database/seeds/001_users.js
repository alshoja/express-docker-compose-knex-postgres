/* eslint-disable func-names */
exports.seed = function (knex) {
  return knex('users')
    .del()
    .then(() => knex('users').insert([
      {
        name: 'Venkit', title: 'Lead', email: 'venkit@focaloid.com', role: 'Admin', roleLevel: 1,
      },
      {
        name: 'Ajish', title: 'Lead', email: 'ajish@focaloid.com', role: 'Manager', roleLevel: 2,
      },
      {
        name: 'alshoja', title: '', email: 'alshoja@focaloid.com', role: 'Executive', roleLevel: 3,
      },
      {
        name: 'arun', title: '', email: 'arun@focaloid.com', role: 'Executive', roleLevel: 4,
      },
      {
        name: 'dev', title: '', email: 'dev@tooljet.io', role: 'Executive', roleLevel: 5,
      },
    ]));
};
