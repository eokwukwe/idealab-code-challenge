'use strict';
const bcrypt = require('bcryptjs');
const hashPassword = password => bcrypt.hashSync(password, 10);

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Users',
      [
        {
          id: 1,
          name: 'John Doe',
          email: 'john@doe.com',
          password: hashPassword('johndoe'),
          isVerified: true,
          createdAt: '2019-11-22 00:33:16.945+00',
          updatedAt: '2019-11-22 00:34:22.636+00'
        },
        {
          id: 2,
          name: 'Jane Doe',
          email: 'jane@doe.com',
          password: hashPassword('janedoe'),
          isVerified: true,
          createdAt: '2019-11-22 00:33:16.945+00',
          updatedAt: '2019-11-22 00:34:22.636+00'
        },
        {
          id: 3,
          name: 'Joe Doe',
          email: 'joe@doe.com',
          password: hashPassword('joedoe'),
          isVerified: true,
          createdAt: '2019-11-22 00:33:16.945+00',
          updatedAt: '2019-11-22 00:34:22.636+00'
        },
        {
          id: 4,
          name: 'Paul smith',
          email: 'paul@smith.com',
          password: hashPassword('paulsmith'),
          isVerified: true,
          createdAt: '2019-11-22 00:33:16.945+00',
          updatedAt: '2019-11-22 00:34:22.636+00'
        },
        {
          id: 5,
          name: 'John smith',
          email: 'john@smith.com',
          password: hashPassword('johnsmith'),
          isVerified: true,
          createdAt: '2019-11-22 00:33:16.945+00',
          updatedAt: '2019-11-22 00:34:22.636+00'
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
