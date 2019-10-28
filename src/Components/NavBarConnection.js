import React, { Component } from "react";
import {
    Navbar,
    NavItem,
    Nav,
    Form,
    FormControl,
    Button
} from "react-bootstrap";
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import Routes from "./Routes";

class NavBar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <BrowserRouter>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">Watermelon</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
                </Navbar>
                <Routes />
            </BrowserRouter>
        );
    }
}

export default NavBar;
