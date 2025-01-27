const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    first_name:{
        type:String,
        required:true
    },
    last_name:{
        type:String
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    gender:{
        type:String
    },
    ip_address:{
        type:String
    }

},{timestamps:true})

const User = mongoose.model("users",userSchema)

module.exports = User