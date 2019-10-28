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
import NavBarHome from "../Components/NavBarHome";
import NavBarConnection from "../Components/NavBarConnection";

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isConnect: false
        };
    }

    render() {
        return <DisplayNavBar isConnect={this.state.isConnect} />;
    }
}
function DisplayNavBar(props) {
    if (props.isConnect) {
        return <NavBarHome />;
    } else {
        return <NavBarConnection />;
    }
}
export default NavBar;
