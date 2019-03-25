import React, { Component } from 'react';
import BECard from './BECard'

class Vote extends Component {
  render() {
    var divStyle10 = {
      padding: "10px"
    };
    var divStyle20 = {
      padding: "20px"
    };

    return (
      <div style={divStyle20}>
        <div class="col-sm-12">
          <BECard></BECard>
        </div>
      </div>
    );
  }
}


export default Vote;