import React from 'react';
// ES5 style import
// var ReactDOM = require('react-dom');

// ES6 style import
import ReactDOM from 'react-dom';

// ES5 style
var HelloWorldES5 = React.createClass({
  render() {
    var now = new Date();
    return (
      <div>Hello World!
      </div>
    );
  }
});

// ES6 version
class HelloWorld extends React.Component {
  render() {
    let now = new Date();
    return (
      <div>Hello World!
      </div>
    );
  }
}

ReactDOM.render(
  <HelloWorld/>,
  document.getElementById('root')
);
