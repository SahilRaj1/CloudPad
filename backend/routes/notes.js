const express = require('express');
const fetchuser = require('../middleware/fetchuser');
const Note = require('../models/Notes');
const { body, validationResult } = require('express-validator');
const router = express.Router();


// ROUTE 1: Get all the notes using: GET 'api/notes/fetchallnotes". Login required
router.get('/fetchallnotes', fetchuser, async (req, res) => {
    
    try {

        const notes = await Note.find({user: req.user.id});
        res.json(notes);

    } catch (error) {
        
        console.error(error.message);
        res.status(500).send("Internal server error");

    }

});


// ROUTE 1: Add a new Note using: POST 'api/notes/addnote". Login required
router.post('/addnote', fetchuser, [
    body('title', 'Enter a valid title').isLength({min: 3}),
    body('description', 'Description must be atleast 5 characters').isLength({min: 5}),
], async (req, res) => {
    
    try {
        
        // If there are errors return bad request and the errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
        }

        const {title, description, tag} = req.body;

        // Creating a new note
        const note = new Note({
            title, description, tag, user: req.user.id,
        });
        const savedNote = await note.save();

        res.json(savedNote);

    } catch (error) {
        
        console.error(error.message);
        res.status(500).send("Internal server error");

    }

});


module.exports = router