import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import { returnUser, returnTransfertsIn } from "../Utils/utils";

class UserUpdatePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: returnUser().email,
            password: returnUser().password,
            id: returnUser().id,
            fname: returnUser().fname,
            lname: returnUser().lname,
            redirect: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.checkUserExist = this.checkUserExist.bind(this);
        this.checkUserId = this.checkUserId.bind(this);
        this.checkWalletId = this.checkWalletId.bind(this);
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    handleSubmit(event) {
        const form = event.currentTarget;
        let users = localStorage.getItem("Users")
            ? JSON.parse(localStorage.getItem("Users"))
            : [];
        if (this.checkUserExist(users)) {
            alert("User already exist");
            event.preventDefault();
            event.stopPropagation();
        } else if (form.checkValidity() === false) {
            alert("Please write in each field");
        } else {
            console.log(users.indexOf(returnUser()));

            users.forEach(elmt => {
                if (elmt.id == returnUser().id) {
                    elmt.email = this.state.email;
                    elmt.password = this.state.password;
                    elmt.id = this.state.id;
                    elmt.fname = this.state.fname;
                    elmt.lname = this.state.lname;
                }
            });

            localStorage.setItem("Users", JSON.stringify(users));
            localStorage.setItem(
                "connectUser",
                JSON.stringify({
                    email: this.state.email,
                    password: this.state.password,
                    id: this.state.id,
                    fname: this.state.fname,
                    lname: this.state.lname
                })
            );
            this.setState({
                redirect: true
            });
        }
    }
    checkUserExist(users) {
        let email = this.state.email;
        let userExist = false;
        users.forEach(function(user) {
            if (user.email == email) {
                userExist = true;
            }
        });
        return userExist;
    }
    checkUserId(users) {
        let idTab = [];
        users.forEach(function(user) {
            idTab.push(user.id);
        });
        this.state.id = idTab.length == 0 ? 1 : Math.max(...idTab) + 1;
    }
    checkWalletId(wallets) {
        let idTab = [];
        wallets.forEach(function(wallet) {
            idTab.push(wallet.id);
        });
        return idTab.length == 0 ? 1 : Math.max(...idTab) + 1;
    }
    renderRedirect() {
        if (this.state.redirect) {
            return <Redirect to="/" />;
        }
    }
    render() {
        return (
            <div>
                {this.renderRedirect()}
                <form action="/">
                    <Button type="submit" value="Back">
                        Go back
                    </Button>
                </form>
                <Form noValidate onSubmit={this.handleSubmit}>
                    <Form.Group controlId="validationCustom01">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            required
                            type="email"
                            placeholder="Enter email"
                            name="email"
                            onChange={this.handleChange}
                            value={this.state.email}
                        />
                        <Form.Control.Feedback>Tip top !</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            required
                            type="password"
                            placeholder="Password"
                            name="password"
                            onChange={this.handleChange}
                            value={this.state.password}
                        />
                        <Form.Control.Feedback>Tip top !</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="formGridFname">
                        <Form.Label> First name </Form.Label>
                        <Form.Control
                            required
                            placeholder="Jacques"
                            name="fname"
                            onChange={this.handleChange}
                            value={this.state.fname}
                        />
                        <Form.Control.Feedback>Tip top !</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="formGridLname">
                        <Form.Label> Last name </Form.Label>
                        <Form.Control
                            required
                            placeholder="Chirac"
                            name="lname"
                            onChange={this.handleChange}
                            value={this.state.lname}
                        />
                        <Form.Control.Feedback>Tip top !</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Update
                    </Button>
                </Form>
            </div>
        );
    }
}

export default UserUpdatePage;
