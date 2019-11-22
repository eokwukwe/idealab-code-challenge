'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Permissions',
      [
        {
          id: 1,
          permission: 'can-review',
          description: 'can review a pr',
          createdAt: '2019-11-22 00:33:16.945+00',
          updatedAt: '2019-11-22 00:34:22.636+00'
        },
        {
          id: 2,
          permission: 'can-approve',
          description: 'can approve a pr',
          createdAt: '2019-11-22 00:33:16.945+00',
          updatedAt: '2019-11-22 00:34:22.636+00'
        },
        {
          id: 3,
          permission: 'can-merge',
          description: 'can merge a pr',
          createdAt: '2019-11-22 00:33:16.945+00',
          updatedAt: '2019-11-22 00:34:22.636+00'
        },
        {
          id: 4,
          permission: 'can-deploy',
          description: 'can deploy a pr',
          createdAt: '2019-11-22 00:33:16.945+00',
          updatedAt: '2019-11-22 00:34:22.636+00'
        },
        {
          id: 5,
          permission: 'can-reject',
          description: 'can reject a pr',
          createdAt: '2019-11-22 00:33:16.945+00',
          updatedAt: '2019-11-22 00:34:22.636+00'
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Permissions', null, {});
  }
};
