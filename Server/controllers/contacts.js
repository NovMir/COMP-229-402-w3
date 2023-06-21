let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// create a reference to the model
let Contact = require ('../models/contacts');

module.exports.displayContactList = async (req, res, next) => {
    try {
        let ContactList = await Contact.find();
        
        console.log(ContactList)
        res.render('businesscontacts/contactlist', {
            title: 'Contact List', 
            ContactList: ContactList,
            displayName: req.user ? req.user.displayName : ''})
    } catch (err) {
        console.error(err);
    }
};

module.exports.displayAddPage = async (req, res, next) =>{
    try {
        res.render('businesscontacts/add', {
            title: 'Add Contacts', 
            displayName: req.user ? req.user.displayName : ''})
    } catch (err) {
        console.error(err);
    }
};

module.exports.processAddPage = async (req, res, next) =>{
    let newContact = new Contact({
        "name": req.body.name,
        "number": req.body.number,
        "email":req.body.email,
    });


    try{
        await newContact.save();
        res.redirect('/contact-list');
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};

module.exports.displayEditPage = async (req, res, next) =>{
    let id = req.params.id;

    try {
        let contactToEdit = await Contact.findById(id);
        res.render('businesscontacts/Edit', {
            title: 'Edit Contact', 
            contact: contactToEdit, 
            displayName: req.user ? req.user.displayName : ''});
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};

module.exports.processEditPage = async (req, res, next) =>{
    let id = req.params.id;
    let updatedContact = {
        "name": req.body.name,
        "number": req.body.number,
        "email":req.body.email,
    };

    try {
        await Contact.updateOne({_id: id}, updatedContact);
        res.redirect('/contact-list');
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};

module.exports.performDelete = async (req, res, next) =>{
    let id = req.params.id;

    try {
        await Contact.findByIdAndRemove(id);
        res.redirect('/contact-list');
    } catch (err) {
        onsole.log(err);
        res.status(500).send(err);
    }
};