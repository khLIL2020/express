
var express = require('express');
var router = express.Router()
const date = new Date();
const day1 = date.getDay();

now = new Date();
var heure   = date.getHours();
if (day1===6)

{
  router.get('/', function(req, res) {
    res.render('users');
  });
  router.get('/Contact', function(req, res) {
    res.render('users');
  });
  router.get('/Service', function(req, res) {
    res.render('users');
  })


  
  
  }

if (day1===0)

{
  router.get('/', function(req, res) {
    res.render('users');
  });
  router.get('/Contact', function(req, res) {
    res.render('users');
  });
  router.get('/Service', function(req, res) {
    res.render('users');
  })


  
  
  }
  if(heure>17)
  {
  
    {
      router.get('/', function(req, res) {
        res.render('users');
      });
      router.get('/Contact', function(req, res) {
        res.render('users');
      });
      router.get('/Service', function(req, res) {
        res.render('users');
      })
    
    
      
      
      }
  }
  if(heure<9)
  {
  
    {
      router.get('/', function(req, res) {
        res.render('users');
      });
      router.get('/Contact', function(req, res) {
        res.render('users');
      });
      router.get('/Service', function(req, res) {
        res.render('users');
      })
    
    
      
      
      }
      
  }
    else
    {
      router.get('/', function(req, res) {
        res.render('Homepage');
      });
      router.get('/Contact', function(req, res) {
        res.render('Contact');
      });
      router.get('/Service', function(req, res) {
        res.render('Service');
      })
    
    }

module.exports = router;