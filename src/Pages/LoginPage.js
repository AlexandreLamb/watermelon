import React, { Component } from "react";
import { Form, Button, Container } from "react-bootstrap";
class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        email : "",
        password : ""
    };
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event){
    this.setState({
        [event.target.name] : event.target.value
    });
}
handleSubmit(){
    let users = JSON.parse(localStorage.getItem("Users"));
    users.forEach(user => {
        if( this.state.email == user.email && this.state.password == user.password){
            alert("succes conection");
            localStorage.setItem("connectUser",this.state.email);
            this.setState({
                connected : true
            })
        }
    });
    
}
  render() {
    return (
      <div>
          <Container>
        <Form className="Container-Form"> 
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control 
            type="email" 
            placeholder="Enter email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange} />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control 
            type="password" 
            placeholder="Password" 
            name="password"
            value={this.state.password}
            onChange={this.handleChange}/>
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" onClick={this.handleSubmit}>
            Submit
          </Button>
        </Form>
        </Container>
      </div>
    );
  }
}

export default LoginPage;
