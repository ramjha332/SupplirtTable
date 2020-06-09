const express = require('express')
const table1controller = require('./../controllers/table1controller')
const appConfig = require('./../config/appConfig')
const auth = require('./../middlewares/auth')

let setRouter = (app) => {

    let baseUrl = appConfig.apiVersion+'/suppliers';

    app.get(baseUrl+'/all',auth.isAuthenticated,table1controller.getAllSuppliers);

     /**
	 * @api {get} /api/t1/suppliers/all Get all suppliers
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "All Details Found",
	    "status": 200,
	    "data": [
					{
						Id: "string",
						name: "string",
						city: "string",
						state: "string",
						zip: number,
						phone: boolean,
						emailId: "string",
						created: "date",
						lastModified: "date"
					}
	    		]
	    	}
		}
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



    app.get(baseUrl+'/view/:Id',auth.isAuthenticated,table1controller.viewByTableId);

    /**
	 * @api {get} /api/t1/suppliers/view/:Id Get a single supplier detail
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} Id The blogId should be passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Supplier Found Successfully.",
	    "status": 200,
	    "data": {
                    _v "string",
                    _id: "string",
                    Id: "string",
                    name: "string",
                    city: "string",
                    state: "string",
                    zip: number,
                    phone: boolean,
                    emailId: "string",
                    created: "date",
                    lastModified: "date"
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


    app.post(baseUrl+'/:Id/delete',auth.isAuthenticated,table1controller.deleteSupplier);

    /**
	 * @api {post} /api/t1/suppliers/:Id/delete Delete Supplier by Id
	 * @apiVersion 0.0.1
	 * @apiGroup delete
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} Id Id of the blog passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Supplier detail Deleted Successfully",
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


    app.put(baseUrl+'/:Id/edit',auth.isAuthenticated,table1controller.editSupplier);

    /**
	 * @api {put} /api/t1/suppliers/:Id/edit EDIT supplier by Id
	 * @apiVersion 0.0.1
	 * @apiGroup EDIT
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} Id Id of the blog passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Supplier detail Edited Successfully.",
	    "status": 200,
	    "data": [
					{
						Id: "string",
						name: "string",
						city: "string",
						state: "string",
						zip: number,
						phone: boolean,
						emailId: "string",
						created: "date",
						lastModified: "date"
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


    app.post(baseUrl+'/create',auth.isAuthenticated,table1controller.createSupplier);

    /**
	 * @api {post} /api/t1/suppliers/create Create new Supplier
	 * @apiVersion 0.0.1
	 * @apiGroup create
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} name name of the supplier passed as a body parameter
	 * @apiParam {String} city city of the supplier passed as a body parameter
	 * @apiParam {String} state state of the supplier passed as a body parameter
	 * @apiParam {String} zip zip of the supplier passed as a body parameter
     * @apiParam {String} phone phone of the supplier passed as a body parameter
     * @apiParam {String} emailId emailId of the supplier passed as a body parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "New Suplier Created successfully",
	    "status": 200,
	    "data": [
					{
						Id: "string",
						name: "string",
						city: "string",
						state: "string",
						zip: number,
						phone: boolean,
						emailId: "string",
						created: "date",
						lastModified: "date"
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