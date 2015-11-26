var React = require('react/addons'),
    assert = require('assert'),
   jsdom = require('jsdom');
    global.document = jsdom.jsdom('<!doctype html><html><body id="root"></body></html>');
    global.window = document.parentWindow;
    var AllLunchOrdersPanel = require('../Lab13/app');
    var TestUtils = React.addons.TestUtils;

describe('AllLunchOrdersPanel component', function(){
  before('render and locate element', function() {
    var renderedComponent = TestUtils.renderIntoDocument(
      <AllLunchOrdersPanel />
    );

    // Searching for <Button> tag within rendered React component
    // Throws an exception if not found
    var allLunchOrdersPanel = TestUtils.findRenderedDOMComponentWithTag(
      renderedComponent,
      'Button'
    );

    this.testElement = allLunchOrdersPanel.getDOMNode();
  });

  it('<input> should be of type "checkbox"', function() {
    assert(this.testElement.getAttribute('type') === 'checkbox');
  });

});
