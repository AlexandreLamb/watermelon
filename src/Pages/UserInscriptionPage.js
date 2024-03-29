import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import { returnUserId } from "../Utils/utils";

class UserInscriptionPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            id: 0,
            fname: "",
            lname: "",
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
            users.push({
                email: this.state.email,
                password: this.state.password,
                id: this.checkUserId(users),
                fname: this.state.fname,
                lname: this.state.lname
            });
            localStorage.setItem("Users", JSON.stringify(users));
            let wallets = localStorage.getItem("Wallets")
                ? JSON.parse(localStorage.getItem("Wallets"))
                : [];
            wallets.push({
                id: this.checkWalletId(wallets),
                userId: this.checkUserId(users)-1,
                balance: 0
            });
            localStorage.setItem("Wallets", JSON.stringify(wallets));
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
        return idTab.length == 0 ? 1 : Math.max(...idTab) + 1;
        
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
                        Submit
                    </Button>
                </Form>
            </div>
        );
    }
}

export default UserInscriptionPage;
