

const express=require('express')
var mongoose = require("mongoose");
const PersonController = require('../controllers/personController')
const router=express.Router();
const Person=require('../models/Person')

router.get('/',PersonController.findPeople)

router.post('/', PersonController.createAperson)

router.post('/peoples', PersonController.createManypeoples)

router.get("/id/:id",PersonController.findById);

router.delete("/supprimer/:id",PersonController.deleteById)

router.put("/changer/:id",PersonController.updateById)

module.exports=router;