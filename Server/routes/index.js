var express = require('express');
var router = express.Router();
let indexController = require('../controllers/index')
/* GET home page. */
router.get('/', indexController.displayHomePage);
/* GET home page. */
router.get('/home', indexController.displayHomePage);

module.exports = router;
/* GET about me page. */
router.get('/about', indexController.displayAboutPage);

module.exports = router;
/* GET projects page */
router.get('/projects', indexController.displayProjectsPage);

module.exports = router;
/* GET services page */
router.get('/services', indexController.displayServicesPage);

module.exports = router;
/* GET contact page */
router.get('/contact', indexController.displayContactPage);

module.exports = router;
