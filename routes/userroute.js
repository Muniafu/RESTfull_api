const express = require ('express');
const routes = express.Router();

const user = require('../models/usermodel')
const usercontroller = require('../controller/usercontroller');
const auth_Schema = require ('../auth/auth_Schema');
const {signAccessToken} = require('../helpers/jwtHelper');

// add a user to the database
routes.post('register', usercontroller.Adduser);

// Get a list of user from the database
routes.get('/register', usercontroller.Getuser);

// get one user 
routes.get('register/:id' ,usercontroller.GetOneuser);

routes.patch('register/:id',usercontroller.Updateuser );

//delete a user from the database
routes.delete('/user/:id', usercontroller.Deleteuser);

module.exports = routes;