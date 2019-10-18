import React, { Component } from 'react';
import {Button,FormControl,ListGroup    } from 'react-bootstrap';
class TransactionForm extends Component {
    constructor(props){
        super(props)
        this.state = {
           userSearch : "",
           userResult : [],
           userSelect : ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.searchUser = this.searchUser.bind(this)
        this.handleSelect = this.handleSelect.bind(this)
    }
    handleChange(event){
        this.setState({
            [event.target.name] : event.target.value
        });
    }
    searchUser(){
        let users  = JSON.parse(localStorage.getItem("Users"));
        let userLike = [];
        users.forEach(user => {
          if(user.email.includes(this.state.userSearch) && this.state.userSearch != ''){
              console.log(user.email + " " + this.state.userSearch + " " + user.email.includes(this.state.userSearch) && this.state.userSearch != '' )
            userLike.push(user.email);
          }
        });
        this.setState({
            userResult : userLike
        })
    }
    handleSelect(eventKey){
        this.setState({
            userSelect : eventKey
        })
    }
    

    render(){
        return(
            <div>
                <FormControl type="text"
                 placeholder="User" 
                 className="mr-sm-2" 
                 name="userSearch"
                 onChange={this.handleChange}
                 value = {this.state.userSearch}
                 />
                <ListGroup onSelect={this.handleSelect}>
                    {this.state.userResult.map(result =>(
                        <ListGroup.Item 
                        key={result}
                         eventKey={result}
                        >
                        
                        {result}</ListGroup.Item>
                    ))}
                    
                </ListGroup>
                <Button onClick={this.searchUser}>Search</Button>
            </div>
        )
    }


}
export default TransactionForm;