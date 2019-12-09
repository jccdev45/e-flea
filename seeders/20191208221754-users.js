const faker = require('faker');

const users = [...Array(16)].map((user) => (
  {
    firstname: faker.name.firstname(),
    lastname: faker.name.lastname(),
    email: faker.internet.email(),
    username: faker.internet.username(),
    password: faker.internet.password(8),
    photo: faker.image.avatar(),
    createdAt: new Date(),
    updatedAt: new Date()
  }
))

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', users, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
