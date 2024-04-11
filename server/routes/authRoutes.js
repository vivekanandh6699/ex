//authroutes.js
const express = require('express');
const {Router} = require("express")
const router = express.Router();


const authController = require('../controllers/authController');


router.post('/signup',authController.signup);
// router.post('/login',authController.login);
router.post('/login', authController.login);
router.put('/user/:id', authController.updateUser); // Update user route
router.delete('/user/:id', authController.deleteUser); // Delete user route
router.get('/users', authController.getAllUsers); 
router.post('/api/users',authController.createUser);
// router.get("/get", getTasks);

module.exports = router;