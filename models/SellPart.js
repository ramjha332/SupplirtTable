//import mongoose module
const mongoose = require('mongoose')

//import Schema
const Schema = mongoose.Schema

let sellPartTable = new Schema(
    {
        userId : {
            type:String,
            unique:true
        },
        customerName:{
            type:String,
            default:'Write your name'
        },
        partQr:{
            type:String,
            default:'Put QR image'
        },
        partLNo:{
            type:Number,
            default:'',
            unique: true
        },
        customerPhone:{
            type:Number,
            default:'',
            unique: true
        },
        warranty:{
            type:String,
            default:'',
        },
        notes:{
            type:String,
            default:''
        },
        Id : {
            type:String,
            unique:true
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

mongoose.model('sellPartModel', sellPartTable);