var express = require('express');
var openApi = require('express-openapi');
var v1WorldsService = require('./api-v1/services/worldsService');
var v1ApiDoc = require('./api-v1/api-doc');
var app = express();

openApi.initialize({
  app,
  apiDoc: v1ApiDoc,
  dependencies: {
    worldsService: v1WorldsService
  },
  paths: './api-v1/paths'
});

module.exports = app;
