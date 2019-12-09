module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Items', [{
      name: 'Orange Lamborghini',
      price: 200000,
      category: 'Auto - Cars, Motorcycles',
      photos: 'https://i.imgur.com/yfHCX40.jpg',
      location: '110 Realaddress St, NY',
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Macbook Air',
      price: 899,
      category: 'Computers',
      photos: 'https://i.imgur.com/HAsFOkQ.jpg',
      description: 'Stole from apple store. selling cheap or trading for pokemon cards', 
      location: '34 Pine St, NJ',
      userId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Air-jordan 12 Gym-Red',
      price: 220,
      category: 'Clothing & Shoes',
      photos: 'https://i.imgur.com/EPc2Cqt.jpg',
      description: 'Y0 seLling FreSh kix bro! CHeap and ez deal, dm me :)',
      location: '72 Marjorie Ct, NY',
      userId: 3,
      createdAt: new Date(),
      updatedAt: new Date(),


    },
    {
      name: 'Iphone X 64GB',
      price: 649,
      category: 'Cell Phones, Tablets, Smart Mobile Devices',
      photos: 'https://i.imgur.com/R8kELLD.jpg',
      description: 'I hate iphones',
      location: '40 Dewey Rd, CT',
      userId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Old Sony portable TV',
      price: 20,
      category: 'Electronics, Computers, Appliances',
      photos: 'https://i.imgur.com/0fDC2OY.jpg',
      description: 'Selling and old portable TV that I found in my attic',
      location: '20 Maple Place, AZ',
      userId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Red Christmas Sweater',
      price: 30,
      category: 'Clothing & Shoes',
      photos: 'https://i.imgur.com/r8V6e6i.png',
      description: 'My mom gave me this for christmas...',
      location: '84 Manhasset Woods Rd, NY',
      userId: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Nintendo Switch',
      price: 200,
      category: 'Electronics, Computers, Appliances',
      photos: 'https://i.imgur.com/XFmJtCm.jpg',
      description: 'I Lost all my friends playing Mario Party, this console is cursed',
      location: '200 Frontdaily Rd, FL',
      userId: 7,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Napkin signed by Stan Lee',
      price: 9000,
      category: 'Art & Antiques',
      photos: 'https://i.imgur.com/U0AIpAF.jpg',
      description: 'Selling my treasured napkin signed by Stan Lee because I need money to pay for school',
      location: '80 Cedar Swamp Rd, NY',
      userId: 8,
      createdAt: new Date(),
      updatedAt: new Date()
    }

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
