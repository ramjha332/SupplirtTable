const express = require('express')
const mongoose = require('mongoose')
var sellPartModel = require('../models/SellPart')
const shortid = require('shortid')
const response = require('../libs/responseLib')
const time = require('../libs/timeLib')
const check = require('../libs/checkLib')
const logger = require('../libs/loggerLib')


//inserting the model here
const sellPart = mongoose.model('sellPartModel')

let getAllSellPart = (req, res) => {
    sellPart.find()
        .select('-__v -_id')
        .lean()
        .exec((err, result) => {
            if(err){
                console.log(err)
                logger.error(err.message,'sellPartController : getAllSellPart', 10)
                let apiResponse = response.generate(true, 'Failed to find Sell Part Details', 500, null)
                res.send(apiResponse)
            } else if (check.isEmpty(result)) {
                console.log("No result")
                // res.send("No result")
                logger.info('No result Found','sellPartController:getAllPart')
                let apiResponse = response.generate(true, 'No Details Found', 404, null)
                res.send(apiResponse)
            } else {
                // res.send(result)
                let apiResponse = response.generate(false, 'All sell details found', 200, result)
                res.send(apiResponse)
            }
        })
}//end getAllSell

let viewBySellPartId = (req, res) => {
    console.log(req.user)
    sellPart.findOne({'Id' : req.params.Id},(err, result) => {
        if(err){
            console.log(err)
            logger.error(`Error occured : ${err}`, 'Database', 10)
            let apiResponse = response.generate(true, 'Failed to find sellPart Details', 500, null)
            res.send(apiResponse)
        } else if (check.isEmpty(result)) {
            console.log('No sell Details Found')
            let apiResponse = response.generate(true, 'No sell details Found', 404, null)
            res.send(apiResponse)
        } else {
            let apiResponse = response.generate(false, 'All sell details found', 200, result)
            res.send(apiResponse)
            logger.info("sellPart found successfully","sellPartcontroller:ViewBySellPartId",5)
        }
    })
}


let createSellPart = (req, res) => {
    var today = Date.now()
    let Id = shortid.generate()

    let newTable3 = new sellPart({
        Id : Id,
        customerName : req.body.customerName,
        userId : req.body.userId,
        partQr : req.body.partQr,
        partLNo : req.body.partLNo,
        customerPhone : req.body.customerPhone,
        warranty : req.body.warranty,
        notes : req.body.notes,

        created : today,
        lastModified : today
    })

    newTable3.save((err, result) => {
        if (err){
            console.log(err)
            // res.send(err)
            logger.error(`Error occured : ${err.message}`, 'Database', 10)
            let apiResponse = response.generate(true,err, 500, null)
            res.send(apiResponse)
        } else {
            // res.send(result)
            let apiResponse = response.generate(false, 'All sell details found', 200, result)
            res.send(apiResponse)
        }
    })//end newBlog save
}

let editSellPart = (req, res) => {

    let options = req.body;
    console.log(options);
    sellPart.update({'Id':req.params.Id}, options, {multi : true}).exec((err, result) => {
        if(err){
            console.log(err)
            // res.send(err)
            logger.error(`Error occured : ${err}`, 'Database', 10)
            let apiResponse = response.generate(true, 'Failed to find sell Details', 500, null)
            res.send(apiResponse)
        } else if (check.isEmpty(result)) {
            console.log('No Details Found')
            // res.send('No result found')
            let apiResponse = response.generate(true, 'No Details Found', 404, null)
            res.send(apiResponse)
        } else {
            // res.send(result)
            let apiResponse = response.generate(false, 'All Sell Part details found', 200, result)
            res.send(apiResponse)
        }
    })
}

let deleteSellPart = (req, res) => {
    sellPart.remove({'Id':req.params.Id},(err, result) => {
        if(err){
            console.log(err)
            // res.send(err)
            logger.error(`Error occured : ${err}`, 'Database', 10)
            let apiResponse = response.generate(true, 'Failed to find sell Details', 500, null)
            res.send(apiResponse)
        } else if (check.isEmpty(result)) {
            console.log('No Details Found')
            // res.send("No result")
            let apiResponse = response.generate(true, 'No Details Found', 404, null)
            res.send(apiResponse)
        } else {
            // res.send(result)
            let apiResponse = response.generate(false, 'All Sell Part details found', 200, result)
            res.send(apiResponse)
        }
    })
}

module.exports = {
    getAllSellPart : getAllSellPart,
    createSellPart : createSellPart,
    editSellPart : editSellPart,
    deleteSellPart : deleteSellPart,
    viewBySellPartId : viewBySellPartId
}