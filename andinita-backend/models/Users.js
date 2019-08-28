'use strict'

const mongoose = require('mongoose');
const Shema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

let User = new Shema({
    name:{
        type:String,
        required:[true,'the name is required']
    },
    surname:{
        type:String,
        required:[true,'the surname is required']
    },
    email:{
        type:String,
        required:[true,'the email is required'],
        unique: true,
    },
    password:{
        type:String,
        required:[true,'the password is required']
    },
    avatar:{
        type:String,
        default :null
    },
    phone:{
        type:String,
        required:[true,'the phone is required']
    }
});

User.plugin(uniqueValidator , {mensagem :'{PATH} it already exists'})
module.exports = mongoose.model('User',User);