const { v4: uuid} = require('uuid');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Books', [
      {
        id: uuid(),
        title: 'The good News',
        author: 'King James',
        progress: 'Currently reading',
        genre: 'Historical',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Books', null, {});
  },
};