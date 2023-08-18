const express = require("express");
const router = express.Router();

const userController = require("../controller/user");
router
  .post("/postdata", userController.postUserData)
  .get("/getAllUser", userController.getAllUserData)
  .get("/getSingleUSer/:id", userController.getSingleUser)
  .patch("/updateUSer/:id", userController.updateUser)
  .delete("/deleteUser/:id", userController.deleteUser);
module.exports = router;
