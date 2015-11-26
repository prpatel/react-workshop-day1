import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import Bootstrap from 'react-bootstrap';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import Panel from 'react-bootstrap/lib/Panel';
import Input from 'react-bootstrap/lib/Input';
import Label from 'react-bootstrap/lib/Label';

class LunchApp extends React.Component {
  render() {
    var now = new Date();
    var formattedDate = moment(now).format('MMMM Do YYYY');
    return (
      <div>
        <Panel>
          <h2>Options for lunch for {formattedDate}:</h2>
          <LunchOptionsPanel lunchData={this.props.lunchChoices}> </LunchOptionsPanel>
        </Panel>
      </div>
    );
  }
}

class LunchOptionsPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selectedLunch: 'Nothing selected'};
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    // may need to use innerText for older IE
    this.setState({
      selectedLunch: event.target.textContent
    });
  }
  render() {
    let clickHandler = this.handleClick;
    let lunchOptions = this.props.lunchData.map(function(c,i) {
      return <h3 key={i} onClick={clickHandler}><Label>{c}</Label></h3>;
    });
    return (
      <div>
        <Panel header="Please select one" bsStyle="info">
          {lunchOptions}
        </Panel>
        <SelectedLunchPanel  selectedLunch={this.state.selectedLunch}></SelectedLunchPanel>
      </div>
    );
  }
}

class SelectedLunchPanel extends React.Component {
  constructor(props) {
    super(props);
    this.updateInstructions = this.updateInstructions.bind(this);
    this.state = { instructions: '' };
  }
  render() {
    return (
      <div>
        <Panel header="You've picked" bsStyle="warning">
          <Label>{this.props.selectedLunch}</Label>
          <p>Special Instructions: </p>
        </Panel>
      </div>
    );
  }
}

var lunchChoices = ['Chicken', 'Fish', 'Vegetarian'];
ReactDOM.render(
  <LunchApp lunchChoices={lunchChoices}/>,
  document.getElementById('root')
);
