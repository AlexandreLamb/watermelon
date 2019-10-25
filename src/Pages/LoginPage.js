import React, { Component } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link, useHistory, Route, NavLink } from "react-router-dom";
import Routes from "../Components/Routes";
import { returnUsers } from "../Utils/utils";
class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      emailCheck: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  handleSubmit() {
    let users = returnUsers();
    if(users.length ==  0){
      alert("error connection")
    }else{
    users.forEach(user => {
      if (
        this.state.email == user.email &&
        this.state.password == user.password
      ) {
        alert("succes conection");
        localStorage.setItem("connectUser", JSON.stringify(user));
        this.props.onChangeConnection();
      } else{
        alert("wrong information")
      }
    });
  }
  }

  render() {
    return (
      <Container>
        <Form noValidate className="Container-Form">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              isValid={this.state.email.includes("@")}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
              {this.state.emailCheck}
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" onClick={this.handleSubmit}>
            Connect
          </Button>
          <Link variant="outline-success" to="/UserInscription">
            Inscription
          </Link>
        </Form>
      </Container>
    );
  }
}

export default LoginPage;
