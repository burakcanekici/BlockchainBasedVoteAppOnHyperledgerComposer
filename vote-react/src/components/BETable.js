import React, { Component } from 'react';

class BETable extends Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: []
        };
      }

    getAllCandidates(){
        fetch("http://localhost:3000/api/Candidate")
        .then(res => res.json())
        .then((result) => {
            this.setState({
                isLoaded: true,
                items: result
              });
        })
    }

    componentDidMount(){
        this.getAllCandidates();
    }

    componentDidUpdate(){
        this.getAllCandidates();
    }

    addNewCandidate(){
        var param = {
            "$class": "org.example.empty.Candidate",
            "candidateId": document.getElementById('id').value,
            "firstName": document.getElementById('name').value,
            "lastName": document.getElementById('surname').value
        };

        fetch("http://localhost:3000/api/Candidate",
        {method: 'post', headers: { 'Content-type': 'application/json'}, body: JSON.stringify(param)})
        .then(function(response){
            return response.json;
        })
    }

    deleteCandidate(id){
        var candidateId = id;

        fetch("http://localhost:3000/api/Candidate/" + candidateId,
        {method: 'delete', headers: { 'Content-type': 'application/json'}})
        .then(function(response){
            return response.json;
        })
    }

  render() {
    const {error, isLoaded, items} = this.state;
    var tableHeaders = (<thead><tr><th>CandidateID</th><th>Name</th><th>Surname</th><th></th></tr></thead>);
    var newCandidateRow = (
        <tr>
            <th><input type="text" id="id"/></th>
            <th><input type="text" id="name"/></th>
            <th><input type="text" id="surname"/></th>
            <th><a class="btn btn-primary" onClick={this.addNewCandidate}>Add</a></th>
        </tr>
    );

    /*
    var tableBody = items.map(function(item){
        return (<tr><td>{item["firstName"]}<td></td>{item["lastName"]}</td></tr>);
    });
    */

    return (
        <table class="table table-bordered table-hover">
            {tableHeaders}
            {items.map(function(item){
                return (<tr><td>{item["candidateId"]}</td><td>{item["firstName"]}</td><td>{item["lastName"]}</td><td><a class="btn btn-danger" onClick={() => this.deleteCandidate(item["candidateId"])}>Delete</a></td></tr>);
            },this)}
            {newCandidateRow}
        </table>
    );
  }
}

export default BETable;