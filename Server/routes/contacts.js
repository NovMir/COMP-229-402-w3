let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//connect to our contact model
let Contact = require ('../../models/contacts');
//get route for the game list page
router.get('/',async (req,res,next)=>{

try {
    let contactlist = await Contact.find();
   //console.log(contactlist)
     
    res.render('contactlist', {title:'Contact List', ContactList : contactlist})
} catch (err)
{
    console.error(err);
}
});
module.exports = router;