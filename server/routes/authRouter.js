const express = require('express');
const { body } = require('express-validator');
const fetchUser = require(`${__dirname}/../middlewares/fetchUser`);
const authController = require(`${__dirname}/../controllers/authController`);

const router = express.Router();

// ROUTE 1: Create a user using: POST 'api/auth/createuser". No login required
router.post('/createuser', [
    body('email', 'Enter a valid email').isEmail(),
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('password', 'Password should contain atleast 8 characters').isLength({ min: 8 }),
], authController.createUser);


// ROUTE 2: Authenticate a user using: POST 'api/auth/login". No login required
router.post('/login', [
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password cannot be blank  ').exists(),
], authController.login);


// ROUTE 3: Get logged in user details: POST 'api/auth/getuser". Login required
router.get('/getuser', fetchUser, authController.getuser);


module.exports = router
