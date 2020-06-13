const express = require('express')
const mongoose = require('mongoose')
var partModel = require('../models/Part')
const shortid = require('shortid')
const response = require('../libs/responseLib')
const time = require('../libs/timeLib')
const check = require('../libs/checkLib')
const logger = require('../libs/loggerLib')


//inserting the model here
const Part = mongoose.model('partModel')

let getAllPart = (req, res) => {
    Part.find()
        .select('-__v -_id')
        .lean()
        .exec((err, result) => {
            if(err){
                console.log(err)
                logger.error(err.message,'Part Controller : getAllPart', 10)
                let apiResponse = response.generate(true, 'Failed to find Part Details', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                console.log("No result")
                // res.send("No result")
                logger.info('No result Found','Part Controller:getAllPart')
                let apiResponse = response.generate(true, 'No Details Found', 404, null)
                res.send(apiResponse)
            } else {
                // res.send(result)
                let apiResponse = response.generate(false, 'All Part details found', 200, result)
                res.send(apiResponse)
            }
        })
}//end getAllSuppliers

let viewByPartId = (req, res) => {
    console.log(req.user)
    Part.findOne({'Id' : req.params.Id},(err, result) => {
        if(err){
            console.log(err)
            logger.error(`Error occured : ${err}`, 'Database', 10)
            let apiResponse = response.generate(true, 'Failed to find Part Details', 500, null)
            res.send(apiResponse)
        } else if (check.isEmpty(result)) {
            console.log('No Part Details Found')
            let apiResponse = response.generate(true, 'No Part details Found', 404, null)
            res.send(apiResponse)
        } else {
            let apiResponse = response.generate(false, 'All Part details found', 200, result)
            res.send(apiResponse)
            logger.info("Part found successfully","Part controller:ViewByPartId",5)
        }
    })
}


let createPart = (req, res) => {
    var today = Date.now()
    let Id = shortid.generate()

    let newTable2 = new Part({
        Id : Id,
        name : req.body.name,
        warranty : req.body.warranty,
        overview : req.body.overview,
        price : req.body.price,
        year : req.body.year,
        imagepath : req.body.imagepath,
        model : req.body.model,
        brand : req.body.brand,
        engine : req.body.engine,
        categoryId : req.body.categoryId,
        subCategoryId : req.body.subCategoryId,
        popular : req.body.popular,
        created : today,
        lastModified : today
    })//end new blog Model

    newTable2.save((err, result) => {
        if (err){
            console.log(err)
            // res.send(err)
            logger.error(`Error occured : ${err}`, 'Database', 10)
            let apiResponse = response.generate(true, 'Failed to find Part Details', 500, null)
            res.send(apiResponse)
        } else {
            // res.send(result)
            let apiResponse = response.generate(false, 'All Part details found', 200, result)
            res.send(apiResponse)
        }
    })//end newBlog save
}

let editPart = (req, res) => {

    let options = req.body;
    console.log(options);
    Part.update({'Id':req.params.Id}, options, {multi : true}).exec((err, result) => {
        if(err){
            console.log(err)
            // res.send(err)
            logger.error(`Error occured : ${err}`, 'Database', 10)
            let apiResponse = response.generate(true, 'Failed to find Part Details', 500, null)
            res.send(apiResponse)
        } else if (check.isEmpty(result)) {
            console.log('No Details Found')
            // res.send('No result found')
            let apiResponse = response.generate(true, 'No Details Found', 404, null)
            res.send(apiResponse)
        } else {
            // res.send(result)
            let apiResponse = response.generate(false, 'All Part details found', 200, result)
            res.send(apiResponse)
        }
    })
}

let deletePart = (req, res) => {
    Part.remove({'Id':req.params.Id},(err, result) => {
        if(err){
            console.log(err)
            // res.send(err)
            logger.error(`Error occured : ${err}`, 'Database', 10)
            let apiResponse = response.generate(true, 'Failed to find Part Details', 500, null)
            res.send(apiResponse)
        } else if (check.isEmpty(result)) {
            console.log('No Details Found')
            // res.send("No result")
            let apiResponse = response.generate(true, 'No Details Found', 404, null)
            res.send(apiResponse)
        } else {
            // res.send(result)
            let apiResponse = response.generate(false, 'All Part details found', 200, result)
            res.send(apiResponse)
        }
    })
}

module.exports = {
    getAllPart : getAllPart,
    createPart : createPart,
    editPart : editPart,
    deletePart : deletePart,
    viewByPartId : viewByPartId
}