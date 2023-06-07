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
  res.render('index', { title: 'About'});
});

module.exports = router;
/* GET projects page */
router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'Projects'});
});

module.exports = router;
/* GET services page */
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services'});
});

module.exports = router;
/* GET contact page */
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact'});
});

module.exports = router;
