import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment'

class HelloWorld extends React.Component {
  render() {
    var now = new Date();
    var formattedDate = moment(now).format('MMMM Do YYYY, h:mm:ss A');
    return (
      <div><h1>Welcome to Fort Lauderdale!</h1>
      <h2>The current time is: {formattedDate}</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <HelloWorld/>,
  document.getElementById('root')
);
