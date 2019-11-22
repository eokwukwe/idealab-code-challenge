'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert(
        'UserRoles',
        [
          {
            userId: 1,
            roleId: 1,
            createdAt: '2019-11-22 00:33:16.945+00',
            updatedAt: '2019-11-22 00:34:22.636+00'
          },
          {
            userId: 1,
            roleId: 3,
            createdAt: '2019-11-22 00:33:16.945+00',
            updatedAt: '2019-11-22 00:34:22.636+00'
          },
          {
            userId: 1,
            roleId: 5,
            createdAt: '2019-11-22 00:33:16.945+00',
            updatedAt: '2019-11-22 00:34:22.636+00'
          },
          {
            userId: 5,
            roleId: 1,
            createdAt: '2019-11-22 00:33:16.945+00',
            updatedAt: '2019-11-22 00:34:22.636+00'
          },
          {
            userId: 5,
            roleId: 2,
            createdAt: '2019-11-22 00:33:16.945+00',
            updatedAt: '2019-11-22 00:34:22.636+00'
          },
          {
            userId: 3,
            roleId: 3,
            createdAt: '2019-11-22 00:33:16.945+00',
            updatedAt: '2019-11-22 00:34:22.636+00'
          },
          {
            userId: 3,
            roleId: 2,
            createdAt: '2019-11-22 00:33:16.945+00',
            updatedAt: '2019-11-22 00:34:22.636+00'
          },
          {
            userId: 2,
            roleId: 4,
            createdAt: '2019-11-22 00:33:16.945+00',
            updatedAt: '2019-11-22 00:34:22.636+00'
          },
          {
            userId: 2,
            roleId: 1,
            createdAt: '2019-11-22 00:33:16.945+00',
            updatedAt: '2019-11-22 00:34:22.636+00'
          },
          {
            userId: 5,
            roleId: 5,
            createdAt: '2019-11-22 00:33:16.945+00',
            updatedAt: '2019-11-22 00:34:22.636+00'
          },
        ],
        {}
      );
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('UserRoles', null, {});
  }
};
