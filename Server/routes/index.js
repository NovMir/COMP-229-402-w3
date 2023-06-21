var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home'});
});
/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home'});
});

module.exports = router;
/* GET about me page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About'});
});

module.exports = router;
/* GET projects page */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects'});
});

module.exports = router;
/* GET services page */
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services'});
});

module.exports = router;
/* GET contact page */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact'});
});

module.exports = router;
