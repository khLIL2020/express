const { deleteOne } = require('../models/Person')
const Person=require('../models/Person')


const findPeople = async (req,res,next)=> {
   try {
  const people =  await Person.find()
    res.status(200).send({people})
   } catch (error)
    {
    throw new Error('couldnt find people ')
   }

}
const createAperson=function (req,res,next)
{
    console.log(req.body)
    var item={
    name:req.body.name,
    age:req.body.age,
    favoriteFoods:req.body.favoriteFood,
}
var data=new Person(item);
data.save();
res.status(201).send({message: "person was created successfully", newPerson : data})
}
const createManypeoples=function (req,res,next)
{
   const arrayOfPeople=[{name: 'John', age:87,favoriteFood:["chips","pizza"]}, {name: 'Ahmed', age:19,favoriteFood:["sushi","hamburger"]},{name: 'Cyrine', age:16,favoriteFood:["Sandwich","pates"]},{name: 'Youssef', age:9,favoriteFood:["saumon","pizza"]} ]


console.log(arrayOfPeople) 
Person.insertMany(arrayOfPeople)
   
    .then(function(){ 
        console.log("Data inserted") 
       
    }).catch(function(error){ 
        console.log(error)  
    });

res.status(201).send({message: "person was created successfully", arrayOfPeople})
}

const findById=async(req,res)=>{
    try {
         const _id=req.params.id;
         console.log(_id)
         const thePerson=await Person.findById(_id);
         console.log(thePerson);
         if(!thePerson){
             return res.status(404).send();
         }else 
            res.send(thePerson);
    }
    catch(err) {
          res.send(err);
    }
}
const deleteById=async(req,res)=>{

    const _id=req.params.id;
Person.deleteOne({ _id}).then(function(){
    res.status(201).send({message: "person was deleted successfully"}) // Success
}).catch(function(error){
    console.log(error); // Failure
})}

const updateById= async(req,res)=>{
    var id =  req.params.id;

    Person.findOne({_id: id},function(err,foundObject){
        if(err){
            console.log(err);
            res.status(500).send();

        }else {
            if(!foundObject){
                res.status(404).send();
            } else {
                if(req.body.name) {
                    foundObject.name=req.body.name;
                }

                foundObject.save(function(err,updateOject){
                    if(err){
                        console.log(err);
                        res.status(500).send();

                    }
                    else{
                        res.send(updateOject);
                    }
                })
            }
        }
    })
    }


module.exports = {findPeople,createManypeoples,createAperson,findById,deleteById,updateById}