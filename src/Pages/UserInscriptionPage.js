import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";

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
  handleSubmit() {
    let users = localStorage.getItem("Users")
      ? JSON.parse(localStorage.getItem("Users"))
      : [];
    if (this.checkUserExist(users)) {
      alert("User already exist");
    } else {
      this.checkUserId(users);
      users.push({
        email: this.state.email,
        password: this.state.password,
        id: this.state.id,
        fname: this.state.fname,
        lname: this.state.lname
      });
      localStorage.setItem("Users", JSON.stringify(users));
      let wallets = localStorage.getItem("Wallets")
        ? JSON.parse(localStorage.getItem("Wallets"))
        : [];
      wallets.push({
        id: this.checkWalletId(wallets),
        userId: this.state.id,
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
        <Link type="button" to="/">
          Go Back
        </Link>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              onChange={this.handleChange}
              value={this.state.email}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              onChange={this.handleChange}
              value={this.state.password}
            />
          </Form.Group>

          <Form.Group controlId="formGridFname">
            <Form.Label> First name </Form.Label>
            <Form.Control
              placeholder="Jacques"
              name="fname"
              onChange={this.handleChange}
              value={this.state.fname}
            />
          </Form.Group>

          <Form.Group controlId="formGridLname">
            <Form.Label> Last name </Form.Label>
            <Form.Control
              placeholder="Chirac"
              name="lname"
              onChange={this.handleChange}
              value={this.state.lname}
            />
          </Form.Group>

          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" onClick={this.handleSubmit}>
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default UserInscriptionPage;
