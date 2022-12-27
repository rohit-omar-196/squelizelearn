const { Sequelize, DataTypes, Model } = require("sequelize");

const sequelize = new Sequelize("firstdbsequelize", "root", "rohitomar#12#", {
  host: "localhost",
  logging:false,
  dialect: "mysql",
});

try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.user = require('./user')(sequelize,DataTypes);
db.contact = require('./contact')(sequelize,DataTypes,Model);

db.sequelize.sync({force:true})

module.exports = db