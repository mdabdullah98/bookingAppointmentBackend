const { Sequelize, DataTypes } = require("sequelize");
const db = require("../utils/database");

const User = db.define("users", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique: true,
    allowNull: false,
  },

  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phoneNumber: DataTypes.STRING,
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
module.exports = User;
