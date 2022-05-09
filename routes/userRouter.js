const express = require('express');
const route = express.Router();
const multer = require('multer');
const upload = multer();
const userController = require('../controllers/userController');
route.get('/register', (req, res) => { res.render('register'); });
route.get('/login', (req, res) => { res.render('login'); });
route.get('/success', (req, res) => { res.render('loginSuccess'); });
route.post('/register', upload.none(), userController.userRegister);
route.post('/login', upload.none(), userController.userLogin);

module.exports = route;