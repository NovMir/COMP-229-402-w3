let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//connect to our contact model
let Contact = require ('../models/contacts');
//get route for the game list page -- Read operation
router.get('/',async (req,res,next)=>{

try {
    let contactlist = await Contact.find();
    console.log(contactlist)
     
    res.render('businesscontacts/contactlist', {title:'Contact List', ContactList : contactlist})
} catch (err)
{
    console.error(err);
}
});

//Get Route for the Add page - Create Operation
router.get('/add',async (req,res,next)=>{

    try {
      res.render('businesscontacts/add', {title:'Add Contacts',})
    } catch (err)
    {
        console.error(err);
    }
    });
    
//post route for procrssing the Add Page - Create Operation
router.post('/add',async (req,res,next)=>{
    let newContact = new Contact({
        "name": req.body.name,
        "number": req.body.number,
        "email":req.body.email,
    })

    try {
      await newContact.save();
      res.redirect('/contact-list');
    } catch (err)
    {
        console.error(err);
        res.status(500).send(err);
    }
    });
//get Route for displaying the Edit page - Update Operation
router.get('/edit/:id',async (req,res,next)=>{
   let id = req.params.id;
    try {
        let contactToEdit = await Contact.findById(id);
        res.render('businesscontacts/Edit', {title:'Edit Contact', contact:contactToEdit})
    } catch 
    (err)
    {
        console.error(err);
        res.status(500).send(err);
    }
    });
//Post Route for processing the Edit Page - update Operation
router.post('/edit/:id',async (req,res,next)=>{
    let id = req.params.id;
    let updatedContact ={
        "name": req.body.name,
        "number": req.body.number,
        "email":req.body.email,
    };
    try {
        await Contact.updateOne({_id:id},updatedContact);
        res.redirect('/contact-list');

    
    } catch(err){
        console.error(err);
        res.status(500).send(err);
    }


    });
// get to perform deletion -Delete operation
router.get('/delete/:id',async (req,res,next)=>{
 let id = req.params.id;
 try{
    await Contact.findByIdAndRemove(id);
    res.redirect('contact-list');
 }catch(err){
    console.error(err);
    res.status(500).send(err);
}

});
module.exports = router;