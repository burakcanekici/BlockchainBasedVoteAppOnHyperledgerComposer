import React, { Component } from 'react';

class VoteButton extends Component{
    handleClick(){
        this.props.parentMethod(this.props.firstname, this.props.parentState);
    }

    render(){
        const style= this.props.hide == '1' ? {'display': 'none'} :{};

        return(
            <a href="#" class="btn btn-primary" style={style} onClick={() => this.handleClick()}>Vote</a>
        );
    }
}

class BECard extends Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          success: false,
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

    addNewVote(candidateName, parentState){
        var param = {
            "$class": "org.example.empty.VoteLog",
            "voteID": new Date().getTime().toString(),
            "candidate": "resource:org.example.empty.Candidate#" + candidateName,
            "transactionId": null,
            "timestamp": new Date().toString()
        };

        fetch("http://localhost:3000/api/VoteLog",
        {method: 'post', headers: { 'Content-type': 'application/json'}, body: JSON.stringify(param)})
        .then(function(response){
            return response.json;
        })
        .then(() => {
            parentState.setState({
                success: true
            });
        })
    }

  render() {
    const {error, success, isLoaded, items} = this.state;
    
    var successMessage;
    var hideBtn = 0;
    if(success){
        hideBtn = 1;
        successMessage = (
        <div class="alert alert-success col-sm-6" role="alert">
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            <strong>Success!</strong> You have used your vote in successfully!
        </div>);
    }

    var styleCard = {
        width: "18rem",
        margin: "10px"
    }

    return (
        <div>
            <div class="col-sm-12">
                {successMessage}
            </div>
            <div class="col-sm-12 row">
                {items.map(function(item){
                    return (
                        <div class="card col-sm-3" style={styleCard}>
                            <div class="card-body">
                                <h5 class="card-title">{item["firstName"]} {item["lastName"]}</h5>
                                <VoteButton hide={hideBtn} firstname={item["firstName"]} parentState={this} parentMethod={this.addNewVote}/>
                            </div>
                        </div>
                    );
                },this)}
            </div>
        </div>
    );
  }
}

export default BECard;