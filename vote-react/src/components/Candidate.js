import React, { Component } from 'react';
import BETable from './BETable'

class Candidate extends Component {
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
          <BETable></BETable>
        </div>
      </div>
    );
  }
}


export default Candidate;