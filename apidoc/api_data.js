define({ "api": [
  {
    "type": "put",
    "url": "/api/project/part/:Id/edit",
    "title": "EDIT Part details by Id",
    "version": "0.0.1",
    "group": "EDIT",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Id",
            "description": "<p>Id of the part passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Part detail Edited Successfully.\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t            \tname: \"string\",\n                                    warranty: \"string\",\n                                    overview: \"string\",\n                                    price: number,\n                                    year: number,\n                                    imagepath: \"string\",\n                                    model: \"string\",\n                                    brand: \"string\",\n                                    engine: \"string\",\n                                    popular: boolean,\n                                    categoryId: number,\n                                    subCategoryId: number,\n                                    created: \"date\",\n                                    lastModified: \"date\"\n                                    Id : Id,\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/part.js",
    "groupTitle": "EDIT",
    "name": "PutApiProjectPartIdEdit"
  },
  {
    "type": "put",
    "url": "/api/project/sellPart/:Id/edit",
    "title": "EDIT Sell Part details by Id",
    "version": "0.0.1",
    "group": "EDIT",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Id",
            "description": "<p>Id of the sell part passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Sell Part detail Edited Successfully.\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t            \tcustomerName: \"string\",\n                                    warranty: \"string\",\n                                    userId: \"string\",\n                                    partQr: \"string\",\n                                    partLNo: number,\n                                    customerPhone: \"string\",\n                                    notes: \"string\",\n                                    created: \"date\",\n                                    lastModified: \"date\"\n                                    Id : Id\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/sellPart.js",
    "groupTitle": "EDIT",
    "name": "PutApiProjectSellpartIdEdit"
  },
  {
    "type": "put",
    "url": "/api/t1/suppliers/:Id/edit",
    "title": "EDIT supplier by Id",
    "version": "0.0.1",
    "group": "EDIT",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Id",
            "description": "<p>Id of the blog passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Supplier detail Edited Successfully.\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\tId: \"string\",\n\t\t\t\t\t\tname: \"string\",\n\t\t\t\t\t\tcity: \"string\",\n\t\t\t\t\t\tstate: \"string\",\n\t\t\t\t\t\tzip: number,\n\t\t\t\t\t\tphone: boolean,\n\t\t\t\t\t\temailId: \"string\",\n\t\t\t\t\t\tcreated: \"date\",\n\t\t\t\t\t\tlastModified: \"date\"\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/supplier.js",
    "groupTitle": "EDIT",
    "name": "PutApiT1SuppliersIdEdit"
  },
  {
    "type": "post",
    "url": "/api/project/part/create",
    "title": "Create new Part",
    "version": "0.0.1",
    "group": "create",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of the part passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "warranty",
            "description": "<p>warranty of the part passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "overview",
            "description": "<p>overview of the part passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "price",
            "description": "<p>price of the part passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "year",
            "description": "<p>year of the part passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imagepath",
            "description": "<p>imagepath of the part passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "model",
            "description": "<p>model of the part passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "brand",
            "description": "<p>brand of the part passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "engine",
            "description": "<p>engine of the part passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "popular",
            "description": "<p>popular of the part passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "categoryId",
            "description": "<p>categoryId of the part passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "subCategoryId",
            "description": "<p>subCategoryId of the part passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"New Part Created successfully\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\t            name: \"string\",\n                                    warranty: \"string\",\n                                    overview: \"string\",\n                                    price: number,\n                                    year: number,\n                                    imagepath: \"string\",\n                                    model: \"string\",\n                                    brand: \"string\",\n                                    engine: \"string\",\n                                    popular: boolean,\n                                    categoryId: number,\n                                    subCategoryId: number,\n                                    created: \"date\",\n                                    lastModified: \"date\"\n                                    Id : Id,\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/part.js",
    "groupTitle": "create",
    "name": "PostApiProjectPartCreate"
  },
  {
    "type": "post",
    "url": "/api/project/sellPart/create",
    "title": "Create new Sell Part",
    "version": "0.0.1",
    "group": "create",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "customerName",
            "description": "<p>customerName of the sell part passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "warranty",
            "description": "<p>warranty of the sell part passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>userId of the sell part passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "partQr",
            "description": "<p>QR of the sell part passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "partLNo",
            "description": "<p>L NO of the sell part passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "customerPhone",
            "description": "<p>Customer phone of the sell part passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "notes",
            "description": "<p>notes of the sell part passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"New sellPart Created successfully\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\t            customerName: \"string\",\n                                    warranty: \"string\",\n                                    userId: \"string\",\n                                    partQr: \"string\",\n                                    partLNo: number,\n                                    customerPhone: \"string\",\n                                    notes: \"string\",\n                                    created: \"date\",\n                                    lastModified: \"date\"\n                                    Id : Id\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/sellPart.js",
    "groupTitle": "create",
    "name": "PostApiProjectSellpartCreate"
  },
  {
    "type": "post",
    "url": "/api/t1/suppliers/create",
    "title": "Create new Supplier",
    "version": "0.0.1",
    "group": "create",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of the supplier passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>city of the supplier passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "state",
            "description": "<p>state of the supplier passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "zip",
            "description": "<p>zip of the supplier passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>phone of the supplier passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "emailId",
            "description": "<p>emailId of the supplier passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"New Suplier Created successfully\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\tId: \"string\",\n\t\t\t\t\t\tname: \"string\",\n\t\t\t\t\t\tcity: \"string\",\n\t\t\t\t\t\tstate: \"string\",\n\t\t\t\t\t\tzip: number,\n\t\t\t\t\t\tphone: boolean,\n\t\t\t\t\t\temailId: \"string\",\n\t\t\t\t\t\tcreated: \"date\",\n\t\t\t\t\t\tlastModified: \"date\"\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/supplier.js",
    "groupTitle": "create",
    "name": "PostApiT1SuppliersCreate"
  },
  {
    "type": "post",
    "url": "/api/project/part/:Id/delete",
    "title": "Delete Part details by Id",
    "version": "0.0.1",
    "group": "delete",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Id",
            "description": "<p>partId of the parts passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Part detail Deleted Successfully\",\n\t    \"status\": 200,\n\t    \"data\": []\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/part.js",
    "groupTitle": "delete",
    "name": "PostApiProjectPartIdDelete"
  },
  {
    "type": "post",
    "url": "/api/project/sellPart/:Id/delete",
    "title": "Delete Sell Part details by Id",
    "version": "0.0.1",
    "group": "delete",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Id",
            "description": "<p>sellPartId of the parts passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Sell Part detail Deleted Successfully\",\n\t    \"status\": 200,\n\t    \"data\": []\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/sellPart.js",
    "groupTitle": "delete",
    "name": "PostApiProjectSellpartIdDelete"
  },
  {
    "type": "post",
    "url": "/api/t1/suppliers/:Id/delete",
    "title": "Delete Supplier by Id",
    "version": "0.0.1",
    "group": "delete",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Id",
            "description": "<p>Id of the blog passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Supplier detail Deleted Successfully\",\n\t    \"status\": 200,\n\t    \"data\": []\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/supplier.js",
    "groupTitle": "delete",
    "name": "PostApiT1SuppliersIdDelete"
  },
  {
    "type": "get",
    "url": "/api/project/part/all",
    "title": "Get all Part details",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"All Parts Details Found\",\n\t    \"status\": 200,\n\t    \"data\": [\n                                {\n                                    name: \"string\",\n                                    warranty: \"string\",\n                                    overview: \"string\",\n                                    price: number,\n                                    year: number,\n                                    imagepath: \"string\",\n                                    model: \"string\",\n                                    brand: \"string\",\n                                    engine: \"string\",\n                                    popular: boolean,\n                                    categoryId: number,\n                                    subCategoryId: number,\n                                    created: \"date\",\n                                    lastModified: \"date\"\n                                    Id : Id,\n                                }\n                ]\n\t    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Failed To Find Blog Details\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/part.js",
    "groupTitle": "read",
    "name": "GetApiProjectPartAll"
  },
  {
    "type": "get",
    "url": "/api/project/part/view/:Id",
    "title": "Get a single part detail",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Id",
            "description": "<p>The partId should be passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Supplier Found Successfully.\",\n\t    \"status\": 200,\n\t    \"data\": {\n                                    _v \"string\",\n                                    _id: \"string\",\n                                    name: \"string\",\n                                    warranty: \"string\",\n                                    overview: \"string\",\n                                    price: number,\n                                    year: number,\n                                    imagepath: \"string\",\n                                    model: \"string\",\n                                    brand: \"string\",\n                                    engine: \"string\",\n                                    popular: boolean,\n                                    categoryId: number,\n                                    subCategoryId: number,\n                                    created: \"date\",\n                                    lastModified: \"date\"\n                                    Id : Id,\n\t\t\t\t}\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/part.js",
    "groupTitle": "read",
    "name": "GetApiProjectPartViewId"
  },
  {
    "type": "get",
    "url": "/api/project/sellPart/all",
    "title": "Get all Sell Part details",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"All sellPart Details Found\",\n\t    \"status\": 200,\n\t    \"data\": [\n                                {\n                                    customerName: \"string\",\n                                    warranty: \"string\",\n                                    userId: \"string\",\n                                    partQr: \"string\",\n                                    partLNo: number,\n                                    customerPhone: \"string\",\n                                    notes: \"string\",\n                                    created: \"date\",\n                                    lastModified: \"date\"\n                                    Id : Id,\n                                }\n                ]\n\t    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Failed To Find Sell Part Details\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/sellPart.js",
    "groupTitle": "read",
    "name": "GetApiProjectSellpartAll"
  },
  {
    "type": "get",
    "url": "/api/project/sellPart/view/:Id",
    "title": "Get a single sell part detail",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Id",
            "description": "<p>The sellPartId should be passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Sell Part Found Successfully.\",\n\t    \"status\": 200,\n\t    \"data\": {\n                                    _v \"string\",\n                                    _id: \"string\",\n                                    customerName: \"string\",\n                                    warranty: \"string\",\n                                    userId: \"string\",\n                                    partQr: \"string\",\n                                    partLNo: number,\n                                    customerPhone: \"string\",\n                                    notes: \"string\",\n                                    created: \"date\",\n                                    lastModified: \"date\"\n                                    Id : Id,\n\t\t\t\t}\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/sellPart.js",
    "groupTitle": "read",
    "name": "GetApiProjectSellpartViewId"
  },
  {
    "type": "get",
    "url": "/api/t1/suppliers/all",
    "title": "Get all suppliers",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"All Details Found\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\tId: \"string\",\n\t\t\t\t\t\tname: \"string\",\n\t\t\t\t\t\tcity: \"string\",\n\t\t\t\t\t\tstate: \"string\",\n\t\t\t\t\t\tzip: number,\n\t\t\t\t\t\tphone: boolean,\n\t\t\t\t\t\temailId: \"string\",\n\t\t\t\t\t\tcreated: \"date\",\n\t\t\t\t\t\tlastModified: \"date\"\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Failed To Find Blog Details\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/supplier.js",
    "groupTitle": "read",
    "name": "GetApiT1SuppliersAll"
  },
  {
    "type": "get",
    "url": "/api/t1/suppliers/view/:Id",
    "title": "Get a single supplier detail",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Id",
            "description": "<p>The blogId should be passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Supplier Found Successfully.\",\n\t    \"status\": 200,\n\t    \"data\": {\n                    _v \"string\",\n                    _id: \"string\",\n                    Id: \"string\",\n                    name: \"string\",\n                    city: \"string\",\n                    state: \"string\",\n                    zip: number,\n                    phone: boolean,\n                    emailId: \"string\",\n                    created: \"date\",\n                    lastModified: \"date\"\n\t\t\t\t}\n\t    \t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/supplier.js",
    "groupTitle": "read",
    "name": "GetApiT1SuppliersViewId"
  }
] });
