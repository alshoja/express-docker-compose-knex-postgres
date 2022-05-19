/* eslint-disable func-names */
exports.seed = function (knex) {
  return knex('interaction_types')
    .del()
    .then(() => knex('interaction_types').insert([
      {
        text: 'Connected', type: 'Call',
      },
      {
        text: 'Busy', type: 'Call',
      },
      {
        text: 'Voice Mail', type: 'Call',
      },
      {
        text: 'No Answer', type: 'Call',
      },
      {
        text: 'Gate Keeper', type: 'Call',
      },
      {
        text: 'Wrong Number', type: 'Call',
      },
      {
        text: 'Email Sent', type: 'Email',
      },
      {
        text: 'Reply Received', type: 'Email',
      },
      {
        text: 'Bounced', type: 'Email',
      },
      {
        text: 'Request Sent', type: 'Linkedin',
      },
      {
        text: 'Request Accepted', type: 'Linkedin',
      },
      {
        text: 'Request Withdrawn', type: 'Linkedin',
      },
      {
        text: 'Message Sent', type: 'Linkedin',
      },
      {
        text: 'Reply Received', type: 'Linkedin',
      },
      {
        text: 'Declined', type: 'Meeting',
      },
      {
        text: 'Rescheduled', type: 'Meeting',
      },
      {
        text: 'Completed', type: 'Meeting',
      },
      {
        text: 'No Show', type: 'Meeting',
      },
      {
        text: 'Scheduled', type: 'Meeting',
      },
    ]));
};
