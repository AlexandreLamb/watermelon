import React, { Component } from 'react';
import {Navbar,Nav, Form, FormControl, Button} from 'react-bootstrap';
import { BrowserRouter, Route, Link} from 'react-router-dom';
import HomePage from '../Pages/HomePage';

class NavBar extends Component{

render(){
    return (
        <BrowserRouter>
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Watermelon</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link ><Link to="/" >Home</Link></Nav.Link>
                        <Nav.Link ><Link to="/UserInforamtion" >User Information</Link></Nav.Link>
                        <Nav.Link >Transfers</Nav.Link>
                    </Nav>
                    <Route exact path="/"
                    component={()=><HomePage></HomePage>}
                    ></Route>
                    <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
        </Navbar>
        </BrowserRouter>
    )
}
}
export default NavBar;