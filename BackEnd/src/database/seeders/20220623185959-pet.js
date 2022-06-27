'use strict';

const {faker} = require("@faker-js/faker")
let seed = []

for(let i=15; i<20; i++) {
  seed.push(
    {
      user_id:i,
      name_pet: faker.name.findName(),
      type:faker.animal.type(),
      size:faker.random.word(),
      gender:faker.random.word(),
      address:faker.address.city(),
      state:faker.address.stateAbbr(),
      comments:faker.word.adjective(),
      age:faker.random.word(),
      phone:	faker.finance.amount(),
      status: faker.datatype.boolean(),
      image_pet01:faker.image.cats(),
      image_pet02:faker.image.cats(),
      image_pet03:null,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  )
}

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Pet', [{
      user_id: 15,
      name_pet: "Caramelo",
      type: "Cão",
      size: "Médio",
      gender: "Macho",
      address: "Rua Sete de Setembro, 401",
      state: "Santa Catarina",
      comments: "bla bla",
      age: "Filhote",
      phone: "(47) 8889-9985",
      status:true,
      image_pet01:"www.cloudinary.com",
      createdAt: new Date(),
      updatedAt: new Date(),
    }])

    await queryInterface.bulkInsert('Pet',seed)
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('Pet', null, {});
  }
};
