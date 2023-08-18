const User = require("../models/user");

exports.postUserData = (req, res) => {
  const reqbody = req.body;
  console.log(typeof reqbody.phoneNumber);
  User.create({
    username: reqbody.username,
    phoneNumber: reqbody.phoneNumber,
    email: reqbody.email,
  })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => console.log(err));
};

exports.getAllUserData = (req, res) => {
  User.findAll()
    .then((resData) => {
      res.json(resData);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.deleteUser = (req, res) => {
  const id = req.params.id;
  User.findByPk(id)
    .then((user) => {
      return user.destroy();
    })
    .then((deleteUSer) => {
      res.json(deleteUSer);
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.updateUser = (req, res) => {
  const id = req.params.id;
  User.findByPk(id)
    .then((user) => {
      user.username = req.body.username;
      user.phoneNumber = req.body.phoneNumber;
      user.email = req.body.email;
      return user.save();
    })
    .then((updatedUser) => {
      res.json(updatedUser);
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.getSingleUser = (req, res) => {
  const id = req.params.id;
  User.findByPk(id)
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      console.log(err);
    });
};
