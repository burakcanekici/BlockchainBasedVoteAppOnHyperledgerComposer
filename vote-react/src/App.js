import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import './App.css';

import Main from './components/Main'
import Login from './components/Login'
import Candidate from './components/Candidate'
import Vote from './components/Vote'


function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        !!localStorage.getItem("session_ticket") ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sessionActive: !!localStorage.getItem("session_ticket")
    };
    
    this.makeLogout = this.makeLogout.bind(this);
  }

  makeLogout(){
    localStorage.removeItem("session_ticket");
    this.setState({
      sessionActive: !!localStorage.getItem("session_ticket")
    });
  }

  render() {
    var logoutButton;
    var loginUrl = '/login', candidateUrl = '/candidate', voteUrl = '/vote';

    if(this.state.sessionActive)
      logoutButton = (<button class="btn btn-outline-dark my-2 my-sm-0" onClick={this.makeLogout}>Logout</button>);
    else
      logoutButton = (<Link to={loginUrl} class="btn btn-outline-light my-2 my-sm-0">Login</Link>);
    
    return (
      <Router>
        <div className="App">
          <div className="container col-sm-12">
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <span className="navbar-brand mb-0 h1">Hyperledger Vote Application</span>
              <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item">
                    <Link to={candidateUrl} class="nav-link">Candidate</Link>
                  </li>
                  <li class="nav-item">
                    <Link to={voteUrl} class="nav-link">Vote</Link>
                  </li>
                </ul>
                {logoutButton}
              </div>
            </nav>
          </div>
          <hr/>
          <Route exact path='/' component={Main} />
          <Route path={loginUrl} component={Login} />
          <PrivateRoute path={candidateUrl} component={Candidate} />
          <PrivateRoute path={voteUrl} component={Vote} />
          <hr/>
        </div>
      </Router>
    );
  }
}

export default App;