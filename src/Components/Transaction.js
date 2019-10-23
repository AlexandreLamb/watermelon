import React, { Component } from "react";
import { Form, Button, Container } from "react-bootstrap";
import FormSearchUser from "./FormSearchUser";
class Transaction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amountTransfert: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.findUserId = this.findUserId.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  handleSubmit() {
    let userIdIn = this.findUserId(this.props.userSelect);
    let userIdOut = this.findUserId(localStorage.getItem("connectUser"))
    let wallets = JSON.parse(localStorage.getItem("Wallets"));
    if (this.state.amountTransfert >= 1) {
      wallets.forEach(wallet => {
        if (wallet.userId == userIdIn) {
          wallet.balance += this.state.amountTransfert * 100;
        } else if (wallet.userId == userIdOut){
            wallet.balance -= this.state.amountTransfert * 100;
        }
      });
      localStorage.setItem("Wallets",JSON.stringify(wallets));
    } else {
      alert("minimum transfert is 1 $");
    }
  }
  findUserId(userEmail) {
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
            <Form.Group>
              <Form.Label>
                Transfers {this.state.amountTransfert} to{" "}
                {this.props.userSelect}{" "}
              </Form.Label>
              <Form.Control
                type="number"
                name="amountTransfert"
                value={this.state.amountTransfert}
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
export default Transaction;
