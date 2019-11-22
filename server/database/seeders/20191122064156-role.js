'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
     return queryInterface.bulkInsert(
       'Roles',
       [
         {
           id: 1,
           role: 'frontend',
           createdAt: '2019-11-22 00:33:16.945+00',
           updatedAt: '2019-11-22 00:34:22.636+00'
         },
         {
           id: 2,
           role: 'backend',
           createdAt: '2019-11-22 00:33:16.945+00',
           updatedAt: '2019-11-22 00:34:22.636+00'
         },
         {
           id: 3,
           role: 'devops',
           createdAt: '2019-11-22 00:33:16.945+00',
           updatedAt: '2019-11-22 00:34:22.636+00'
         },
         {
           id: 4,
           role: 'designer',
           createdAt: '2019-11-22 00:33:16.945+00',
           updatedAt: '2019-11-22 00:34:22.636+00'
         },
         {
           id: 5,
           role: 'database',
           createdAt: '2019-11-22 00:33:16.945+00',
           updatedAt: '2019-11-22 00:34:22.636+00'
         }
       ],
       {}
     );
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Roles', null, {});
  }
};
