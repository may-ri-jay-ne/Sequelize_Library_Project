const { Sequelize } = require("sequelize");

//create a instance of sequelize


const sequelize = new Sequelize('sql10759413', 'sql10759413', 'F6xrXByiA2', {
    host: 'sql10.freesqldatabase.com',
    dialect:  'mysql'
  });

  module.exports = sequelize;