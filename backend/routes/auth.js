const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const JWT_SECRET = 'mynameissahil';

// Create a user using: POST 'api/auth/createuser". No login required
router.post('/createuser', [
    body('email', 'Enter a valid email').isEmail(),
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('password', 'Password should contain atleast 8 characters').isLength({ min: 8 })
], async (req, res) => {

    // If there are errors return bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // check whether the user with this email exists already
    try {

        let user = await User.findOne({email: req.body.email});
        if (user) {
            return res.status(400).json({error: "Email already exists"});
        }

        // Salting password
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt);

        // Creating a new user
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secPass,
        });

        // Token authentication using JWT
        const data = {
            user: {
                id: user.id,
            },
        }

        const authtoken = jwt.sign(data, JWT_SECRET);
        res.json({authtoken});

        res.json(user);

    } catch (error) {
        
        console.error(error.message);
        res.status(500).send("Some error occured");

    }

});

module.exports = router