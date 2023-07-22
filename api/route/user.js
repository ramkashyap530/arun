const express = require("express");
const user_model = require("../models/user_model");
const { default: mongoose } = require("mongoose");
const router=  express.Router();


router.get('/',(req,res,next)=>{
    user_model.find()
    .then(result=>{
        res.status(200).json({
           "users":result
        });
    })
    .catch(err=>{
        console.error(err);
        res.status(404).json("Not Found");
    })
  
})

router.get('/:id',(req,res,next)=>{

    user_model.findOne({ username: 'admin 3' })
    .then(result=>{
        res.status(200).json({
           "users":result
        });
    })
    .catch(err=>{
        console.error(err);
        res.status(404).json("Not Found");
    })
  
})


router.post('/login',(req,res,next)=>{

    user_model.findOne({ username: req.body.username,password:req.body.password })
    .then(result=>{
        res.status(200).json({
           "users":result
        });
    })
    .catch(err=>{
        console.error(err);
        res.status(404).json("Not Found");
    })
  
})

router.post('/',(req,res,next)=>{
    const user=new user_model({
        _id:new mongoose.Types.ObjectId,
        username:req.body.username,
        password:req.body.password,
        email_id:req.body.email_id,
        phone_no:req.body.phone_no,
        real_name:req.body.real_name,
    })

    user.save().then(result=>{
        console.log(result);
        res.status(201).json({
            newUser:result
        });
    }).catch(err=>{
        console.error(err);
        res.status(500).json({error:"SOME ERROR"});
    })
    
})

module.exports = router;
