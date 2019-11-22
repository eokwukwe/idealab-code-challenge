'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'GroupRoles',
      [
        {
          groupId: 1,
          roleId: 1,
          createdAt: '2019-11-22 00:33:16.945+00',
          updatedAt: '2019-11-22 00:34:22.636+00'
        },
        {
          groupId: 1,
          roleId: 2,
          createdAt: '2019-11-22 00:33:16.945+00',
          updatedAt: '2019-11-22 00:34:22.636+00'
        },
        {
          groupId: 1,
          roleId: 5,
          createdAt: '2019-11-22 00:33:16.945+00',
          updatedAt: '2019-11-22 00:34:22.636+00'
        },
        {
          groupId: 2,
          roleId: 3,
          createdAt: '2019-11-22 00:33:16.945+00',
          updatedAt: '2019-11-22 00:34:22.636+00'
        },
        {
          groupId: 2,
          roleId: 1,
          createdAt: '2019-11-22 00:33:16.945+00',
          updatedAt: '2019-11-22 00:34:22.636+00'
        },
        {
          groupId: 3,
          roleId: 1,
          createdAt: '2019-11-22 00:33:16.945+00',
          updatedAt: '2019-11-22 00:34:22.636+00'
        },
        {
          groupId: 2,
          roleId: 5,
          createdAt: '2019-11-22 00:33:16.945+00',
          updatedAt: '2019-11-22 00:34:22.636+00'
        },
        {
          groupId: 3,
          roleId: 3,
          createdAt: '2019-11-22 00:33:16.945+00',
          updatedAt: '2019-11-22 00:34:22.636+00'
        },
        {
          groupId: 3,
          roleId: 2,
          createdAt: '2019-11-22 00:33:16.945+00',
          updatedAt: '2019-11-22 00:34:22.636+00'
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('GroupRoles', null, {});
  }
};
