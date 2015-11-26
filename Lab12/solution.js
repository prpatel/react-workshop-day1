import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import Bootstrap from 'react-bootstrap';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import Panel from 'react-bootstrap/lib/Panel';
import Input from 'react-bootstrap/lib/Input';
import Label from 'react-bootstrap/lib/Label';
import Button from 'react-bootstrap/lib/Button';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import { Router, Route, Link, IndexRoute } from 'react-router';
// import api from './api';
import axios from 'axios';
var endpoint = '/lunches';


class LunchApp extends React.Component {
  render() {
    var now = new Date();
    var formattedDate = moment(now).format('MMMM Do YYYY');
    return (
      <div>
        <ButtonToolbar>
          <Button bsStyle="primary" bsSize="large"><Link to={'/'}>Home</Link></Button>
          <Button bsSize="large"><Link to={'contact'}>Contact Us</Link></Button>
          <Button bsSize="large"><Link to={'support'}>Support</Link></Button>
          </ButtonToolbar>
          {this.props.children}
      </div>
    );
  }
}

class LunchAppPanel extends React.Component {
  render() {
    var now = new Date();
    var formattedDate = moment(now).format('MMMM Do YYYY');
    return (
      <div>
        <Panel>
          <h2>Options for lunch for {formattedDate}:</h2>
          <LunchOptionsPanel lunchData={this.props.route.lunchChoices}> </LunchOptionsPanel>

        </Panel>
      </div>
    );
  }
}


class LunchOptionsPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selectedLunch: 'Nothing selected', lunchOrders: []};
    this.handleClick = this.handleClick.bind(this);
    this.showLunchOrdersHandler = this.showLunchOrdersHandler.bind(this);
    this.saveLunchOrderHandler = this.saveLunchOrderHandler.bind(this);

  }
  handleClick(event) {
    // may need to use innerText for older IE
    this.setState({
      selectedLunch: event.target.textContent
    });
  }
  showLunchOrdersHandler() {
    let that = this;
    this.getData(function(response) {
      console.log(response.data);
      that.setState({lunchOrders: response.data, selectedLunch: that.state.selectedLunch});
    }, function(response) {
      if (response instanceof Error) {
        // Something happened in setting up the request that triggered an Error
        console.log('error', response);
      }
    });
  }
  saveLunchOrderHandler (name, instructions) {
    console.log('sending this data to server:', this.state.selectedLunch, name, instructions);
    this.saveData(this.state.selectedLunch, name, instructions, function() {
      alert('sent data to server');
    }, function(response) {
      alert('error sending data to server' + JSON.stringify(response));
    });
  }


  saveData(selection, name, instructions, success, error) {

    // superagent.post(endpoint)
    //    .send({
    //      name: name,
    //      lunch: selection,
    //      instructions: instructions
    //    })
    //    .end(function(err, res){
    //      if (res.ok) {
    //        console.log('yay got ' + JSON.stringify(res.body));
    //      } else {
    //        console.log('Oh no! error ' + res.text);
    //      }
    //    });


    axios.post(endpoint, {
      name: name,
      lunch: selection,
      instructions: instructions
    })
    .then(function (response) {
      success(response);
      console.log(response);
    })
    .catch(function (response) {
      error(response);
    });
  }

  getData(success, error) {
    axios.get(endpoint)
    .then(function (response) {
      success(response);
    })
    .catch(function (response) {
      error(response);
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
        <SelectedLunchPanel  selectedLunch={this.state.selectedLunch}
          saveLunchOrderHandler={this.saveLunchOrderHandler}></SelectedLunchPanel>
        <AllLunchOrdersPanel lunchOrders={this.state.lunchOrders} showLunchOrdersHandler={this.showLunchOrdersHandler}></AllLunchOrdersPanel>
      </div>
    );
  }
}

class SelectedLunchPanel extends React.Component {
  constructor(props) {
    super(props);
    this.updateInstructions = this.updateInstructions.bind(this);
    this.state = { instructions: '' , guestName: ''};
  }
  updateInstructions(instructions, guestName) {
    this.setState({instructions: instructions, guestName: guestName});
    this.props.saveLunchOrderHandler(guestName, instructions);
  }
  render() {
    return (
      <div>
        <Panel header="You've picked" bsStyle="warning">
          <Label>{this.props.selectedLunch}</Label>
          <p>Special Instructions: {this.state.instructions} for {this.state.guestName}</p>
          <SpecialInstructionsInput
            value={this.state.instructions}
            updateInstructions={this.updateInstructions}
            />
        </Panel>
      </div>
    );
  }
}

class SpecialInstructionsInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange() {

    this.props.updateInstructions(this.refs.specialInstructionsInput.getValue(), this.refs.guestName.getValue());
  }
  render() {
    return (
      <div>
        <Input
          ref='specialInstructionsInput'
          type='text'
          placeholder="Enter Instructions"
           />
         <Input
             ref='guestName'
             type='text'
             placeholder="Enter Guest Name.."
              />
       <Button onClick={this.handleChange}>Submit</Button>
      </div>
    );
  }
}

class AllLunchOrdersPanel extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let lunchOrders = this.props.lunchOrders.map(function(c,i) {
      return <p key={i}>Guest: {c.name} ordered {c.lunch} with instructions: {c.instructions} </p>;
    });
    return (
      <div>
        <Panel header="Current Orders" bsStyle="info">
          <Button onClick={this.props.showLunchOrdersHandler}>Get Lunch Orders</Button>
            {lunchOrders}
        </Panel>
      </div>
    );
  }
}

class Contact extends React.Component {
  render() {
    var now = new Date();
    var formattedDate = moment(now).format('MMMM Do YYYY');
    return (
      <div>
        <Panel header="WEBSITE CONTACT" bsStyle="warning">
          CONTACT
        </Panel>
      </div>
    );
  }
}

class Support extends React.Component {
  render() {
    var now = new Date();
    var formattedDate = moment(now).format('MMMM Do YYYY');
    return (
      <div>
        <Panel header="WEBSITE SUPPORT" bsStyle="info">
          SUPPORT
        </Panel>
      </div>
    );
  }
}


var lunchChoices = ['Chicken', 'Fish', 'Vegetarian'];
ReactDOM.render(
  <Router>
    <Route path="/" component={LunchApp}>
      <IndexRoute component={LunchAppPanel} lunchChoices={lunchChoices} />
      <Route path="support" component={Support}/>
      <Route path="contact" component={Contact}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
