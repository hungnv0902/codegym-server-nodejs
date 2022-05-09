const UserModel = require('../models/userModel');
const bcrypt = require('bcrypt');

exports.userRegister = async (req, res, next) => {
  console.log(req.body, 'body')
  const user = await UserModel.findOne({username: req.body.username});
  if (user) {
    res.redirect('/user/register');
  }
  const passwordHash = await bcrypt.hash(req.body.password, 10);
  const userData = {
    username: req.body.username,
    password: passwordHash
  };
  const userNew = await UserModel.create(userData);
  if (userNew) {
    res.redirect('/user/login');
  } else {
    res.redirect('/user/register');
  }
}

exports.userLogin = async (req, res, next) => {
  console.log(req.body, 'body')
  const user = await UserModel.findOne({username: req.body.username});
  if (user) {
    const compatePassword = await bcrypt.compare(req.body.password, user.password);
    if(!compatePassword) {
      res.redirect('/user/login');
    } else {
      res.redirect('/user/success');
    }
  } {
    res.redirect('/user/login');
  }
  
}