const express = require('express')
const mongoose = require('mongoose')
var SupplierTable = require('../models/Supplier')
const shortid = require('shortid')
const response = require('../libs/responseLib')
const time = require('../libs/timeLib')
const check = require('../libs/checkLib')
const logger = require('../libs/loggerLib')


//inserting the model here
const Suppliers = mongoose.model('SupplierTable')

let getAllSuppliers = (req, res) => {
    Suppliers.find()
        .select('-__v -_id')
        .lean()
        .exec((err, result) => {
            if(err){
                console.log(err)
                logger.error(err.message,'supplierController : getAllSuppliers', 10)
                let apiResponse = response.generate(true, 'Failed to find Supplier Details', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                console.log("No result")
                // res.send("No result")
                logger.info('No result Found','supplierController:getAllSuppliers')
                let apiResponse = response.generate(true, 'No Details Found', 404, null)
                res.send(apiResponse)
            } else {
                // res.send(result)
                let apiResponse = response.generate(false, 'All Supplier details found', 200, result)
                res.send(apiResponse)
            }
        })
}//end getAllSuppliers

let viewByTableId = (req, res) => {
    console.log(req.user)
    Suppliers.findOne({'Id' : req.params.Id},(err, result) => {
        if(err){
            console.log(err)
            logger.error(`Error occured : ${err}`, 'Database', 10)
            let apiResponse = response.generate(true, 'Failed to find Blog Details', 500, null)
            res.send(apiResponse)
        } else if (check.isEmpty(result)) {
            console.log('No Supplier Found')
            let apiResponse = response.generate(true, 'No Supplier Found', 404, null)
            res.send(apiResponse)
        } else {
            let apiResponse = response.generate(false, 'All Supplier details found', 200, result)
            res.send(apiResponse)
            logger.info("Supplier found successfully","supplierController:ViewByTableId",5)
        }
    })
}


let createSupplier = (req, res) => {
    var today = Date.now()
    let Id = shortid.generate()

    let newTable1 = new Suppliers({
        Id : Id,
        name : req.body.name,
        city : req.body.city,
        state : req.body.state,
        zip : req.body.zip,
        phone : req.body.phone,
        emailId : req.body.emailId,
        created : today,
        lastModified : today
    })//end new blog Model

    newTable1.save((err, result) => {
        if (err){
            console.log(err)
            // res.send(err)
            logger.error(`Error occured : ${err}`, 'Database', 10)
            let apiResponse = response.generate(true, 'Failed to find Supplier Details', 500, null)
            res.send(apiResponse)
        } else {
            // res.send(result)
            let apiResponse = response.generate(false, 'All Supplier details found', 200, result)
            res.send(apiResponse)
        }
    })//end newBlog save
}

let editSupplier = (req, res) => {

    let options = req.body;
    console.log(options);
    Suppliers.update({'Id':req.params.Id}, options, {multi : true}).exec((err, result) => {
        if(err){
            console.log(err)
            // res.send(err)
            logger.error(`Error occured : ${err}`, 'Database', 10)
            let apiResponse = response.generate(true, 'Failed to find Supplier Details', 500, null)
            res.send(apiResponse)
        } else if (check.isEmpty(result)) {
            console.log('No Details Found')
            // res.send('No result found')
            let apiResponse = response.generate(true, 'No Details Found', 404, null)
            res.send(apiResponse)
        } else {
            // res.send(result)
            let apiResponse = response.generate(false, 'All Supplier details found', 200, result)
            res.send(apiResponse)
        }
    })
}

let deleteSupplier = (req, res) => {
    Suppliers.remove({'Id':req.params.Id},(err, result) => {
        if(err){
            console.log(err)
            // res.send(err)
            logger.error(`Error occured : ${err}`, 'Database', 10)
            let apiResponse = response.generate(true, 'Failed to find Supplier Details', 500, null)
            res.send(apiResponse)
        } else if (check.isEmpty(result)) {
            console.log('No Details Found')
            // res.send("No result")
            let apiResponse = response.generate(true, 'No Details Found', 404, null)
            res.send(apiResponse)
        } else {
            // res.send(result)
            let apiResponse = response.generate(false, 'All Supplier details found', 200, result)
            res.send(apiResponse)
        }
    })
}

module.exports = {
    getAllSuppliers : getAllSuppliers,
    createSupplier : createSupplier,
    editSupplier : editSupplier,
    deleteSupplier : deleteSupplier,
    viewByTableId : viewByTableId
}