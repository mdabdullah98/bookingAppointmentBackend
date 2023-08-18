const express = require("express");
const server = express();
const cors = require("cors");
const sequelize = require("./utils/database");
const router = require("./routes/user");

//to create all model we have import all the models here
const Product = require("./models/product");
const User = require("./models/user");

const port = process.env.Port || 8080;

//cors middle to solve the croos origin issue
server.use(cors());

//body parser
server.use(express.static("dist"));
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
// middleware router
server.use("/user", router);

// sync method looks into all the models and create tables in database
sequelize
  .sync()
  .then((res) => {
    server.listen(port, () => {
      console.log(`server is listening on http://localhost:${port}`);
    });
  })
  .catch((err) => console.log(err));
