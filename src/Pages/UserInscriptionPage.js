import React, { Component } from 'react';
import {Form, Button} from 'react-bootstrap'
class UserInscriptionPage extends Component {
    constructor(props){
        super(props)
        this.state = {
           email : "",
           password : "",
           id : 0
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.checkUserExist = this.checkUserExist.bind(this);
        this.checkUserId = this.checkUserId.bind(this);
    }
    handleChange(event){
        this.setState({
            [event.target.name] : event.target.value
        });
    }
  /*  handleSubmit(){
        if(localStorage.getItem(this.state.email)){
            alert("user already exist");
        } else{
            localStorage.setItem(
                this.state.email,
              JSON.stringify(  {
                   id : this.state.id, 
                   password :  this.state.password,
                } )
            )
        }
    }*/
    handleSubmit(){
        let users = localStorage.getItem("Users") ? JSON.parse(localStorage.getItem("Users")) : [];
        if (this.checkUserExist(users)){
            alert("User already exist");
        } else{
            this.checkUserId(users);
            users.push(this.state);
            localStorage.setItem("Users",JSON.stringify(users));
        }
        
        
        
    }
    checkUserExist(users){
        let email  = this.state.email
        let userExist  = false;
        users.forEach(function(user){
            if(user.email == email){
                userExist = true;
            }
        })
    return userExist;
    }
    checkUserId(users){
        let idTab = [];
        users.forEach(function(user){
            idTab.push(user.id);
        })
        this.state.id = ( idTab.length == 0 ? 1 : Math.max(...idTab)+1 );
    }
    render(){
        return(
            <div>
               <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email"
                         placeholder="Enter email" 
                         name="email"
                         onChange={this.handleChange}
                         value={this.state.email}/>
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password"
                        placeholder="Password"
                        name="password"
                        onChange={this.handleChange}
                        value={this.state.password} />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                <Button variant="primary"
                 onClick={this.handleSubmit}>
                    Submit
                </Button>
                </Form>
            </div>
        )
    }


}



export default UserInscriptionPage;