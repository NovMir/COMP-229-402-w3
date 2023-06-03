var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'This is a title'});
});
/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'This is a title'});
});

module.exports = router;
/* GET home page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About Me'});
});

module.exports = router;
/* GET home page. */
router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'Projects'});
});

module.exports = router;
/* GET home page. */
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services'});
});

module.exports = router;
/* GET home page. */
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact'});
});

module.exports = router;
