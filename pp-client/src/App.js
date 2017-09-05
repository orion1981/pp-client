import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { Button, Container } from 'semantic-ui-react'

import GlobalInvContainer from './containers/GlobalInvContainer'


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
        <Route path="/Global" render={() =><GlobalInvContainer/>}/>

          <div className="App">
            <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h2>Welcome to React</h2>
            </div>
            <p className="App-intro">
            Test font
              <div>
              <ul>
                <br/>
                <br/>
                <br/>
                  <Link to="/Setup" activeStyle={{ color: 'red' }}><Container><Button className="button" size="massive" color="blue">Kitchen Inventory</Button></Container></Link>
                <br/>
                <br/>
                <br/>
                  <Link to="/Global" activeStyle={{ color: 'red' }}><Container><Button className="button" size="massive" color="blue">Check Location Inventory</Button></Container></Link>
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
