'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'UserGroups',
      [
        {
          userId: 1,
          groupId: 1,
          createdAt: '2019-11-22 00:33:16.945+00',
          updatedAt: '2019-11-22 00:34:22.636+00'
        },
        {
          userId: 1,
          groupId: 2,
          createdAt: '2019-11-22 00:33:16.945+00',
          updatedAt: '2019-11-22 00:34:22.636+00'
        },
        {
          userId: 1,
          groupId: 3,
          createdAt: '2019-11-22 00:33:16.945+00',
          updatedAt: '2019-11-22 00:34:22.636+00'
        },
        {
          userId: 2,
          groupId: 1,
          createdAt: '2019-11-22 00:33:16.945+00',
          updatedAt: '2019-11-22 00:34:22.636+00'
        },
        {
          userId: 3,
          groupId: 3,
          createdAt: '2019-11-22 00:33:16.945+00',
          updatedAt: '2019-11-22 00:34:22.636+00'
        },
        {
          userId: 3,
          groupId: 2,
          createdAt: '2019-11-22 00:33:16.945+00',
          updatedAt: '2019-11-22 00:34:22.636+00'
        },
        {
          userId: 2,
          groupId: 4,
          createdAt: '2019-11-22 00:33:16.945+00',
          updatedAt: '2019-11-22 00:34:22.636+00'
        },
        {
          userId: 1,
          groupId: 5,
          createdAt: '2019-11-22 00:33:16.945+00',
          updatedAt: '2019-11-22 00:34:22.636+00'
        },
        {
          userId: 2,
          groupId: 5,
          createdAt: '2019-11-22 00:33:16.945+00',
          updatedAt: '2019-11-22 00:34:22.636+00'
        },
        {
          userId: 3,
          groupId: 4,
          createdAt: '2019-11-22 00:33:16.945+00',
          updatedAt: '2019-11-22 00:34:22.636+00'
        },
        {
          userId: 3,
          groupId: 1,
          createdAt: '2019-11-22 00:33:16.945+00',
          updatedAt: '2019-11-22 00:34:22.636+00'
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('UserGroups', null, {});
  }
};
