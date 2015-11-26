/*eslint strict: [2, "global"]*/
'use strict';
import axios from 'axios';
var endpoint = 'http://connect-js.com:3000/lunches';
exports.saveLunchData = function(name, selection, instructions, success, error) {
  axios.post(endpoint, {
    selection: selection,
    instructions: instructions
  })
  .then(function (response) {
    success(response);
    console.log(response);
  })
  .catch(function (response) {
    if (response instanceof Error) {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', response.message);
      error(response);
    } else {
      // The request was made, but the server responded with a status code
      // that falls out of the range of 2xx
      console.log(response.data);
      console.log(response.status);
      console.log(response.headers);
      console.log(response.config);
    }
    console.log(response);
  });
};

exports.getLunchData = function(success, error) {
  axios.get(endpoint)
  .then(function (response) {
    success(response);
    console.log(response);
  })
  .catch(function (response) {
    if (response instanceof Error) {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', response.message);
      error(response);
    } else {
      // The request was made, but the server responded with a status code
      // that falls out of the range of 2xx
      console.log(response.data);
      console.log(response.status);
      console.log(response.headers);
      console.log(response.config);
    }
    console.log(response);
  });
};
