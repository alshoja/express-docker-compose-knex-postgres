/* eslint-disable func-names */
exports.seed = function (knex) {
  return knex('accounts')
    .del()
    .then(() => knex('accounts').insert([{
      owner: 'dev@tooljet.io',
      companyName: 'Reciprocity',
      website: 'http://www.reciprocitylabs.com/',
      revenueRange: '$25.4M',
      sicCode1: null,
      sicCode2: null,
      naicsCode1: null,
      naicsCode2: null,
      primaryIndustry: 'Computer Software',
      primarySubIndustry: null,
      facebookUrl: null,
      twitterUrl: null,
      linkedinUrl: 'https://www.linkedin.com/company/reciprocity-inc/',
      ownershipType: null,
      businessModel: null,
      totalFunding: '$1 Million',
      recentFundingRound: 'Debt',
      recentInvestors: 'Undisclosed',
      companyStreetAddress: '548 Market St, #73905',
      companyCity: 'San Francisco',
      companyState: 'California',
      companyZipCode: null,
      companyCountry: 'US',
      fullAddress: '548 Market St, #73905, San Francisco, California, US',
      lifecycleStage: null,
      aboutCompany: null,
      researchNote: null,
      campaignsAssigned: null,
    }]));
};
