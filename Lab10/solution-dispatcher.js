/*eslint strict: [2, "global"]*/
'use strict';
var registeredCallback;

exports.on = function(channel, callback) {
        registeredCallback = callback;
};

exports.trigger = function(channel, data) {
        registeredCallback(channel, data);
};

exports.removeCallback = function() {
        registeredCallback = null;
};
