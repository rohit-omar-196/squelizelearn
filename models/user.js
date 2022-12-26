const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./index')

const User = sequelize.define('User', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
  }
}, {
  // Other model options go here
});

console.log(User === sequelize.models.User);

module.exports = User