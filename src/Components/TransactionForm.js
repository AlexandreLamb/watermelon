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
    }
    handleChange(event){
        this.setState({
            [event.target.name] : event.target.value
        });
    }
    searchUser(){
        localStorage.getItem("User")
    }
    render(){
        return(
            <div>
                <FormControl type="text"
                 placeholder="User" 
                 className="mr-sm-2" 
                 onChange= {this.handleChange}/>
                <ListGroup>
                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                </ListGroup>
            </div>
        )
    }


}
export default TransactionForm;