import React, { Component } from 'react';
import {Navbar,NavItem, Nav,Form, FormControl, Button} from 'react-bootstrap';
import { BrowserRouter, Route, NavLink} from 'react-router-dom';
import { LinkContainer } from "react-router-bootstrap";
import Routes from './Routes';
class NavBar extends Component{

render(){
    return (
        <BrowserRouter>
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Watermelon</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link>
                    <LinkContainer to="/">
                        <NavItem>Home</NavItem>
                    </LinkContainer>
                </Nav.Link>
                <Nav.Link>
                    <LinkContainer to="/UserInformation">
                        <NavItem>User Information</NavItem>
                    </LinkContainer>
                </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
        </Navbar>
        <Routes/>
        </BrowserRouter>
    )
}
}
export default NavBar;