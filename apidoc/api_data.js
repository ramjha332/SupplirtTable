define({ "api": [
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
    "filename": "routes/table1.js",
    "groupTitle": "EDIT",
    "name": "PutApiT1SuppliersIdEdit"
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
    "filename": "routes/table1.js",
    "groupTitle": "create",
    "name": "PostApiT1SuppliersCreate"
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
    "filename": "routes/table1.js",
    "groupTitle": "delete",
    "name": "PostApiT1SuppliersIdDelete"
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
    "filename": "routes/table1.js",
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
    "filename": "routes/table1.js",
    "groupTitle": "read",
    "name": "GetApiT1SuppliersViewId"
  }
] });