import React, { Component } from "react";
import {
  Navbar,
  NavItem,
  Nav,
  Form,
  FormControl,
  Button
} from "react-bootstrap";
import { BrowserRouter, Redirect, NavLink } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import Routes from "./Routes";

class NavBarHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      connected: false,
      redirect : false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit() {
    let users = JSON.parse(localStorage.getItem("Users"));
    users.forEach(user => {
      if (
        this.state.email == user.email &&
        this.state.password == user.password
      ) {
        alert("succes conection");
        localStorage.setItem("connectUser", JSON.stringify(user));
        this.setState({
          connected: true
        });
      }
    });
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  disconectUser(){
    localStorage.setItem("connectUser","");
    this.setState({
      redirect : true
    })

  }
  renderRedirect() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
  }
  render() {
    return (
      <BrowserRouter>
      {this.renderRedirect()}
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">Watermelon</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link>
                <LinkContainer to="/">
                  <NavItem>Presentation</NavItem>
                </LinkContainer>
              </Nav.Link>
              <Nav.Link>
                <LinkContainer to="/Demonstration">
                  <NavItem>User Information</NavItem>
                </LinkContainer>
              </Nav.Link>
              <Nav.Link>
                <LinkContainer to="/CardManagePage">
                  <NavItem>Card Manage</NavItem>
                </LinkContainer>
              </Nav.Link>
            </Nav>
            <Button onClick={this.disconectUser}>Disconect</Button>
          </Navbar.Collapse>
        </Navbar>
        <Routes />
      </BrowserRouter>
    );
  }
}


export default NavBarHome;
