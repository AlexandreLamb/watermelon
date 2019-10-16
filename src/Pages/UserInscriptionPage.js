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
    }
    handleChange(event){
        this.setState({
            [event.target.name] : event.target.value
        });
    }
    handleSubmit(){
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
    }
    handleUsers(){
        let users  = localStorage.getItem('user');
        console.log(JSON.parse(users));
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