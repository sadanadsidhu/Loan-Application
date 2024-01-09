const db = require("../models");

//create main Model
const User = db.users;

//main work

// 1.create user
const addUser = async (req, res) => {
  let info = {
    name: req.body.username,
    email: req.body.email,
    password: req.body.password,
  };

  const user = await User.create(info);
  res.status(200).send(user);
  // console.log(user);
};

module.exports = {
  addUser,
};