/* eslint-disable func-names */
exports.seed = function (knex) {
  return knex('contacts')
    .del()
    .then(() => knex('contacts').insert([{
      owner: 'dev@tooljet.io',
      reassignedTo: null,
      firstName: 'Greg',
      lastName: 'Crabtree',
      accountId: 1,
      jobTitle: 'VP of Engineering ',
      jobFunction: null,
      managementLevel: null,
      directPhoneNumber: null,
      mobileNumber: null,
      companyHqPhone: null,
      email1: null,
      email2: null,
      department: null,
      linkedinContactUrl: null,
      personStreet: null,
      personCity: null,
      personState: null,
      country: null,
      dndStatus: null,
      aboutCompany: null,
      researchNote: null,
      leadHealthStatus: null,
      lifeCycleStage: null,
      lifeCycleStageLeadStatus: null,
      lifeCycleStageMqlStatus: null,
      lifeCycleStageSqlStatus: null,
    }]));
};
