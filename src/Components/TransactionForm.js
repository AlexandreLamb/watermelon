import React, { Component } from 'react';
import {Button,FormControl,ListGroup    } from 'react-bootstrap';
import handleChange from '../Utils/utils';
class TransactionForm extends Component {
    constructor(props){
        super(props)
        this.state = {
           userSearch : "",
           userResult : []
        }
        this.handleChange = this.handleChange.bind(this)
        this.searchUser = this.searchUser.bind(this)
    }
    handleChange(event){
        this.setState({
            [event.target.name] : event.target.value
        });
    }
    searchUser(event){
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
        });
    }
    render(){
        return(
            <div>
                <FormControl type="text"
                 placeholder="User" 
                 className="mr-sm-2" 
                 value = {this.state.userSearch}
                 onChange= {this.handleChange}/>
                <ListGroup>
                    <ListGroup.Item>{this.state.userSearch}</ListGroup.Item>
                    <ListGroup.Item>{this.state.userResult}</ListGroup.Item>
                </ListGroup>
                <Button onClick={this.searchUser}></Button>
            </div>
        )
    }


}
export default TransactionForm;