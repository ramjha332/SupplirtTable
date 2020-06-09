//import mongoose module
const mongoose = require('mongoose')

//import Schema
const Schema = mongoose.Schema

let table1Schema = new Schema(
    {
        Id : {
            type:String,
            unique:true
        },
        name:{
            type:String,
            default:'Write your name'
        },
        city:{
            type:String,
            default:'Please mention your city'
        },
        state:{
            type:String,
            default:''
        },
        zip:{
            type:Number,
            default:0
        },
        phone:{
            type:Number,
            default:'',
            unique: true
        },
        emailId:{
            type:String,
            default:'',
            unique: true
        },
        created:{
            type:Date,
            default:Date.now
        },
        lastModified:{
            type:Date,
            default:Date.now
        }
    }

)

mongoose.model('SupplierTable', table1Schema);