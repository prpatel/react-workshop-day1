import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment'
import Bootstrap from 'react-bootstrap';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
var Button = require('react-bootstrap').Button;
import Panel from 'react-bootstrap/lib/Panel'
class HelloWorld extends React.Component {
  render() {
    var now = new Date();
    var formattedDate = moment(now).format('MMMM Do YYYY, h:mm:ss A');
    return (
      <div>
        <Panel>
          <Jumbotron>
            <h1>Welcome to Fort Lauderdale!</h1>
            <p>The current time is: {formattedDate}</p>
            <p><Button bsStyle="primary">Learn more</Button></p>
          </Jumbotron>
        </Panel>

      </div>
    );
  }
}

ReactDOM.render(
  <HelloWorld/>,
  document.getElementById('root')
);
