const { Sequelize } = require("sequelize");
const db = new Sequelize("nodecomplete", "root", "mdabdullah78615", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = db;
