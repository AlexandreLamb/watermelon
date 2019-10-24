import React, { Component } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import {findUserId} from "../Utils/utils"
class Pay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amout: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  handleSubmit() {
    if (this.state.amout >= 1) {
      let wallets = JSON.parse(localStorage.getItem("Wallets"));
      let user = localStorage.getItem("connectUser");
      wallets.forEach(wallet => {
        if (wallet.userId == user.id) {
          if (this.props.mode == "in") {
            wallet.balance += this.state.amout * 100;
          } else {
            wallet.balance -= this.state.amout * 100;
          }
        }
      });
      localStorage.setItem("Wallets", JSON.stringify(wallets));
      this.props.onChangeBalance();
    } else {
      alert("Minimum pay in is 1 $");
    }
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
