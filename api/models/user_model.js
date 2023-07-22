const { default: mongoose } = require("mongoose");

const userSchema=new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    username:String,
    password:String,
    email_id:String,
    phone_no:String,
    real_name:String,
});

module.exports=mongoose.model('User',userSchema);