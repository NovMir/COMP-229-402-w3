let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let passport = require('passport');

//connect to our contact model
let Contact = require ('../models/contacts');
let contactsController = require('../controllers/contacts')

function requireAuth(req, res, next)
{
    //check is the user is logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}
// Get Route for the Game List page - READ Operation
router.get('/', contactsController.displayContactList);

// Get Route for displaying the Add page - CREATE Operation
router.get('/add', requireAuth, contactsController.displayAddPage);

// Post Route for processing the Add Page - CREATE Operation
router.post('/add', requireAuth, contactsController.processAddPage);

// Get Route for displaying the Edit Page - UPDATE Operation
router.get('/edit/:id', requireAuth, contactsController.displayEditPage);

// Post Route for processing the Edit Page - UPDATE Operation
router.post('/edit/:id', requireAuth, contactsController.processEditPage);

// Get to perform Deletion - DElETE Operation
router.get('/delete/:id', requireAuth, contactsController.performDelete);
module.exports = router;