import React, { Component } from "react";
import {
    Navbar,
    NavItem,
    Nav,
    
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

class NavBarHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            isConnect: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.disconectUser = this.disconectUser.bind(this);
        this.onChangeConnection = this.onChangeConnection.bind(this);
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
    onChangeConnection() {
        this.setState({
            isConnect: localStorage.getItem("connectUser") ? true : false
        });
    }
    disconectUser() {
        localStorage.removeItem("connectUser");
        this.props.onChangeConnection();
    }

    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand>Watermelon</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link>
                            <LinkContainer to="/">
                                <NavItem>Presentation</NavItem>
                            </LinkContainer>
                        </Nav.Link>
                        <Nav.Link>
                            <LinkContainer to="/UserUpdatePage">
                                <NavItem>User Information</NavItem>
                            </LinkContainer>
                        </Nav.Link>
                        <Nav.Link>
                            <LinkContainer to="/pay">
                                <NavItem>Pay in / Pay out</NavItem>
                            </LinkContainer>
                        </Nav.Link>
                        <Nav.Link>
                            <LinkContainer to="/transfert">
                                <NavItem>Transfert</NavItem>
                            </LinkContainer>
                        </Nav.Link>
                        <Nav.Link>
                            <LinkContainer to="/CardManagePage">
                                <NavItem>Card Manage</NavItem>
                            </LinkContainer>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default NavBarHome;
