'use strict';


/**
 * Add a new url 
 * 
 *
 * body Url Url object that needs to be added
 * no response value expected for this operation
 **/
exports.addUrl = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Finds url by name
 * find url by name
 *
 * name List Url values
 * returns List
 **/
exports.findUrl = function(name) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

