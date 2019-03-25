import React, { Component } from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem, Button, ButtonGroup } from 'reactstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './App.css';
import ReactDOM from 'react-dom';

import Candidate from './components/Candidate'
import Vote from './components/Vote'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <div className="container col-sm-12">
          <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <a class="navbar-brand">Hyperledger Vote Application</a>
            <div class="collapse navbar-collapse" id="navbarText">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <Link to={'/candidate'} class="nav-link">Candidate</Link>
                </li>
                <li class="nav-item active">
                  <Link to={'/vote'} class="nav-link">Vote</Link>
                </li>
              </ul>
            </div>
          </nav>
          <div class="col-sm-12"></div>
        </div>
      </div>
      <Switch>
        <Route path='/candidate' component={Candidate} />
        <Route path='/vote' component={Vote} />
      </Switch>
      </Router>
    );
  }
}


export default App;