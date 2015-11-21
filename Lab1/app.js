import React from 'react';
import ReactDOM from 'react-dom';

class HelloWorld extends React.Component {
  render() {
    var now = new Date();
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
