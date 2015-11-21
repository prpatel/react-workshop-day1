import React from 'react';
import ReactDOM from 'react-dom';

class HelloWorld extends React.Component {
  render() {
    var now = new Date();
    return (
      <div><h1>Hello World!</h1>
      <h2>The current time is: {now.toString()}</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <HelloWorld/>,
  document.getElementById('root')
);
