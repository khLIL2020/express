var express = require('express');
var router = express.Router()


router.get('/contact', function(req, res) {
  res.render('Contact', { title: 'Contact' ,url:'/Contact'});
});

module.exports = router;
