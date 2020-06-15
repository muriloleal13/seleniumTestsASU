const faker = require('faker');

module.exports = {
  nameKeyword: faker.name.findName(),
  loremKeyword: faker.lorem.word()
}