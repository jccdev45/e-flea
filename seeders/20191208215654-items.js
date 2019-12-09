module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Items', [{
      name: 'Orange Lamborghini',
      price: 200000,
      category: 'Auto - Cars',
      photos: 'https://i.imgur.com/yfHCX40.jpg',
      location: '110 realaddress st, NY',
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Macbook Air',
      price: 1009,
      category: 'Computers',
      photos: 'https://i.imgur.com/HAsFOkQ.jpg',
      location: '34 pine st, NJ',
      userId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Air-jordan 12 Gym-Red',
      price: 220

    },

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
