const express=require('express');
const app=express();
const userRouter=require('./api/route/user');
const mongoose=require('mongoose');
const bodyParser = require('body-parser');


mongoose.connect('mongodb+srv://ramkashyap85:admin@cluster0.ca5p6.mongodb.net/codinffactory?retryWrites=true&w=majority');
mongoose.connection.on('error',err=>{
    console.error('connection Failed')
});

mongoose.connection.on('connected',connected=>{
console.log('DATABASE CONNECTED');
});

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/user',userRouter);




module.exports=app;