import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment'
import Bootstrap from 'react-bootstrap';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import Panel from 'react-bootstrap/lib/Panel'
import Input from 'react-bootstrap/lib/Input'
import Label from 'react-bootstrap/lib/Label'

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
  componentWillMount() {
    console.log('LunchOptionsPanel - componentWillMount')
  }

  componentDidMount() {
    console.log('LunchOptionsPanel - componentDidMount')
  }

  componentWillReceiveProps(nextProps) {
    console.log('LunchOptionsPanel - componentWillReceiveProps', nextProps)
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   return true;
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log('LunchOptionsPanel - componentWillUpdate', nextProps, nextState)
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('LunchOptionsPanel - componentDidUpdate', prevProps, prevState)
  }

  componentWillUnmount() {
    console.log('LunchOptionsPanel - componentWillUnmount')
  }
  render() {
    let clickHandler = this.handleClick;
    let lunchOptions = this.props.lunchData.map(function(c,i) {
      return <h3 key={i} onClick={clickHandler}><Label>{c}</Label></h3>
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
  }

  componentWillMount() {
    console.log('SelectedLunchPanel - componentWillMount')
  }

  componentDidMount() {
    console.log('SelectedLunchPanel - componentDidMount')
  }

  componentWillReceiveProps(nextProps) {
    console.log('SelectedLunchPanel - componentWillReceiveProps', nextProps)
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   return true;
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log('SelectedLunchPanel - componentWillUpdate', nextProps, nextState)
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('SelectedLunchPanel - componentDidUpdate', prevProps, prevState)
  }

  componentWillUnmount() {
    console.log('SelectedLunchPanel - componentWillUnmount')
  }
  render() {
    return (
      <div>
        <Panel header="You've picked" bsStyle="warning">
          {this.props.selectedLunch}
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
