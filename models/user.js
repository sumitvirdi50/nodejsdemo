const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    first_name:{
        type:String,
    },
    last_name:{
        type:String
    },
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String,
    },
    gender:{
        type:String
    },
    ip_address:{
        type:String
    },
    file:{
        type:String,

    }

},{timestamps:true})

const User = mongoose.model("users",userSchema)

module.exports = User