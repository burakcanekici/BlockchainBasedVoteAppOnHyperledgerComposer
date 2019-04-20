import React, { Component } from 'react';

const logo = require('../img/index2.png')

class Main extends Component {
  render() {
    var divStyle20 = {
      padding: "20px",
      justifyContent: 'center',
      alignItems: 'center'
    };

    return (
      <div style={divStyle20} className="container">
        <img src={logo} />
      </div>
    );
  }
}


export default Main;