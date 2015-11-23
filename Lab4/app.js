import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment'
import Bootstrap from 'react-bootstrap';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
var Button = require('react-bootstrap').Button;
import Panel from 'react-bootstrap/lib/Panel'

class LunchApp extends React.Component {
  render() {
    var now = new Date();
    var formattedDate = moment(now).format('MMMM Do YYYY');
    return (
      <div>
        <Panel>
          <h2>Options for lunch for {formattedDate}</h2>

        </Panel>
      </div>
    );
  }
}

ReactDOM.render(
  <LunchApp/>,
  document.getElementById('root')
);
