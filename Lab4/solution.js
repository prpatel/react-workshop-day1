import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment'
import Bootstrap from 'react-bootstrap';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
var Button = require('react-bootstrap').Button;
import Panel from 'react-bootstrap/lib/Panel'
import Input from 'react-bootstrap/lib/Input'
import ButtonInput from 'react-bootstrap/lib/ButtonInput'
import Label from 'react-bootstrap/lib/Label'

class HelloWorld extends React.Component {
  render() {
    let lunchOptions = this.props.lunchChoices.map(function(c) {
      return <h2><Label>{c}</Label></h2>
    });
    var now = new Date();
    var formattedDate = moment(now).format('MMMM Do YYYY');
    return (
      <div>
        <Panel>
          <h2>Options for lunch {formattedDate}:</h2>
          {lunchOptions}
        </Panel>

      </div>
    );
  }
}

var lunchChoices = ['Chicken', 'Fish', 'Vegetarian'];
ReactDOM.render(
  <HelloWorld lunchChoices={lunchChoices}/>,
  document.getElementById('root')
);
