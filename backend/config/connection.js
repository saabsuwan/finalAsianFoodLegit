//Setting up the connection to MySQL

// Require mysql
var Sequelize = require("sequelize");

// Creates mySQL connection using Sequelize, the empty string in the third argument spot is our password.
var sequelize = new Sequelize("sequelize_asianfoodlegit2", "root", "", {
    host: "localhost",
    port: 3306,
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }
  });
  
  // Exports the connection for other files to use
  module.exports = sequelize;
  