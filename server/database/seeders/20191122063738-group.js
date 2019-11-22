'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Groups',
      [
        {
          id: 1,
          group: 'engineers',
          createdAt: '2019-11-22 00:33:16.945+00',
          updatedAt: '2019-11-22 00:34:22.636+00'
        },
        {
          id: 2,
          group: 'managers',
          createdAt: '2019-11-22 00:33:16.945+00',
          updatedAt: '2019-11-22 00:34:22.636+00'
        },
        {
          id: 3,
          group: 'admins',
          createdAt: '2019-11-22 00:33:16.945+00',
          updatedAt: '2019-11-22 00:34:22.636+00'
        },
        {
          id: 4,
          group: 'executives',
          createdAt: '2019-11-22 00:33:16.945+00',
          updatedAt: '2019-11-22 00:34:22.636+00'
        },
        {
          id: 5,
          group: 'leads',
          createdAt: '2019-11-22 00:33:16.945+00',
          updatedAt: '2019-11-22 00:34:22.636+00'
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Groups', null, {});
  }
};
