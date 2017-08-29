import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { Button, Container } from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <div className="App">
            <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h2>Welcome to React</h2>
            </div>
            <p className="App-intro">
              <div>
              <ul>
                <br/>
                <br/>
                <br/>
                  <Link to="/Setup" activeStyle={{ color: 'red' }}><Container><Button className="Homepage-button" size="massive" color="blue">Kitchen Inventory</Button></Container></Link>
                <br/>
                <br/>
                <br/>
                  <Link to="/NewTeam" activeStyle={{ color: 'red' }}><Container><Button className="Homepage-button" size="massive" color="blue">High Line Inventory</Button></Container></Link>
              </ul>
            </div>
            </p>
          </div>
        </Switch>
      </Router>
    );
  }
}

export default App;
