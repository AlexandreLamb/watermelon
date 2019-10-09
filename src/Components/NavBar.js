import React, { Component } from 'react';
import {Navbar,NavItem, Nav,Form, FormControl, Button} from 'react-bootstrap';
import { BrowserRouter, Route, NavLink} from 'react-router-dom';
import { LinkContainer } from "react-router-bootstrap";
import Routes from './Routes';




class NavBar extends Component{

    constructor(props){
        super(props)
        this.state = {
           email : "",
           password : "",
           connected : false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }
    handleSubmit(){
        let user = JSON.parse(localStorage.getItem(this.state.email));
        console.log(user);
        if( user && this.state.password == user.password ){
            alert("succes conection");
            localStorage.setItem("connectUser",this.state.email);
           this.setState({
               connected : true
           })
            
        } else {
            alert("informations de connexion incorect");

        }
    }
    handleChange(event){
        this.setState({
            [event.target.name] : event.target.value
        });
    }
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
                <Nav.Link>
                    <LinkContainer to="/CardManagePage">
                        <NavItem>Card Manage</NavItem>
                    </LinkContainer>
                </Nav.Link>
                    </Nav>
                    <Login isLoggedIn={this.state.connected}
                 email={this.state.email}
                 handleChange={this.handleChange}
                 handleSubmit= {this.handleSubmit}
                 password={this.state.password}/>
                </Navbar.Collapse>
        </Navbar>
        <Routes/>
        </BrowserRouter>
    );
}
}
function LoginInfo(props) {
    return( 
        <div>
            connect on {props.email} 
        </div>
        );
}
function LoginForm(props) {
    return(
        <Form inline>
            <FormControl type="email" 
            name="email"
            placeholder="email" 
            className="mr-sm-2" 
            onChange={props.handleChange}
            value={props.email}/>
            <FormControl type="password"
            name="password"
            placeholder="Password" 
            className="mr-sm-2" 
            onChange={props.handleChange}
            value={props.password}/>
            <Button variant="outline-success"
             onClick={props.handleSubmit}>Connect</Button>
            <LinkContainer to="/UserInscription">
            <Button variant="outline-success" >Inscription</Button>
            </LinkContainer>    
        </Form>
    );
}

function Login(props){
    const isLoggedIn = props.isLoggedIn
    if(isLoggedIn){
        return <LoginInfo email={props.email}/>
    } 
    return <LoginForm handleChange={props.handleChange}
            handleSubmit={props.handleSubmit}
            password={props.password}
            email={props.email}/>
}
export default NavBar;