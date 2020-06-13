const express = require('express')
const partcontroller = require('./../controllers/partcontroller')
const appConfig = require('./../config/appConfig')
const auth = require('./../middlewares/auth')

let setRouter = (app) => {

    let baseUrl = appConfig.apiVersion+'/part';

    app.get(baseUrl+'/all',auth.isAuthenticated,partcontroller.getAllPart);

     /**
	 * @api {get} /api/project/part/all Get all Part details
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "All Parts Details Found",
	    "status": 200,
	    "data": [
                                {
                                    name: "string",
                                    warranty: "string",
                                    overview: "string",
                                    price: number,
                                    year: number,
                                    imagepath: "string",
                                    model: "string",
                                    brand: "string",
                                    engine: "string",
                                    popular: boolean,
                                    categoryId: number,
                                    subCategoryId: number,
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
	    "message": "Failed To Find Blog Details",
	    "status": 500,
	    "data": null
	   }
	*/



    app.get(baseUrl+'/view/:Id',auth.isAuthenticated,partcontroller.viewByPartId);

    /**
	 * @api {get} /api/project/part/view/:Id Get a single part detail
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} Id The partId should be passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Supplier Found Successfully.",
	    "status": 200,
	    "data": {
                                    _v "string",
                                    _id: "string",
                                    name: "string",
                                    warranty: "string",
                                    overview: "string",
                                    price: number,
                                    year: number,
                                    imagepath: "string",
                                    model: "string",
                                    brand: "string",
                                    engine: "string",
                                    popular: boolean,
                                    categoryId: number,
                                    subCategoryId: number,
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


    app.post(baseUrl+'/:Id/delete',auth.isAuthenticated,partcontroller.deletePart);

    /**
	 * @api {post} /api/project/part/:Id/delete Delete Part details by Id
	 * @apiVersion 0.0.1
	 * @apiGroup delete
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} Id partId of the parts passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Part detail Deleted Successfully",
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


    app.put(baseUrl+'/:Id/edit',auth.isAuthenticated,partcontroller.editPart);

    /**
	 * @api {put} /api/project/part/:Id/edit EDIT Part details by Id
	 * @apiVersion 0.0.1
	 * @apiGroup EDIT
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} Id Id of the part passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Part detail Edited Successfully.",
	    "status": 200,
	    "data": [
					{
					            	name: "string",
                                    warranty: "string",
                                    overview: "string",
                                    price: number,
                                    year: number,
                                    imagepath: "string",
                                    model: "string",
                                    brand: "string",
                                    engine: "string",
                                    popular: boolean,
                                    categoryId: number,
                                    subCategoryId: number,
                                    created: "date",
                                    lastModified: "date"
                                    Id : Id,
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


    app.post(baseUrl+'/create',auth.isAuthenticated,partcontroller.createPart);

    /**
	 * @api {post} /api/project/part/create Create new Part
	 * @apiVersion 0.0.1
	 * @apiGroup create
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} name name of the part passed as a body parameter
	 * @apiParam {String} warranty warranty of the part passed as a body parameter
	 * @apiParam {String} overview overview of the part passed as a body parameter
	 * @apiParam {String} price price of the part passed as a body parameter
     * @apiParam {String} year year of the part passed as a body parameter
     * @apiParam {String} imagepath imagepath of the part passed as a body parameter
     * @apiParam {String} model model of the part passed as a body parameter
     * @apiParam {String} brand brand of the part passed as a body parameter
     * @apiParam {String} engine engine of the part passed as a body parameter
     * @apiParam {String} popular popular of the part passed as a body parameter
     * @apiParam {String} categoryId categoryId of the part passed as a body parameter
     * @apiParam {String} subCategoryId subCategoryId of the part passed as a body parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "New Part Created successfully",
	    "status": 200,
	    "data": [
					{
						            name: "string",
                                    warranty: "string",
                                    overview: "string",
                                    price: number,
                                    year: number,
                                    imagepath: "string",
                                    model: "string",
                                    brand: "string",
                                    engine: "string",
                                    popular: boolean,
                                    categoryId: number,
                                    subCategoryId: number,
                                    created: "date",
                                    lastModified: "date"
                                    Id : Id,
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