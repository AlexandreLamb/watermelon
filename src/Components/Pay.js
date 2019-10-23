import React, { Component } from "react";
import { Form, Button, Container } from "react-bootstrap";

class Pay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amout: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.findUserId = this.findUserId.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  handleSubmit() {
    if (this.state.amout >= 1) {
      let wallets = JSON.parse(localStorage.getItem("Wallets"));
      let userId = this.findUserId();
      wallets.forEach(wallet => {
        if (wallet.userId == userId) {
          if (this.props.mode == "in") {
            wallet.balance += this.state.amout * 100;
          } else {
            wallet.balance -= this.state.amout * 100;
          }
        }
      });
      localStorage.setItem("Wallets", JSON.stringify(wallets));
    } else {
      alert("Minimum pay in is 1 $");
    }
  }
  findUserId() {
    let userEmail = localStorage.getItem("connectUser");
    let users = JSON.parse(localStorage.getItem("Users"));
    let userId = -1;
    users.forEach(user => {
      if (user.email == userEmail) {
        userId = user.id;
      }
    });
    return userId;
  }

  render() {
    return (
      <div>
        <Container>
          <Form>
            <Form.Group controlId="formGroupEmail">
              <PayLabel mode={this.props.mode} />
              <Form.Control
                type="number"
                name="amout"
                value={this.state.amout}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Button onClick={this.handleSubmit}>Transfers</Button>
          </Form>
        </Container>
      </div>
    );
  }
}
function PayLabel(props) {
  if (props.mode == "in") {
    return <Form.Label>Pay in</Form.Label>;
  } else {
    return <Form.Label>Pay out</Form.Label>;
  }
}

export default Pay;
