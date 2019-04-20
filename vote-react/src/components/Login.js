import React, { Component } from 'react';
import { setSessionTicket, isLogin } from '..';

const logo = require('../img/index5.png')

class Login extends Component {
  constructor(props) {
    super(props);

    this.users = [
      {"add" : "123451", "pass" : "admin"},
      {"add" : "123452", "pass" : "admin"},
      {"add" : "123453", "pass" : "admin"},
      {"add" : "123454", "pass" : "admin"},
      {"add" : "123455", "pass" : "admin"},
      {"add" : "123456", "pass" : "admin"},
      {"add" : "123457", "pass" : "admin"},
      {"add" : "123458", "pass" : "admin"}
    ];

    this.beLogin = this.beLogin.bind(this);
  }

  beLogin(){
    var address = document.getElementById("inpAddress").value;
    var password = document.getElementById("inpPassword").value;
    
    var allUsers = this.users;
    for(var i=0;i<allUsers.length;i++){
      if(allUsers[i].add == address && allUsers[i].pass == password){
        setSessionTicket(allUsers[i].add);
        break;
      }
    }
  }

  render() {
    var divStyleCard = {
      width: "14rem",
      margin: "0 auto"
    };
    var divStyle20 = {
      padding: "20px"
    };

    return (
      <div style={divStyle20}>
        <div class="card" style={divStyleCard}>
            <img class="card-img-top" src={logo} />
            <div class="card-body">
            <form>
              <div class="form-group">
                <label for="inpAddress">User</label>
                <input type="text" class="form-control" id="inpAddress" />
              </div>
              <div class="form-group">
                <label for="inpPassword">Password</label>
                <input type="password" class="form-control" id="inpPassword" />
              </div>
              <button type="submit" class="btn btn-primary" onClick={this.beLogin}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}


export default Login;