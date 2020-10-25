'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
    */

      return queryInterface.bulkInsert('Tasks', [{
        id: 1,
        description: 'Record backend course',
        createAt: new Date(),
        updatedAt: new Date() 
      },
      {
        id: 2,
        description: 'Edit course videos',
        createAt: new Date(),
        updatedAt: new Date() 
      },
      {
        id: 3,
        description: 'Upload the videos',
        createAt: new Date(),
        updatedAt: new Date() 
      }], {});
    
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
    */
      return queryInterface.bulkDelete('Tasks', null, {});
    
  }
};
