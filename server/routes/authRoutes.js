//authroutes.js

const express = require('express');
const authController = require('../controllers/authController');

const router = express.Router();

router.post('/signup',authController.signup);
// router.post('/login',authController.login);
router.post('/login', authController.login);
router.put('/user/:id', authController.updateUser); // Update user route
router.delete('/user/:id', authController.deleteUser); // Delete user route
router.get('/users', authController.getAllUsers); 

module.exports = router;