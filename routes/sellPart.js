const express = require('express')
const sellPartcontroller = require('./../controllers/sellPartcontroller')
const appConfig = require('./../config/appConfig')
const auth = require('./../middlewares/auth')

let setRouter = (app) => {

    let baseUrl = appConfig.apiVersion+'/sellPart';

    app.get(baseUrl+'/all',auth.isAuthenticated,sellPartcontroller.getAllSellPart);

     /**
	 * @api {get} /api/project/sellPart/all Get all Sell Part details
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "All sellPart Details Found",
	    "status": 200,
	    "data": [
                                {
                                    customerName: "string",
                                    warranty: "string",
                                    userId: "string",
                                    partQr: "string",
                                    partLNo: number,
                                    customerPhone: "string",
                                    notes: "string",
                                    created: "date",
                                    lastModified: "date"
                                    Id : Id,
                                }
                ]
	    }
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Failed To Find Sell Part Details",
	    "status": 500,
	    "data": null
	   }
	*/



    app.get(baseUrl+'/view/:Id',auth.isAuthenticated,sellPartcontroller.viewBySellPartId);

    /**
	 * @api {get} /api/project/sellPart/view/:Id Get a single sell part detail
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} Id The sellPartId should be passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Sell Part Found Successfully.",
	    "status": 200,
	    "data": {
                                    _v "string",
                                    _id: "string",
                                    customerName: "string",
                                    warranty: "string",
                                    userId: "string",
                                    partQr: "string",
                                    partLNo: number,
                                    customerPhone: "string",
                                    notes: "string",
                                    created: "date",
                                    lastModified: "date"
                                    Id : Id,
				}
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.",
	    "status": 500,
	    "data": null
	   }
	 */


    app.post(baseUrl+'/:Id/delete',auth.isAuthenticated,sellPartcontroller.deleteSellPart);

    /**
	 * @api {post} /api/project/sellPart/:Id/delete Delete Sell Part details by Id
	 * @apiVersion 0.0.1
	 * @apiGroup delete
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} Id sellPartId of the parts passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Sell Part detail Deleted Successfully",
	    "status": 200,
	    "data": []
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.,
	    "status": 500,
	    "data": null
	   }
	 */


    app.put(baseUrl+'/:Id/edit',auth.isAuthenticated,sellPartcontroller.editSellPart);

    /**
	 * @api {put} /api/project/sellPart/:Id/edit EDIT Sell Part details by Id
	 * @apiVersion 0.0.1
	 * @apiGroup EDIT
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} Id Id of the sell part passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Sell Part detail Edited Successfully.",
	    "status": 200,
	    "data": [
					{
					            	customerName: "string",
                                    warranty: "string",
                                    userId: "string",
                                    partQr: "string",
                                    partLNo: number,
                                    customerPhone: "string",
                                    notes: "string",
                                    created: "date",
                                    lastModified: "date"
                                    Id : Id
					}
	    		]
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.,
	    "status": 500,
	    "data": null
	   }
	 */


    app.post(baseUrl+'/create',auth.isAuthenticated,sellPartcontroller.createSellPart);

    /**
	 * @api {post} /api/project/sellPart/create Create new Sell Part
	 * @apiVersion 0.0.1
	 * @apiGroup create
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} customerName customerName of the sell part passed as a body parameter
	 * @apiParam {String} warranty warranty of the sell part passed as a body parameter
	 * @apiParam {String} userId userId of the sell part passed as a body parameter
	 * @apiParam {String} partQr QR of the sell part passed as a body parameter
     * @apiParam {String} partLNo L NO of the sell part passed as a body parameter
     * @apiParam {String} customerPhone Customer phone of the sell part passed as a body parameter
     * @apiParam {String} notes notes of the sell part passed as a body parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "New sellPart Created successfully",
	    "status": 200,
	    "data": [
					{
						            customerName: "string",
                                    warranty: "string",
                                    userId: "string",
                                    partQr: "string",
                                    partLNo: number,
                                    customerPhone: "string",
                                    notes: "string",
                                    created: "date",
                                    lastModified: "date"
                                    Id : Id
					}
	    		]
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.,
	    "status": 500,
	    "data": null
	   }
	 */


}

module.exports = {
    setRouter : setRouter
}