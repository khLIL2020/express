 const mongoose = require('mongoose');
 
 
 const person=mongoose.Schema({
  
 name:{type:String, required:true},

  age:Number,

  favoriteFood:[{type:String}],
  
  });

  module.exports = mongoose.model('People',person)