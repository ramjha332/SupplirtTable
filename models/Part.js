//import mongoose module
const mongoose = require('mongoose')

//import Schema
const Schema = mongoose.Schema

let partSchema = new Schema(
    {
        Id : {
            type:String,
            unique:true
        },
        name:{
            type:String,
            default:'Write your name'
        },
        warranty:{
            type:String,
            default:'No Warranty'
        },
        overview:{
            type:String,
            default:''
        },
        price:{
            type:Number,
            default:0
        },
        year:{
            type:Number,
            default:'',
        },
        imagepath:{
            type:String,
            default:'',
        },
        model:{
            type:String,
            default:'',
        },
        brand:{
            type:String,
            default:'',
        },
        engine:{
            type:String,
            default:'',
        },
        categoryId:{
            type:Number,
            default:'',
            unique: true
        },
        subCategoryId:{
            type:Number,
            default:'',
            unique: true
        },
        popular:{
            type:String,
            default:'Not known',
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

mongoose.model('partModel', partSchema);