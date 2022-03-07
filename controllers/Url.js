'use strict';

var utils = require('../utils/writer.js');
var Url = require('../service/UrlService');

module.exports.addUrl = function addUrl (req, res, next) {
  var body = req.swagger.params['body'].value;
  Url.addUrl(body)
      .then(function (response) {
        utils.writeJson(res, response);
      })
      .catch(function (response) {
        utils.writeJson(res, response);
      });
};

module.exports.findUrl = function findUrl (req, res, next) {
  var url = req.swagger.params['url'].value;
  Url.findUrl(url)
      .then(function (response) {
        utils.writeJson(res, response);
      })
      .catch(function (response) {
        utils.writeJson(res, response);
      });
};
