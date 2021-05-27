const mongoose = require('mongoose')

//User Schema

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true,
        max:64
    },
    email:{
        type:String,
        trim:true,
        required:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true
    }
},{timestamps:true})

module.exports = mongoose.model('User',userSchema);