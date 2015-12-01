const {jsdom} = require('jsdom');
global.document = jsdom('<html><body></body></html>');
global.window = document.defaultView;
global.navigator = {
  userAgent: 'node.js'
};
