define({ "api": [
  {
    "type": "get",
    "url": "/todos",
    "title": "Todo list",
    "name": "todoList",
    "group": "todos",
    "version": "1.0.0",
    "permission": [
      {
        "name": "Todos"
      }
    ],
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>todo name</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>status of todo item for showing active task</p>"
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "complete",
            "description": "<p>Boolean value for checking wheather todo task is completetd or not</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\" : false,\n    \"todos\" : [{\n         \"text\": \"Go to Market\",\n         \"status\": true,\n         \"complete\": true\n     },]\n}",
          "type": "type"
        }
      ]
    },
    "filename": "routes/rest/todos.js",
    "groupTitle": "todos"
  },
  {
    "type": "post",
    "url": "/todos",
    "title": "Todo manual insert",
    "name": "todoManualInsert",
    "group": "todos",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "complete",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"text\": \"Go to Market\",\n    \"status\": true,\n    \"complete\": true\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "json",
            "optional": false,
            "field": "name",
            "description": "<p>description</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\" : false,\n    \"todos\" : {\n         \"text\": \"Go to Market\",\n         \"status\": true,\n         \"complete\": true\n     }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/rest/todos.js",
    "groupTitle": "todos"
  },
  {
    "type": "put",
    "url": "/todos/:id",
    "title": "Todos update, one or multiple fields",
    "name": "todoUpdate",
    "group": "todos",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"text\": \"Go to Market\",\n    \"status\": true,\n    \"complete\": true\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": ""
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": ""
          },
          {
            "group": "200",
            "type": "Boolean",
            "optional": false,
            "field": "complete",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\" : false,\n    \"todos\" : {\n         \"text\": \"Go to Market\",\n         \"status\": true,\n         \"complete\": true\n     }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/rest/todos.js",
    "groupTitle": "todos"
  },
  {
    "type": "delete",
    "url": "/todos/:id",
    "title": "Todos delete",
    "name": "todosDelete",
    "group": "todos",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\" : false\n}",
          "type": "json"
        }
      ]
    },
    "filename": "routes/rest/todos.js",
    "groupTitle": "todos"
  }
] });
