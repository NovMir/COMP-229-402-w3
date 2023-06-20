let mongoose = require('mongoose');

//create a model class
let contactModel = mongoose.Schema({
   name: String,
   number: String,
   email: String

},
{
    collection: 'contactlist'
});

module.exports = mongoose.model('Contact', contactModel);