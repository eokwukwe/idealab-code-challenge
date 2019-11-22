'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert(
        'RolePermissions',
        [
          {
            roleId: 1,
            permissionId: 1,
            createdAt: '2019-11-22 00:33:16.945+00',
            updatedAt: '2019-11-22 00:34:22.636+00'
          },
          {
            roleId: 1,
            permissionId: 3,
            createdAt: '2019-11-22 00:33:16.945+00',
            updatedAt: '2019-11-22 00:34:22.636+00'
          },
          {
            roleId: 1,
            permissionId: 2,
            createdAt: '2019-11-22 00:33:16.945+00',
            updatedAt: '2019-11-22 00:34:22.636+00'
          },
          {
            roleId: 2,
            permissionId: 1,
            createdAt: '2019-11-22 00:33:16.945+00',
            updatedAt: '2019-11-22 00:34:22.636+00'
          },
          {
            roleId: 3,
            permissionId: 3,
            createdAt: '2019-11-22 00:33:16.945+00',
            updatedAt: '2019-11-22 00:34:22.636+00'
          },
          {
            roleId: 2,
            permissionId: 3,
            createdAt: '2019-11-22 00:33:16.945+00',
            updatedAt: '2019-11-22 00:34:22.636+00'
          },
          {
            roleId: 2,
            permissionId: 5,
            createdAt: '2019-11-22 00:33:16.945+00',
            updatedAt: '2019-11-22 00:34:22.636+00'
          },
          {
            roleId: 2,
            permissionId: 2,
            createdAt: '2019-11-22 00:33:16.945+00',
            updatedAt: '2019-11-22 00:34:22.636+00'
          },
        ],
        {}
      );
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('RolePermissions', null, {});
  }
};
